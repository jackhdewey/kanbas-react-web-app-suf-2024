import { useLocation } from "react-router";
export default function TOC() {
    const { pathname } = useLocation();
    return (
      <ul className="nav nav-pills">
        <li className="nav-item"><a id="wd-a" className='nav-link ${pathname.includes("Lab2")' href="#/Labs">Labs</a></li>
        <li className="nav-item"><a id="wd-a1" className='nav-link ${pathname.includes("Lab1")' href="#/Labs/Lab1">Lab 1</a></li>
        <li className="nav-item"><a id="wd-a2" className='nav-link ${pathname.includes("Lab2")' href="#/Labs/Lab2">Lab 2</a></li>
        <li className="nav-item"><a id="wd-a3" className='nav-link ${pathname.includes("Lab3")' href="#/Labs/Lab3">Lab 3</a></li>
        <li className="nav-item"><a id="wd-k" className='nav-link ${pathname.includes("Kanbas")' href="#/Kanbas">Kanbas</a></li>
        <li className="nav-item"><a id="wd-github" href="https://github.com/jackhdewey/kanbas-react-web-app-suf-2024">GitHub</a></li>
      </ul>
    );
  }
  