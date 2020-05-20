import React from "react"
import northrop from "../images/northrop.png"
import main1 from "../images/main1.png"
import { render } from "@testing-library/react"
import { List } from 'semantic-ui-react'
import "./App.css"
import Power from './Power';
import Tower from './Tower';
import Combo from './Combo';
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
            <br></br>
            <p><strong>Every construction site needs a powerful generator, wi-fi capability, proper lighting and a security system. The Digital Defense Combo Tower provides all of that in one powerful, easily transportable piece of equipment. </strong> </p>
            
            <h3><strong>See the specifications below:</strong> </h3>
                        
              <div className="container5">
                    <div className="about">
                        <h1>The Tower</h1>
                        <div className="bullets">
                        <Tower>
                        </Tower>    
                        </div>

                        
                        </div>
                    <div className="about">
                      <h1>Combo Tower</h1>
                <div className="bullets">
                        <Combo>
                        </Combo>    
                        </div>

                    <div class = "item"><img src={northrop} alt ='northrop' className="photo1" resizeMode="contain" />
                    </div>
                    </div>
                   

                    <div className="about">
                        <h1>The Power</h1>
                        <div className="bullets">
                        <Power>
                        </Power>
                        </div>
                        </div>
                        </div>
                        </div>
                       


                      
                      
       )



            }
            
        
        
              
         
