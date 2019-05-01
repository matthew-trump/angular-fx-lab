import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-scroll',
  templateUrl: './chat-scroll.component.html',
  styleUrls: ['./chat-scroll.component.scss']
})
export class ChatScrollComponent implements OnInit {

  counter: number = 1;
  items: string[] = []
  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items.push("" + (this.counter++));
  }
  clear() {
    this.items = [];
  }

}
