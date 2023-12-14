import React from 'react'
import './pages.css'
import Pages from '../components/Pages'
import Typical from 'react-typical';


const ContactUs = () => {
    return (
        <Pages image='./assets/images/contact.jpg'
            content=
            <div className='container-fluid contact-content'>
                <div className="row">
                    <div className="col-12 hero-text">
                        <h4 className='display-5 hero-p'>About the Author</h4>
                        <Typical
                            steps={[
                                "Software Developer",
                                20000,
                                "UI/UX Designer",
                                10000,
                                "CyberSecurity Analyst",
                                7000,
                                "Graphic Designer",
                                6000,
                            ]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </div>
                </div>
                <div className="contact container">
                    <div className="row text-center">
                        <div className="col-6">
                            <img src="./assets/images/author.jpg" alt='' className=" rounded m-2" />
                        </div>
                        <div className="col-6 text-start contact-box">
                            <p>
                                <strong>👋 Hi, I’m Jesus Daniel Mollineda</strong> <br />
                                I am a passionate and dedicated software developer with experience in various languages and frameworks. I have a strong foundation in both front-end and back-end development, and I am proficient in crafting user-centered designs.
                            </p>
                            <h5 className='text-start'>👀 Skills</h5>
                            <p>
                                🌱Front-End Languages:
                                HTML, CSS, JavaScript (ES6+) Frameworks & Libraries: React, Redux, Sass, Bootstrap, jQuery, etc.
                                Experience:
                                Building responsive and interactive web applications, implementing animations and user interactions.
                            </p>
                            <p>🌱Back-end Languages:
                                Python (Django) Frameworks & Libraries: Django REST framework, PostgreSQL & MongoDb.
                                Experience:
                                Developing APIs, building web services, and handling database interactions.
                            </p>
                            <p>🌱UX/UI Design: Tools:
                                Figma, Sketch Experience: Designing user interfaces, focusing on usability, accessibility, and visual appeal.
                            </p>
                            <p>🌱Additional Skills:
                                Git version control Agile methodologies (Scrum) Unit testing (Jest) Continuous integration (CI/CD) Strong written and communication skills Ability to work independently and as part of a team. <strong> Cybersecurity Analyst, with experience in Backtrack, Linux, Red-Hat, Server-Side, Networking and more.</strong>
                            </p>
                            <p> I am always eager to learn new technologies and expand my skillset. I am excited to collaborate on challenging and rewarding projects.
                            </p>
                            <p> For any updates, changes and modifications to the actual software please don't hesitate to reach out.
                            </p>
                            <h5 className='text-start mb-0 '>📫 Reach me @ :</h5>
                            <p>
                                <br /> Email: jesusmollineda88@gmail.com
                                <br /> LinkedIn: www.linkedin.com/in/jesus-d-mollineda-713894251
                                <br />Github: https://github.com/JDMollineda
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        />

    )
}

export default ContactUs