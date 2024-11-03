import React from "react"
import Banner from "../components/about-me/banner/Banner"
import Profession from "../components/about-me/profession/Profession"
import Passion from "../components/about-me/passion/Passion"
import { meCheck, meGuitar } from "@/public/images"
import WrapperPageScroll from "../wrapper-page-scroll"

const page = () => {
    const professionData = [
        {
            company: "NiiU Digital",
            des: "Full-Stack Developer",
            joined: 2022,
            left: 2024,
        },
        {
            company: "The Illawarra Brewery",
            des: "Kitchen Assistant",
            joined: 2024,
        },
    ]
    const educationData = [
        {
            company: "Royal University of Dhaka",
            des: "B.Sc. in CSE",
            joined: 2018,
            left: 2022,
        },
        {
            company: "University of Wollongon",
            des: "Masters in CS(Machine LEarning & AI)",
            joined: 2022,
        },
    ]
    return (
        <>
            <Banner
                section={"banner"}
                pOne={
                    " Hi, I am Fahim Faisal Khan, a Full-Stack Web Developer based in Australia. I am self-motivated and highly dedicated to everything I do. Developing for the web is not only my profession but also my  passion. The internet has brought the world  together, and I believe that building websites with a great user experience makes people’s lives easier. With this vision and a commitment to making the web a better place, I continue my journey as a web developer."
                }
                pTwo={
                    " I believe that every action, no matter how small, reflects a deeper purpose. For me, creating is about more than simply building; it’s about connecting, understanding, and contributing to something larger than myself. I see my work as a journey of constant growth, where each challenge is an opportunity to refine not only my skills but also my character. In a world driven by speed and instant results, I find value in patience, resilience, and the quiet  dedication to doing things right. I strive to approach my work—and life—with a sense of humility, curiosity, and integrity, understanding that the impact we leave on others defines us far more than the words on any resume."
                }
                img={meCheck}
                alt={"About Fahim"}
                id={"abt-banner"}
            />
            <Profession
                pOne={
                    "As a Full-Stack Web Developer and computer engineer, I bring a unique perspective to building digital solutions that are both functional and user-centric. My journey in tech began with a passion for creating seamless digital experiences, where each project is an opportunity to bridge the gap between technology and real-world needs. My role as a developer at Niiu Digital has allowed me to craft applications that prioritize user experience, security, and scalability, empowering clients with tools that work flawlessly in their daily operations."
                }
                pTwo={
                    "Beyond development, my diverse experiences have shaped me into a quick learner and an adaptable professional. Working in high-energy roles across various industries, from web development to the fast-paced kitchen environment, has instilled in me resilience, a meticulous work ethic, and a strong commitment to delivering results. I’m driven to create accessible and engaging digital experiences, bringing together my technical skills and a commitment to continuous improvement."
                }
                pThree={
                    "In every role, I strive to combine technical excellence with a human-centered approach, ensuring that the solutions I build are as intuitive and effective as they are innovative."
                }
                title={"Profession"}
                data={professionData}
                id={"profession"}
            />
            <Banner
                section={"passion"}
                pOne="My passion for technology is intertwined with a love for creativity, exploration, and constant learning. Just as I enjoy playing the guitar, I find rhythm and harmony in coding, where each line and structure contribute to a cohesive, engaging experience. At Niiu Digital, I’ve come to appreciate the impact of user-centered design, and I aim to create applications that resonate with users much like a favorite melody or a well-told story."
                pTwo={
                    "Beyond development, my interests in travel, reading, and exploring new technologies inspire me to approach challenges from fresh perspectives. Each journey, book, or song broadens my understanding, which I bring back to my work in web development. For me, creating digital solutions is about weaving diverse experiences into something meaningful and accessible, making technology a valuable companion on users' journeys."
                }
                img={meGuitar}
                alt={"FAhim Guitar"}
                id={"passion"}
            />
            <Profession
                pOne={
                    "Education has been a cornerstone in shaping my approach to technology, giving me not just technical skills but a deeper appreciation for structured thinking and problem-solving. During my Bachelor’s in Computer Science at the Royal University of Dhaka, I learned to see programming as a powerful tool for creating solutions, inspiring a mindset of curiosity and resilience. This experience taught me that learning is an ongoing journey, where each concept mastered opens doors to new questions and possibilities."
                }
                pTwo={
                    "Currently, as I pursue my Master’s in Computer Science with a focus on Machine Learning and Big Data at the University of Wollongong, I’m gaining insights into the transformative power of data. This education has broadened my perspective, teaching me to approach challenges not just as technical problems but as opportunities to make a real-world impact. Understanding the nuances of data and machine learning has reinforced my belief in the potential of technology to address complex issues in meaningful ways."
                }
                pThree={
                    "Through these experiences, I have come to value education not only for the knowledge it imparts but for the mindset it cultivates—one that embraces growth, innovation, and a commitment to applying what I learn to build something of value."
                }
                title={"Education"}
                id={"education"}
                data={educationData}
            />
        </>
    )
}

export default page
