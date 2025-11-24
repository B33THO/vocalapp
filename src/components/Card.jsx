import speak from "../helpers/speaker";

export default function Card({image, word, rate = 1, showWords = true}) {
    const onSpeak = () => {
        speak(word, { rate });
    }

    return (
        <div className="card bg-white p-4 rounded-lg shadow-xl max-w-md
                    hover:bg-blue-200 transition-colors cursor-pointer m-2"
            onClick={onSpeak}>

            {/* contenedor fijo para la imagen */}
            <div className="w-48 h-48 mx-auto overflow-hidden rounded-lg">
              <img src={image} alt={word} className="w-full h-full object-cover block" />
            </div>

            <p className="text-center mt-4 text-lg font-semibold capitalize">{showWords ? word : ''}</p>
        </div>
    );
}