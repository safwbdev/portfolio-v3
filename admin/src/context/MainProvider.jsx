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
    const [tab, setTab] = useState(0);
    const [currentSkill, setCurrentSkill] = useState(0);
    const [openSkillForm, setOpenSkillForm] = useState(false);
    const [isSkillFormEdit, setIsSkillFormEdit] = useState(false);
    const [currentEducation, setCurrentEducation] = useState(0);
    const [openEducationForm, setOpenEducationForm] = useState(false);
    const [isEducationFormEdit, setIsEducationFormEdit] = useState(false);
    const [currentHistory, setCurrentHistory] = useState(0);
    const [openHistoryForm, setOpenHistoryForm] = useState(false);
    const [isHistoryFormEdit, setIsHistoryFormEdit] = useState(false);
    const [currentProject, setCurrentProject] = useState(0);
    const [openProjectForm, setOpenProjectForm] = useState(false);
    const [isProjectFormEdit, setIsProjectFormEdit] = useState(false);
    const [notifySave, setNotifySave] = useState(false);


    // const update = (data) => {
    //     axios.put(`${import.meta.env.VITE_APP_URL}/api/portfolio/${id}`, data)
    //         .then(result => location.reload())
    //         .catch(err => console.log(err))
    // }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_URL}/api/portfolio`).then(result => {
            const { personal, education, history, projects, skills, _id } = result.data[0];
            setId(_id)
            setPersonalData(personal[0]);
            setProjectData(projects);
            setEducationData(education);
            setHistoryData(history);
            setSkillData(skills);
        }
        ).catch(err => console.log(err));
    }, []);

    const values = useMemo(() => ({
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
        isSkillFormEdit,
        setIsSkillFormEdit,
        currentSkill,
        setCurrentSkill,
        currentEducation,
        setCurrentEducation,
        openEducationForm,
        setOpenEducationForm,
        isEducationFormEdit,
        setIsEducationFormEdit,
        currentHistory,
        setCurrentHistory,
        openHistoryForm,
        setOpenHistoryForm,
        isHistoryFormEdit,
        setIsHistoryFormEdit,
        currentProject,
        setCurrentProject,
        openProjectForm,
        setOpenProjectForm,
        isProjectFormEdit,
        setIsProjectFormEdit,
        notifySave,
        setNotifySave
        // update
    }), [
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
        isSkillFormEdit,
        setIsSkillFormEdit,
        currentSkill,
        setCurrentSkill,
        currentEducation,
        setCurrentEducation,
        openEducationForm,
        setOpenEducationForm,
        isEducationFormEdit,
        setIsEducationFormEdit,
        currentHistory,
        setCurrentHistory,
        openHistoryForm,
        setOpenHistoryForm,
        isHistoryFormEdit,
        setIsHistoryFormEdit,
        currentProject,
        setCurrentProject,
        openProjectForm,
        setOpenProjectForm,
        isProjectFormEdit,
        setIsProjectFormEdit,
        notifySave,
        setNotifySave
        // update
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