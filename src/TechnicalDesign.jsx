import { Link } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './TechnicalDesign.css'

export default function TechnicalDesign() {

    const folderStructure = `rock-paper-scissors-dash/
│── .github
│   │── workflows
│       │── deploy.yml   # Deploy via GitHub Pages
│── backend/             # Express & MongoDB API
│   │── server.js        # Main API server
│   │── models/          # Database models
│   │── routes/          # API endpoints
│   │── config/          # Database connection
│   │── .env             # Secrets (MongoDB URI)
│── dist/                # Final prodution build is generated
│── public/              # Static assets (images & sounds)
│── src/
│   │── assets/          # Game assets (sprites & audio)
│   │── components/      # Reusable UI components
│   │── game/            # Game logic & mechanics
│   │── hooks/           # Custom React hooks
│   │── pages/           # Page-level components
│   │── styles/          # Global & component-specific styles
│   │── utils/           # Utility functions
│   │── App.jsx          # Main React component
│   │── main.jsx         # Entry point for React
│── .gitignore           # Files to be ignored by Git
│── index.html           # Main HTML file
│── package.json         # Project dependencies & scripts
│── README.md            # Project documentation
│── vite.config.js       # Vite configuration`
    return (
        <>
            <div className="technical-design-page">
                <h2>Hello!!!</h2>
                <p>Back to <Link to="/">home page</Link></p>
                <p>Go to our <a href='https://github.com/paulcostanza/CSCI401--Rock-Paper-Scissors-Dash' target='_blank'>github</a></p>


                <h1 id="code-structure-document">Technical Design Document</h1>
                <h3 id="overview">Overview</h3>

                <p>Document outline for the structure and organization of our codebase for <strong>Rock Paper Scissors Dash</strong>. Here is our reference for the team to ensure <em>consistency</em> and <em>maintainability</em> throughout development.</p>

                <h3 id="folder-structure">Folder Structure</h3>

                <p>Our project follows a React, Vite, &amp; MongoDB folder structure with some slight modifications:</p>

                <div className="center folder-layout">
                    <SyntaxHighlighter language="bash" style={tomorrow} className="center">
                        {folderStructure}
                    </SyntaxHighlighter>
                </div>

                <h3 id="naming-conventions">Naming Conventions</h3>

                <p>To maintain consistency across the project, we follow these naming conventions:</p>

                <ul>
                    <li><strong>Folders &amp; Files</strong>: kebab-case for folders * * * <code>game-logic/</code></li>
                    <li><strong>React Components</strong>: PascalCase * * * <code>GameBoard.jsx</code></li>
                    <li><strong>Functions &amp; Variables</strong>: camelCase * * * <code>updateScore()</code></li>
                    <li><strong>Constants</strong>: UPPER_CASE_SNAKE * * * <code>MAX_SCORE = 100;</code></li>
                </ul>

                <h3 id="component-organization">Component Organization</h3>

                <ul>
                    <li><strong>Reusable Components</strong>: Located in <code>/src/components/</code> (Scoreboard.jsx, PowerUp.jsx)</li>
                    <li><strong>Game Logic</strong>: Located in <code>/src/game/</code> (GameEngine.js, Character.js)</li>
                    <li><strong>Pages</strong>: Located in <code>/src/pages/</code> (MainMenu.jsx, Leaderboard.jsx)</li>
                    <li><strong>Hooks</strong>: Custom React hooks in <code>/src/hooks/</code> (useGameState.js)</li>
                    <li><strong>Styles</strong>: Global styles in <code>/src/styles/</code></li>
                </ul>

                <h3 id="coding-best-practices">Coding Best Practices</h3>

                <ul>
                    <li>Use functional components and React hooks</li>
                    <li>Keep components small and reusable</li>
                    <li>Comment the <em>why</em> on complex logic</li>
                </ul>

                <h3 id="version-control--cicd">Version Control &amp; CI/CD</h3>

                <ul>
                    <li><strong>Branching Strategy</strong>: Use <strong>main</strong> for stable releases and feature branches (feature/game-mechanics).</li>
                    <li><strong>Git Commit Messages</strong>: Use message format (<code>feat: add score tracking</code>).</li>
                    <li><strong>Deployment</strong>:
                        <ul>
                            <li>The site is deployed via GitHub Pages</li>
                            <li>GitHub Actions is set up for CI/CD</li>
                            <li>Commits to <code>main</code> trigger automatic deployments</li>
                        </ul>
                    </li>
                </ul>
            </div>

        </>
    )
}
