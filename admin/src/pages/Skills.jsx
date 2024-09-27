import React from 'react'
import { useMycontext } from '../context/MainProvider'
import {
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { SkillForm } from '../forms';
import { boxStyle, containerStyle } from '../styles/Style';

const Skills = () => {
    const {
        skillData,
        setSkillData,
        setOpenSkillForm,
        setIsFormEdit,
        setCurrentSkill,
        setDataUpdated
    } = useMycontext();

    const deleteSkill = (id) => {
        setSkillData(skillData.filter((a, index) => index !== id))
        setDataUpdated(true)
    }
    const openEditForm = (id) => {
        setIsFormEdit(true)
        setOpenSkillForm(true)
        setCurrentSkill(id)
    }

    return (
        <div style={containerStyle}>
            <Box sx={boxStyle}>
                <h1>Skills</h1>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {skillData.map((skill, index) => (
                        <ListItem
                            key={index}
                            secondaryAction={
                                <>
                                    <IconButton edge="end" aria-label="delete" onClick={() => openEditForm(index)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteSkill(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar style={{ textTransform: 'capitalize' }}>
                                    {skill.title[0]}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={skill.title}
                                secondary={skill.type}
                            />
                        </ListItem>
                    ))}

                </List>
                <SkillForm />
            </Box>
        </div>
    )
}

export default Skills