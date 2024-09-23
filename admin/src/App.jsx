import './App.css'
import { MainProvider } from "./context/MainProvider";
import NavBar from './NavBar';
import Demo from './pages/Demo';
import {
  Education, History,
  Personal,
  Projects,
  Skills,
} from './pages';
import { Route, Routes } from 'react-router-dom'

function App() {

  /**
   * ====
   * TODO
   * ====
   *  - History Page
   *  - History Form
   *  - Projects Page
   *  - Projects Form
   *  - Demo
   *  - Publish/Save LIVE functionality
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
   * 
   * ==========
   * Milestones
   * ==========
   *  - konami?
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
      </Routes>
    </MainProvider>
  )
}

export default App
