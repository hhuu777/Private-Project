import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
    @ViewChild('search')search : ElementRef
    @Output() searchFilter : EventEmitter<string> = new EventEmitter();
    searchKeyword : string;

    filterBySearch() {
        this.searchKeyword = this.search.nativeElement.value;
        let searchKeyword = this.searchKeyword;
        this.searchFilter.emit(searchKeyword);
    }
}
