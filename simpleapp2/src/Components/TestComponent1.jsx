import { useState } from "react";
import '../App.css';

const TestComponent1 = () => {

    const content=[
            [
                "React is extremely popular",
                "It makes building complex, interactive UIs a breeze",
                "It's powerful & flexible",
                "It has a very active and versatile ecosystem"
            ],
            [
                "Components, JSX & Props",
                "State",
                "Hooks (e.g., useEffect())",
                "Dynamic rendering"
            ],
            [
                "Official web page (react.dev)",
                "Next.js (Fullstack framework)",
                "React Native (build native mobile apps with React)"
          
            ],
            [
                "Java is Simple",
                "Java is Robust",
                "Java is Multithreaded"
          
            ],
            [
                "Collections",
                "OOP'S Concepts",
                "Exception Handling",
                "Servlets"
            ],
        ];

        const [activeContentIndex, setActiveContentIndex] = useState(0);
        
        return(
            <div className="App">
                <header className="App-header">
                
                <div>
                <h1>React.js</h1>
                <p>i.e., using the React library for rendering the UI</p>

                </div>
            <div id="tabs">
                <menu>
                <button
                    className={activeContentIndex === 0 ? "active" : ""}
                    onClick={() => setActiveContentIndex(0)}
                    >
                    Why React?
                </button>
                <button
                    className={activeContentIndex === 1 ? "active" : ""}
                    onClick={() => setActiveContentIndex(1)}
                     >
                    Core Features
                 </button>
                <button
                    className={activeContentIndex === 2 ? "active" : ""}
                    onClick={() => setActiveContentIndex(2)}
                    >
                    Related Resources
                </button>
                <button
                    className={activeContentIndex === 3? "active" : ""}
                    onClick={() => setActiveContentIndex(3)}
                    >
                    What is Java ?
                </button>
                <button
                    className={activeContentIndex === 4? "active" : ""}
                    onClick={() => setActiveContentIndex(4)}
                    >
                    Core Importance?
                </button>
                </menu>

                <div id="tab-content">
                    <ul>
                    {content[activeContentIndex].map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                    </ul>
                </div>
             </div>

            </header>

            </div>
      

    );
}
export default TestComponent1;