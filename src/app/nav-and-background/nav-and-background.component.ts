import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-and-background',
  templateUrl: './nav-and-background.component.html',
  styleUrl: './nav-and-background.component.css'
})
export class NavAndBackgroundComponent {

    items: any = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'Series',
        icon: 'pi pi-fw pi-desktop',
        routerLink: '/series'
      },
      {
        label: 'Movies',
        icon: 'pi pi-fw pi-video ',
        routerLink: '/movies'
      }
    ]
}
