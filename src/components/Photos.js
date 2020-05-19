import React from "react"
import "./App.css"
import main from "../images/main.png"
import main1 from "../images/main1.png"
import unit from "../images/unit.png"
import unit1 from "../images/unit1.png"
import backExtended from "../images/backExtended.png"
import lights from "../images/lights.png"
import front from "../images/front.png"
import side from "../images/side.png"
import onSite from "../images/onSite.png"
import trailer from "../images/trailer.png"
import Northrop from "../images/northrop.png"






export default function Photos(){
    let fixRotation = require('fix-image-rotation')
    let ArrayOfFilesToBeRotated = [main, main1]
    let myRotationFunction = async function (ArrayOfFilesToBeRotated) {
      let blobOfArray = await fixRotation.fixRotation(ArrayOfFilesToBeRotated)
      return blobOfArray
    }
      return(

        <div className="box">
             <h1>Photos</h1>
            <div class = "container1">
            <div class = "item"><img src={main} alt ='main' className="photo1" resizeMode="contain" /></div>
            </div>
        <div class = "container">
        
        <div class = "item"><img src={unit} alt ='unit' className="photo" resizeMode="contain" /></div>
        <div class = "item"><img src={side} alt ='side' className="photo" resizeMode="contain" /></div>
        <div class = "item"><img src={front} alt ='front' className="photo" resizeMode="contain" /></div>
        <div class = "item"><img src={lights} alt ='lights' className="photo" resizeMode="contain" /></div>
        <div class = "item"><img src={unit1} alt ='unit1' className="photo" resizeMode="contain" /></div>
        <div class = "item"><img src={backExtended} alt ='backExtended' className="photo" resizeMode="contain" /></div>
        <div class = "item"><img src={onSite} alt ='onSite' className="photo" resizeMode="contain" /></div>
        <div class = "item"><img src={trailer} alt ='trailer' className="photo" resizeMode="contain" /></div>
        </div>    
        
    </div>
    )
}