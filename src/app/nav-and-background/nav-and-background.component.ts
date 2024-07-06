import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from '../Store/actions/login.actions';
import { selectLoginState } from '../Store/selectors/login.selectors';
@Component({
  selector: 'app-nav-and-background',
  templateUrl: './nav-and-background.component.html',
  styleUrl: './nav-and-background.component.css'
})
export class NavAndBackgroundComponent {
  state$: Observable<{ username: string, loggedIn: boolean }>;

  constructor(private store: Store<{ username: string, loggedIn: boolean }>) {
    this.state$ = this.store.select(selectLoginState);
  }
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
  logout() {
    this.store.dispatch(logout());
  }
}
