import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user: any = {
    name: 'Usuário Demo',
    email: 'usuario@email.com',
  };

  constructor(private router: Router) {}

  logout() {
    // Se estiver usando localStorage para login, limpe aqui
    this.router.navigateByUrl('/login');
  }
}
