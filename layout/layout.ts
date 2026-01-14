import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLinkWithHref, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLinkWithHref, FormsModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  constructor(private router: Router) { }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleLinkClick() {
    // Closes the menu after clicking a link on mobile
    if (window.innerWidth <= 768) {
      this.isMenuOpen = false;
    }
  }

  goToUser() {
    this.router.navigate(['/users'])
  }
}
