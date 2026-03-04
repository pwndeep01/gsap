import "./App.css";
import image from "./assets/McLaren 720S 2022 top view.png";
import { useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {

  gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
      

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".view1",
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(".trail", {
      x: 1300,
      duration: 4,
    })

      .to(
        ".card1",
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        0.3,
      ) 

      .to(
        ".card2",
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        0.9,
      )

      .to(
        ".card3",
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        1.5,
      )

      .to(
        ".card4",
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        2.1,
      );
  
    })


  return (
    <div className="container">
      <div className="view1">
        <div id="box" className="card card1">
          <h1>58%</h1>
          <h3>Increase in pick up point use</h3>
        </div>
        <div className="card  card2">
          <h1>27%</h1>
          <h3>Increase in pick up point use</h3>
        </div>
        <div className="text">
          <div className="trail">
          <img className="car" src={image} alt="car image" />

          </div>
          <h3 className="heading">WELCOME ITZFITZZ</h3>
        </div>
        <div className="card card3">
          <h1>23%</h1>
          <h3>Increase in pick up point use</h3>
        </div>
        <div className="card card4">
          <h1>40%</h1>
          <h3>Decreased in customer phone calls</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
