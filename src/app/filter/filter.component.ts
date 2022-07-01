import { Component, OnInit } from '@angular/core';
import { CustomPipe } from '../custom.pipe';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  
})
export class FilterComponent implements OnInit {

  names:string[]=["Ravi Bollineni","Bollineni","teja","Ravi","Teja Bollineni","Sai Bollineni","Ramesh Bollineni","Vamsi","Ravi teja","Vamsi Krishna","Krishna"];
  constructor() { }
  search:string="";
  ngOnInit(): void {
  }

}
