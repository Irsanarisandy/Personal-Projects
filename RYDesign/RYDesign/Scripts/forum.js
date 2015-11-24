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

        // Create our data cells and append to data
        var forumTitleCol = document.createElement("h3");
        forumTitleCol.innerHTML = forumList[i].ForumTitle;
        data.appendChild(forumTitleCol);

        var nameCol = document.createElement("h4");
        nameCol.innerHTML = forumList[i].ForumAuthor;
        data.appendChild(nameCol);

        var dateCol = document.createElement("h4");
        dateCol.innerHTML = forumList[i].ForumCreatedOn;
        data.appendChild(dateCol);

        // Append our data to rows, then rows to table
        row.appendChild(data);
        forumTable.appendChild(row);
    }
}