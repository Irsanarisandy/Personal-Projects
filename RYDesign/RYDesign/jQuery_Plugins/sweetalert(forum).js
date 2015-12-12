function n(n) {
    return n > 9 ? "" + n : "0" + n;
}

$("#createForum").click(function () {
    swal({
        title: "Create forum",
        text: "Are you sure you want to post a new forum?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF0000",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        closeOnConfirm: false
    }, function () {
        var forumTitle = $.trim(document.getElementById("Title").value);
        var authorName = document.getElementById('fbUserName').innerHTML;
        if (forumTitle == "") {
            swal("Error", "Please fill in required information!", "error");
        }
        else if (!document.getElementById('fbUserName').innerHTML) {
            alert("Please log into your facebook account!");
        }
        else {
            var date = new Date();
            var currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + n(date.getHours()) + ":" + n(date.getMinutes());
            forumModule.postForum(forumTitle, authorName, currentDate);
            swal("Success", "You have successfully created a new forum", "success");
            document.getElementById("Title").value = "";
            document.getElementById("Name").value = "";
        }
    });
});
