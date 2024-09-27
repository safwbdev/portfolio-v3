import React from 'react'
import { useMycontext } from '../context/MainProvider';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Box
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ProjectForm from '../forms/ProjectForm';
import { boxStyle, containerStyle } from '../styles/Style';

const Projects = () => {
    const {
        projectData,
        setProjectData,
        setCurrentProject,
        setOpenProjectForm,
        setIsFormEdit,
        setDataUpdated
    } = useMycontext();

    const deleteProject = (id) => {
        setDataUpdated(true)
        setProjectData(projectData.filter((a, index) => index !== id))
    }

    const openEditForm = (id) => {
        setIsFormEdit(true)
        setOpenProjectForm(true)
        setCurrentProject(id)
    }

    return (
        <div style={containerStyle}>
            <Box sx={boxStyle}>
                <h1>Projects</h1>
                <Grid container spacing={2}>
                    {projectData.map((proj, index) => (
                        <Grid size={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                {/* <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    /> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {proj.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {proj.repo}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {proj.demo}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {proj.image}
                                    </Typography>
                                    {proj.stack && proj.stack.map(st => (<Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {st}-
                                    </Typography>))}
                                </CardContent>
                                <CardActions style={{ justifyContent: 'space-around' }}>
                                    <Button size="small" variant='outlined' style={{ flex: 1 }} onClick={() => openEditForm(index)}>Edit</Button>
                                    <Button size="small" variant='outlined' style={{ flex: 1 }} onClick={() => deleteProject(index)}>Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
                <ProjectForm />
            </Box>
        </div>
    )
}

export default Projects