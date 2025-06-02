import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name = '';
  email = '';
  password = '';

  constructor(private router: Router) {}
  goToLogin() {
  this.router.navigateByUrl('/login');
}

  register() {
    if (!this.name || !this.email || !this.password) {
      alert('Preencha todos os campos!');
      return;
    }

    // Simulação de cadastro
    alert('Conta criada com sucesso!');
    this.router.navigateByUrl('/login');
  }
}
