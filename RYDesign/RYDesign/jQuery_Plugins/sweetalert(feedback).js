if (window.localStorage.getItem('language') == null) window.localStorage.setItem('language', window.navigator.userLanguage || window.navigator.language);

var addFeedbackLanguage = (function () {
    return {
        currentLanguage: function (language) {
            if (window.localStorage.getItem('language') != language) window.localStorage.setItem('language', language);
        }
    };
}());

function n(n) {
    return n > 9 ? "" + n : "0" + n;
}

$("#createFeedback").click(function () {
    if (window.localStorage.getItem('language') == 'id') swal({
        title: "Bikin saran",
        text: "Apakah anda ingin membuat saran baru?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF0000",
        confirmButtonText: "Iya",
        cancelButtonText: "Tidak",
        closeOnConfirm: false
    }, function () {
        var feedbackContent = $.trim($("textarea").val());
        var personName = document.getElementById('fbUserName').innerHTML;
        if (feedbackContent == "") {
            swal("Error", "Mohon isi informasi yang diperlukan!", "error");
        }
        else if (!document.getElementById('fbUserName').innerHTML) {
            alert("Silahkan login ke akun Facebook anda!");
        }
        else {
            var currentForum = feedbackModule.getCurrentForumID();
            var date = new Date();
            var currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + n(date.getHours()) + ":" + n(date.getMinutes());
            feedbackModule.postFeedback(currentForum, feedbackContent, personName, currentDate);
            swal("Sukses", "Anda telah berhasil membuat saran baru", "success");
            document.getElementById("Content").value = "";
            document.getElementById("Name").value = "";
        }
    });
    else if (window.localStorage.getItem('language') == 'zh-Hans') swal({
        title: "写新意见",
        text: "确定写新意见？",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF0000",
        confirmButtonText: "是",
        cancelButtonText: "否",
        closeOnConfirm: false
    }, function () {
        var feedbackContent = $.trim($("textarea").val());
        var personName = document.getElementById('fbUserName').innerHTML;
        if (feedbackContent == "") {
            swal("错误", "请填写需要资料！", "error");
        }
        else if (!document.getElementById('fbUserName').innerHTML) {
            alert("请登入您的 Facebook 账户！");
        }
        else {
            var currentForum = feedbackModule.getCurrentForumID();
            var date = new Date();
            var currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + n(date.getHours()) + ":" + n(date.getMinutes());
            feedbackModule.postFeedback(currentForum, feedbackContent, personName, currentDate);
            swal("成功", "写新意见成功", "success");
            document.getElementById("Content").value = "";
            document.getElementById("Name").value = "";
        }
    });
    else swal({
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
