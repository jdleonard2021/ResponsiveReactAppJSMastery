import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content" id="home">
                <h1 className="gradient__text">Let's Build Something Amazing with GPT-3 OpenAI</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, voluptas fugiat! At accusamus, ipsa earum quia nihil necessitatibus illum saepe! Cumque asperiores soluta voluptatem esse. Sunt officia veniam adipisci alias?</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address"/>
                    <button type="button" className="">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access to site</p>
                </div>


            </div>
                <div className="gpt3__header-image">
                    <img src={ai} alt="ai" />
                </div>
        </div>
    )
}

export default Header