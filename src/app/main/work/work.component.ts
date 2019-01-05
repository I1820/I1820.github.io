import { Component, OnInit, HostBinding } from '@angular/core';

interface Work {
  title: string;
  description: string;
  href: string;
  image: string;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.less']
})
export class WorkComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content';

  public works: Work[] = [
    {
      href: 'http://ceit.aut.ac.ir',
      title: 'Computer & Information Technology Engineering Department of Amirkabir University of Tech.',
      description: '',
      image: 'assets/img/work/w1.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
