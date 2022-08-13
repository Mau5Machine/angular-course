import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-msg',
  templateUrl: './warning-msg.component.html',
  // styleUrls: ['./warning-msg.component.css']
  styles: [`
  h4 {
    color: red;
  }`]
})
export class WarningMsgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
