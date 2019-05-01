import { Component, OnInit, Input } from '@angular/core';

const DARK: string = 'maroon';
const WHITE: string = 'white';
const DURATION: number = 1300;
const DIAMETER: number = 300;

@Component({
  selector: 'app-view-circular-wipe',
  templateUrl: './view-circular-wipe.component.html',
  styleUrls: ['./view-circular-wipe.component.scss']
})
export class ViewCircularWipeComponent implements OnInit {



  stage: any;
  index: number = 0;
  stages: any[] = [
    {
      background: DARK,
      color: DARK,
      diameter: 0,
      duration: DURATION,
    },
    {
      background: WHITE,
      color: WHITE,
      diameter: 0,
      duration: 0,
    },
    {
      background: WHITE,
      color: DARK,
      diameter: DIAMETER,
      duration: DURATION,
    },
    {
      background: DARK,
      color: DARK,
      diameter: 0,
      duration: 0,
    },

  ]
  constructor() { }

  ngOnInit() {
    this.index = -1;
    this.step();
    /** 
    const winW = window.outerWidth;
    const winH = window.outerHeight;
    const hyp = Math.ceil(Math.hypot(winW, winH)) + 100;

    const circleWipe1 = {
      diameter: 0,
      color: '#35399A'
    }
    const circleWipe2 = {
      diameter: hyp,
      color: '#FFF',

    }
    //Math.ceil(Math.hypot(winW, winH)) + 100;
    console.log("DIMENSIONS", winW, winH, hyp)
    */
  }
  step() {
    if (this.index < this.stages.length - 1) {
      this.index += 1;

    } else {
      this.index = 0;
    }
    this.stage = this.stages[this.index];
  }

}
