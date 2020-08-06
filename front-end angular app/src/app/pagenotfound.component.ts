import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: `
    <h2>&nbsp;:-(</h2>  
    <p>404 page not found!</p>
  `,
  styles: [
  ]
})
export class PagenotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
