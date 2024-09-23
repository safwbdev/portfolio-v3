import React, { useEffect, useState } from 'react'
import { useMycontext } from '../context/MainProvider';
import AddIcon from '@mui/icons-material/Add';
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
        isProjectFormEdit,
        openProjectForm,
        projectData,
        setIsProjectFormEdit,
        setOpenProjectForm,
        setProjectData,

    } = useMycontext()
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [repo, setRepo] = useState('');
    const [demo, setDemo] = useState('');
    const [stack, setStack] = useState([]);

    const handleOpen = () => setOpenProjectForm(true);
    const handleClose = () => {
        setTitle('')
        setImage('')
        setRepo('')
        setDemo('')
        setStack('')
        setOpenProjectForm(false);
        setIsProjectFormEdit(false)
    }

    const handleCreateSkill = () => {
        setProjectData([...projectData, { title: title, image: image, repo: repo, demo: demo, stack: stack }])
        handleClose();
    }
    const handleUpdateSkill = () => {

        const updatedEducation = [...projectData];
        updatedEducation[currentProject] = { title: title, image: image, repo: repo, demo: demo, stack: stack };
        setProjectData(updatedEducation);
        handleClose();
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
                        {isProjectFormEdit ? 'Edit Project' : 'New Project'}
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
                        {/* TODO: Add field for stacks  */}
                        {isProjectFormEdit ? (<Button variant="contained" onClick={handleUpdateSkill}>
                            Update
                        </Button>) : (
                            <Button variant="contained" onClick={handleCreateSkill}>
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