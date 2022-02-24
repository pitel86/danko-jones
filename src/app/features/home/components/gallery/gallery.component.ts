import { Image } from 'src/app/shared/models/shared';
import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/home';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public gallery: Gallery[];
  constructor() { 
    this.gallery = [
      {
        title: 'I\'m Alive and On Fire',
        image: {
          src: '../../../../../../../assets/images/disc1.jpg',
          alt: 'I\'m Alive and On Fire'
        }
      },
      {
        title: 'Born a Lion',
        image: {
          src: '../../../../../../../assets/images/disc2.jpg',
          alt: 'Born a Lion'
        }
      },
      {
        title: 'We Sweat Blood',
        image: {
          src: '../../../../../../../assets/images/disc3.jpg',
          alt: 'We Sweat Blood'
        }
      },
      {
        title: 'Sleeps Is The Enemy',
        image: {
          src: '../../../../../../../assets/images/disc4.jpg',
          alt: 'Sleeps Is The Enemy'
        }
      },
      {
        title: 'Never Too Loud',
        image: {
          src: '../../../../../../../assets/images/disc5.jpg',
          alt: 'Never Too Loud'
        }
      },
      {
        title: 'B-sides',
        image: {
          src: '../../../../../../../assets/images/disc6.jpg',
          alt: 'B-sides'
        }
      },
      {
        title: 'Below The Belt',
        image: {
          src: '../../../../../../../assets/images/disc7.jpg',
          alt: 'Below The Belt'
        }
      },
      {
        title: 'Rock and Roll Is Black And Blue',
        image: {
          src: '../../../../../../../assets/images/disc8.jpg',
          alt: 'Rock and Roll Is Black And Blue'
        }
      },
      {
        title: 'Garage Rock!',
        image: {
          src: '../../../../../../../assets/images/disc9.jpg',
          alt: 'Garage Rock!'
        }
      },
      {
        title: 'Fire Music',
        image: {
          src: '../../../../../../../assets/images/disc10.jpg',
          alt: 'Fire Music'
        }
      },
      {
        title: 'Wild Cat',
        image: {
          src: '../../../../../../../assets/images/disc11.jpg',
          alt: 'Wild Cat'
        }
      },
      {
        title: 'A Rock Supreme',
        image: {
          src: '../../../../../../../assets/images/disc12.jpg',
          alt: 'A Rock Supreme'
        }
      },
      {
        title: 'Power Trio',
        image: {
          src: '../../../../../../../assets/images/disc13.jpg',
          alt: 'Power Trio'
        }
      },
    ]
  }

  ngOnInit(): void {
    
  }

}
