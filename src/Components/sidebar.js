import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
    const [ open, setOpen ] = useState(false)
  return (
    // Pass on our props
    <Menu isOpen = {open} onOpen = {()=> setOpen(true)}>
      <a className="menu-item" href="#" onClick={()=> setOpen( false )} >
      Главная
      </a>

      <a className="menu-item" href="#all__work" onClick={()=> setOpen( false )}>
      Проекты
      </a>

      <a className="menu-item" href="#footer" onClick={()=> setOpen( false )}>
      Контакты
      </a>

      <a className="menu-item" href="#slider" onClick={()=> setOpen( false )}>
      Фото со сьемок
      </a>
      {/* <div className="">
                  {" "}
                  <a href="#" className="nav__link mob"> Главная</a>{" "}
                </div>
                <div className="">
                  {" "}
                  <a href="#all__work"  className="nav__link mob"> Проекты</a>{" "}
                </div>
                <div className="">
                  {" "}
                  <a href="#footer" className="nav__link mob"> Контакты</a>{" "}
                </div>
                <div className="">
                  {" "}
                  <a href="#slider" className="nav__link mob"> Фото со сьемок</a>{" "}
                </div> */}
    </Menu>
  );
};
