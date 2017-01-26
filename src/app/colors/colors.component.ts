import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  title: string = 'Colors';
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
