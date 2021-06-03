import React, {useEffect } from "react";
import * as SurveyCreator from "survey-creator";
import "survey-creator/survey-creator.css";
import {SavePaperJson} from "../core/helper/SurveyCreatorApiCalls"
const SurveyCreatorView = ({paperId})=>{
  
    
    const preload = ()=>{
        var options = {
            showLogicTab: true
        };
        //create the SurveyJS Creator and render it in div with id equals to "creatorElement"
        var creator = new SurveyCreator.SurveyCreator("creatorElement", options);
        //Show toolbox in the right container. It is shown on the left by default
        creator.showToolbox = "right";
        //Show property grid in the right container, combined with toolbox
        creator.showPropertyGrid = "right";
        //Make toolbox active by default
        creator.rightContainerActiveItem("toolbox");
        
        var localStorageName = `SaveLoadSurveyCreator\${paperId}`;
        creator.text = window.localStorage.getItem(`SaveLoadSurveyCreator\${paperId}`) || "";
        //Setting this callback will make visible the "Save" button
        creator.saveSurveyFunc = function (saveNo, callback) {
            //save the survey JSON
            console.log(creator.text);
            //You can store in your database JSON as text: creator.text  or as JSON: creator.JSON
            SavePaperJson(paperId,creator.text);
            window
                .localStorage
                .setItem(localStorageName, creator.text);
        
            //We assume that we can't get error on saving data in local storage
            //Tells creator that changing (saveNo) saved successfully.
            //Creator will update the status from Saving to saved
            callback(saveNo, true);
        }
    }
    useEffect(preload,[]);
    return(
        <div>
            
            <div id="surveyContainer">
                <div id="creatorElement"></div>
            </div>
        </div>
    )
}

export default SurveyCreatorView;