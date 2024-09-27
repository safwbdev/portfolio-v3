import React from 'react'
import { useMycontext } from '../context/MainProvider';
import {
    List,
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@mui/material';
import HistoryForm from '../forms/HistoryForm';
import Grid from '@mui/material/Grid2';
import { boxStyle, containerStyle } from '../styles/Style';

const History = () => {
    const {
        historyData,
        setHistoryData,
        setCurrentHistory,
        setOpenHistoryForm,
        setIsFormEdit,
        setDataUpdated

    } = useMycontext();

    const deleteHistory = (id) => {
        setHistoryData(historyData.filter((a, index) => index !== id))
        setDataUpdated(true)
    }
    const openEditForm = (id) => {
        setIsFormEdit(true)
        setOpenHistoryForm(true)
        setCurrentHistory(id)
    }

    return (
        <div style={containerStyle}>
            <Box sx={boxStyle}>
                <h1>History</h1>
                <Grid container spacing={2}>
                    {historyData.map((hist, index) => (
                        <Grid size={4}>
                            <Card sx={{ maxWidth: '100 ' }}>
                                {/* <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    /> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {hist.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {hist.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {hist.start} - {hist.end}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {hist.summary}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {hist.location}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ justifyContent: 'space-around' }}>
                                    <Button size="small" variant='outlined' style={{ flex: 1 }} onClick={() => openEditForm(index)}>Edit</Button>
                                    <Button size="small" variant='outlined' style={{ flex: 1 }} onClick={() => deleteHistory(index)}>Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
                <HistoryForm />
            </Box>
        </div>
    )
}

export default History