import React, {useState} from 'react';
import "./sidebar.css";
import Logo from "../../assets/ia.svg";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);

  const closeMenu = () => {
    showMenu(false);
  };

  return (
    <div>
      <aside className={toggle ? 'aside show-menu' : 'aside'}>
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="" width={20} height={20}/>
        </a>

        <nav className='nav'>
          <div className='nav__menu'>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link" onClick={() => closeMenu()}>
                  <span class="icon-home"></span>
                </a>
              </li>
              <li className="nav__item"> 
                <a href="#about" className="nav__link" onClick={() => closeMenu()}>
                  <span class="icon-user-following"></span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link" onClick={() => closeMenu()}>
                  <span class="icon-briefcase"></span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#resume" className="nav__link" onClick={() => closeMenu()}>
                  <span class="icon-graduation"></span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link" onClick={() => closeMenu()}>
                  <span class="icon-layers"></span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#pricing" className="nav__link" onClick={() => closeMenu()}>
                  <span class="icon-diamond"></span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#game" className="nav__link" onClick={() => closeMenu()}>
                  <span class="icon-game-controller"></span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#blog" className="nav__link" onClick={() => closeMenu()}>
                  <span class="icon-note"></span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link" onClick={() => closeMenu()}>
                  <span class="icon-bubble"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2022-2023</span>
        </div>
      </aside>
      <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
      onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </div>
    
  )
}

export default Sidebar