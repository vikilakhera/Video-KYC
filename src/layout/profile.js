import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import profile_img from "./img/profile_img.png";
import "./profile_dropdown.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

const Profile = () => {
    const [isActive, setIsActive] = useState(false);
    const history = useHistory();
    const toggleActive = () =>{
        setIsActive(!isActive);
    };

    const Logout = () =>{
        localStorage.removeItem("token");
        history.push(`/login`);
    };

    return(
        <div className="action">
            <div className="profile">
                <img src={profile_img} onClick={() => toggleActive()} alt="profile pic"/>
                <div className={isActive ? "menu active" : "menu"}>
                    <ul>
                        <li><i className="fa fa-user"/><a href="#">My Profile</a></li>
                        <li><i className="fa fa-lock"/><a href="#" onClick={Logout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;