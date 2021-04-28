import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seminarie-component',
  templateUrl: './seminarie.component.html',
  styleUrls: ['./seminarie.component.scss']
})
export class SeminarieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    window.location.pathname = "/seminarie/details";
  }

}
