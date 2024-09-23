import React, { useState } from 'react'
import { Box, Button, Stack, TextField } from '@mui/material';
import { useMycontext } from '../context/MainProvider';

const style = {
    width: '75%',
    height: '100vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Personal = () => {
    const { personalData, setPersonalData } = useMycontext();
    const [name, setName] = useState(personalData.name ?? '')
    const [title, setTitle] = useState(personalData.title ?? '')
    const [email, setEmail] = useState(personalData.email ?? '')
    const [github, setGithub] = useState(personalData.github ?? '')
    const [linkedin, setLinkedin] = useState(personalData.linkedin ?? '')
    const [phone, setPhone] = useState(personalData.phone ?? '')
    const [summary, setSummary] = useState(personalData.summary ?? '')
    const [cv, setCV] = useState(personalData.cv ?? '')


    const handleSave = () => {
        setPersonalData({ name: name, title: title, email: email, github: github, linkedin: linkedin, phone: phone, summary: summary, cv: cv })
    }

    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

            <Box sx={style}>
                <Stack
                    component="form"
                    spacing={2}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)}
                    />
                    <TextField
                        id="title"
                        label="Title"
                        variant="outlined"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)}
                    />
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)}
                    />
                    <TextField
                        id="github"
                        label="Github"
                        variant="outlined"
                        value={github}
                        onChange={(e) =>
                            setGithub(e.target.value)}
                    />
                    <TextField
                        id="linkedin"
                        label="Linkedin"
                        variant="outlined"
                        value={linkedin}
                        onChange={(e) =>
                            setLinkedin(e.target.value)}
                    />
                    <TextField
                        id="phone"
                        label="Phone"
                        variant="outlined"
                        value={phone}
                        onChange={(e) =>
                            setPhone(e.target.value)}
                    />
                    <TextField
                        id="cv"
                        label="CV"
                        variant="outlined"
                        value={cv}
                        onChange={(e) =>
                            setCV(e.target.value)}
                    />
                    <TextField
                        id="summary"
                        label="Summary"
                        variant="outlined"
                        value={summary}
                        onChange={(e) =>
                            setSummary(e.target.value)}
                        multiline
                        rows={2}
                        maxRows={4}
                    />

                    <Button
                        variant="contained"
                        onClick={() => handleSave()}>
                        Save
                    </Button>
                </Stack>
            </Box>
        </div>
    )
}

export default Personal