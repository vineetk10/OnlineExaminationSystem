
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

var localStorageName = "SaveLoadSurveyCreatorExample";
//Setting this callback will make visible the "Save" button
creator.saveSurveyFunc = function (saveNo, callback) {
    //save the survey JSON
    console.log(creator.text);
    //You can store in your database JSON as text: creator.text  or as JSON: creator.JSON
    window
        .localStorage
        .setItem(localStorageName, creator.text);

    //We assume that we can't get error on saving data in local storage
    //Tells creator that changing (saveNo) saved successfully.
    //Creator will update the status from Saving to saved
    callback(saveNo, true);
}
