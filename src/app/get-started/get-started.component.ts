import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  title: string = 'Getting Started';
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
