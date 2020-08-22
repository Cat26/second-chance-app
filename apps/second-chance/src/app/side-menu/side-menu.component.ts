import { Component, OnInit } from '@angular/core';
import { faHome, faRecycle, faTrophy, faTree, faChild} from '@fortawesome/free-solid-svg-icons';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger(
      'enterDisplayAnimation', [
        transition(':enter', [
          style({display: 'none'}),
          animate('234ms', style({display: 'block'}))
        ])
      ]
    ),
    trigger(
      'enterOpacityAnimation', [
        transition(':enter', [
          style({opacity: '0'}),
          animate('1s', style({opacity: '1'}))
        ])
      ]
    )
  ]
})
export class SideMenuComponent implements OnInit {
  faHome = faHome;
  faRecycle = faRecycle;
  faTrophy = faTrophy;
  faTree = faTree;
  faUser = faChild;
  visibleElement = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
