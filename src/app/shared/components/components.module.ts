import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FoodTypeaheadComponent } from './food-typeahead/food-typeahead.component';

@NgModule({
  declarations: [
    LoaderComponent,
    FoodTypeaheadComponent,
  ],
  imports: [
    CommonModule,
    TypeaheadModule.forRoot()
  ],
  exports: [
    LoaderComponent,
    FoodTypeaheadComponent
  ]
})
export class ComponentsModule { }
