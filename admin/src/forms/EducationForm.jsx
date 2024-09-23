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

const EducationForm = () => {

    const { educationData, setEducationData,
        openEducationForm,
        isEducationFormEdit,
        setOpenEducationForm,
        setIsEducationFormEdit,
        currentEducation, } = useMycontext()
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [programme, setProgramme] = useState('');

    const handleOpen = () => setOpenEducationForm(true);
    const handleClose = () => {
        setLocation('');
        setProgramme('');
        setOpenEducationForm(false);
        setIsEducationFormEdit(false)
    }

    const handleCreateSkill = () => {
        setEducationData([...educationData, { name: name, location: location, programme: programme }])
        handleClose();
    }
    const handleUpdateSkill = () => {

        const updatedEducation = [...educationData];
        updatedEducation[currentEducation] = { name: name, location: location, programme: programme };
        setEducationData(updatedEducation);
        handleClose();
    }

    useEffect(() => {
        if (!educationData[currentEducation]) return;
        const edu = educationData[currentEducation]
        setName(edu.name)
        setLocation(edu.location)
        setProgramme(edu.programme)
    }, [currentEducation])



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
                open={openEducationForm}
            >
                <Box sx={style}>
                    <h2>
                        {isEducationFormEdit ? 'Edit Education' : 'New Education'}
                    </h2>
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
                            id="programme"
                            label="Programme"
                            variant="outlined"
                            value={programme}
                            onChange={(e) =>
                                setProgramme(e.target.value)}
                        />
                        <TextField
                            id="location"
                            label="Location"
                            variant="outlined"
                            value={location}
                            onChange={(e) =>
                                setLocation(e.target.value)}
                        />
                        {isEducationFormEdit ? (<Button variant="contained" onClick={handleUpdateSkill}>
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

export default EducationForm