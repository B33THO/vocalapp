import speak from "../helpers/speaker"
import { ALPHABET_LETTERS } from "../helpers/Alphabet";

export default function SpellingWord({ word, showPronunciation = true }) {
    
    const lettersArray = word.split('');
    const letterObjects = [];
    
    lettersArray.forEach((letter) => {
        const letterObj = ALPHABET_LETTERS.find(obj => obj.letter.toLowerCase() === letter.toLowerCase());
        if (letterObj) {
            letterObjects.push(letterObj);
        }
    });

    console.log(letterObjects);    

    const handleClick = (char) => {
        speak(char, { rate: 0.6 });
    }

    return (
        <>

            <div className="flex gap-4">
                {letterObjects.map((char, index) => (
                    
                    <div className="p-4 border-2 border-blue-700  text-6xl w-30 h-30 flex flex-col items-center justify-center rounded-xl
                    hover:bg-blue-200 cursor-pointer shadow-lg hover:shadow-xl transition hover:scale-105
                    bg-linear-to-r from-blue-800 to-sky-300 text-amber-50 uppercase "
                        key={index}
                        onClick={() => handleClick(char)}
                    >
                        {char.letter}
                        {showPronunciation ? <span className="block text-sm mt-2 lowercase">"{char.pronunciation}"</span> : null}
                    </div>
                    
                ))}
            </div>
        </>
    );
}