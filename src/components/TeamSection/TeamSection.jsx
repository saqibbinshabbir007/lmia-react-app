import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Roman Frederick',
            designation: 'Regional Manager',
            image: '/assets/images/teamsection/team-1.webp'
        },
        {
            id: 2,
            name: 'Jane Cooper',
            designation: 'Medical Assistant',
            image: '/assets/images/teamsection/team-2.webp'
        },
        {
            id: 3,
            name: 'Esther Howard',
            designation: 'President of Sales',
            image: '/assets/images/teamsection/team-3.webp'
        },
        {
            id: 4,
            name: 'Jenny Wilson',
            designation: 'Marketing Coordinator',
            image: '/assets/images/teamsection/team-4.webp'
        }
    ];

    return (
        <section className="tm-section centred p_relative">
            <div className="tm-patterns">
                <div 
                    className="tm-pat-1" 
                    style={{ backgroundImage: 'url(/assets/images/team/shape-30.png)' }}
                ></div>
                <div 
                    className="tm-pat-2" 
                    style={{ backgroundImage: 'url(/assets/images/team/shape-31.png)' }}
                ></div>
            </div>
            <div className="auto-container">
                <div className="tm-header centred mb_50">
                    <span className="tm-subtitle">Expert Team Members</span>
                    <h2 className="tm-title">Our Team at Your Service</h2>
                </div>
                <div className="tm-row">
                    {teamMembers.map(member => (
                        <div key={member.id} className="tm-col">
                            <div className="tm-card">
                                <div className="tm-img-area">
                                    <figure className="tm-img-box">
                                        <img src={member.image} alt={member.name} />
                                    </figure>
                                    <div className="tm-social-box">
                                        <div className="tm-social-trigger"><i className="icon-26"></i></div>
                                        <ul className="tm-social-list clearfix">
                                            <li><a href="#/"><i className="icon-4"></i></a></li>
                                            <li><a href="#/"><i className="icon-6"></i></a></li>
                                            <li><a href="#/"><i className="icon-5"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tm-info">
                                    <h3>{member.name}</h3>
                                    <span className="tm-pos">{member.designation}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
