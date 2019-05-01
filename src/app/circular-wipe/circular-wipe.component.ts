import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'circular-wipe',
  templateUrl: './circular-wipe.component.html',
  styleUrls: ['./circular-wipe.component.scss']
})
export class CircularWipeComponent implements OnInit {

  @Input() color: string;
  @Input() diameter: number;

  @Input() duration: number;

  constructor() { }

  ngOnInit() {
  }

}
