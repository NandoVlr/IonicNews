import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

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

  constructor(private router: Router, private auth: Auth) {}

  async register() {
    if (!this.name || !this.email || !this.password) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      console.log('Usuário criado:', userCredential.user);

      alert('Conta criada com sucesso!');
      this.router.navigateByUrl('/login');
    } catch (error: any) {
      console.error('Erro ao criar conta:', error);
      alert(this.firebaseErrorMessage(error.code));
    }
  }

  firebaseErrorMessage(code: string): string {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Este e-mail já está em uso.';
      case 'auth/invalid-email':
        return 'E-mail inválido.';
      case 'auth/weak-password':
        return 'A senha deve ter pelo menos 6 caracteres.';
      default:
        return 'Erro ao criar conta. Tente novamente.';
    }
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
