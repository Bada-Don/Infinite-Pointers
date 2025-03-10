import React, { useState } from 'react';
import '../coreFeatures.css';

function CoreFeatures() {
    const [activeTab, setActiveTab] = useState('adaptiveAI'); // Default to the first tab

    const tabs = [
        { id: 'adaptiveAI', label: 'Adaptive AI Interviews' },
        { id: 'comprehensiveFeedback', label: 'Comprehensive Feedback Analysis' },
        { id: 'interviewReadiness', label: 'Interview Readiness Score' },
        { id: 'immersiveVR', label: 'Immersive Experience' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'adaptiveAI':
                return (
                    <div className="featureContent">
                        <div className="leftContent">
                            <span className="percentage">95%</span>
                            <p className="contentText">Users report increased <br /> Interview confidence</p>
                        </div>
                        <div className="rightContent">
                            <p className="quote">"Experience dynamic interviews that evolve based on your responses"</p>
                        </div>
                    </div>
                );
            case 'comprehensiveFeedback':
                return (
                    <div className="featureContent">
                        {/* Content for Comprehensive Feedback Analysis Tab */}
                        <p className="contentText placeholder-content">Content for Comprehensive Feedback Analysis will be here.</p>
                    </div>
                );
            case 'interviewReadiness':
                return (
                    <div className="featureContent">
                        {/* Content for Interview Readiness Score Tab */}
                        <p className="contentText placeholder-content">Content for Interview Readiness Score will be here.</p>
                    </div>
                );
            case 'immersiveVR':
                return (
                    <div className="featureContent">
                        {/* Content for Immersive Experience Tab */}
                        <p className="contentText placeholder-content">Content for Immersive  Experience will be here.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="featuresSection">
            <h2 className="featuresTitle">Most <span className="importantText">Important Features</span></h2>
            <div className="featuresNav">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`featureTab ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="contentArea">
                {renderContent()}
            </div>
        </div>
    );
}

export default CoreFeatures;