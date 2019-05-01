import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss']
})
export class TemplateRefComponent implements OnInit {

  items: any[] = [
    { title: 'Item 1' }, { title: 'Item 2' }, { title: 'Item 3' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
