import { BsGripVertical } from "react-icons/bs";
import ModuleControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import "./index.css"

export default function Modules() {
    return (
      <div id="wd-modules">

        <ModuleControls /><br /><br /><br />
        
        <ul id="wd-modules" className="list-group rounded-0">

          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                Week 1 - Course Introduction, Syllabus, Agenda
                <ModuleControlButtons />
            </div>

            <ul className="wd-lessons list-group rounded-0">

              <li className="wd-lesson list-group-item p-3 ps-1 border-0 border-start border-success">
                  <BsGripVertical className="me-2 fs-3" />
                  LEARNING OBJECTIVES
                  <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to the course
                  <LessonControlButtons />
              </li>
              
              <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  Learn what is Web Development
                  <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 1
                  <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 2
                  <LessonControlButtons />
              </li>

            </ul>
          </li>

          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

            <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
              Week 2 - Formatting User Interfaces with HTML
              <ModuleControlButtons />
            </div>

            <ul className="wd-lessons list-group rounded-0">

              <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LEARNING OBJECTIVES
                  <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 1
                  <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 2
                  <LessonControlButtons />
              </li>

            </ul>

          </li>

        </ul>

      </div>
  );}
  