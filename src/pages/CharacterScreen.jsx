import { useState } from 'react'
import { Link } from 'react-router-dom'
import rock from '../maps/Sprites/Rock0.png'
import paper from '../maps/Sprites/Paper0.png'
import scissors from '../maps/Sprites/Scissors0.png'

export default function CharacterScreen() {
    const characters = [
        { name: 'Rock', image: rock},
        { name: 'Paper', image: paper},
        { name: 'Scissors', image: scissors},
    ]

	   const [selected, setSelected] = useState(null)

	    return (
	        <div className="pacman-font">

	            <h1 className="">Select Your Character</h1>
	            <div className="character-border">
	                {characters.map((char) => (
	                    <button //Character Buttons, aranged in a side by side row
	                        key={char.name}
	                        className={`character-button universal-border pacman-font`}
	                        onClick={() => setSelected(char.name)}>
	                        <img
	                            src={char.image}
	                            alt={char.name}
								style={{ width: '200px', height: '200px', objectFit: 'contain' }}
	                        />
	                        <span>{char.name}</span>
	                    </button>
	                ))}
	            </div>
				
	            {/* Confirm and Back buttons */}
	            <div>
	                <button //Testing button; Will be replaced to link to first level w/ passalong of character selection
	                    className="main-menu-button pacman-font "
	                    disabled={!selected}
	                    onClick={() => alert(`You selected: ${selected}`)}
	                >
	                    Confirm Selection
	                </button>

	                <Link to="/">
	                    <button className="main-menu-button pacman-font ">Back to Main Menu</button>
	                </Link>
	            </div>
	        </div>
	    )
	}