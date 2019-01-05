import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content bg-silver-lighter';

  constructor() { }

  ngOnInit() {
  }

}
