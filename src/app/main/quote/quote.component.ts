import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.less']
})
export class QuoteComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content bg-black-darker has-bg';

  constructor() { }

  ngOnInit() {
  }

}
