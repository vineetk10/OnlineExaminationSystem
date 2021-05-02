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