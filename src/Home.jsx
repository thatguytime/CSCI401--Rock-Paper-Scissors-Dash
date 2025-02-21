import githubLogo from './assets/github-logo.webp'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <h1>Rock {`->`} Paper {`->`} Scissor {`->`} Dash</h1>

            <p>
                Future site of our game, stay tuned!
            </p>

            <div>
                <a href='https://github.com/paulcostanza/CSCI401--Rock-Paper-Scissors-Dash' target='_blank'>
                    <button>
                        <img id="github-logo" src={githubLogo} alt="github-logo" />
                    </button>
                </a>

                <p>
                    Checkout our current <Link to="/technical-design">code structure document</Link> page where we include folder structure, naming conventions, etc.
                </p>
            </div>
            <p className="read-the-docs">

            </p>
        </>
    )
}

