import React, { useState } from "react";
import "./style.scss";

function Order() {
  const [time, setTime] = useState(50);
  const [gender,setgender]=useState()
  const [name,setName]=useState()
  const [number,setNumber]=useState()
  const [massage,setMessage]=useState()


  let tokenBot = "5353295802:AAH0H63hE2GrbBhg5qNYwlGesd6Dcmg9q0E"
  let chat__id= "-637533973"
  let my__text = `ВРЕМЯ - ${time}секунд  ТИП ВИДЕО - ${gender}  ИМЯ - ${name}  НОМЕР - ${number}  КОММЕНТАРИЙ - ${massage}`
  let url = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chat__id}&text=${my__text}`
 function sendMTG(){
  let api = new XMLHttpRequest()
  api.open("GET",url,true)
  api.send()
  console.log("message succes")
 }

  return (
    <div className="order container">
      <div className="slider__time">
        <div className="order_all">
          <p className="oreder_hron">Хронометраж</p>
          <p className="order_tome">{time} сек</p>
        </div>
        <input className="input__t" type="range" onChange={(e) => setTime(e.target.value)} /> 
        <p className="type__video">Тип видео</p>
       
        
          <div className="types">
          {["Клипы","Свадбьа"].map((btn)=>{
            return(
              <div> <button className={gender === btn ? "bgred" : "default"} onClick={()=>setgender(btn)}>{btn}</button></div>
            )
          })}
          </div>

      </div>

      <div className="order__to">
      <p className="call">Заказать звонок</p>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Имя" className="order__in" />
        <input onChange={(e)=>setNumber(e.target.value)} type="text" placeholder="Номер телефона" className="order__i" />
        <input onChange={(e)=>setMessage(e.target.value)} type="text" placeholder="Комментарий" className="order__i" />
        <div className="order__btn">
            <button onClick={()=>sendMTG()} className="send">Отправить</button>

        </div>
      </div>
    </div>
  );
}
export default Order;
