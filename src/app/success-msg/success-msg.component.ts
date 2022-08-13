import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-msg',
  // templateUrl: './success-msg.component.html',
  template: `
  <div class="container">
    <h4>The action has executed successfully!</h4>
  </div>
  `,
  styleUrls: ['./success-msg.component.css']
})
export class SuccessMsgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
