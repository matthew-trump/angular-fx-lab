import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent
} from '@angular/animations';

@Component({
  selector: 'app-view-enter-leave',
  templateUrl: './view-enter-leave.component.html',
  styleUrls: ['./view-enter-leave.component.scss'],
  animations: [
    trigger('showing', [

      transition(':enter', [
        style({ opacity: 0.1, color: '#000000' }),
        animate('2s', style({
          opacity: 1,
          color: '#ff0000'
        }))
      ]
      ),
      transition(':leave', [
        style({ opacity: 1, color: '#ff0000' }),
        animate('2s', style({
          opacity: 0.1,
          color: '#000000'
        }))
      ]
      )


    ]),
  ]
})
export class ViewEnterLeaveComponent implements OnInit {

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
    console.log(event.phaseName, event);
  }
}
