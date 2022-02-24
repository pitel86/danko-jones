import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/home';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public hero: Hero;
  constructor() {
    this.hero = {
      img:{
        src: '../../../../../../../assets/images/danko_jones.jpg',
        alt: 'danko jones'
      },
      description: "Danko Jones es una banda de hard rock originaria de Toronto, Canadá. La banda está formada por Danko Jones (voz/guitarra), John Calabrese (bajo) y Dan Cornelius (batería). "
    }
  }

  ngOnInit(): void {
  }

}
