import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hero_categories: any = [];
  must_haves: any = [];
  testimonials: any = [];
  isTelefono: boolean = true;
  currentIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.getCategories();
    this.getMustHaves();
    this.getTestimonials();
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
    //     console.error('Error hero_categories', error);
    //   }
    // );

    const dataCollection = [
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

    this.hero_categories = dataCollection;
  }

  getMustHaves() {
    //* faccio una chiamata a un service che chiama una funzione nel backend e restituisce un oggetto
    // this.mustHavesService.getMustHaves().subscribe(
    //   (data: any) => {
    //     this.must_haves = data;
    //   },
    //   (error: any) => {
    //     console.error('Error fetching hero categories', error);
    //   }
    // );

    const mustHaves = [
      {
        title: 'LEGGINGS FULL GRIP INDIGO BLU CON LOGO LUCIDO DA DONNA',
        image:
          'https://www.equiline.it/media/catalog/product/cache/e90ab73c60532ca3d75feef049cc6e71/E/S/ES124PN09098262_B2C_ES124PN09098_262_01.jpg',
        price: '€120,00',
      },
      {
        title: 'GIACCA IMPERMEABILE NERA DA DONNA',
        image:
          'https://www.equiline.it/media/catalog/product/cache/e90ab73c60532ca3d75feef049cc6e71/E/S/ES124PQ10698006_B2C_ES124PQ10698_006_01.jpg',
        price: '€180,00',
      },
      {
        title:
          'POLO DA COMPETIZIONE BIANCA CON MANICHE LUNGHE IN TULLE DA DONNA',
        image:
          'https://www.equiline.it/media/catalog/product/cache/e90ab73c60532ca3d75feef049cc6e71/E/S/ES124PH00923001_B2C_ES124PH00923_001_01.jpg',
        price: '€140,00',
      },
      {
        title: 'PANTALONI BIANCHI FULL GRIP A VITA ALTA CON DETTAGLI CRISTALLO',
        image:
          'https://www.equiline.it/media/catalog/product/cache/e90ab73c60532ca3d75feef049cc6e71/E/S/ES124PN09106001_B2C_ES124PN09106_001_01.jpg',
        price: '€230,00',
      },
    ];

    this.must_haves = mustHaves;
  }

  getTestimonials() {
    //* faccio una chiamata a un service che chiama una funzione nel backend e restituisce un oggetto
    // this.testimonialsService.getTestimonials().subscribe(
    //   (data: any) => {
    //     this.testimonials = data;
    //   },
    //   (error: any) => {
    //     console.error('Error fetching testimonials', error);
    //   }
    // );

    const testimonialsData = [
      {
        name: 'GIACOMO ',
        surname: 'CASADEI',
        image: 'https://www.equiline.it/media/wysiwyg/casadei.jpg',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png?20160518044416',
        country: ' Italia',
      },
      {
        name: 'DARRAGH ',
        surname: 'KENNY',
        image: 'https://www.equiline.it/media/wysiwyg/darragh.jpg',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Ireland_%283-2%29.svg/640px-Flag_of_Ireland_%283-2%29.svg.png',
        country: ' Irlanda',
      },
      {
        name: 'ALBERTO ',
        surname: 'ZORZI',
        image: 'https://www.equiline.it/media/wysiwyg/alberto.jpg',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png?20160518044416',
        country: ' Italia',
      },
      {
        name: 'NIELS ',
        surname: 'BRUYNSEELS',
        image: 'https://www.equiline.it/media/wysiwyg/niels.jpg',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/800px-Flag_of_Belgium_%28civil%29.svg.png?20210827145021',

        country: ' Belgio',
      },
      {
        name: 'JANE ',
        surname: 'RICHARD',
        image: 'https://www.equiline.it/media/wysiwyg/jane.jpg',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Civil_Ensign_of_Switzerland.svg/640px-Civil_Ensign_of_Switzerland.svg.png',
        country: ' Svizzera',
      },
      {
        name: 'ISABEL ',
        surname: 'COOL',
        image: 'https://www.equiline.it/media/wysiwyg/isabel.jpg',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/800px-Flag_of_Belgium_%28civil%29.svg.png?20210827145021',
        country: ' Belgio',
      },
      {
        name: 'DOROTHEE ',
        surname: 'SCHNEIDER',
        image: 'https://www.equiline.it/media/wysiwyg/Rectangle_6.jpg',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Germany_%28WFB_2004%29.gif/640px-Flag_of_Germany_%28WFB_2004%29.gif ',
        country: ' Germania',
      },
    ];

    this.testimonials = testimonialsData;
  }

  // funzione per mostrare foto mobile oppure desktop
  checkDevice(): void {
    this.isTelefono = window.innerWidth < 768;
  }

  // logica slider hero
  nextSlide(): void {
    const heroContent = document.querySelector('.content');
    const background = document.querySelector('.background-image');

    heroContent?.classList.remove('slide-right', 'slide-left');
    heroContent?.classList.add('slide-right');

    heroContent?.classList.remove('slide-right', 'slide-left');
    heroContent?.classList.add('slide-right');

    setTimeout(() => {
      if (this.currentIndex < this.hero_categories.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      heroContent?.classList.remove('slide-right');
      background?.classList.remove('slide-right');
    }, 500);
  }

  prevSlide(): void {
    const heroContent = document.querySelector('.content');
    const background = document.querySelector('.background-image');

    heroContent?.classList.remove('slide-right', 'slide-left'); // Reset classes
    heroContent?.classList.add('slide-left');

    background?.classList.remove('slide-right', 'slide-left'); // Reset classes
    background?.classList.add('slide-left');

    setTimeout(() => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.hero_categories.length - 1; // Loop back to the last slide
      }
      heroContent?.classList.remove('slide-left');
      background?.classList.remove('slide-left');
    }, 500);
  }
}
