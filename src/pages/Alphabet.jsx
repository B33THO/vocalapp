import { useState } from "react"
import Letter from "../components/Letter"
import { Link } from "react-router-dom"

export default function Alphabet() {
  const [showPronunciation, setShowPronunciation] = useState(true);
  return (
    <div>
      <Link to="/" className="p-3 bg-slate-300 rounded-2xl"> &#8592; Back to main menu</Link>
      <h1 className="font-bold text-4xl uppercase">Alphabet</h1>

      <div className="mb-4 flex items-center gap-4">
        <label htmlFor="pronunciation-toggle" className="font-semibold">
          Mostrar pronunciación:
        </label>
        <button
          id="pronunciation-toggle"
          onClick={() => setShowPronunciation(!showPronunciation)}
          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
            showPronunciation ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
              showPronunciation ? "translate-x-7" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(9, 1fr)", gap: "10px", padding: "10px" }}>
        <Letter letter="A" pronunciation="ei" showPronunciation={showPronunciation} />
        <Letter letter="B" pronunciation="bi" showPronunciation={showPronunciation} />
        <Letter letter="C" pronunciation="si" showPronunciation={showPronunciation} />
        <Letter letter="D" pronunciation="di" showPronunciation={showPronunciation} />
        <Letter letter="E" pronunciation="i" showPronunciation={showPronunciation} />
        <Letter letter="F" pronunciation="ef" showPronunciation={showPronunciation} />
        <Letter letter="G" pronunciation="yi" showPronunciation={showPronunciation} />
        <Letter letter="H" pronunciation="eich" showPronunciation={showPronunciation} />
        <Letter letter="I" pronunciation="ai" showPronunciation={showPronunciation} />
        <Letter letter="J" pronunciation="yei" showPronunciation={showPronunciation} />
        <Letter letter="K" pronunciation="kei" showPronunciation={showPronunciation} />
        <Letter letter="L" pronunciation="el" showPronunciation={showPronunciation} />
        <Letter letter="M" pronunciation="em" showPronunciation={showPronunciation} />
        <Letter letter="N" pronunciation="en" showPronunciation={showPronunciation} />
        <Letter letter="O" pronunciation="ou" showPronunciation={showPronunciation} />
        <Letter letter="P" pronunciation="pi" showPronunciation={showPronunciation} />
        <Letter letter="Q" pronunciation="kiu" showPronunciation={showPronunciation} />
        <Letter letter="R" pronunciation="ar" showPronunciation={showPronunciation} />
        <Letter letter="S" pronunciation="es" showPronunciation={showPronunciation} />
        <Letter letter="T" pronunciation="ti" showPronunciation={showPronunciation} />
        <Letter letter="U" pronunciation="iu" showPronunciation={showPronunciation} />
        <Letter letter="V" pronunciation="vi" showPronunciation={showPronunciation} />
        <Letter letter="W" pronunciation="dabol-iu" showPronunciation={showPronunciation} />
        <Letter letter="X" pronunciation="exs" showPronunciation={showPronunciation} />
        <Letter letter="Y" pronunciation="uai" showPronunciation={showPronunciation} />
        <Letter letter="Z" pronunciation="zi" showPronunciation={showPronunciation} />
      </div>
    </div>
  );
}