import React from 'react';
import "./About.scss";

function About() {
    return (
        <div className="about">
            <h1 className="title">
                    About Me
                </h1>
            <div id="me">
                <h4>
                    My Background
                </h4>
                <p className="content">
                    I am a passionate Front-End developer based in Toronto, Ontario. My background includes eight
                    months of prior Software Development experience and a Bachelor's of Science (BSc) from the
                    University of Ontario Institute of Technology. Through my experience and education I have
                    acquired the necessary skills to develop high quality web apps, I am looking forward to building
                    my career in the field.
                </p>
            </div>
            <div id="skills">
                <h4>
                    My Skills
                </h4>
                <p className="content">
                    JavaScript, React, Redux, C#, Java
            </p>
            </div>
        </div>
    )
}

export default About;