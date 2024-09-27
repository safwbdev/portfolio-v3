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
import ProjectForm from '../forms/ProjectForm';

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
        <div>
            <h1>Projects</h1>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {projectData.map((proj, index) => (
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
                ))}

            </List>
            <ProjectForm />
        </div>
    )
}

export default Projects