import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  route: Router;
  showTowers: boolean = false;
  addTower : boolean = false;
  arr;


  constructor(router: Router) {
    this.route = router;
  }

  ngOnInit() {

    
  this.arr =  [
    { towerId: 1, location: "hyderabad", address: "madhapur,hyderabad", isActive : true ,currentFuelStock : 10, hardwareSoftwareInstalled : true, remarks : "working fine"},
    { towerId: 2, location: "chennai", address: "chennai", isActive : false ,currentFuelStock : 11, hardwareSoftwareInstalled : false, remarks : "working not fine"},
    { towerId: 3, location: "chandigarh", address: "chennai", isActive : true ,currentFuelStock : 12, hardwareSoftwareInstalled : true, remarks : "working fine"},
    { towerId: 4, location: "delhi", address: "delhi", isActive : false ,currentFuelStock : 13, hardwareSoftwareInstalled : true, remarks : "working not fine"},
    { towerId: 5, location: "haryana", address: "haryana", isActive : true ,currentFuelStock : 14, hardwareSoftwareInstalled : true, remarks : "working fine"},
    { towerId: 6, location: "punjab", address: "punjab", isActive : false ,currentFuelStock : 110, hardwareSoftwareInstalled : false, remarks : "working fine"},
    { towerId: 7, location: "pinjore", address: "pinjore", isActive : true ,currentFuelStock : 102, hardwareSoftwareInstalled : false, remarks : "working not fine"},
    { towerId: 8, location: "kalka", address: "kalka", isActive : false ,currentFuelStock : 1120, hardwareSoftwareInstalled : true, remarks : "working fine"},
    { towerId: 9, location: "bilaspur", address: "bilaspur", isActive : true ,currentFuelStock : 310, hardwareSoftwareInstalled : false, remarks : "working not fine"},
    { towerId: 10, location: "shimla", address: "shimla", isActive : false ,currentFuelStock : 150, hardwareSoftwareInstalled : true, remarks : "working fine"}

  ]
  }

  searchTowers() {
    this.showTowers = true;
    this.addTower = false;
  }


  addTowers(){
    console.log("adding");
    this.addTower = true;
    this.showTowers = false;
  }

  addThisTower(id, add){
    this.addTower = false;
    this.showTowers = true ;
    this.arr.push (    { towerId: id, location: add, address: add, isActive : false ,currentFuelStock : 150, hardwareSoftwareInstalled : true, remarks : "working fine"}
  )
  }

}
