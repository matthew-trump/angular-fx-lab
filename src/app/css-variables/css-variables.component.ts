import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CssVars } from 'ngx-css-variables';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-css-variables',
  templateUrl: './css-variables.component.html',
  styleUrls: ['./css-variables.component.scss']
})
export class CssVariablesComponent implements OnInit {

  green: string = "#00ff00";
  customGreen: any;
  //public customCssVars: CssVars;
  customCssVars$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private sanitizer: DomSanitizer) {
    this.customCssVars$.next({
      '--green-color': "#00ffff"
    });
  }

  ngOnInit() {


    this.customGreen = this.sanitizer.bypassSecurityTrustStyle('--green-color:' + this.green + ')');
    console.log(this.customGreen);
  }
  changeCustomVariable() {
    console.log("Changing", '--green-color', "#0000ff");
    /** 
    this.customCssVars = {
      '--green-color': "#0000ff"
    }
    */
    //console.log(this.customCssVars);
    this.customCssVars$.next({
      '--green-color': "#0000ff"
    });
  }

}
