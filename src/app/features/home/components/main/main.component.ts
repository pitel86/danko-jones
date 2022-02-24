import { Component, OnInit } from '@angular/core';
import { Main } from '../../models/home';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public main: Main[];
  constructor() { 
    this.main = [
      {
        title: 'Danko Jones',
        text: 'voz/guitarra',
        img:{
          src: '../../../../../../../assets/images/voice.jpg',
          alt: 'Danko Jones'
        }
      },
      {
        title: 'John Calabrese',
        text: 'bajo',
        img:{
          src: '../../../../../../../assets/images/bass.jpg',
          alt: 'John Calabrese'
        }
      },
      {
        title: 'Dan Cornelius',
        text: 'batería',
        img:{
          src: '../../../../../../../assets/images/drums.jpg',
          alt: 'Dan Cornelius'
        }
      }
    ];
  }

  ngOnInit(): void {
  }

}
