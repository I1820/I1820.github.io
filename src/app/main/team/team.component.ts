import { Component, OnInit, HostBinding } from '@angular/core';

interface Member {
  name: string;
  roles: string[];
  avatar: string;
  url: string;
  socials: { [key: string]: string; };
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content';

  public members: Member[] = [
    {
      name: 'Parham Alvani',
      roles: ['Founder'],
      avatar: 'https://github.com/1995parham.png',
      url: 'https://1995parham.github.io/',
      socials: {
        github: 'https://github.com/1995parham',
      }
    }, {
      name: 'Iman Tabrizian',
      roles: ['Core Developer'],
      avatar: 'https://github.com/tabrizian.png',
      url: 'https://imantabrizian.me/',
      socials: {
        github: 'https://github.com/tabrizian'
      }
    }, {
      name: 'Elahe Jalalpour',
      roles: ['Researcher'],
      avatar: 'https://github.com/eljalalpour.png',
      url: 'http://ceit.aut.ac.ir/~jalalpour',
      socials: {
        github: 'https://github.com/eljalalpour',
      }
    }, {
      name: 'Sepehr Sabour',
      roles: ['Frontend Developer'],
      avatar: 'https://github.com/pesehr.png',
      url: 'https://pesehr.github.io/',
      socials: {
        github: 'https://github.com/pesehr',
      }
    }, {
      name: 'Sajjad Rahnama',
      roles: ['Backend Developer'],
      avatar: 'https://github.com/sajjadrahnama7.png',
      url: 'http://sajjadrahnama7.github.io/',
      socials: {
        github: 'https://github.com/sajjadrahnama7',
      }
    }, {
      name: 'Mohammad Hussein Tavakoli Bina',
      roles: ['Product Manager'],
      avatar: 'https://github.com/mhtb32.png',
      url: 'http://mhtb.ir/',
      socials: {
        github: 'https://github.com/mhtb32',
      }
    }, {
      name: 'Mahtab Farrokh',
      roles: ['Intern'],
      avatar: 'https://github.com/mahtabfarrokh.png',
      url: '',
      socials: {
        github: 'https://github.com/mahtabfarrokh'
      }
    }, {
      name: 'Ramtin Shakeri',
      roles: ['Intern'],
      avatar: 'https://github.com/RamtinSh7596.png',
      url: '',
      socials: {
        github: 'https://github.com/RamtinSh7596',
      }
    }, {
      name: 'Mohammad Taha Mehrabbeygi',
      roles: ['Designer'],
      avatar: 'https://github.com/mtaha1996.png',
      url: '',
      socials: {
        github: 'https://github.com/mtaha1996',
      }
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
