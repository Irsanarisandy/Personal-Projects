function n(n) {
    return n > 9 ? "" + n : "0" + n;
}

$("#createFeedback").click(function () {
    swal({
        title: "Create feedback",
        text: "Are you sure you want to post a new feedback?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF0000",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        closeOnConfirm: false
    }, function () {
        var feedbackContent = $.trim($("textarea").val());
        var personName = document.getElementById('fbUserName').innerHTML;
        if (feedbackContent == "") {
            swal("Error", "Please fill in required information!", "error");
        }
        else if (!document.getElementById('fbUserName').innerHTML) {
            alert("Please log into your facebook account!");
        }
        else {
            var currentForum = feedbackModule.getCurrentForumID();
            var date = new Date();
            var currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + n(date.getHours()) + ":" + n(date.getMinutes());
            feedbackModule.postFeedback(currentForum, feedbackContent, personName, currentDate);
            swal("Success", "You have successfully created a new feedback", "success");
            document.getElementById("Content").value = "";
            document.getElementById("Name").value = "";
        }
    });
});
