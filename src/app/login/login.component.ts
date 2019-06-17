import { Component, OnInit } from '@angular/core';

declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user:''


  constructor() { }

  ngOnInit() {


  	(window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '316677029269334',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));


  }


  submitLogin(){
        console.log("submit login to facebook");
        // FB.login();
        FB.login((response)=>
            {
              console.log('submitLogin',response);
              if (response.authResponse)
              {
                //login success
                
                this.user = response.authResponse.userID
                console.log("response:",response)
                FB.api('/me', function(response) {
			       console.log('Good to see you, ' + response.name + '.');

			       console.log("response",this.userName)

			     });

              
			    console.log("Facebook Login Authenticated")
               }
               else
               {
               console.log('User login failed');
             }
          });



      }

      submitLogin1() {
      	this.temp = 1
      }







  

}
