import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EditComponent } from './shopping/edit/edit.component';
import { ListComponent } from './shopping/list/list.component';
import { RecipeList } from './recipe/recipeList/recipeList.component';
import { ItemComponent } from './recipe/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditComponent,
    ListComponent,
    RecipeList,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
