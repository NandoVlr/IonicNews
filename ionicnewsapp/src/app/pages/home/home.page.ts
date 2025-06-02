import { OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FavoriteService } from 'src/app/services/favorite.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, HttpClientModule],
  templateUrl: '/home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  articles: any[] = [];
  categories: string[] = ['general', 'technology', 'sports', 'business', 'entertainment', 'health', 'science'];
  selectedCategory = 'general';
  isLoading = false;

  constructor(private newsService: NewsService, private router: Router, private favoriteService: FavoriteService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.isLoading = true;
    this.newsService.getTopHeadlines(this.selectedCategory, 'us')
      .subscribe({
        next: (res) => {
          console.log('Resposta da API:', res);
          this.articles = res.articles;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Erro ao carregar notícias:', err);
          this.isLoading = false;
        }
      });
  }
  toggleFavorite(article: any) {
  if (this.favoriteService.isFavorite(article)) {
    this.favoriteService.removeFavorite(article);
  } else {
    this.favoriteService.addFavorite(article);
  }
}

isFavorite(article: any): boolean {
  return this.favoriteService.isFavorite(article);
}
  goToDetails(article: any) {
  this.router.navigateByUrl('/details', { state: { article } });
}
  onCategoryChange() {
    this.loadNews();
  }

}
