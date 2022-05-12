import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

function AllWork() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`https://camera312292.herokuapp.com/media/`)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="work_exp">
        <div className="container">
          <div className="all__work">
            {state.map((card) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(${card.logo})`,
                  }}
                  className="work"
                >
                  <div className="hello">
                    <video autoPlay muted loop className="for-video">
                      <source src={card.video} type="video/mp4" />
                    </video>{" "}
                  </div>
                </div>
              );
            })}

            
          </div>
        </div>
      </div>
    </div>
  );
}
export default AllWork;
