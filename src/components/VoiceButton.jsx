import "/home/myk/Desktop/Polish-Learning/src/CSS/VoiceButton.css";

function VoiceButton({ section, text }) {
  const sanitizeFilename = (filename) => {
    return filename.replace(/ /g, "_").replace(/[\/\\]/g, "_");
  };

  const sanitizedText = sanitizeFilename(text);
  const audioSrc = `/audio/${section}_${sanitizedText}.mp3`;

  const handlePlay = () => {
    const audio = new Audio(audioSrc);
    console.log("Section:", section);
    console.log("Text:", text);
    console.log("Sanitized Text:", sanitizedText);
    console.log("Audio Source:", audioSrc);

    audio
      .play()
      .then(() => {
        console.log("Audio is playing");
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
      });
  };

  return (
    <button className="voice-button" onClick={handlePlay}>
      Play
    </button>
  );
}

export default VoiceButton;
