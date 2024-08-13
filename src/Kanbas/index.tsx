import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard"
import Courses from "./Courses";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import store from "./store";
import "./styles.css";

export default function Kanbas() {

    const [profile, setProfile] = useState<any>({});
    const fetchProfile = async () => {
        const account = await userClient.profile();
        setProfile(account); 
    };
    useEffect(() => {
        fetchProfile();
    }, []);

    const [courses, setCourses] = useState<any[]>([]);

    const fetchCourses = async() => {
        const courses = await courseClient.fetchAllCourses();
        setCourses(courses);
    };
    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <Provider store={store}>
            
            <div id="wd-kanbas">
                <div className="d-flex">

                    <div className="bg-black d-none d-md-block">
                        <KanbasNavigation />
                    </div>

                    <div className="flex-fill p-4">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard"/>}/>
                            <Route path="Account/*" element={<Account setProfile={setProfile}/>}/>
                            <Route path="Dashboard" element={<ProtectedRoute>
                                                            <Dashboard 
                                                                profile={profile}
                                                                setProfile={setProfile}
                                                                courses={courses}
                                                                setCourses={setCourses}/>
                                                            </ProtectedRoute>
                                                            } />
                                                            
                            <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>}/>
                            <Route path="Calendar" element={<h1>Calendar</h1>}/>
                            <Route path="Inbox" element={<h1>Inbox</h1>}/>
                        </Routes>
                    </div>
                </div>
            </div>

        </Provider>
    );
}
  