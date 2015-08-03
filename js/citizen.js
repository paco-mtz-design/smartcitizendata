// Create Empty list
var citizenInfo = function () {
    var dataList = document.createElement("ul");
    var dataLocation = document.getElementsByClassName("one-half");
    dataLocation[0].appendChild(dataList);

    var dataListItem = document.createElement("li");
    dataList.appendChild(dataListItem);
};

var smartCitizenApiJson = "http://api.smartcitizen.me/v0.0.1/4d206b1eb3a453aa02ab2f71755c92a67c1bf374/lastpost.json";

// Loop through data and print it to HTML
var jsonData = $.getJSON(smartCitizenApiJson, function(json) {

    //Obtain only the information related to the sensor data
    var allPosts = json.devices[0].posts;
    //Obtain devices.posts length (not really needed, but
    // it was good to find out how to get an object's lenght easilly)
    var objKeys = Object.keys(allPosts).length

    // Create empty list
    var dataList = document.createElement("ul");
    var dataLocation = document.getElementsByClassName("one-half");
    dataLocation[0].appendChild(dataList);

    // Loop through Smart Citizen Data and append to UL
    for (var key in allPosts) {
            if (allPosts.hasOwnProperty(key)) {
                var dataListItem = document.createElement("li");
                dataListItem.innerHTML = key + ": <strong>" + allPosts[key] + "</strong>";
                dataList.appendChild(dataListItem);
            };
    };

});
