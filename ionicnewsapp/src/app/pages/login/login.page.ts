import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      alert('Preencha todos os campos!');
      return;
    }

    // Simulação de login bem-sucedido
    this.router.navigateByUrl('/home');
  }
goToHome() {
  this.router.navigateByUrl('/home');
}

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
