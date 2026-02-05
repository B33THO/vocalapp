import speak from "../helpers/speaker"
import { ALPHABET_LETTERS } from "../helpers/Alphabet";
import { useEffect } from "react";

export default function SpellingWord({ word, showPronunciation = true, showSpelling = true }) {

    const lettersArray = word.word.split('');
    const letterObjects = [];

    useEffect(() => {
        // Speak the full word when the component mounts
        speak(word.word, { rate: 0.8 });
    }, [word.word]);

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

    const speakWord = () => {
        speak(word.word, { rate: 0.8 });
    }

    return (
        <>
            <div className="">
                <div onClick={speakWord} className="cursor-pointer">
                    <img className="w-60 h-60 mx-auto mb-8 rounded-2xl shadow-lg object-cover" src={word.img} alt={word.word} />
                </div>
                <div className="flex gap-2">
                    {
                        showSpelling ?
                            (
                                
                                    letterObjects.map((char, index) => (

                                        <div className="p-4 border-2 border-blue-500  text-6xl w-25 h-25 flex flex-col items-center justify-center rounded-xl
                                                      hover:bg-blue-200 cursor-pointer shadow-lg hover:shadow-xl transition hover:scale-105
                                                        bg-linear-to-r from-blue-300 to-sky-100 text-blue-700 uppercase "
                                            key={index}
                                            onClick={() => handleClick(char.letter)}
                                        >
                                            {char.letter}
                                            {showPronunciation ? <span className="block text-sm mt-2 lowercase">"{char.pronunciation}"</span> : null}
                                        </div>

                                    ))
                                
                            ) : null
                    }
                </div>
            </div>

        </>
    );
}