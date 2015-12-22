document.addEventListener("DOMContentLoaded", function () {
    loadFeedback();
});

function loadFeedback() {
    feedbackModule.getFeedback(setupFeedbackTable);
}

function setupFeedbackTable(feedbackList) {
    var feedbackTable = document.getElementById("feedbackList");
    var currentForum = feedbackModule.getCurrentForumID();
    console.log(feedbackList);

    for (i = 0; i < feedbackList.length; i++) {
        if (feedbackList[i].ForumID == currentForum) {
            // Create a new row element
            var row = document.createElement("tr");
            var data = document.createElement("td");

            // Create our data cells and append to data
            var feedbackData = document.createElement("p");
            feedbackData.innerHTML = feedbackList[i].ReplierComment;
            data.appendChild(feedbackData);

            var nameData = document.createElement("h5");
            nameData.innerHTML = feedbackList[i].ReplierName;
            data.appendChild(nameData);

            var dateData = document.createElement("h5");
            dateData.innerHTML = feedbackList[i].DateWritten;
            var temp1 = dateData.innerHTML.split("-");
            var temp2 = temp1[2].split("T");
            dateData.innerHTML = temp2[0] + "/" + temp1[1] + "/" + temp1[0] + ", " + temp2[1].replace(":00", "");
            data.appendChild(dateData);

            // Append our data to rows, then rows to table
            row.appendChild(data);
            feedbackTable.appendChild(row);
        }
    }
}