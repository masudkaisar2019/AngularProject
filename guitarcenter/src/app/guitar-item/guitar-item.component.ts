import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guitar-item',
  templateUrl: './guitar-item.component.html',
  styleUrls: ['./guitar-item.component.css']
})
export class GuitarItemComponent implements OnInit {
  @Input() guitarItem;

  constructor() { }

  ngOnInit() {
    // console.log(this.guitarItem);
  }


  viewGuitar() {
    // console.log('I am clicked');
  }

}
