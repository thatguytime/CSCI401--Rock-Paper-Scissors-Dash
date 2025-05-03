import { useState } from 'react'
import { Link } from 'react-router-dom'
import rock from '../game/Sprites/Rock0.png'
import paper from '../game/Sprites/Paper0.png'
import scissors from '../game/Sprites/Scissors0.png'
import { setSelectedCharacter } from '../game/selectedCharacter.js'

export default function CharacterScreen() {
    const characters = [
        { name: 'Rock', image: rock },
        { name: 'Paper', image: paper },
        { name: 'Scissors', image: scissors },
    ]

    const [selected, setSelected] = useState(null)

    return (
        <div className="pacman-font universal-border">

            <h1 className="">Select Your Character</h1>
            <div className="character-border">
                {characters.map((char) => (
                    <button //Character Buttons, aranged in a side by side row
                        key={char.name}
                        className={`character-button pacman-font`}
                        onClick={() => setSelected(char.name)}>
                        <div> <img
                            src={char.image}
                            alt={char.name}
                            style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                        />
                        </div>
                        <span>{char.name}</span>
                    </button>
                ))}
            </div>

            <div className='confirm-and-back-buttons'>

                {/* // Testing button; Will be replaced to link to first level w/ passalong of character selection */}
                <Link to="/canvas" className="back-to-main-link pacman-font confirm-and-back-button"
                    disabled={!selected}
                    onClick={() => setSelectedCharacter(selected)}>
                    Confirm Selection
                </Link>



                <Link to="/" className='pacman-font back-to-main-link confirm-and-back-button'>Back to main menu</Link>
            </div>
        </div>
    )
}