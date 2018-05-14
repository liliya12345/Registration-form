window.fbAsyncInit = function() {
    FB.init({
      appId            : '1477622625635052',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.0'
    });
}; 

   function myFacebookLogin() {
    FB.login(function(){}, {scope: 'publish_actions'});
  }
  FB.api(
    "/1477622625635052/friendlists",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
        console.log(data);
      }
    }
);
  
