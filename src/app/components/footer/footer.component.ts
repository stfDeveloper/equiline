import { Component, OnInit } from '@angular/core';

import { CreditsModalComponent } from '../credits-modal/credits-modal.component';

import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openCreditsModal(): void {
    this.dialog.open(CreditsModalComponent);
  }
}
