import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: any[] = [];

  constructor(
    private favoriteService: FavoriteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadFavorites();
  }

  ionViewWillEnter() {
    this.loadFavorites(); // recarrega ao entrar na tela
  }

  loadFavorites() {
    this.favorites = this.favoriteService.getFavorites();
  }

  goToDetails(article: any) {
    this.router.navigateByUrl('/details', { state: { article } });
  }

  removeFavorite(article: any) {
    this.favoriteService.removeFavorite(article);
    this.loadFavorites();
  }
}
