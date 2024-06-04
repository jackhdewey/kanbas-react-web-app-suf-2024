import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" className="list-group rounded-0">
      
                <a id="wd-neu-link" className="list-group-item bg-black text-danger border-0" target="_blank" href="https://www.northeastern.edu/">Northeastern</a>

           
                <a id="wd-account-link" className="list-group-item bg-black text-white text-center border-0" href="#/Kanbas/Account">
                    <FaRegCircleUser className="fs-1 text-white" />
                    Account
                </a>
   
    
                <a id="wd-dashboard-link" className="list-group-item bg-white text-danger text-center border-0" href="#/Kanbas/Dashboard">
                    <AiOutlineDashboard className="fs-1 text-danger" />
                    Dashboard
                </a>
 
     
                <a id="wd-course-link" className="list-group-item bg-black text-white text-center border-0" href="#/Kanbas/Courses">
                    <LiaBookSolid className="fs-1 text-danger" />
                    Courses
                </a>
         
  
                <a id="wd-calendar-link" className="list-group-item bg-black text-white text-center border-0" href="#/Kanbas/Calendar">
                    <IoCalendarOutline className="fs-1 text-danger" />
                    Calendar
                </a>

  
                <a id="wd-inbox-link" className="list-group-item bg-black text-white text-center border-0" href="#/Kanbas/Inbox">
                    <FaInbox className="fa-1 text-danger" />
                    Inbox
                </a>
        
                <a id="wd-labs-link" className="list-group-item bg-black text-white text-center border-0" href="#/Labs">
                    Labs
                </a>
        
        </div>
    );
}
  