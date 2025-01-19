import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [story, setStory] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setError(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    setProcessing(true);
    setError(null);

    const formData = new FormData();
    formData.append('video', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/api/process-video', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      console.log('Processing successful:', data);
      setStory(data.story);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to process video');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#f4f1de] to-white w-screen min-h-screen">
      <nav className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-4xl text-[#e52e71] font-spartan hover:text-[#ff8a00] transition-colors cursor-pointer">
                ANIMIME
              </h1>
            </div>
          </div>
        </div>
      </nav>

      <div id="top-container" className="flex flex-col lg:flex-row md:flex-row justify-center w-screen">
        <div id="headerContent" className="flex flex-col items-center w-screen text-black my-2 sm:my-12">
          <div className="max-w-[700px] mt-4 mx-6">
            <p className="font-monospace text-center text-lg md:text-xl text-white drop-shadow-md">
              Transform Your Gestures into Anime
            </p>
          </div>
          <div className="max-w-[700px] mt-4 mx-6">
            <p className="font-monospace text-center text-lg md:text-xl text-white drop-shadow-md">
              Let your gestures tell a story...
            </p>
          </div>

          <div id="magic" className="flex text-black justify-center w-full mt-8">
            <div className="height-auto p-4 flex flex-col space-y-4 w-full sm:w-[500px] md:w-[600px]">
              <div className="flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-xl border border-gray-200 w-full">
                  <div className="file-input-container h-[160px]">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleFileSelect}
                      className="file-input"
                    />
                    <div className="file-input-content">
                      <svg className="upload-icon" viewBox="0 0 24 24">
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
                      </svg>
                      <div className="file-input-text">
                        {selectedFile ? (
                          <>
                            <div>Ready to upload:</div>
                            <div className="selected-file">{selectedFile.name}</div>
                          </>
                        ) : (
                          <>
                            <div className="upload-text">Drop your video here</div>
                            <div className="upload-text">or click to browse</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleUpload}
                    disabled={!selectedFile || processing}
                    className="upload-button w-full mt-8"
                  >
                    {processing ? '物語を作成中...' : 'GENERATE STORY'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-40 sm:my-20 flex-1 justify-center mb-auto">
        <div id="value-props" className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 max-w-full my-auto">
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800">Gesture Recognition</h2>
            <p className="text-gray-600 mt-2">Advanced AI technology to recognize and interpret your gestures with high accuracy.</p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800">Story Generation</h2>
            <p className="text-gray-600 mt-2">Transform your gestures into meaningful narratives with our creative AI storytelling engine.</p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800">Anime Style</h2>
            <p className="text-gray-600 mt-2">Experience your stories in beautiful anime-inspired visuals and animations.</p>
          </div>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}
      
      <footer className="bg-[#f4f1de] text-black p-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#e52e71] mb-4">ANIMIME</h3>
          <p className="text-gray-600">&copy; 2024 Animime - Where Gestures Come to Life</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
