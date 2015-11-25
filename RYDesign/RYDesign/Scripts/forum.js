document.addEventListener("DOMContentLoaded", function () {
    loadForum();
});

function loadForum() {
    forumModule.getForum(setupForumTable);
}

function setupForumTable(forumList) {
    var forumTable = document.getElementById("forumList");
    console.log(forumList);

    for (i = 0; i < forumList.length; i++) {
        // Create a new row element
        var row = document.createElement("tr");
        var data = document.createElement("td");
        data.width = '90%';

        // Create our data cells and append to data
        var forumTitleData = document.createElement("h3");
        forumTitleData.innerHTML = forumList[i].ForumTitle;
        data.appendChild(forumTitleData);

        var nameData = document.createElement("h4");
        nameData.innerHTML = forumList[i].ForumAuthor;
        data.appendChild(nameData);

        var dateData = document.createElement("h4");
        dateData.innerHTML = forumList[i].ForumCreatedOn;
        data.appendChild(dateData);

        row.appendChild(data);

        var addFeedbackCell = document.createElement("td");
        addFeedbackCell.width = '10%';
        addFeedbackCell.style.paddingTop = '50px';
        var addFeedbackBtn = document.createElement("input");
        addFeedbackBtn.type = 'button';
        addFeedbackBtn.value = 'Add feedback';
        addFeedbackBtn.id = i;
        addFeedbackBtn.className = 'forumFeedback';
        addFeedbackBtn.setAttribute('onclick', "goToForum('" + forumList[i].ID + "')");
        addFeedbackCell.appendChild(addFeedbackBtn);
        row.appendChild(addFeedbackCell);

        forumTable.appendChild(row);
    }
}