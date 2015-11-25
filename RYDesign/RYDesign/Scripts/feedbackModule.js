var feedbackModule = (function () {
    // Return anything that you want to expose outside the closure
    return {
        setCurrentForumID: function (currentID) {
            window.localStorage.setItem('currentForumID', currentID);
            window.location.href = "feedbackPage.html";
        },
        getCurrentForumID: function () {
            return window.localStorage.getItem('currentForumID');
        },
        getFeedback: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://rydesign.azurewebsites.net/api/Feedback",
                success: function (data) {
                    callback(data);
                }
            });
        },
        postFeedback: function (id, reply, person, date) {
            $.ajax({
                type: "POST",
                url: "http://rydesign.azurewebsites.net/api/Feedback",
                data: {"ForumID": id, "ReplierComment": reply, "ReplierName": person, "DateWritten": date}
            });
        }
    };
}());