import { Component, VERSION ,OnInit } from '@angular/core';

export interface Model_CustomerADD {
  id: string;
  type: string;
  name: string;
  ppu: number;
}

export interface Model_CustomerEdit {
  id: string;
  type: string;    
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit  {
  name = 'Angular ' + VERSION.major;

  CustomerADD: Model_CustomerADD = {
    id: '001',
    type: 'GradeA',
    name: 'Pubate',
    ppu: 111,
  };
  CustomerEdit: Model_CustomerEdit;
 
  ngOnInit() {
    this.CustomerEdit = this.CustomerADD ;

  }
}
