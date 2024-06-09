// confirm-time-dialog.component.ts
import { Component } from '@angular/core';

interface DialogData {
  title: string;
  content: string;
  button: string;
}
@Component({
  selector: 'app-confirm-time-dialog',
  template: `
    <div class="p-4">
      <p
        class="title d-flex justify-content-center align-items-center flex-column"
      >
        MADE BY STEFAN SIRGHIE
      </p>
      <hr />
      <b class="d-flex justify-content-center align-items-center"
        >FOR COSMOBILE</b
      >
    </div>
  `,
  styles: [
    `
      .title {
        font-family: 'Aclonica', sans-serif;
      }
      .btn-conferma-prenotazione {
        width: 90%;
        padding: 10px;
        border-radius: 5em;
        font-size: 16px;
        background-color: white;
        color: black;
        transition: all 0.3s ease;
        border: 2px solid black;
        font-family: 'Aclonica', sans-serif;
      }
      .btn-conferma-prenotazione:not(:disabled):hover {
        background-color: #dd3545;
        border-color: #dd3545;
        transform: scale(1.1);
      }
    `,
  ],
})
export class CreditsModalComponent {
  constructor() {}
}
