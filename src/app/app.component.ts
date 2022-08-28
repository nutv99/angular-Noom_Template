import { Component, VERSION, OnInit } from '@angular/core';

interface Model_CustomerADD {
  id: string;
  type: string;
  name: string;
  ppu: number;
}

interface Model_CustomerEdit {
  id: string;
  type: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  CustomerADD: Model_CustomerADD = {
    id: '001',
    type: 'GradeA',
    name: 'Pubate',
    ppu: 111,
  };

  // CustomerEdit: Model_CustomerEdit = {
  //   id : '',
  //   type : ''
  // };

  CustomerEdit: Model_CustomerEdit = {
    id: '',
    type: '',
  };

  ngOnInit() {
    //alert(this.CustomerADD.id);
    this.CustomerEdit.id = this.CustomerADD.id;
    this.CustomerEdit.type = 'AAA';
  }
  
}
