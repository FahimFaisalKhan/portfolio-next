"use client"
import React from "react"
import Academic from "./academic/Academic"
import Courses from "./courses/Courses"
import Professional from "./professional/Professional"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import Faq from "@/app/components/shared/Faq/Faq"

const academic = {
    id: 1,
    ques: "Academic",
    ans: (
        <Academic
            data={[
                {
                    name: "Bachelor of Science",
                    institution: "Royal University of Dhaka",
                    major: "Computer Science",
                    CGPA: 3.7,
                    passedOn: 2022,
                    location: "Dhaka, Bangladesh",
                    link: "https://www.coursera.org/account/accomplishments/certificate/DSG5D8R84JQA",
                },
                {
                    name: "Master of Computer Science",
                    institution: "University of Wollongong",
                    major: "Machine Learning & AI",
                    CGPA: 3.5,
                    passedOn: -1,
                    location: "Wollongong, Australia",
                    link: "https://www.coursera.org/account/accomplishments/certificate/DSG5D8R84JQA",
                },
            ]}
        />
    ),
}

const courses = {
    id: 2,
    ques: "Courses",
    ans: (
        <Courses
            data={[
                {
                    name: "Complete eb devlopment",
                    institution: "Programming Hero",
                    specialization: "Web Development",
                    distinction: "VALO KORSI",
                    platform_type: "Online",
                    link: "https://www.coursera.org/account/accomplishments/certificate/DSG5D8R84JQA",
                },
                {
                    name: "Complete eb devlopment",
                    institution: "Programming Hero",
                    specialization: "Web Development",
                    distinction: "VALO KORSI",
                    platform_type: "Online",
                    link: "https://www.coursera.org/account/accomplishments/certificate/DSG5D8R84JQA",
                },
                {
                    name: "Complete eb devlopment",
                    institution: "Programming Hero",
                    specialization: "Web Development",
                    distinction: "VALO KORSI",
                    platform_type: "Online",
                    link: "https://www.coursera.org/account/accomplishments/certificate/DSG5D8R84JQA",
                },
            ]}
        />
    ),
}

const professional = {
    id: 3,
    ques: "Prodessional",
    ans: (
        <Professional
            data={[
                {
                    name: "Experience Certificate",
                    company: "NiiU Digital",
                    designation: "Full-Stack Web Developer",
                    link: "https://www.coursera.org/account/accomplishments/certificate/DSG5D8R84JQA",
                },
            ]}
        />
    ),
}

const data = [{}]
export default function Certificates() {
    return <Faq data={[academic, courses, professional]} />
}
