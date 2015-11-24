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
        postForum: function (callback) {
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "http://rydesign.azurewebsites.net/api/Forum",
                success: function () {}
            });
        }
    };
}());