import React from 'react'
import { useMycontext } from '../context/MainProvider';

const Demo = () => {

    const {
        personalData,
        projectData,
        skillData,
        historyData,
        educationData
    } = useMycontext();

    const {
        name,
        title,
        email,
        github,
        linkedin,
        phone,
        cv,
        summary
    } = personalData

    return (
        <div>
            <h1>Personal</h1>
            <h2>{name}</h2>
            <h3>{title}</h3>
            <p>summaary: {summary}</p>
            <p>email: {email}</p>
            <p>gh: {github}</p>
            <p>li: {linkedin}</p>
            <p>tel: {phone}</p>
            <p>cv: {cv}</p>
            <br />
            <h1>Projects</h1>
            {projectData.map((proj, index) => (
                <div key={index}>{proj.title}</div>
            ))}
            <br />
            <h1>Skills</h1>
            {skillData.map((proj, index) => (
                <div key={index}>{proj.title}</div>
            ))}
            <br />
            <h1>History</h1>
            {historyData.map((proj, index) => (
                <div key={index}>{proj.title}</div>
            ))}
            <br />
            <h1>Skool</h1>
            {educationData.map((proj, index) => (
                <div key={index}>{proj.name}</div>
            ))}
        </div>
    )
}

export default Demo