import React, { useState } from 'react';
import '../heroSection.css';

function HeroSection() {
    const [activeSection, setActiveSection] = useState('behave'); // Default: Behavioral Profiling

    return (
        <div className='heroSection'>
            {/* Left Section */}
            <section className='left'>
                <div>
                    <h1>
                        <span className='purple'>AI-powered immersive</span> <br />
                        Interview to prepare <br />
                        For your dream job
                    </h1>
                    <p>
                        We offer 2000+ job roles & comprehensive personalized feedback on your interview
                        audio and video. 3 interviews per month are free.
                    </p>
                    <button className='mainBtn'>Take a free Interview</button>
                </div>
            </section>

            {/* Right Section */}
            <section className='right'>
                <div className='rightBtn'>
                    <button
                        className={activeSection === 'tech' ? 'mainBtn' : ''}
                        onClick={() => setActiveSection('tech')}
                    >
                        Technical Feedback
                    </button>
                    <button
                        className={activeSection === 'behave' ? 'mainBtn' : ''}
                        onClick={() => setActiveSection('behave')}
                    >
                        Behavioral Profiling
                    </button>
                </div>

                {/* Technical Feedback Section */}
                {activeSection === 'tech' && (
                    <div className='rightF tech'>
                        <ul>
                            {[...Array(4)].map((_, index) => (
                                <li key={index}>
                                    <h1>Clarity of Communication</h1>
                                    <p>Basic background overview provided, lacking depth.</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Behavioral Feedback Section (Two-Column Layout) */}
                {activeSection === 'behave' && (
                    <div className='rightF behave twoColumn'>
                        <div className='column'>
                            <ul>
                                <li>
                                    <h1>Background Noise</h1>
                                    <p>Low level of background noise.</p>
                                </li>
                                <li>
                                    <h1>Speech Clarity</h1>
                                    <p>Words are pronounced clearly, with occasional hesitation or stumbles.</p>
                                </li>
                                <li>
                                    <h1>Tone of Voice</h1>
                                    <p>Calm and conversational, relaxed and confident.</p>
                                </li>
                                <li>
                                    <h1>Voice Anomaly</h1>
                                    <p>No significant voice anomalies.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='column'>
                            <ul>
                                <li>
                                    <h1>Appearance</h1>
                                    <p>White top with a pink scarf.</p>
                                </li>
                                <li>
                                    <h1>Sitting Posture</h1>
                                    <p>Posture is not ideal, slightly slouching.</p>
                                </li>
                                <li>
                                    <h1>Head Movements</h1>
                                    <p>Avoid looking to the side.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

export default HeroSection;