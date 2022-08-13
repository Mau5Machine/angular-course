import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [`
    .logItem {
      color: white;
    }
  `]
})

export class DirectivesComponent implements OnInit {
  secretPass: string  = 'Something here';
  showDetails: boolean = false;
  clickLog = [];

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.showDetails = !this.showDetails;
    this.clickLog.push(new Date().getSeconds());
  }
}
