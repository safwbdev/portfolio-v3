import React from 'react'
import { useMycontext } from '../context/MainProvider';
import { EducationForm } from '../forms';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { boxStyle, containerStyle } from '../styles/Style';



const Education = () => {

    const {
        educationData,
        setEducationData,
        setCurrentEducation,
        setOpenEducationForm,
        setIsFormEdit,
        setDataUpdated

    } = useMycontext();

    const deleteEducation = (id) => {
        setEducationData(educationData.filter((a, index) => index !== id))
        setDataUpdated(true)
    }
    const openEditForm = (id) => {
        setIsFormEdit(true)
        setOpenEducationForm(true)
        setCurrentEducation(id)
    }

    return (
        <div style={containerStyle}>
            <Box sx={boxStyle}>
                <h1>Education</h1>
                <Grid container spacing={2}>
                    {educationData.map((edu, index) => (
                        <Grid size={4}>
                            <Card sx={{ maxWidth: '100%' }}>
                                {/* <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            /> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {edu.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {edu.programme}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {edu.location}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ justifyContent: 'space-around' }}>
                                    <Button size="small" variant='outlined' style={{ flex: 1 }} onClick={() => openEditForm(index)}>Edit</Button>
                                    <Button size="small" variant='outlined' style={{ flex: 1 }} onClick={() => deleteEducation(index)}>Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
                <EducationForm />
            </Box>
        </div>
    )
}

export default Education