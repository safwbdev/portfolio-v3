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


const HistoryForm = () => {

    const {
        historyData,
        setHistoryData,
        openHistoryForm,
        setOpenHistoryForm,
        setIsHistoryFormEdit,
        isHistoryFormEdit,
        currentHistory,
        setNotifySave
    } = useMycontext()
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [summary, setSummary] = useState('');
    const [location, setLocation] = useState('');

    const handleOpen = () => setOpenHistoryForm(true);
    const handleClose = () => {
        setTitle('')
        setStart('')
        setEnd('')
        setSummary('')
        setLocation('')
        setOpenHistoryForm(false);
        setIsHistoryFormEdit(false)
    }

    const handleCreateHistory = () => {
        setHistoryData([...historyData, { name: name, location: location, start: start, end: end, summary: summary, title: title, }])
        setNotifySave(true)
        handleClose();
    }
    const handleUpdateHistory = () => {
        const updatedHistory = [...historyData];
        updatedHistory[currentHistory] = { name: name, location: location, start: start, end: end, summary: summary, title: title, };
        setHistoryData(updatedHistory);
        setNotifySave(true)
        handleClose();
    }

    useEffect(() => {
        if (!historyData[currentHistory]) return;
        const hist = historyData[currentHistory];
        setName(hist.name)
        setLocation(hist.location)
        setTitle(hist.title)
        setStart(hist.start)
        setEnd(hist.end)
        setSummary(hist.summary)

    }, [currentHistory])

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
                open={openHistoryForm}
            >
                <Box sx={style}>
                    <h2>
                        {isHistoryFormEdit ? 'Edit History' : 'New History'}
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
                            id="tit;e"
                            label="Title"
                            variant="outlined"
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)}
                        />
                        <TextField
                            id="location"
                            label="Location"
                            variant="outlined"
                            value={location}
                            onChange={(e) =>
                                setLocation(e.target.value)}
                        />
                        {/* TODO: Use date pickers here  */}
                        <TextField
                            id="start"
                            label="Start"
                            variant="outlined"
                            value={start}
                            onChange={(e) =>
                                setStart(e.target.value)}
                        />
                        <TextField
                            id="end"
                            label="End"
                            variant="outlined"
                            value={end}
                            onChange={(e) =>
                                setEnd(e.target.value)}
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
                        {isHistoryFormEdit ? (<Button variant="contained" onClick={handleUpdateHistory}>
                            Update
                        </Button>) : (
                            <Button variant="contained" onClick={handleCreateHistory}>
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

export default HistoryForm