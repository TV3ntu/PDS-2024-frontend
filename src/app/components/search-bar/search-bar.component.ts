import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  query = ""
  isCoursePage: boolean = false
  @Output() searchEvent = new EventEmitter<string>()

  constructor(private router: Router) {}

  ngOnInit() {
    const currentUrl = this.router.url
    this.isCoursePage = currentUrl.includes('curso')
  }

  search() {
    this.searchEvent.emit(this.query)
  }
}
