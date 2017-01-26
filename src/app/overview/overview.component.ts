import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  title: string = 'Myriad Style Guide';

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
