import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hero_categories: any = [];
  isTelefono: boolean = true;
  currentIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.getCategories();
    this.checkDevice();
    console.log('hero_categories', this.hero_categories);
    console.log('isTelefono', this.isTelefono);
  }

  getCategories(): void {
    //* faccio una chiamata a un service che chiama una funzione nel backend e restituisce un oggetto
    // this.categoryService.getCategories().subscribe(
    //   (data: any) => {
    //     this.hero_categories = data;
    //   },
    //   (error: any) => {
    //     console.error('Error fetching hero categories', error);
    //   }
    // );

    const data = [
      {
        title: 'SS24 COLLECTION',
        image_mobile:
          'https://www.equiline.it/media/wysiwyg/banner_hero/SS24_mobile.jpg',
        image_desktop:
          'https://www.equiline.it/media/wysiwyg/banner_hero/SS24_desktop.jpg',
        buttonContent: 'PER LEI',
      },
      {
        title: 'SS24 COLLECTION',
        image_mobile:
          'https://www.equiline.it/media/wysiwyg/banner_hero/SS24_UM3.jpg',
        image_desktop:
          'https://www.equiline.it/media/wysiwyg/banner_hero/SS24_u.jpg',
        buttonContent: 'PER LUI',
      },
      {
        title: 'SS24 COLLECTION',
        image_mobile:
          'https://www.equiline.it/media/wysiwyg/banner_hero/SS24_horse_M.jpg',
        image_desktop:
          'https://www.equiline.it/media/wysiwyg/banner_hero/SS24_horse.jpg',
        buttonContent: 'PER IL CAVALLO',
      },
    ];

    this.hero_categories = data;
  }

  // funzione per mostrare foto mobile oppure desktop
  checkDevice(): void {
    this.isTelefono = window.innerWidth < 768;
  }

  // logica slider hero
  nextSlide(): void {
    if (this.currentIndex < this.hero_categories.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first slide
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.hero_categories.length - 1; // Loop back to the last slide
    }
  }
}
