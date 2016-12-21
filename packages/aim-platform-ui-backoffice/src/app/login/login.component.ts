import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {
  CognitoCallback,
  UserLoginService,
  LoggedInCallback
} from "../services/cognito.service";

@Component({
  selector: 'login',
  styleUrls: [ 'login.component.scss' ],
  templateUrl: 'login.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    "class": 'login-page app'
  }
})
export class Login implements CognitoCallback, LoggedInCallback, OnInit {
  cognitoUser: any;
  email:string;
  newPassword: string;
  password:string;
  passwordMatch: string;
  errorMessage:string;
  requireNewPassword: boolean = false;

  constructor(
    public router:Router,
    public userService:UserLoginService
  ) {
    // console.log("LoginComponent constructor");
  }
  ngOnInit() {
    this.errorMessage = null;
    console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
    this.userService.isAuthenticated(this);
  }
  onLogin() {
    if (this.email == null || this.password == null) {
      this.errorMessage = "All fields are required";
      return;
    }
    this.errorMessage = null;
    this.userService.authenticate(this.email, this.password, this);
  }
  onNewPassword() {
    if (this.newPassword == null || this.passwordMatch == null) {
      this.errorMessage = "All fields are required";
      return;
    }
    if (this.newPassword !== this.passwordMatch) {
      this.errorMessage = "Passwords must match";
      return;
    }
    this.errorMessage = null;
    this.requireNewPassword = false;
    this.cognitoUser.completeNewPasswordChallenge(this.newPassword, null, this);
  }
  cognitoCallback(message:string, result:any) {
    if (message != null) { //error
      if (message === 'newPassword') {
        this.requireNewPassword = true;
        // this.router.navigate(['/login/changePassword'])
        this.cognitoUser = result;
      } else {
        this.errorMessage = message;
        console.log("result: " + this.errorMessage);
      }
    } else { //success
      // this.ddb.writeLogEntry("login");
      this.router.navigate(['/platforms']);
    }
  }
  isLoggedIn(message:string, isLoggedIn:boolean) {
    if (isLoggedIn)
      this.router.navigate(['/platforms']);
  }
}

@Component({
  selector: 'logout',
  template: ''
})
export class Logout implements LoggedInCallback {

  constructor(public router:Router,
              public userService:UserLoginService) {
    this.userService.isAuthenticated(this)
  }

  isLoggedIn(message:string, isLoggedIn:boolean) {
    if (isLoggedIn) {
      this.userService.logout();
      this.router.navigate(['/login']);
    }

    this.router.navigate(['/login']);
  }
}
