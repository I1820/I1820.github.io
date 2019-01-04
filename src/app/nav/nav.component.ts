import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  // indicates that page has been scrolled
  public hasScroll = false;

  public isCollapse = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_$event) {
    const el = document.documentElement;
    const top = (window.pageYOffset || el.scrollTop)  - (el.clientTop || 0);
    if (top > 0) {
      this.hasScroll = true;
    } else {
      this.hasScroll = false;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
