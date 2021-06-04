import "./dashboard.css";
import "../../layout/final.css";
export default function Dashboard(){
    return (
        <div className="home">
            <div className = "dashboard">
                <div className="box">
                    <div className="info">
                        <p>Total Users</p>
                        <h3>28</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="info">
                        <p>Total Requests</p>
                        <h3>20</h3>
                    </div>
                </div>
            </div>
            <div className = "dashboard">
                <div className="box">
                    <div className="info">
                        <p>Total KYC</p>
                        <h3>15</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="info">
                        <p>Total Rejected</p>
                        <h3>5</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}