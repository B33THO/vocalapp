import { Link } from "react-router-dom"
import { ALPHABET_LETTERS } from "../helpers/Alphabet";
import Letter from "../components/Letter";
import { useState } from "react"

export default function AlphabetPractice() {

  const [showPronunciation, setShowPronunciation] = useState(true)
  const [index, setIndex] = useState(Math.floor(Math.random() * ALPHABET_LETTERS.length));

  return (
    <div className="h-screen">
      <div className="flex justify-between gap-4 items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out">
            &#8592; Back to main menu
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tighter mb-4">
            Alphabet Practice
          </h1>
        </div>
        <div className="mb-4 flex items-center gap-4">
          <label htmlFor="pronunciation-toggle" className="font-semibold">
            Mostrar pronunciación:
          </label>
          <button
            id="pronunciation-toggle"
            onClick={() => setShowPronunciation(!showPronunciation)}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${showPronunciation ? "bg-green-500" : "bg-gray-300"
              }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${showPronunciation ? "translate-x-7" :
                "translate-x-1"
                }`}
            />
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Letter letter={ALPHABET_LETTERS[index].letter}
          pronunciation={ALPHABET_LETTERS[index].pronunciation}
          showPronunciation={showPronunciation}
          onClick={() => setIndex(Math.floor(Math.random() * ALPHABET_LETTERS.length))} />
      </div>
    </div>
  );
}