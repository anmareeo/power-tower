import React from "react"
import "./App.css"
import main from "../images/main.png"
import main1 from "../images/main1.png"
import { render } from "@testing-library/react"
export default function About(){
  /*  let thePower = [
        "Free consultation.",
        
        "30-day Money Back Guarantee."
    ]

    let [power,setpower]=React.useState(thePower)
    */
  
    return (
        <div className="box">
            <h1>About</h1>
                <div className="container2">
                    <div className="about">
                        <h1>The Power</h1>
                        <div>
                     
                        <ul>
                            <li>Kubota diesel generator/battery combo</li>
                            <li>"Always On" Technology —24/7/365</li>
                            <li>80 amps of clean power</li>
                            <li>Two 120v and One 240v outlets</li>
                            <li>93% reduction of emissions and noise</li>
                            <li>Remote monitoring and control</li>
                        </ul>
                        
                        </div>
                        
                        </div>
                    <div class = "item"><img src={main} alt ='main' className="photo1" resizeMode="contain" /></div>
                    <div className="about">
                        <h1>The Tower</h1></div>
                </div>
        </div>
       )



            }
            
        
        
              
         
           
    


