import { useState } from "react";
import "./RobotInteractive.css"; // Estilos separados para claridad
import speak from "../helpers/speaker";
import { Link } from "react-router-dom";

export default function Body() {
    const [selectedPart, setSelectedPart] = useState(null);

    const handleClick = (part) => {
        setSelectedPart(part)
        speak(part)
    };

    return (
        <>
            <Link to="/" className="p-3 bg-slate-300 rounded-2xl"> &#8592; Back to main menu</Link>
            <div className="robot-container">
                <h2>Click on a body part</h2>
                <svg
                    viewBox="0 0 300 500"
                    className="robot-svg"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Cabeza */}
                    <rect x="120" y="40" width="60" height="60" className="part" onClick={() => handleClick("Head")} />
                    {/* Pelo */}
                    <rect x="120" y="20" width="60" height="15" className="part" onClick={() => handleClick("Hair")} />
                    {/* Ojos */}
                    <circle cx="135" cy="65" r="5" className="part" onClick={() => handleClick("eyes")} />
                    <circle cx="165" cy="65" r="5" className="part" onClick={() => handleClick("eyes")} />
                    {/* Nariz */}
                    <polygon points="150,70 145,80 155,80" className="part" onClick={() => handleClick("Nouse")} />
                    {/* Boca */}
                    <rect x="135" y="85" width="30" height="5" className="part" onClick={() => handleClick("Mouth")} />
                    {/* Orejas */}
                    <rect x="110" y="50" width="10" height="20" className="part" onClick={() => handleClick("Ear")} />
                    <rect x="180" y="50" width="10" height="20" className="part" onClick={() => handleClick("Ear")} />

                    {/* Torso */}
                    <rect x="110" y="110" width="80" height="120" rx="20" className="part" onClick={() => handleClick("Body")} />

                    {/* Brazos */}

                    <rect x="70" y="120" width="30" height="60" className="part" onClick={() => handleClick("Arm")} />
                    <circle cx="85" cy="180" r="8" className="part" onClick={() => handleClick("Elbow")} />
                    <rect x="70" y="190" width="30" height="40" className="part" onClick={() => handleClick("Arm")} />
                    <rect x="200" y="120" width="30" height="60" className="part" onClick={() => handleClick("Arm")} />
                    <circle cx="215" cy="180" r="8" className="part" onClick={() => handleClick("Elbow")} />
                    <rect x="200" y="190" width="30" height="40" className="part" onClick={() => handleClick("Arm")} />

                    {/* Manos */}
                    <rect x="70" y="230" width="30" height="20" className="part" onClick={() => handleClick("Hand")} />
                    <rect x="70" y="250" width="7" height="20" className="part" onClick={() => handleClick("Fingers")} />
                    <rect x="82" y="250" width="7" height="20" className="part" onClick={() => handleClick("Fingers")} />
                    <rect x="93" y="250" width="7" height="20" className="part" onClick={() => handleClick("Fingers")} />

                    <rect x="200" y="230" width="30" height="20" className="part" onClick={() => handleClick("Hand")} />
                    <rect x="200" y="250" width="7" height="20" className="part" onClick={() => handleClick("Fingers")} />
                    <rect x="212" y="250" width="7" height="20" className="part" onClick={() => handleClick("Fingers")} />
                    <rect x="223" y="250" width="7" height="20" className="part" onClick={() => handleClick("Fingers")} />

                    {/* Piernas */}
                    <rect x="120" y="240" width="20" height="60" className="part" onClick={() => handleClick("Legs")} />
                    <circle cx="130" cy="300" r="8" className="part" onClick={() => handleClick("Knee")} />
                    <rect x="120" y="310" width="20" height="50" className="part" onClick={() => handleClick("Legs")} />
                    <rect x="160" y="240" width="20" height="60" className="part" onClick={() => handleClick("Legs")} />
                    <circle cx="170" cy="300" r="8" className="part" onClick={() => handleClick("Knee")} />
                    <rect x="160" y="310" width="20" height="50" className="part" onClick={() => handleClick("Legs")} />

                    {/* Pies */}
                    <rect x="100" y="362" width="40" height="20" className="footLeft" onClick={() => handleClick("Foot")} />
                    <rect x="160" y="362" width="40" height="20" className="footRight" onClick={() => handleClick("Foot")} />

                    <circle cx="135" cy="390" r="5" className="part" onClick={() => handleClick("Toes")} />
                    <circle cx="123" cy="390" r="4" className="part" onClick={() => handleClick("Toes")} />
                    <circle cx="113" cy="390" r="4" className="part" onClick={() => handleClick("Toes")} />
                    <circle cx="104" cy="390" r="3" className="part" onClick={() => handleClick("Toes")} />

                    <circle cx="165" cy="390" r="5" className="part" onClick={() => handleClick("Toes")} />
                    <circle cx="175" cy="390" r="4" className="part" onClick={() => handleClick("Toes")} />
                    <circle cx="185" cy="390" r="4" className="part" onClick={() => handleClick("Toes")} />
                    <circle cx="195" cy="390" r="3" className="part" onClick={() => handleClick("Toes")} />
                </svg>

                {selectedPart && (
                    <div className="info-box">
                        SELECTED PART: <strong>{selectedPart}</strong>
                    </div>
                )}
            </div>
        </>
    );
}