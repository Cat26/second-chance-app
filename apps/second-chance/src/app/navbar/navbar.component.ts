import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  notLoggedInUserIcon = faUserCircle;
  isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
