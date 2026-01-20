import { useState } from "react"
import Letter from "../components/Letter"
import { Link } from "react-router-dom"
import { ALPHABET_LETTERS } from "../helpers/Alphabet"

export default function Alphabet() {
  const [showPronunciation, setShowPronunciation] = useState(true);
  return (
    <div >
      <div className="flex justify-between items-center p-4 mb-4 bg-slate-300 rounded-4xl">
        <div className="flex gap-4 items-center">
          <Link to="/" className="bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out">
            &#8592; Back to main menu
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tighter mb-4">Alphabet</h1>
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
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${showPronunciation ? "translate-x-7" : "translate-x-1"
                }`}
            />
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(9, 1fr)", gap: "10px", padding: "10px" }}>
        {ALPHABET_LETTERS.map(({ letter, pronunciation }) => (
          <Letter letter={letter} pronunciation={pronunciation} showPronunciation={showPronunciation} />
        ))}        
      </div>
    </div>
  );
}