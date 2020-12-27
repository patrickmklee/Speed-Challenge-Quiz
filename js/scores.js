
var body = document.body;
var containerEl = document.createElement("div");
containerEl.setAttribute("style", "width: 100%; align-items:center")
var listEl = document.createElement("ul");
listEl.setAttribute("style", "list-style: none;text-align:center")
var clearScoresBtn = document.createElement("button");
clearScoresBtn.textContent = "Clear Highscores";
var returnBtn = document.createElement("button");
// listItemEl =
function clearScores() {
    localStorage.clear();
    displayScores();
}
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
        clearScoresBtn.onclick = clearScores;
        containerEl.appendChild(listEl);
        containerEl.appendChild(clearScoresBtn);
        body.appendChild(containerEl);
        

    }
}

displayScores();