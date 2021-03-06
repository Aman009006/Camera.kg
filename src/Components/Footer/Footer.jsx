import React from "react";
import "./style.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container footer__content">
        <div className="footer__links">
          <div className="mail">
          <p className="adres s"><a href="mailto:ask@htmlbook.ru">Camera01Ekma@gmail</a></p>


            <div>
              {" "}
            <p className="adres s"><a href="tel:070456565">+996709155155</a></p>

            </div>
          </div>
          <p className="adres s"><a href="#order">Заказать звонок</a></p>
        </div>
        <div className="footer__adres">
          <p className="adres">Бишкек,Жибек-Жолу 33/21</p>
          <div className="social">
            <a href="https://www.whatsapp.com/?lang=ru" className="linkst">
              {" "}
              <img src="/images/what.webp" target="_blank" alt="" /> <p>Whatsapp</p>
            </a>
            <a href="https://web.telegram.org/k/" target="_blank" className="linkst">
              {" "}
              <img src="/images/teleg.png" alt="" /> <p>Telegram</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
