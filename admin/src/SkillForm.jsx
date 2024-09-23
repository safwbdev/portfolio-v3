import React, { useEffect, useState } from 'react'
import { useMycontext } from './context/MainProvider';
import AddIcon from '@mui/icons-material/Add';
import {
    Button,
    Box,
    Fab,
    Modal,
    Stack,
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
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

const skillTypes = ['frontend', 'backend', 'tools', 'management', 'primary', 'game', 'other']

const SkillForm = () => {

    const { skillData, setSkillData, openSkillForm, setOpenSkillForm, isSkillFormEdit, setIsSkillFormEdit, currentSkill } = useMycontext()
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const handleOpen = () => setOpenSkillForm(true);
    const handleClose = () => {
        setName('');
        setType('');
        setOpenSkillForm(false);
        setIsSkillFormEdit(false)
    }

    const handleCreateSkill = () => {
        setSkillData([...skillData, { title: name, type: type }])
        handleClose();
    }
    const handleUpdateSkill = () => {

        const updatedSkill = [...skillData];
        updatedSkill[currentSkill] = { title: name, type: type };
        setSkillData(updatedSkill);
        handleClose();
    }

    useEffect(() => {
        if (!skillData[currentSkill]) return;
        const { title, type } = skillData[currentSkill]
        setName(title)
        setType(type)
    }, [currentSkill])



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
                open={openSkillForm}
            >
                <Box sx={style}>
                    <h2>
                        {isSkillFormEdit ? 'Edit Skill' : 'New Skill'}
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
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="Type"
                                style={{ textTransform: 'capitalize' }}
                                onChange={(e) => setType(e.target.value)}
                            >
                                {skillTypes.map((sType) => (<MenuItem value={sType} style={{ textTransform: 'capitalize' }}>{sType}</MenuItem>))}
                            </Select>
                        </FormControl>

                        {isSkillFormEdit ? (<Button variant="contained" onClick={handleUpdateSkill}>
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

export default SkillForm