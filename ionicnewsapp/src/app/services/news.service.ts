import { HttpParams } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey: string = '7ee69918ed304a76835b74a4d02a3a32'; // substitua pela sua chave
  private baseUrl: string = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) {}

  /**
   * Busca as principais notícias por categoria e país
   */
  getTopHeadlines(category: string = 'technology', country: string = 'br'): Observable<any> {
    const params = new HttpParams()
      .set('country', country)
      .set('category', category)
      .set('apiKey', this.apiKey);

    return this.http.get(`${this.baseUrl}/top-headlines`, { params });
  }

  /**
   * Busca notícias por palavra-chave (query)
   */
  searchNews(query: string): Observable<any> {
    const params = new HttpParams()
      .set('q', query)
      .set('language', 'pt')
      .set('sortBy', 'publishedAt')
      .set('apiKey', this.apiKey);

    return this.http.get(`${this.baseUrl}/everything`, { params });
  }

  /**
   * Busca por país e categoria específicos (útil para filtros)
   */
  getNewsByCategoryAndCountry(category: string, country: string): Observable<any> {
    const params = new HttpParams()
      .set('category', category)
      .set('country', country)
      .set('apiKey', this.apiKey);

    return this.http.get(`${this.baseUrl}/top-headlines`, { params });
  }

}
