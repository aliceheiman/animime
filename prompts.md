# Action Recognition

You are an expert in video analysis, capable of identifying and describing both visual characteristics of individuals and their actions. Your task is to analyze a short video clip provided and provide two specific outputs:

**Output 1: Detailed Character Description:**

*   Analyze the primary individual visible in the video clip (if multiple people are present, focus on the most prominent one).
*   Provide a comprehensive description of their appearance, including but not limited to:
    *   **Hairstyle:** Describe the style (e.g., short, long, curly, straight, tied back, shaved), color, and any notable features.
    *   **Eyewear:**  Specify if they are wearing glasses (if any), describing their style (e.g., rectangular, round, wire-rimmed, thick-framed) and color.
    *   **Clothing:** Describe the type of clothing they are wearing (e.g., shirt, dress, jacket, pants), the style (e.g., casual, formal, athletic), the color(s), and any patterns or distinguishing features.
    *   **Additional notes:** Include any other relevant visual details.

**Output 2: Action Description:**

*   Identify the action performed by the primary individual in the video clip. Make sure you infer the action from the clip.
*   Describe these actions as specifically and accurately as possible. Use active verbs.
*   If there are multiple actions, list them in chronological order of appearance in the video.
*   Provide details regarding the manner/style of actions such as "walking slowly", "quickly grabbing" etc.

**Instructions:**

**Format your output clearly, using the following structure:**
    ```
    **Character Description:**
    [Detailed character description here]

    **Actions Performed:**
    [Chronological list of actions, with specifics.]
    ```

Let's begin. Please provide your analysis.

# Story Generation

You are an expert story teller. Your task is to create a cohesive story from the following action scenes in the anime style.

**Step by step**

1. Unify the character description.

2. Generate an anime fantasy story inspired by the actions below. You are free to add in elements, but make sure the story is grounded in the actions. Please feel free to situate the story in a different environment and have the actions target fantasy entities. However, the main individual should remain the same.

3. Create 3-5 scenes aimed at being 8s long each. For each scene, create a text-to-video model prompt by including camera motion, character description, and action performed. Important, always include the anime theme in every scene prompt.

4. Output your 3-5 visual prompts, one paragraph per scene.

**Visual prompt examples**
This medium shot, with a shallow depth of field, portrays a cute cartoon girl with wavy brown hair, sitting upright in a 1980s kitchen. Her hair is medium length and wavy. She has a small, slightly upturned nose, and small, rounded ears. She is very animated and excited as she talks to the camera.

A cinematic shot captures a fluffy Cockapoo, perched atop a vibrant pink flamingo float, in a sun-drenched Los Angeles swimming pool. The crystal-clear water sparkles under the bright California sun, reflecting the playful scene. The Cockapoo's fur, a soft blend of white and apricot, is highlighted by the golden sunlight, its floppy ears gently swaying in the breeze. Its happy expression and wagging tail convey pure joy and summer bliss. The vibrant pink flamingo adds a whimsical touch, creating a picture-perfect image of carefree fun in the LA sunshine.

A low-angle shot captures a flock of pink flamingos gracefully wading in a lush, tranquil lagoon. The vibrant pink of their plumage contrasts beautifully with the verdant green of the surrounding vegetation and the crystal-clear turquoise water. Sunlight glints off the water's surface, creating shimmering reflections that dance on the flamingos' feathers. The birds' elegant, curved necks are submerged as they walk through the shallow water, their movements creating gentle ripples that spread across the lagoon. The composition emphasizes the serenity and natural beauty of the scene, highlighting the delicate balance of the ecosystem and the inherent grace of these magnificent birds. The soft, diffused light of early morning bathes the entire scene in a warm, ethereal glow.

**Actions**
Character Description:
The individual is a person with medium-length, curly, reddish-blonde hair that appears somewhat tousled. They are wearing a grey newsboy-style cap, obscuring most of their forehead. They are wearing a black and white plaid, short-sleeved button down shirt, and green pants. They are also wearing dark sneakers with light soles. There are no visible glasses or any other significant accessories.
Actions Performed:
The individual is crawling on the patio. They move across the patio by placing their hands and knees forward in a crawling motion. They are moving across the frame from left to right. They are keeping their head down and looking at the ground as they move.

Character Description:
The individual in the video has medium-length curly, light-brown hair with a slightly reddish tint, which appears to be a natural or styled wave. They wear a dark gray, flat cap that has a somewhat tweed or textured appearance. They are wearing a long-sleeved, black and white checkered shirt, with the sleeves rolled up to their forearms. The shirt is tucked into green pants that appear to be casual in style. Their footwear consists of dark-colored high-top sneakers with white soles. The individual has a fair complexion. Their face has a somewhat round shape, a small pointed nose and appears to have no facial hair.
Actions Performed:
The individual jumps up into the air, raising their arms slightly to their sides.
The individual lands back on the ground in a standing position.
The individual places their hands behind their back.
The individual bends their knees and crouches down.

Character Description:
The individual appears to be a young person with curly, light reddish-brown hair, that falls around their ears and forehead. They wear round, wire-rimmed glasses with a pinkish tint. The person is wearing a dark T-shirt with a graphic on the front, partially covered by a light grey and black plaid flannel shirt that is unbuttoned. They also have on loose-fitting green pants, and a newsboy style cap. There is a black watch on their left wrist.
Actions Performed:
The person looks down at their left wrist.
They then lift their wrist slightly and appear to be checking their watch.

Character Description:
The individual has medium-length, curly, reddish-brown hair. They are wearing round, wire-rimmed glasses. Their clothing consists of a dark t-shirt, a gray and black plaid button-down shirt, and dark green pants. They also wear a gray flat cap and dark sneakers.
Actions Performed:
The individual stands in place and brings their hands together in front of their chest, appearing to clap or rub them.
They pivot on their left foot, turning towards the left and raising their right arm, extending their hand outwards with their palm facing forward.

Let's create the output.
