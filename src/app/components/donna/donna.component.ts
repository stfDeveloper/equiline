import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-donna',
  templateUrl: './donna.component.html',
  styleUrls: ['./donna.component.scss'],
})
export class DonnaComponent implements OnInit {
  form: FormGroup;
  data: any;

  // pattern di taglie
  misure = ['XXXS', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  //ordine da seguire per misure internazionali
  patternInternazionali = ['IT', 'FR', 'UK', 'US', 'EU'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedItem: [null],
    });
  }

  ngOnInit() {
    this.getProductSizes();
  }

  getProductSizes() {
    //* simulando una chiamata api, faccio una chiamata a un service che chiama una funzione nel backend e restituisce un oggetto

    // this.productsService.getAvailableSizes().subscribe(
    //   (apiResult: any) => {
    //     this.data = apiResult;
    //   },
    //   (error: any) => {
    //     console.error('Error product sizes', error);
    //   }
    // );

    let apiResult = [
      ' S, 43, XL, 40, 44, M, 12, IT 35, IT 43, FR 12, UK 50, XXL, IT 50',
    ];

    const productSizes = this.parseProductSizes(apiResult[0]);

    this.data = productSizes;

    console.log(this.data, 'qui');
    console.log('product sizes', productSizes);
  }

  parseProductSizes(sizeString: string): {
    // * qui la logica di smistamento.
    // * in un caso reale questa funzione sarebbe inclusa nel backend nella getAvailableSizes

    // Questa funzione prende una stringa di taglie di prodotti e la divide in tre categorie:
    // 1. Taglie normali (es. "S", "M", "L")
    // 2. Taglie numeriche (es. "38", "40", "42")
    // 3. Taglie internazionali (es. "UK 10", "FR 42")

    // Restituisce un oggetto con queste tre categorie di taglie
    taglieNormali: string[];
    taglieNumeriche: number[];
    misureInternazionali: { [key: string]: number[] };
  } {
    // Inizializziamo le tre categorie di taglie come array vuoti
    const taglieNormali: string[] = [];
    const taglieNumeriche: number[] = [];
    const misureInternazionali: { [key: string]: number[] } = {};

    // Dividiamo la stringa di taglie in un array di singole taglie
    // * sizes string è il parametro che prende -> l'array di taglie non ordinate
    const sizes = sizeString.split(',');
    for (const size of sizes) {
      // Rimuoviamo gli spazi bianchi all'inizio e alla fine di ogni taglia
      const trimmedSize = size.trim();
      // Controlliamo se la taglia è presente nell'array di taglie normali
      if (this.misure.includes(trimmedSize)) {
        // Se sì, aggiungiamo la taglia all'array di taglie normali
        taglieNormali.push(trimmedSize);
      } else if (!isNaN(parseInt(trimmedSize))) {
        // Se la taglia è un numero, la aggiungiamo all'array di taglie numeriche
        taglieNumeriche.push(parseInt(trimmedSize));
      } else {
        // Se la taglia è internazionale, la dividiamo in paese e valore
        //? oppure se è un qualche altro tipo di taglia
        const [country, sizeValue] = trimmedSize.split(' ');
        // Creiamo un array per il paese se non esiste già
        // * il primo valore è la chiave -> it, fr ...
        if (!misureInternazionali[country]) {
          misureInternazionali[country] = [];
        }
        // Aggiungiamo il valore della taglia all'array del paese
        misureInternazionali[country].push(parseInt(sizeValue));
      }
    }

    // Ordiniamo le taglie normali e numeriche in ordine crescente
    taglieNormali.sort(
      (a, b) => this.misure.indexOf(a) - this.misure.indexOf(b)
    );
    taglieNumeriche.sort((a, b) => a - b);

    // Ordiniamo le taglie internazionali in ordine crescente per ogni paese
    for (const country of this.patternInternazionali) {
      if (misureInternazionali[country]) {
        misureInternazionali[country].sort((a, b) => a - b);
      }
    }
    // Restituiamo un oggetto con le tre categorie di taglie
    return { taglieNormali, taglieNumeriche, misureInternazionali };
  }

  // prendo le chiavi per non fare arrabbiare il ngSelect
  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
