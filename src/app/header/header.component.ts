import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent {
    collapsed = true;
    @Output() selectedSection = new EventEmitter<{recipesSection: boolean, listSection: boolean}>();
    
    onRecipesClick() {
        this.selectedSection.emit({
            recipesSection: true,
            listSection: false
        });
    }

    onListClick() {
        this.selectedSection.emit({
            recipesSection: false,
            listSection: true
        });
    }
}
