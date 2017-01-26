import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  title: string = 'Layout';
  constructor(private titleService: Title, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // activate the route
    this.activatedRoute.data.subscribe(
        (data: any) => {
            this.title = data.title;
            this.titleService.setTitle(data.title);
        },
        (error: any) => this.titleService.setTitle(this.title));
  }

}
