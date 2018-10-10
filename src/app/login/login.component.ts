import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  route  : Router;

  constructor(router : Router) {
    this.route = router;
   }

  ngOnInit() {
  }

  signup(){
    this.route.navigate(['/signup']);
  }

  login(){
    this.route.navigate(['/dashboard']);

  }

}
