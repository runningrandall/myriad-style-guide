import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

// initialize mdl component handler
declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent implements OnInit {
    title: string = '';
    public constructor(
      private titleService: Title,
      private router: Router,
      private activatedRoute: ActivatedRoute) { }
    ngOnInit() {
        // piggy backing off of the router event
        this.router.events
            .filter(event => event instanceof NavigationStart)
            .map(() => this.router.routerState.root)
            .subscribe((event) => {
            if (document.querySelector('.mdl-layout__obfuscator')) {
                document.querySelector('.mdl-layout__obfuscator').className = 
                  document.querySelector('.mdl-layout__obfuscator')
                    .className.replace(new RegExp('(?:^|\\s)'+ 'is-visible' + '(?:\\s|$)'), ' ');;
            }
                document.getElementById('style-guide-navigation__drawer').className =
                document.getElementById('style-guide-navigation__drawer')
                  .className.replace(new RegExp('(?:^|\\s)'+ 'is-visible' + '(?:\\s|$)'), ' ');
        });

      this.router.events
        .filter(event => event instanceof NavigationEnd)
        .map(() => this.router.routerState.root)
        .subscribe((event) => {
          componentHandler.upgradeDom();
        });

      this.router.events
        .filter(event => event instanceof NavigationEnd)
        .map(() => this.activatedRoute)
        .subscribe((event) => {
          this.title = this.titleService.getTitle();
        });
    }
}