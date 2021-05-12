import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { responseToFood } from 'src/app/utils/response.utils';
import { map } from 'rxjs/operators';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFoodByQuery(query: string): Observable<Food> {
    const params = new HttpParams({ fromObject: { title: query } });
    return this.doGet<any>('guessNutrition', params)
      .pipe(map(response => responseToFood(response)));
  }

  getFoodTypeAhead(query: string): Observable<Food> {
    const params = new HttpParams({ fromObject: { title: query } });
    return this.doGet<any>('guessNutrition', params)
      .pipe(map(response => responseToFood(response)));
  }



  private doGet<T>(url: string, params: HttpParams): Observable<T> {
    let headers = new HttpHeaders();
    headers = headers.append("x-rapidapi-key", environment.apiKey)
    headers = headers.append('x-rapidapi-host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com');
    return this.http.get<T>(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${ url }`, {  headers, params });
  }
}
