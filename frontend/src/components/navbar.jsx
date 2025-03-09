import React, { useState } from 'react';
import '../navbar.css';

function Navbar() {
    const [activeIndex, setActiveIndex] = useState(0); // Track the active button index

    function handleButtonClick(index) {
        setActiveIndex(index); // Set the clicked button as active
    }

    return (
        <nav>
            <div className='logo'>
                Infinite Pointers
            </div>
            <ul>
                {["For Candidates", "For Recruiters", "For Universities", "Pricing"].map((text, index) => (
                    <li key={index}>
                        <button 
                            onClick={() => handleButtonClick(index)} 
                            className={`forBtn ${activeIndex === index ? 'active' : ''}`}
                        >
                            {text}
                        </button>
                    </li>
                ))}
            </ul>
            <div className='buttons'>
                <button>Login</button>
                <button className='mainBtn'>Book a Demo</button>
            </div>
        </nav>
    );
}

export default Navbar;
