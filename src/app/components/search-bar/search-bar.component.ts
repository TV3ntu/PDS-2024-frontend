import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  value = ""

  search() {
    this.value = ""
    // TODO: Implementar lógica al buscar
  }
}
