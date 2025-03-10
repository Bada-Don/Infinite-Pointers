import React from 'react'
import '../benifits.css';

function Benifits() {
    return (
        <section className='benifits'>
            <h1>Transforming Your <span className='purple'>Interview</span>  Game</h1>
            <p>By using our application, candidates have reduced their
                interview anxiety, allowing them to focus on what
                they do best: showcasing their true potential and
                landing their dream job.</p>
                <br />
            <div className='allCircles'>
                <div>
                    <div className='circle'>90%</div>
                    <br />
                    <p>of our users report a significant boost in interview
                        confidence after using our application's AI-driven practice
                        sessions.</p>
                </div>
                <div>
                    <div className='circle'>85%</div>
                    <br />
                    <p>of candidates who completed our tailored AI interviews
                        saw an improvement in their actual interview performance.</p>
                </div>
                <div>
                    <div className='circle'>98%</div>
                    <br />
                    <p>of our users report a significant reduction in interview
                        anxiety after practicing with our application’s immersive,
                        lifelike simulations.</p>
                </div>
            </div>

        </section>
    )
}

export default Benifits