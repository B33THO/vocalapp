import SpellingWord from "../components/SpellingWord"
import { Link } from "react-router-dom"
import WORDS from "../helpers/Words";
import { useState } from "react";

export default function Spelling() {
    const [currentWord, setCurrentWord] = useState(Math.floor(Math.random() * WORDS.length))
    const [showPronunciation, setShowPronunciation] = useState(true);
    const [showSpelling, setShowSpelling] = useState(true);

    const nextWord = () => {
        setCurrentWord(Math.floor(Math.random() * WORDS.length));
    }
    return (
        <div className="h-screen">
            <Link to="/" className="bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out">
                &#8592; Back to main menu
            </Link>
            <div className="flex justify-between items-center p--4">
                <h1 className="text-6xl font-extrabold text-center mt-8">Spelling Practice</h1>
                <div>
                    
                    <div className="mb-4 flex items-center gap-4">
                        <label htmlFor="spelling-toggle" className="font-semibold">
                            Show Spelling
                        </label>
                        <button
                            id="spelling-toggle"
                            onClick={() => setShowSpelling(!showSpelling)}
                            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${showSpelling ? "bg-green-500" : "bg-gray-300"
                                }`}
                        >
                            <span
                                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${showSpelling ? "translate-x-7" : "translate-x-1"
                                    }`}
                            />
                        </button>
                    </div>

                    <div className="mb-4 flex items-center gap-4">
                        <label htmlFor="pronunciation-toggle" className="font-semibold">
                            Show Pronunciation
                        </label>
                        <button
                            id="pronunciation-toggle"
                            onClick={() => setShowPronunciation(!showPronunciation)}
                            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${showPronunciation ? "bg-green-500" : "bg-gray-300"
                                }`}
                        >
                            <span
                                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${showPronunciation ? "translate-x-7" : "translate-x-1"
                                    }`}
                            />
                        </button>
                    </div>

                </div>
            </div>

            <div className="flex justify-center mt-28">
                <SpellingWord word={WORDS[currentWord]} showPronunciation={showPronunciation} showSpelling={showSpelling} />
            </div>

            <div className="flex justify-center mt-8">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full 
                shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out text-2xl"
                    onClick={nextWord}>
                    Next Word &#8594;
                </button>
            </div>
        </div>
    );
}