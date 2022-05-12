import React, { useState, useEffect } from "react";
import AllWork from "./AllWork/AllWork";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";
import Order from "./Order/Order";
import Slider from "./Slider/Slider";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "axios";
import ReactDOM from "react-dom";

import SideBar from "./sidebar";

function Main() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const [state, setState] = useState([]);
  const [video, setvideo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://camera312292.herokuapp.com/main_page/`)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // useEffect(() => {

  //   window.addEventListener("scroll",(e)=>{
  //     console.log(  e.path[1].scrollY)
  //     let offsetY = e.path[1].scrollY
  //     if(offsetY > 900){

  //     }
  //   })
  // },[])

  return (
    <div>
      <div id="app" className="main__page">
        {state.map((video) => {
          return (
            <video autoPlay muted loop className="main__page-video">
              <source src={video.video} type="video/mp4" />
            </video>
          );
        })}
        <div  className="container">
          <div className="navigation">
            {/* <div onClick={() => handleShow()} className="bureger__menu">
              <img src="/images/burger.svg" alt="" />
            </div> */}
            <div className="bgnone">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
            </div>



            {/* <Offcanvas show={show} onHide={() => handleClose()}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                <div className="">
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
                </div>
              </Offcanvas.Body>
            </Offcanvas> */}
            <img className="nav_img" src="/images/logo.png" />
            <ul className="nav__ul">
              <li>
                {" "}
                <a href="#" className="nav__link">
                  {" "}
                  Главная
                </a>
              </li>
              <li>
                {" "}
                <a href="#all__work" className="nav__link"> Проекты</a>
              </li>
              <li>
                {" "}
                <a href="#footer" className="nav__link"> Контакты</a>
              </li>
              <li>
                {" "}
                <a href="#slider" className="nav__link"> Фото со сьемок</a>
              </li>
            </ul>
            <a href="#order" className="now__btn">Заказать</a>
          </div>

          <div className="head__content">
            {state.map((text) => {
              return (
                <div>
                  <h1 className="title">{text.title}</h1>
                  <p className="descr">{text.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="all__work">
        <AllWork />
      </div>
      <div id="order">
        <Order />
      </div>
      <div id="slider">
        <Slider />
      </div>
      <div id="cards">
        <Cards />
      </div>

      <div id="footer"><Footer /></div>
    </div>
  );
}
export default Main;
