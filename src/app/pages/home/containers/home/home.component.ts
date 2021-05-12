import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { fromEvent, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Food } from 'src/app/shared/models/food';
import * as fromHomeActions from '../../state/home.actions';
import * as fromHomeSelectors from '../../state/home.selectors';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  food$: Observable<Food>;
  food: Food;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  searchControl: FormControl;
  text: string;

  private componentDestroyed$ = new Subject();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required);

    this.food$ = this.store.pipe(select(fromHomeSelectors.selectCurrentFood));
    this.food$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(value => this.food = value);
    this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentFoodLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentFoodError));
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
    this.store.dispatch(fromHomeActions.clearHomeState())
  }

  doSearch() {
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentFood({ query }));
  }
}
