import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  route  : Router;

  constructor(router : Router) {
    this.route = router;
   }

  ngOnInit() {
  }

  login(){
    this.route.navigate(['/login']);
  }

  signUp(){
    this.route.navigate(['/dashboard']);
  }
}
