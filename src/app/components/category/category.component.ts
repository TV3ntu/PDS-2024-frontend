import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() categoryList: string[] = ['Peluquería', 'Tecnología', 'Historia', 'Música'];
}
