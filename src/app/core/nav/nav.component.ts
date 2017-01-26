import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { Router} from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

// initialize mdl component handler
declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
})



export class NavComponent implements OnInit {
  menuItems: {name: string, route: string}[] = [
    {
      name: 'Overview',
      route: '/overview'
    },
    {
      name: 'Getting Started',
      route: '/get-started'
    },
    {
      name: 'Layout',
      route: '/layout'
    },
    {
      name: 'Colors',
      route: '/colors'
    },
    {
      name: 'Typography',
      route: '/typography'
    },
    {
      name: 'Components',
      route: '/components'
    }
  ];

  ngOnInit() {  }
  constructor(private router: Router) {

  }
}
