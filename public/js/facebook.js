function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
}
  
function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
          console.log('Successfully logged in with Facebook');
           FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }
}
function changeUser(response) {
    window.location.href = "index";
    localStorage.setItem("userName", response.name);
    localStorage.setItem("userImg", response.picture.data.url);
    $("#name").text(response.name);
    $("img#photo").attr("src", response.picture.data.url);
}

//change name and photo on other pages
var myName = localStorage.getItem("userName");
if (myName) {
    $("#name").text(myName);
    // $("img#photo").attr("src", myImg);
}

var myImg = localStorage.getItem("userImg");
if (myImg) {
    $("img#photo").attr("src", myImg);
}