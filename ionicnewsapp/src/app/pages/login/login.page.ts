import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

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

  constructor(private router: Router, private auth: Auth) {}

  async login() {
    if (!this.email || !this.password) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      console.log('Login bem-sucedido:', userCredential.user);
      this.router.navigateByUrl('/home');
    } catch (error: any) {
      console.error('Erro ao fazer login:', error);
      alert(this.firebaseErrorMessage(error.code));
    }
  }

  firebaseErrorMessage(code: string): string {
    switch (code) {
      case 'auth/user-not-found':
        return 'Usuário não encontrado.';
      case 'auth/wrong-password':
        return 'Senha incorreta.';
      case 'auth/invalid-email':
        return 'Email inválido.';
      default:
        return 'Erro ao fazer login. Tente novamente.';
    }
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
