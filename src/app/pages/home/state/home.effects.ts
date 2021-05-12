import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromHomeActions from './home.actions';
import { FoodService } from "src/app/shared/services/food.service";

@Injectable()
export class HomeEffects {

  loadCurrentFood$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromHomeActions.loadCurrentFood),
      mergeMap(({ query }) => this.foodService.getFoodByQuery(query)),
      catchError((err, caught$) => {
        this.store.dispatch(fromHomeActions.loadCurrentFoodFailed());
        return caught$;
      }),
      map((entity: any) => fromHomeActions.loadCurrentFoodSuccess({ entity })),
    ),
  );

  constructor(private actions$: Actions,
              private store: Store,
              private foodService: FoodService) {
  }
}
