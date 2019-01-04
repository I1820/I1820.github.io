import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content';

  constructor() { }

  ngOnInit() {
  }

}
