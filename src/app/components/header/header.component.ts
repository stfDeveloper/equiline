import { Component, OnInit } from '@angular/core';
import { MenuDialogComponent } from '../menu/menu.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openMenu(): void {
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      hasBackdrop: true,
      position: { left: '0' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
