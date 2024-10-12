import os
import json
from gtts import gTTS
import re

def sanitize_filename(filename):
    """Sanitizes a filename by replacing invalid characters with underscores.

    Args:
        filename (str): The input filename.

    Returns:
        str: The sanitized filename.
    """
    invalid_char_pattern = r"[<>:\"/\\|?*\. ]"
    sanitized_filename = re.sub(invalid_char_pattern, "_", filename)
    return sanitized_filename

base_dir = os.path.dirname(os.path.abspath(__file__))

json_files = [
    'greetings.json',
    'directions.json',
    'travel.json',
    'basicphrases.json',
    'health.json',
    'numbers.json',
    'weather.json',
    'shopping.json'
]


audio_dir = os.path.abspath(os.path.join(base_dir, '..', 'public', 'audio'))
if not os.path.exists(audio_dir):
    os.makedirs(audio_dir)

for json_file in json_files:
    json_file_path = os.path.join(base_dir, 'pages', 'vocab', json_file)
    
    print(f"Attempting to open: {json_file_path}") 
    
    try:
        with open(json_file_path, 'r', encoding='utf-8') as f:
            phrases = json.load(f)
    except FileNotFoundError:
        print(f"File not found: {json_file_path}")
        continue

    for phrase in phrases:
        word = phrase['polish']
        sanitized_word = sanitize_filename(word)
        audio_file = os.path.join(audio_dir, f'{json_file[:-5]}_{sanitized_word}.mp3')
        
        if os.path.exists(audio_file):
            print(f"Audio file already exists for: {word} in {json_file}")
            continue
        
        try:
            tts = gTTS(text=word, lang='pl')
            tts.save(audio_file)
            print(f"Generated audio for: {word} in {json_file}")
        except Exception as e:
            print(f"Error generating audio for: {word} in {json_file}, Error: {str(e)}")

print("Audio generation completed.")
