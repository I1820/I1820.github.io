import { Component, OnInit, HostBinding } from '@angular/core';

interface Member {
  name: string;
  nameFa?: string;
  roles: string[];
  bio: string;
  bioFa?: string;
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
      bio: 'The Father who lost everything',
      avatar: 'https://github.com/1995parham.png',
      url: 'https://1995parham.github.io/',
      socials: {
        github: 'https://github.com/1995parham',
      }
    }, {
      name: "Iman Tabrizian",
      roles: ['Core Developer'],
      bio: "Docker Man",
      avatar: "https://github.com/tabrizian.png",
      url: "https://imantabrizian.me/",
      socials: {
        github: "https://github.com/tabrizian"
      }
    }, {
      name: "Elahe Jalalpour",
      roles: ['Researcher'],
      bio: "Who names the I1820",
      avatar: "https://github.com/eljalalpour.png",
      url: "http://ceit.aut.ac.ir/~jalalpour",
      socials: {
        github: "https://github.com/eljalalpour",
      }
    }, {
      name: "Sepehr Sabour",
      roles: ['Frontend Developer'],
      bio: "A Friend",
      avatar: "https://github.com/pesehr.png",
      url: "https://pesehr.github.io/",
      socials: {
        github: "https://github.com/pesehr",
      }
    }, {
      name: "Sajjad Rahnama",
      roles: ['Backend Developer'],
      bio: "A Friend",
      avatar: "https://github.com/sajjadrahnama7.png",
      url: "http://sajjadrahnama7.github.io/",
      socials: {
        github: "https://github.com/sajjadrahnama7",
      }
    }, {
      name: "Mohammad Hussein Tavakoli Bina",
      roles: ['Product Manager'],
      bio: "A Manager",
      avatar: "https://github.com/mhtb32.png",
      url: "http://mhtb.ir/",
      socials: {
        github: "https://github.com/mhtb32",
      }
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
