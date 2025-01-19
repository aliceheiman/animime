from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import os
import google.generativeai as genai
from dotenv import load_dotenv
from moviepy.editor import VideoFileClip

app = Flask(__name__)
CORS(app)

# Load environment variables
load_dotenv()
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

# Configure Gemini
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-pro-vision')

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def extract_frames(video_path, num_frames=5):
    """Extract frames from video for analysis"""
    video = VideoFileClip(video_path)
    duration = video.duration
    frames = []
    
    for i in range(num_frames):
        time = duration * i / (num_frames - 1)
        frame = video.get_frame(time)
        frames.append(Image.fromarray(frame))
    
    video.close()
    return frames

@app.route('/api/process-video', methods=['POST'])
def process_video():
    if 'video' not in request.files:
        return jsonify({'error': 'No video file provided'}), 400
    
    video_file = request.files['video']
    if video_file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Save the uploaded video
    video_path = os.path.join(UPLOAD_FOLDER, video_file.filename)
    video_file.save(video_path)

    try:
        # Extract frames from video
        frames = extract_frames(video_path)
        
        # Process with Gemini
        prompt = """Analyze these frames from a video showing gestures. 
        Describe what gestures you see and create a short story based on them. 
        Focus on the movements and their potential meaning."""
        
        response = model.generate_content([prompt, *frames])
        story = response.text

        # Clean up
        os.remove(video_path)

        return jsonify({
            'message': 'Video processed successfully',
            'story': story
        })

    except Exception as e:
        # Clean up in case of error
        if os.path.exists(video_path):
            os.remove(video_path)
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
