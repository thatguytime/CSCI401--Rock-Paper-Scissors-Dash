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
                    Check out our current <Link to="/technical-design">technical design document</Link> page, including folder structure, naming conventions, etc.
                </p>

                <div className="under-construction universal-border">
                    <h3>Current Pages Under Construction</h3>
                    <ul>
                        <li><Link to="/main-menu">Main Menu</Link></li>
                        <li><Link to="/login-screen">Login Screen</Link></li>
                        <li><Link to="/canvas1">Demo level</Link></li>
                    </ul>
                </div>

            </div>
            <p className="read-the-docs">

            </p>
        </>
    )
}

