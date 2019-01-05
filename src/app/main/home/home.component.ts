import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  @HostBinding('attr.class') elementClasses = 'section-container p-0 bg-black-darker';
  @HostBinding('style.height.px') elementHeight = window.innerHeight;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.elementHeight = event.target.innerHeight;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
