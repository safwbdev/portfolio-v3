import React from 'react'
import { useMycontext } from '../context/MainProvider';
import { EducationForm } from '../forms';
import {
    List,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@mui/material';

const Education = () => {

    const {
        educationData,
        setEducationData,
        setCurrentEducation,
        setOpenEducationForm,
        setIsFormEdit,

    } = useMycontext();

    const deleteEducation = (id) => {
        setEducationData(educationData.filter((a, index) => index !== id))
    }
    const openEditForm = (id) => {
        setIsFormEdit(true)
        setOpenEducationForm(true)
        setCurrentEducation(id)
    }

    // console.log(educationData);

    return (
        <div>
            <h1>Education</h1>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {educationData.map((edu, index) => (
                    <Card sx={{ maxWidth: 345 }}>
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
                ))}

            </List>
            <EducationForm />
        </div>
    )
}

export default Education