import { AfterViewInit, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  template: `
    <section class="menu">
      <div class="d-flex flex-column">
        <div class="upper-header p-3 d-flex flex-column position-relative">
          <button class="close-button" (click)="closeMenu()">&times;</button>
          <div class="w-100">
            <p class="logo text-center">EQUILINE</p>
          </div>

          <div class="w-100">
            <input
              class="w-100 p-2 my-2"
              type="text"
              style="background-color: #2d2827; border: 1px solid white; color: white"
              placeholder="Cerca"
            />
          </div>

          <div class="w-100 d-flex flex-column mt-3">
            <div class="my-2">
              <p class="account d-flex align-items-center">
                <i class="fa-regular fa-user" style="font-size: 20px;"></i>
                <span class="px-2">Account</span>
              </p>
            </div>
            <div class="my-2">
              <p class="account d-flex align-items-center">
                <i class="fa-regular fa-heart" style="font-size: 20px;"></i>
                <span class="px-2">Lista Desideri</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="categories py-5 px-3">
        <ul>
          <li>
            <h1 class="px-3 ">
              <details>
                <summary class="d-flex justify-content-between border-bottom">
                  <span>DONNA</span>
                  <span>+</span>
                </summary>

                <article class="px-5 " (click)="(true)">
                  <span> Leggings Donna </span>
                </article>
                <article class="px-5 " (click)="(true)">
                  <span> Giacca Donna </span>
                </article>
              </details>
            </h1>
          </li>
        </ul>
      </div>
    </section>
  `,
  styles: [
    `
      .logo {
        font-family: 'Raleway', sans-serif !important;
        font-optical-sizing: auto;
        font-weight: 700;
        letter-spacing: 3px;
        font-style: normal;
        font-size: 25px;
        color: white;
      }

      .menu {
        width: 100vw;
        height: 100vh;
        background-color: white;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        box-sizing: border-box;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        transform: translateX(-100%);
        transition: transform 0.5s ease-in-out;
      }

      .menu.open {
        transform: translateX(0);
      }

      .menu.close {
        transform: translateX(-100%);
      }

      .upper-header {
        background-color: black;
      }

      .account {
        color: white;
      }

      .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        outline: none;
      }

      .close-button:focus {
        outline: none;
      }
      .close-button:hover {
        color: red;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      summary {
        list-style: none;
      }

      article span {
        font-size: 14px;
      }

      summary span {
        color: black;
      }

      summary::-webkit-details-marker {
        display: none;
      }

      summary {
        color: white;
        padding: 10px;
        border-radius: 5px;
      }

      details[open] summary {
        border-radius: 5px 5px 0 0;
      }

      details {
        border-radius: 5px;
      }
    `,
  ],
})
export class MenuDialogComponent implements AfterViewInit {
  constructor(public dialogRef: MatDialogRef<MenuDialogComponent>) {}

  ngAfterViewInit(): void {
    const menuElement = document.querySelector('.menu');
    if (menuElement) {
      setTimeout(() => {
        menuElement.classList.add('open');
      }, 0);
    }
  }

  // tasto chiudi menu + animazione
  closeMenu(): void {
    const menuElement = document.querySelector('.menu');
    if (menuElement) {
      menuElement.classList.add('close');
      menuElement.addEventListener(
        'transitionend',
        () => {
          this.dialogRef.close();
        },
        { once: true }
      );
    }
  }
}
