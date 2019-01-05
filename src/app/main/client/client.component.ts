import { Component, OnInit, HostBinding } from '@angular/core';

interface Client {
  name: string;
  title: string;
  quote: string;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content has-bg bg-green';

  public clients: Client[] = [
    {
      name: 'Iman Tabrizian',
      title: 'Amirkabir IoT Project',
      quote: 'I1820 is small but good'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
