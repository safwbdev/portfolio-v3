import React, { useEffect, useState } from 'react'
import { useMycontext } from '../context/MainProvider';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {
    Button,
    Box,
    Fab,
    Modal,
    Stack,
    TextField
} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
};


const ProjectForm = () => {
    const {
        currentProject,
        openProjectForm,
        projectData,
        isFormEdit,
        setIsFormEdit,
        setOpenProjectForm,
        setProjectData,
        setNotifySave
    } = useMycontext()
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [repo, setRepo] = useState('');
    const [demo, setDemo] = useState('');
    const [stack, setStack] = useState(['']);

    const handleOpen = () => setOpenProjectForm(true);
    const handleClose = () => {
        setTitle('')
        setImage('')
        setRepo('')
        setDemo('')
        setStack('')
        setOpenProjectForm(false);
        setIsFormEdit(false)
    }

    const handleCreateProject = () => {
        setProjectData([...projectData, { title: title, image: image, repo: repo, demo: demo, stack: stack }])
        setNotifySave(true)
        handleClose();

    }
    const handleUpdateProject = () => {
        const updatedEducation = [...projectData];
        updatedEducation[currentProject] = { title: title, image: image, repo: repo, demo: demo, stack: stack };
        setProjectData(updatedEducation);
        setNotifySave(true)
        handleClose();

    }

    const handleStack = (index, event) => {
        let data = [...stack];
        data[index] = event.target.value;
        setStack(data);
    }

    const addStack = () => {
        setStack([...stack, ''])
    }
    const deleteStack = (id) => {
        setStack(stack.filter((a, index) => index !== id))
    }

    useEffect(() => {
        if (!projectData[currentProject]) return;
        const edu = projectData[currentProject]
        setTitle(edu.title)
        setImage(edu.image)
        setRepo(edu.repo)
        setDemo(edu.demo)
        setStack(edu.stack)
    }, [currentProject])
    return (
        <>
            <Fab
                aria-label="add"
                className='openFormButton'
                color="primary"
                onClick={handleOpen}
            >
                <AddIcon />
            </Fab>
            <Modal
                aria-describedby="modal-modal-description"
                aria-labelledby="modal-modal-title"
                onClose={handleClose}
                open={openProjectForm}
            >
                <Box sx={style}>
                    <h2>
                        {isFormEdit ? 'Edit Project' : 'New Project'}
                    </h2>
                    <Stack
                        component="form"
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="title"
                            label="Project Title"
                            variant="outlined"
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)}
                        />
                        <TextField
                            id="image"
                            label="Image"
                            variant="outlined"
                            value={image}
                            onChange={(e) =>
                                setImage(e.target.value)}
                        />
                        <TextField
                            id="repo"
                            label="Repo"
                            variant="outlined"
                            value={repo}
                            onChange={(e) =>
                                setRepo(e.target.value)}
                        />
                        <TextField
                            id="demo"
                            label="Demo"
                            variant="outlined"
                            value={demo}
                            onChange={(e) =>
                                setDemo(e.target.value)}
                        />
                        <h2>Stack</h2>
                        {stack && stack.map((tech, tIndex) => (
                            <div className='techInput' key={tIndex}>
                                <TextField
                                    id={`techInput${tIndex + 1}`}
                                    label={`Link ${tIndex + 1}`}
                                    onChange={e => handleStack(tIndex, e)}
                                    value={tech}
                                    variant="outlined"
                                />
                                <Button
                                    onClick={() => deleteStack(tIndex)}
                                    sx={{ bgcolor: 'red' }}
                                    variant="contained"
                                >
                                    <CloseIcon />
                                </Button>
                            </div>

                        ))}
                        <Button
                            variant="contained"
                            onClick={addStack}>
                            Add Tech
                        </Button>
                        {isFormEdit ? (<Button variant="contained" onClick={handleUpdateProject}>
                            Update
                        </Button>) : (
                            <Button variant="contained" onClick={handleCreateProject}>
                                Create
                            </Button>)}
                        <Button
                            variant="contained"
                            onClick={handleClose}>
                            Cancel
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

export default ProjectForm