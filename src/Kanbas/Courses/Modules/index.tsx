export default function Modules() {
    return (
      <div>

        <button id="wd-collapse-modules">Collapse All</button>
        <button id="wd-view-progress">View Progress</button>
        <select id="wd-publish-all">
          <option value="ALL">Publish All</option>
        </select>
        <button id="wd-add-module">+ Module</button>
        
        <ul id="wd-modules">

          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
                </ul>
              </li>
              <li>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React application</li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaes with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
              </li>
            </ul>
          </li>

        </ul>

      </div>
  );}
  