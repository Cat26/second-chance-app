import { Component, OnInit } from '@angular/core';
import { faHome, faRecycle, faTrophy, faTree, faUserSecret} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  faHome = faHome;
  faRecycle = faRecycle;
  faTrophy = faTrophy;
  faTree = faTree;
  faUser = faUserSecret;

  constructor() { }

  ngOnInit(): void {
  }

}
