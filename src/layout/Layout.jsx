
import TopHeader from '../components/header/TopHeader'
import SideBar from '../components/header/SideBar'
import Dashboard from '../dashboard/Dashboard'

const Layout = () => {
  return (
    <div className="">
    <div className="row">
      <div className="col-12 text-center border border-primary"> <TopHeader /></div>
      <div className="col-2 border border-primary"> <SideBar /></div>
      <div className="col-10 border border-primary"><Dashboard /></div>
    </div>
  </div>
  )
}

export default Layout