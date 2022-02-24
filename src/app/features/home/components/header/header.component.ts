import { Component, OnInit } from '@angular/core';
import { Anchor, Image } from 'src/app/shared/models/shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navbar: Anchor[];
  public image: Image;
  constructor() { 
    this.image = {
      src: "../../../../../../../assets/images/danko-jones-logo.png",
      alt: ""
    }
    this.navbar = [
      {
        src: "#inicio",
        text: "Inicio",
        class: "navbar-link"
      },{
        src: "#danko-jones",
        text: "Danko Jones",
        class: "navbar-link"
      },{
        src: "#conocenos",
        text: "Conócenos",
        class: "navbar-link"
      },{
        src: "#discs",
        text: "Discografía",
        class: "navbar-link"
      }
    ];
  }

  ngOnInit(): void {
  }

}
