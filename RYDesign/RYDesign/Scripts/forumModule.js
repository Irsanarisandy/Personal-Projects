var forumModule = (function () {
    // Return anything that you want to expose outside the closure
    return {
        getForum: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://rydesign.azurewebsites.net/api/Forum",
                success: function (data) {
                    callback(data);
                }
            });
        },
        postForum: function (title, author, date) {
            $.ajax({
                type: "POST",
                url: "http://rydesign.azurewebsites.net/api/Forum",
                data: {"ForumTitle": title, "ForumAuthor": author, "ForumCreatedOn": date}
            });
        }
    };
}());