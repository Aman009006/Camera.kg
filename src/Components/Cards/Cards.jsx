import React,{useState,useEffect} from "react";
import './style.scss'
import axios from "axios"


function Cards(){

    const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://camera312292.herokuapp.com/worker/`)
      .then((res) => {
        setState(res.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

return (
    <div className="cards__content container">
    {state.map((user)=>{
        
        return(
            <div className="card">
            <img src={user.image} alt="" />
            <div className="card__text">
            <p className="name">{user.name}</p>
            <p className="worker">{user.position}</p>
            </div>
        </div>
        )
    })}
        
    </div>
)

}
export default Cards;