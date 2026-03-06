import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  public tieneCamara: boolean = false;
  public isCollapsed = false;
  public showAppsMenu: boolean = false;
  public showUserMenu: boolean = false;

  logout() {
    this.closeMenu()
  }

  closeMenu() {
    $('.navbar-collapse').collapse('hide');
  }

  toggleAppsMenu() {
    this.showAppsMenu = !this.showAppsMenu;
    if (this.showAppsMenu) {
      this.showUserMenu = false;
      // Bloquear scroll del body en móvil
      if (window.innerWidth <= 768) {
        document.body.classList.add('menu-open');
      }
    } else {
      // Desbloquear scroll
      document.body.classList.remove('menu-open');
    }
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
    if (this.showUserMenu) {
      this.showAppsMenu = false;
    }
  }

  closeAppsMenu() {
    this.showAppsMenu = false;
    document.body.classList.remove('menu-open');
  }

  closeUserMenu() {
    this.showUserMenu = false;
  }

}
