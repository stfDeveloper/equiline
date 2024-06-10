import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-newsletter-msg',
  templateUrl: './newsletter-msg.component.html',
  styleUrls: ['./newsletter-msg.component.scss'],
})
export class NewsletterMsgComponent implements OnInit {
  notHome = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.notHome = !(event.url === '/' || event.url === '/home');
      });
  }
}
