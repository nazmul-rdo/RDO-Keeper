import './App.css'
import SideBar from './components/header/SideBar'
import TopHeader from './components/header/TopHeader'
import Dashboard from './dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>

        <div className="row">
          <div className="col-12 text-center"> <TopHeader /></div>
          <div className="col-2 border"> <SideBar /></div>
          
          <div className="col-10 ">

          <Routes>
           <Route path='/' element={<Dashboard />} />
            <Route path='/loan' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/SideBar' element={<Dashboard />} />
          
          </Routes>
          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
