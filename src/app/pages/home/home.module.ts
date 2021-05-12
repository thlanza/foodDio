import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { CurrentFoodComponent } from './components/current-food/current-food.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './state/home.effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    CurrentFoodComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule
  ]
})
export class HomeModule { }
