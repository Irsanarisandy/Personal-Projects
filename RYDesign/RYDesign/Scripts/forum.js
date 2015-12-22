if (window.localStorage.getItem('language') == null) window.localStorage.setItem('language', window.navigator.userLanguage || window.navigator.language);

document.addEventListener("DOMContentLoaded", function () {
    loadForum();
});

var forumLanguage = (function () {
    return {
        currentLanguage: function (language) {
            if (window.localStorage.getItem('language') != language) window.localStorage.setItem('language', language);
        }
    };
}());

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
        var temp1 = dateData.innerHTML.split("-");
        var temp2 = temp1[2].split("T");
        dateData.innerHTML = temp2[0] + "/" + temp1[1] + "/" + temp1[0] + ", " + temp2[1].replace(":00", "");
        data.appendChild(dateData);

        row.appendChild(data);

        var addFeedbackCell = document.createElement("td");
        addFeedbackCell.width = '10%';
        addFeedbackCell.style.paddingTop = '50px';
        var addFeedbackBtn = document.createElement("input");
        addFeedbackBtn.type = 'button';
        if (window.localStorage.getItem('language') == 'id') addFeedbackBtn.value = 'Lihat saran';
        else if (window.localStorage.getItem('language') == 'zh-Hans') addFeedbackBtn.value = '到留言板';
        else addFeedbackBtn.value = 'See feedback';
        addFeedbackBtn.id = i;
        addFeedbackBtn.className = 'forumFeedback';
        addFeedbackBtn.setAttribute('onclick', "feedbackModule.setCurrentForumID('" + forumList[i].ID + "')");
        addFeedbackCell.appendChild(addFeedbackBtn);
        row.appendChild(addFeedbackCell);

        forumTable.appendChild(row);
    }
}