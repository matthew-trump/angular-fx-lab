import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'template-ref-tlist',
  templateUrl: './template-ref-tlist.component.html',
  styleUrls: ['./template-ref-tlist.component.scss']
})
export class TemplateRefTlistComponent implements OnInit {

  @ContentChild(TemplateRef)
  template: TemplateRef<any>;

  @Input() items: any[];

  constructor() { }

  ngOnInit() {
  }

}
