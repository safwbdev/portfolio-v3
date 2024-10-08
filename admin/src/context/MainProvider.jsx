import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const MainContext = createContext(undefined)

const MainProvider = ({ children }) => {
    const [personalData, setPersonalData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [skillData, setSkillData] = useState([]);
    const [historyData, setHistoryData] = useState([]);
    const [educationData, setEducationData] = useState([]);
    const [id, setId] = useState(null);
    const [currentSkill, setCurrentSkill] = useState(0);
    const [openSkillForm, setOpenSkillForm] = useState(false);
    const [isFormEdit, setIsFormEdit] = useState(false);
    const [currentEducation, setCurrentEducation] = useState(0);
    const [openEducationForm, setOpenEducationForm] = useState(false);
    const [currentHistory, setCurrentHistory] = useState(0);
    const [openHistoryForm, setOpenHistoryForm] = useState(false);
    const [currentProject, setCurrentProject] = useState(0);
    const [openProjectForm, setOpenProjectForm] = useState(false);
    const [notifySave, setNotifySave] = useState(false);
    const [dataUpdated, setDataUpdated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);


    const publish = () => {
        const data = {
            personal: personalData,
            projects: projectData,
            skills: skillData,
            history: historyData,
            education: educationData,
        }
        console.log('PUBLISHED', data);
        axios.put(`${import.meta.env.VITE_APP_URL}/api/portfolio/${id}`, data)
            .then(result => location.reload())
            .catch(err => console.log(err))
        setDataUpdated(false);
        setNotifySave(true);

    }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_URL}/api/portfolio`).then(result => {
            console.log('GETTING DATA');
            console.log(result.data[0]);

            const { personal, education, history, projects, skills, _id } = result.data[0];
            setId(_id)
            setPersonalData(personal[0]);
            setProjectData(projects);
            setEducationData(education);
            setHistoryData(history);
            setSkillData(skills);
            setIsLoaded(true)
        }
        ).catch(err => console.log(err));
    }, []);


    const values = useMemo(() => ({
        id,
        setId,
        personalData,
        setPersonalData,
        projectData,
        setProjectData,
        skillData,
        setSkillData,
        historyData,
        setHistoryData,
        educationData,
        setEducationData,
        openSkillForm,
        setOpenSkillForm,
        isFormEdit,
        setIsFormEdit,
        currentSkill,
        setCurrentSkill,
        currentEducation,
        setCurrentEducation,
        openEducationForm,
        setOpenEducationForm,
        currentHistory,
        setCurrentHistory,
        openHistoryForm,
        setOpenHistoryForm,
        currentProject,
        setCurrentProject,
        openProjectForm,
        setOpenProjectForm,
        notifySave,
        setNotifySave,
        dataUpdated,
        setDataUpdated,
        isLoaded,
        publish
    }), [
        id,
        setId,
        personalData,
        setPersonalData,
        projectData,
        setProjectData,
        skillData,
        setSkillData,
        historyData,
        setHistoryData,
        educationData,
        setEducationData,
        openSkillForm,
        setOpenSkillForm,
        isFormEdit,
        setIsFormEdit,
        currentSkill,
        setCurrentSkill,
        currentEducation,
        setCurrentEducation,
        openEducationForm,
        setOpenEducationForm,
        currentHistory,
        setCurrentHistory,
        openHistoryForm,
        setOpenHistoryForm,
        currentProject,
        setCurrentProject,
        openProjectForm,
        setOpenProjectForm,
        notifySave,
        setNotifySave,
        dataUpdated,
        setDataUpdated,
        isLoaded,
        publish
    ])

    return (
        <MainContext.Provider value={values} >
            {children}
        </MainContext.Provider>
    )


}
const useMycontext = () => {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error('error')
    }
    return context
}
export { MainProvider, useMycontext }