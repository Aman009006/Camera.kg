import React, { useState,useEffect} from "react";
import "./style.scss";

function Order() {
  const [time, setTime] = useState(5);

  const [gender,setgender]=useState()
  const [genders,setgenders]=useState()
  const [genderss,setgenderss]=useState()

  const [name,setName]=useState()
  const [number,setNumber]=useState()
  const [massage,setMessage]=useState()


  let tokenBot = "5353295802:AAH0H63hE2GrbBhg5qNYwlGesd6Dcmg9q0E"
  let chat__id= "-637533973"
  let my__text = `ВРЕМЯ - ${time}минут  ТИП ВИДЕО - ${gender} ТИП РОЛИКА - ${genders}  РАЗМЕЩЕНИЕ - ${genderss} ИМЯ - ${name}  НОМЕР - ${number}  КОММЕНТАРИЙ - ${massage}`
  let url = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chat__id}&text=${my__text}`
 function sendMTG(){
  let api = new XMLHttpRequest()
  api.open("GET",url,true)
  api.send()
  console.log("message succes")
 }
 const [range, setRange] = useState('');
 
//  useEffect(() => {
//   if( 30 > time > 40){
//     setRange(`1 min`)
//   }
//  }, [time]);
// console.log(range);

  return (
    <div className="order container">
      <div className="slider__time">
        <div className="order_all">
          <p className="oreder_hron">Хронометраж</p>
          <p className="order_tome">{Math.floor(time)} мин</p>
        </div>
        <input className="input__t" type="range"  onChange={(e) => setTime((e.target.value *6 ) / 60)} /> 
        <p className="type__video">Тип видео</p>
       
        
          <div className="types">
          {["Рекламный","Обзорный","Имиджевый","Вирусный","Другой"].map((btn)=>{
            return(
              <div> <button className={gender === btn ? "bgred" : "default"} onClick={()=>setgender(btn)}>{btn}</button></div>
            )
          })}
          </div>
          <p className="type__video">Тип ролика</p>
       
        
       <div className="types">
       {["Сьемка","Анимация","3D","Сьемка + Анимация","Сьемка + 3D"].map((btn)=>{
         return(
           <div> <button className={genders === btn ? "bgred" : "default"} onClick={()=>setgenders(btn)}>{btn}</button></div>
         )
       })}
       </div>
       <p className="type__video">Размещение</p>
       
        
       <div className="types">
       {["Instagram","Youtube","Tik Tok","Reels"].map((btn)=>{
         return(
           <div> <button className={genderss === btn ? "bgred" : "default"} onClick={()=>setgenderss(btn)}>{btn}</button></div>
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
