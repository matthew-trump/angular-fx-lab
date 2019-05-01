import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  query,
  animate,
  transition,
  AnimationEvent
} from '@angular/animations';

@Component({
  selector: 'app-view-query',
  templateUrl: './view-query.component.html',
  styleUrls: ['./view-query.component.scss'],
  animations: [
    trigger('showing', [

      transition(':enter', [
        query('h1', [
          style({ opacity: 0.1 }),
          animate('2s', style({
            opacity: 1

          }))
        ]),
      ]
      ),
      transition(':leave', [
        query('h2', [
          style({ opacity: 1 }),
          animate('2s', style({
            opacity: 0.1
          }))
        ])
      ]
      )


    ]),
  ]
})
export class ViewQueryComponent implements OnInit {

  constructor() { }
  ngOnInit() { }


  showing: boolean = false;
  enter() {
    this.showing = true;
    console.log("showing", this.showing);
  }
  leave() {
    this.showing = false;
    console.log("showing", this.showing);
  }
  animationEvent(event: AnimationEvent) {
    console.log(event.phaseName, event);
  }

}


