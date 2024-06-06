import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
    return (
      <div>
          <div className="flex-fill me-5">
              <Modules />
          </div>
         
          <div className="d-none d-xl-block">
              <CourseStatus />
          </div>
      </div>
  );
}
