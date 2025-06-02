import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private key = 'favorites';

  getFavorites(): any[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  addFavorite(article: any): void {
    const favorites = this.getFavorites();
    favorites.push(article);
    localStorage.setItem(this.key, JSON.stringify(favorites));
  }

  removeFavorite(article: any): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(item => item.title !== article.title);
    localStorage.setItem(this.key, JSON.stringify(favorites));
  }

  isFavorite(article: any): boolean {
    const favorites = this.getFavorites();
    return favorites.some(item => item.title === article.title);
  }
}
