import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountNavigation from "./Navigation";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";

export default function Account({setProfile} : {setProfile: (profile:any) => void;}) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div className="wd-account-screen">
        <div className="d-flex">
            <div className="d-none d-md-block">
            <AccountNavigation />
            </div>
            <div className="flex-fill p-4 pt-0">
            <Routes>
                <Route path="/" element={ <Navigate to={currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin"} /> } />
                <Route path="Signin" element={<Signin setProfile={setProfile}/>} />
                <Route path="Signup" element={<Signup />} />
                <Route path="Profile" element={<Profile />} />
            </Routes>
            </div>
        </div>
        </div>
    );
}
