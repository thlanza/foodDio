import { createAction, props } from '@ngrx/store';

export const loadCurrentFood = createAction(
  '[Home] Load Current Food',
  props<{ query: string }>()
);

export const loadCurrentFoodSuccess = createAction(
  '[Food API] Load Current Food Success',
  props<{ entity: any }>()
);

export const loadCurrentFoodFailed = createAction(
  '[Food API] Load Current Food Failed'
);

export const clearHomeState = createAction('[Home] Clear Home State');

