import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  group,
  style,
  animate,
  query,
  stagger,
  transition,
  AnimationEvent
} from '@angular/animations';

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.scss'],
  animations: [
    trigger('showing', [

      transition(':enter', [
        group([
          query('h1', [
            style({ opacity: 0.1, transform: 'translateX(200px)' }),
            animate('2s ease', style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))
          ]),
          query('h2', [
            style({ opacity: 0.1, transform: 'translateX(300px)' }),
            animate('2s 500ms ease', style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))

          ]),
        ])
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
export class ViewGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
