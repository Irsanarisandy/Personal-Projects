if (window.localStorage.getItem('language') == null) window.localStorage.setItem('language', window.navigator.userLanguage || window.navigator.language);

var addForumLanguage = (function () {
    return {
        currentLanguage: function (language) {
            if (window.localStorage.getItem('language') != language) window.localStorage.setItem('language', language);
        }
    };
}());

function n(n) {
    return n > 9 ? "" + n : "0" + n;
}

$("#createForum").click(function () {
    if (window.localStorage.getItem('language') == 'id') swal({
        title: "Bikin forum",
        text: "Apakah anda ingin membuat forum baru?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF0000",
        confirmButtonText: "Iya",
        cancelButtonText: "Tidak",
        closeOnConfirm: false
    }, function () {
        var forumTitle = $.trim(document.getElementById("Title").value);
        var authorName = document.getElementById('fbUserName').innerHTML;
        if (forumTitle == "") {
            swal("Error", "Mohon isi informasi yang diperlukan!", "error");
        }
        else if (!document.getElementById('fbUserName').innerHTML) {
            alert("Silahkan login ke akun Facebook anda!");
        }
        else {
            var date = new Date();
            var currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + n(date.getHours()) + ":" + n(date.getMinutes());
            forumModule.postForum(forumTitle, authorName, currentDate);
            swal("Sukses", "Anda telah berhasil membuat forum baru", "success");
            document.getElementById("Title").value = "";
            document.getElementById("Name").value = "";
        }
    });
    else if (window.localStorage.getItem('language') == 'zh-Hans') swal({
        title: "开新论坛",
        text: "您确定开新论坛？",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF0000",
        confirmButtonText: "是",
        cancelButtonText: "否",
        closeOnConfirm: false
    }, function () {
        var forumTitle = $.trim(document.getElementById("Title").value);
        var authorName = document.getElementById('fbUserName').innerHTML;
        if (forumTitle == "") {
            swal("错误", "请填写需要资料！", "error");
        }
        else if (!document.getElementById('fbUserName').innerHTML) {
            alert("请登入您的 Facebook 账户！");
        }
        else {
            var date = new Date();
            var currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + n(date.getHours()) + ":" + n(date.getMinutes());
            forumModule.postForum(forumTitle, authorName, currentDate);
            swal("成功", "新论坛创建成功", "success");
            document.getElementById("Title").value = "";
            document.getElementById("Name").value = "";
        }
    });
    else swal({
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
