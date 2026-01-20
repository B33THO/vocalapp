import speak from "../helpers/speaker";

export default function Letter({letter, pronunciation, showPronunciation = true}) {
    const handleClick = () => {
        speak(letter, {rate: 0.6})
    }
    return (
        <div className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 rounded-2xl 
        shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-sky-300 w-40 h-52 cursor-pointer"
        onClick={handleClick}>
            {/* Letra Grande */}
            <span className="text-7xl font-bold text-indigo-600 mb-4 uppercase">
            {letter}
            </span>
            
            {/* Línea divisoria sutil */}
            <div className="w-12 h-1 bg-gray-100 rounded-full mb-3"></div>
            
            {/* Pronunciación */}
            {
                showPronunciation ?
                (
                    <p className="text-lg font-medium text-gray-500 italic">
                    " {pronunciation} "
                    </p>

                ):
                null
            }
        </div>
    );
}