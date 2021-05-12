import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector('home');

export const selectCurrentFood = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.entity,
);

export const selectCurrentFoodLoading = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.loading,
);

export const selectCurrentFoodError = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.error,
);
