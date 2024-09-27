import React from 'react'
import { useMycontext } from '../context/MainProvider';
import { boxStyle, containerStyle } from '../styles/Style';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';


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
        <div style={containerStyle}>
            <Box sx={boxStyle}>
                <Grid container spacing={6}>
                    <Grid size={6}>
                        <h1>Personal</h1>
                        <h2>{name}</h2>
                        <h3>{title}</h3>
                        <p>summaary: {summary}</p>
                        <p>email: {email}</p>
                        <p>gh: {github}</p>
                        <p>li: {linkedin}</p>
                        <p>tel: {phone}</p>
                        <p>cv: {cv}</p>
                    </Grid>
                    <Grid size={6}>
                        <h1>Skool</h1>
                        {educationData.map((proj, index) => (
                            <div key={index}>{proj.name}</div>
                        ))}
                    </Grid>
                    <Grid size={12}>
                        <h1>Skills</h1>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            {skillData.map((proj, index) => (
                                <Button key={index} variant='contained' style={{ margin: '0 0.5em' }}>{proj.title}</Button>
                            ))}
                        </div>
                    </Grid>
                    <Grid size={6}>
                        <h1>Projects</h1>
                        {projectData.map((proj, index) => (
                            <div key={index}>{proj.title}</div>
                        ))}
                    </Grid>
                    <Grid size={6}>
                        <h1>History</h1>
                        {historyData.map((proj, index) => (
                            <div key={index}>{proj.title}</div>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Demo