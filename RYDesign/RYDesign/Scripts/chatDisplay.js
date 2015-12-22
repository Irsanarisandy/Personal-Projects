var language = document.getElementsByTagName('html')[0].getAttribute('lang');
$(function () {
    // Declare a proxy to reference the hub.
    var chat = $.connection.chatHub;
    // Create a function that the hub can call to broadcast messages.
    chat.client.broadcastMessage = function (name, message) {
        // Html encode display name and message.
        var encodedName = $('<div />').text(name).html();
        var encodedMsg = $('<div />').text(message).html();
        // Add the message to the page.
        $('#discussion').append('<li><strong>' + encodedName + '</strong>:&nbsp;&nbsp;' + encodedMsg + '</li>');
    };
    // Set initial focus to message input box.
    $('#message').focus();
    // Start the connection.
    $.connection.hub.start().done(function () {
        $('#sendmessage').click(function () {
            $('#displayname').val(document.getElementById('fbUserName').innerHTML);
            if (document.getElementById('fbUserName').innerHTML) {
                // Call the Send method on the hub.
                chat.server.send($('#displayname').val(), $('#message').val());
                // Clear text box and reset focus for next comment.
                $('#message').val('').focus();
            }
            else {
                if (language == 'id') alert("Silahkan log in ke Facebook akun anda!");
                else if (language == 'zh-Hans') alert("请登录到您的 Facebook 帐户！");
                else alert("Please log into your Facebook account!");
            }
        });
    });
});