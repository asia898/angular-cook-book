import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cook-book';
  showRecipes: boolean = false;
  showList: boolean = true;

  onSelectedSection(sectionData: {recipesSection: boolean, listSection: boolean}) {
    this.showRecipes = sectionData.recipesSection;
    this.showList = sectionData.listSection;
  }
}
