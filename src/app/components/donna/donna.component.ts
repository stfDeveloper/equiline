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

  misure = ['XXXS', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  misureInternazionali = ['IT', 'FR', 'UK', 'US', 'EU'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedItem: [null],
    });
  }

  ngOnInit() {
    this.getProductSizes();
  }

  getProductSizes() {
    let apiResult = [
      ' S, 43, XL, 40, 44, M, 12, IT 35, IT 43, FR 12, UK 50, XXL, IT 50',
    ];

    const productSizes = this.parseProductSizes(apiResult[0]);

    this.data = productSizes;

    console.log(this.data, 'qui');
    console.log('product sizes', productSizes);
  }

  parseProductSizes(sizeString: string): {
    // Questa funzione prende una stringa di taglie di prodotti e la divide in tre categorie:
    // 1. Taglie normali (es. "S", "M", "L")
    // 2. Taglie numeriche (es. "38", "40", "42")
    // 3. Taglie internazionali (es. "UK 10", "FR 42")
    // Restituisce un oggetto con queste tre categorie di taglie
    normalSizes: string[];
    numericSizes: number[];
    internationalSizes: { [key: string]: number[] };
  } {
    // Inizializziamo le tre categorie di taglie come array vuoti
    const normalSizes: string[] = [];
    const numericSizes: number[] = [];
    const internationalSizes: { [key: string]: number[] } = {};

    // Dividiamo la stringa di taglie in un array di singole taglie
    const sizes = sizeString.split(',');
    for (const size of sizes) {
      // Rimuoviamo gli spazi bianchi all'inizio e alla fine di ogni taglia
      const trimmedSize = size.trim();
      // Controlliamo se la taglia è presente nell'array di taglie normali
      if (this.misure.includes(trimmedSize)) {
        // Se sì, aggiungiamo la taglia all'array di taglie normali
        normalSizes.push(trimmedSize);
      } else if (!isNaN(parseInt(trimmedSize))) {
        // Se la taglia è un numero, la aggiungiamo all'array di taglie numeriche
        numericSizes.push(parseInt(trimmedSize));
      } else {
        // Se la taglia è internazionale, la dividiamo in paese e valore
        const [country, sizeValue] = trimmedSize.split(' ');
        // Creiamo un array per il paese se non esiste già
        if (!internationalSizes[country]) {
          internationalSizes[country] = [];
        }
        // Aggiungiamo il valore della taglia all'array del paese
        internationalSizes[country].push(parseInt(sizeValue));
      }
    }

    // Ordiniamo le taglie normali e numeriche in ordine crescente
    normalSizes.sort((a, b) => this.misure.indexOf(a) - this.misure.indexOf(b));
    numericSizes.sort((a, b) => a - b);

    // Ordiniamo le taglie internazionali in ordine crescente per ogni paese
    for (const country of this.misureInternazionali) {
      if (internationalSizes[country]) {
        internationalSizes[country].sort((a, b) => a - b);
      }
    }
    // Restituiamo un oggetto con le tre categorie di taglie
    return { normalSizes, numericSizes, internationalSizes };
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
