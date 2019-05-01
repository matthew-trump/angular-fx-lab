import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  query,
  stagger,
  transition,
  AnimationEvent
} from '@angular/animations';

@Component({
  selector: 'app-view-stagger',
  templateUrl: './view-stagger.component.html',
  styleUrls: ['./view-stagger.component.scss'],
  animations: [
    trigger('showing', [

      transition(':enter', [
        query('h1, h2', [
          style({ opacity: 0.1, transform: 'translateX(200px)' }),
          stagger(1000, [
            animate('2s', style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))
          ])
        ]),
      ]
      ),
      transition(':leave', [
        query('h1, h2', [
          stagger(-1000, [
            style({ opacity: 1, transform: 'translateX(0px)' }),
            animate('2s', style({
              opacity: 0.1,
              transform: 'translateX(200px)'
            }))
          ])
        ])

      ]
      )


    ]),
  ]
})
export class ViewStaggerComponent implements OnInit {

  constructor() { }
  showing: boolean = false;
  ngOnInit() {
  }
  enter() {
    this.showing = true;
    console.log("showing", this.showing);
  }
  leave() {
    this.showing = false;
    console.log("showing", this.showing);
  }
  animationEvent(event: AnimationEvent) {
    console.log(event);
  }

}
