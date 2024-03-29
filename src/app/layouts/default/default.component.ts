import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sidebarOpen = false;

  constructor() {}

  ngOnInit(): void {}

  onToggleSidebar(event: any): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
