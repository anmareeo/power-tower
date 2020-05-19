import React from "react"
import "./App.css"
import northrop from "../images/northrop.png"
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
            <br></br>
            <p><strong>The Digital Defense Combo Tower is unlike anything on the market. Within the easily transportable trailer, the power and the tower unit combine to provide multiple tools into one piece of equipment. Every construction site needs a powerful generator, wi-fi capability, proper lighting and a security system. The Combo Tower, not only provides each of these, but also does it in a cost efficient way.</strong> </p>
            <br></br>
            <h3><strong>See the specifications below:</strong> </h3>
            <br></br> 


            
                <div className="container2">
                    <div className="about">
                        <h1>The Power</h1>
                        <div>
                        <div class = "bullets">
                     
                        ⮚	Combo Power System<br></br> 
o	Kubota diesel generator/ battery combo<br></br> 
o	“Always On” technology 24/7/365 – no need to worry about turning generator on/off<br></br> 
o	80 amps of CLEAN power<br></br> 
o	2 – 120v and 1 - 240v outlets<br></br> 
o	Cut emissions and noise up to 93%<br></br> 
o	Remote monitoring and control<br></br> 

⮚	Air Compressor<br></br> 
o	4.2 CFM @ 90 lbs. <br></br> 
o	2 connectors<br></br> 

                        
                        </div>
                        </div>
                        
                        </div>
                    <div class = "item"><img src={northrop} alt ='northrop' className="photo3" resizeMode="contain" /></div>
                    <div className="about">
                        <h1>The Tower</h1>
                        <div class = "bullets">

                      
                        ⮚	Telescoping Mast <br></br>
▪	30’ pneumatic aluminum mast<br></br>
▪	5 locking sections up and down for safety<br></br>
▪	Retracting power cable – no cable mess<br></br>
▪	Will sustain winds of 65 mph<br></br>

⮚	Surveillance<br></br>
▪	360 degree horizon to horizon coverage<br></br>
▪	4 – (type / resolution of camera)<br></br>
▪	Remote smart device visibility<br></br> 
▪	Automatic cloud storage<br></br> 

⮚	Lights<br></br> 
o	2 - 240-watt LED light fixtures - 135,000 lumens<br></br> 
o	Remote manual light on/off<br></br> 
o	Automated dusk to dawn operation<br></br> 

⮚	Wi-Fi <br></br> 
o	Speed???<br></br> 
o	600’ perimeter<br></br> 


                        
                        
                        </div>
                        </div>
                </div>
        </div>
       )



            }
            
        
        
              
         
           
    


