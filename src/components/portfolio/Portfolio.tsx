import { useEffect } from 'react'

import { TabView, TabPanel } from 'primereact/tabview'
import { Button } from "primereact/button"

import { FaLinkedin, FaGithub } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"

import './Portfolio.scss'


function Portfolio() {
    useEffect(() => {
        document.title = 'Allen Eduard Uy';
    }, []);

    const date = new Date();
    const year = date.getFullYear();

    const logos = [
        { img: '../src/assets/img/logos/html.png' }, { img: '../src/assets/img/logos/css3.svg' }, { img: '../src/assets/img/logos/sass.png' },
        { img: '../src/assets/img/logos/javascript.png' }, { img: '../src/assets/img/logos/typescript.png' }, { img: '../src/assets/img/logos/bootstrap.png' },
        { img: '../src/assets/img/logos/angular.png' }, { img: '../src/assets/img/logos/ionic.png' }, { img: '../src/assets/img/logos/php.png' },
        { img: '../src/assets/img/logos/laravel.png' }, { img: '../src/assets/img/logos/coldfusion.png' }, { img: '../src/assets/img/logos/mysql.png' }
    ]

    const whatIDo = [
        { img: '../src/assets/img/web-development.png', title: 'Web Development', desc: 'I develop web applications using HTML, CSS, JavaScript, Bootstrap, Angular, and Ionic for the client side, PHP, Laravel, Node.js, and Adobe ColdFusion for server side.' },
        { img: '../src/assets/img/graphic-design.png', title: 'Graphic Design', desc: 'I have created some UI designs for web applications using Figma, and some materials for school-related purposes using Adobe Photoshop and Adobe Illustrator.' },
        { img: '../src/assets/img/video-editing.png', title: 'Basic Video Editing', desc: 'I have a knowledge on basic video editing, including trimming, cutting, transitions, and adding video and text effects using Adobe Premiere Pro.' }
    ];

    const certificates = [
        { img: '../src/assets/img/certificates/upskill-it.png', title: 'Ethical Hacking Part 4', institution: 'Upskill I.T Workshop', date: 'April 02, 2022' },
        { img: '../src/assets/img/certificates/computer-vision.png', title: 'An Introduction to Computer Vision through Mediapipe Python Solutions', institution: 'Mindanao State University - General Santos City College of Engineering', date: 'April 02, 2022' },
        { img: '../src/assets/img/certificates/aws.png', title: 'Community Ignite Episode #34: Re-ignite: AWS Cloud Foundations', institution: 'Edukasyon.ph, AWS, AWS Siklab Pilipinas', date: 'March 31, 2022' },
        { img: '../src/assets/img/certificates/raite2021.png', title: 'Regional Assembly on Information Technology Education (RAITE) 2021', institution: 'Philippine Society of Information Technology Educators (PSITE) Region III', date: 'November 12, 2021' },
        { img: '../src/assets/img/certificates/stackleague.png', title: 'Product PH x StackLeague Tech Session', institution: 'StackLeague', date: 'October 8, 2021' },
        { img: '../src/assets/img/certificates/y4it.png', title: '17th Youth Congress on Information Technology (Y4iT 2019 Day 3)', institution: 'UP System Information Technology Foundation (UP SITF)', date: 'September 27, 2019' }
    ];

    const projects = [
        { img: '../src/assets/img//projects/aces-of-safety.png', title: 'Aces of Safety', link: 'https://acesofsafety.adminelwise.com/#/' },
        { img: '../src/assets/img/projects/elwise.png', title: 'EL Wise Web App', link: 'https://adminelwise.com/#/home' }
    ];


  return (
    <div className="portfolio__container">
        <div className="header__container">
            <div className="header__cover"></div>
        </div>

        <div className="body__container">
            <div className="profile__container">
                <div className="profile__card">
                    <img draggable="false" className="my__image" src="../src/assets/img/allen-uy.jpg" alt="" loading="lazy" />

                    <div className="profile__name">
                        <h1>Allen Eduard Uy</h1>
                        <p>Frontend Developer | Web Developer</p>
                        
                        <div className="profile__links">
                            <div className="linkedin__link">
                                <a href="https://www.linkedin.com/in/alleneduarduy/" target="_blank" rel="noreferrer"> <FaLinkedin /> </a>
                            </div>

                            <div className="github__link">
                                <a href="https://github.com/uyallen" target="_blank" rel="noreferrer"> <FaGithub /> </a>
                            </div>

                            <div className="gmail__link">
                                <a href="https://mail.google.com/mail/?view=cm&to=uyalleneduard@gmail.com" target="_blank" rel="noreferrer"> <BiLogoGmail /> </a>
                            </div>
                        </div>

                        <div className="mt-6 copyright__content">
                            <small>&copy; { year } All rights reserved.</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-information__container">
                <TabView>
                    <TabPanel header="About Me" leftIcon="pi pi-user mr-3 mb-1">
                        <h2>&#129300; WHO AM I?</h2>
                        <p className="m-0">
                            An IT professional with almost 2 years of experience in frontend and web development specialized in building modern,
                            responsive, and user-friendly web applications. My goal is to build intuitive and scalable web applications that
                            enhance user experiences. I always think of something unique and translate it into a web application in order to
                            provide ease to people's lives.
                        </p>


                        <h2 className="mt-6">&#128161; WHAT I DO?</h2>
                        <div className="card__container">
                            <div className="grid">
                                { whatIDo.map((item, index) => (
                                    <div className="col-4" key={index}>
                                        <div className="card">
                                            <img draggable="false" src={ item.img } className="card__img" alt="" loading="lazy" />
                                            <h3>{ item.title }</h3>
                                            <p>{ item.desc }</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <h2 className="mt-6">&#128187; TECHNOLOGY STACK</h2>
                        <h4>DEVELOPMENT SKILLS</h4>
                        <div className="logos__container">
                            <div className="grid justify-content-center align-items-center">
                                { logos.map((item, index) => (
                                    <div className="col-1" key={index}>
                                        <img draggable="false" src={ item.img } className="tech__logos" alt="" loading="lazy" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <h4>KNOWLEDGES</h4>
                    </TabPanel>

                    <TabPanel header="Certificates" leftIcon="pi pi-briefcase mr-3 mb-1">
                        <div className="certificates__container">
                            <div className="grid">
                                { certificates.map((item, index) => (
                                    <div className="col-4 mb-4" key={index}>
                                        <div className="certificate">
                                            <img draggable="false" src={ item.img } className="cert__img" alt="" loading="lazy" />
                                            <h3>{ item.title }</h3>
                                            <small>{ item.institution } &#8226; <span>{ item.date }</span></small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel header="Projects" leftIcon="pi pi-list mt- mr-3 mb-1">
                        <div className="projects__container">
                            <div className="grid">
                                { projects.map((item, index) => (
                                    <div className="col-6 mb-4" key={index}>
                                        <div className="project">
                                            <img draggable="false" src={ item.img } className="proj__img" alt="" loading="lazy" />
                                            <h3>{ item.title }</h3>
                                            <Button label="View" icon="pi pi-eye" onClick={() => window.open(item.link, "_blank")} className="p-button-raised"></Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    </div>
  )
}

export default Portfolio