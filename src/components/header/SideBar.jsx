
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
                    <button type="button" className="btn ">
                        Dashboard
                    </button>

                </div>
            </div>

            <div className="row">
                <div className="col-12 w-80">
                    <button type="button" className="btn ">
                        Loan
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 w-80">
                    <button type="button" className="btn ">
                        Account
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn ">
                        CC Loan
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn ">
                        Account Blance
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideBar