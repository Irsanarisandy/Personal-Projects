if (window.localStorage.getItem('language') == null) window.localStorage.setItem('language', window.navigator.userLanguage || window.navigator.language);

var pageLanguage = (function () {
    return {
        currentLanguage: function (language) {
            if (window.localStorage.getItem('language') != language) window.localStorage.setItem('language', language);
        }
    };
}());

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    } else if (response.status === 'not_authorized') {  // The person is logged into Facebook, but not your app.
        if (window.localStorage.getItem('language') == 'id') document.getElementById('status').innerHTML = 'Silahkan log in ke aplikasi ini.';
        else if (window.localStorage.getItem('language') == 'zh-Hans') document.getElementById('status').innerHTML = '请登入。';
        else document.getElementById('status').innerHTML = 'Please log into this app.';
    } else {  // The person is not logged into Facebook, so we're not sure if they are logged into this app or not.
        if (window.localStorage.getItem('language') == 'id') document.getElementById('status').innerHTML = 'Silahkan log in ke Facebook.';
        else if (window.localStorage.getItem('language') == 'zh-Hans') document.getElementById('status').innerHTML = '请登入 Facebook。';
        else document.getElementById('status').innerHTML = 'Please log into Facebook.';
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '1650173251918731',
        cookie: true,  // enable cookies to allow the server to access 
        // the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.2' // use version 2.2
    });

    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });

};

// Load the SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "http://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome! Fetching your information.... ');
    FB.api('/me', function (response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('fbUserName').innerHTML = response.name;
        // This line adds text to the div tag with the id of 'status'
        // to show the user they're currently logged in.
        if (window.localStorage.getItem('language') == 'id') document.getElementById('status').innerHTML = 'Terima kasih telah log in, ' + response.name + '!';
        else if (window.localStorage.getItem('language') == 'zh-Hans') document.getElementById('status').innerHTML = response.name + ', 感谢您的登入！';
        else document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
    });
}