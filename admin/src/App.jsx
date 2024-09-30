import { Route, Routes } from 'react-router-dom'
import { MainProvider } from "./context/MainProvider";
import { NavBar, Notify } from './components';
import Demo from './pages/Demo';
import {
  Education, History,
  Personal,
  Projects,
  Skills,
  ImageUpload
} from './pages';
import './App.css'

function App() {

  /**
   * ====
   * TODO
   * ====
   *  - Demo
   *  - refactor?
   *  - image upload for projects, history, personal, education
   * 
   * ====
   * DONE
   * ====
   *  = Personal Page
   *  = Personal Form
   *  = Skills Page
   *  = Skills Form
   *  = Education Page
   *  = Education Form
   *  = History Page
   *  = History Form
   *  = Projects Page
   *  = Projects Form
   *  = save/publish notifications
   *  = Publish/Save LIVE functionality
   *  - Loading status
   *  - image upload 
   */

  return (
    <MainProvider>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Personal />} />
        <Route exact path='/skills' element={<Skills />} />
        <Route exact path='/demo' element={<Demo />} />
        <Route exact path='/education' element={<Education />} />
        <Route exact path='/history' element={<History />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/image' element={<ImageUpload />} />
      </Routes>
      <Notify />
    </MainProvider>
  )
}

export default App
