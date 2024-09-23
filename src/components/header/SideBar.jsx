
import { Link } from "react-router-dom"
import "./sidebar.css"


const SideBar = () => {
    return (
        <div className="">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="logo">
                        <img src="/logo.jpg" width={"50px"} height={"50px"} alt="logo" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Link to={"/dashboard"}>
                        <button type="button" className="btn ">
                            Dashboard
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 w-80">
                    <Link to={"/accounts"} >
                        <button type="button" className="btn ">
                            Account
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 w-80">
                    <Link to={"/loan"}>
                        <button type="button" className="btn ">
                            Loan
                        </button>
                    </Link>
                </div>
            </div>
           
            <div className="row">
                <div className="col-12">
                    <Link to={"/ccloan"} >
                        <button type="button" className="btn ">
                            CC Loan
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Link to={"/balance"} >
                        <button type="button" className="btn ">
                            Account Balance
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Link to={"/calcolotor"} >
                        <button type="button" className="btn ">
                            Loan Calcolotor
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar