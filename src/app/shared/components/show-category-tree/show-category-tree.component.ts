import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-show-category-tree',
  templateUrl: './show-category-tree.component.html',
  styleUrls: ['./show-category-tree.component.scss']
})
export class ShowCategoryTreeComponent implements OnInit {

  categoryData: Category[] = [];

  @Output()
  categoryText: EventEmitter<string> = new EventEmitter();

  constructor(private readonly categoryService: CategoryService) {
    this.categoryService.getAllProductCategory();
    this.categoryService.getCategory().subscribe(data => {
      this.categoryData = data;
    });
  }

  ngOnInit(): void {
  }

  onCategorySelected(category: string) {
    this.categoryText.emit(category);
  }

}
