
var body = document.body;
var containerEl = document.createElement("div");
var listEl = document.createElement("ol");
// listItemEl =
function displayScores(){
    if (localStorage.length < 1) {
        listEl.textContent = "No scores saved";
    } else {
        for( var i=0; i<localStorage.length; i++){
            let thisKey = localStorage.key(i);
            let thisValue = localStorage.getItem(thisKey);
            let thisListItemEl = document.createElement("li");
            thisListItemEl.textContent = thisKey+": "+thisValue;
            listEl.appendChild(thisListItemEl);      
        }
        containerEl.appendChild(listEl);
        body.appendChild(containerEl);
    }
}


displayScores();