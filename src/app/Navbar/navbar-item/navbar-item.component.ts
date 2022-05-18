import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css']
})
export class NavbarItemComponent implements OnInit {

  public name: String = ''
  public title: string = ''
  public imagePath: string = ''

  constructor() { }

  ngOnInit(): void {

    this.name = 'Muranga University of Technology';
    this.title = 'School Fees Management System';
    this.imagePath =''
  }

}
