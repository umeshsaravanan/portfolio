import React from 'react'
// import ProjectImage from "../../Assets/pictures/SkillImage.png
import { Element } from 'react-scroll'
import Project from '../Project/Project'
import "./ProjectContainer.css"
import Revive1 from "../../Assets/pictures/Revive1.png"
import Revive2 from "../../Assets/pictures/Revive2.png"
import Revive3 from "../../Assets/pictures/Revive3.png"
import Todo1 from "../../Assets/pictures/Todo1.png"
import Todo2 from "../../Assets/pictures/Todo2.png"
import Todo3 from "../../Assets/pictures/Todo3.png"
import Todo4 from "../../Assets/pictures/Todo4.png"



const ProjectContainer = () => {
    const projects = [
        {
            title: "Ticket Reservation",
            desc: "Developed a ticket reservation system for users to book, view, and cancel tickets, efficiently managing their travel plans. Enabled admins to add, update, and delete buses, view booking histories, and manage user information for smooth operations.",
            link: "https://ticket-reservation-pydz.vercel.app/",
            Git: "https://github.com/umeshsaravanan/ticket_reservation"
        },
        {
            title: "TriDesk",
            desc: "This project includes a code compiler and runner for C/C++, a file explorer clone for managing files, and a folder comparison tool to highlight directory differences.",
            Git : "https://github.com/umeshsaravanan/inc"
        },
        {
            title: "Yoga Website",
            desc: "Developed a web application for WCSC (World Community Service Center) that serves as an informational hub for the Sky Yoga. This platform empowers users to register for their preferred time slots.",
            link: "https://sky-yoga-240823.netlify.app/",
            Git: "https://github.com/umeshsaravanan/Yoga-website"
        },
        {
            title: "Todo List",
            desc: "This Todo List lets you add, complete, and delete tasks effortlessly, build using React js and Firebase. Check it out and see my coding skills in action!",
            link: "https://todo-list-180823.netlify.app/",
            Git: "https://github.com/umeshsaravanan/Todo_List",
            slide: [Todo1, Todo2, Todo3, Todo4]
        },
        {
            title: "Revive",
            desc: "This project highlights my creative design and frontend development skills,Take a closer look to see how I bring ideas to life on the web!",
            link: "https://umeshsaravanan.github.io/Revive-CSE/",
            Git: "https://github.com/umeshsaravanan/Revive-CSE",
            slide: [Revive1, Revive2, Revive3]
        }
    ]
    return (
        <Element className='projectContainer' id='projects'>
            <h1>Projects</h1>
            <div className='projectContainer__projects'>
                {
                    projects.map((project, index) => {
                        return (
                            <Project key={index} title={project.title} git={project.Git} desc={project.desc} link={project.link} slide={project.slide} />
                        );
                    })
                }
            </div>
        </Element>
    )
}

export default ProjectContainer
