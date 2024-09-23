import React from 'react'
import { useMycontext } from '../context/MainProvider';
import {
    List,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@mui/material';
import HistoryForm from '../forms/HistoryForm';

const History = () => {
    const {
        historyData,
        setHistoryData,
        setCurrentHistory,
        setOpenHistoryForm,
        setIsHistoryFormEdit,

    } = useMycontext();

    const deleteHistory = (id) => {
        setHistoryData(historyData.filter((a, index) => index !== id))
    }
    const openEditForm = (id) => {
        setIsHistoryFormEdit(true)
        setOpenHistoryForm(true)
        setCurrentHistory(id)
    }

    return (
        <div>
            <h1>History</h1>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {historyData.map((hist, index) => (
                    <Card sx={{ maxWidth: 345 }}>
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
                ))}

            </List>
            <HistoryForm />
        </div>
    )
}

export default History