import { Component, VERSION, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Model_CustomerADD {
  id: string;
  type: string;
  name: string;
  ppu: number;
}

interface Model_DepartmentEdit {
  departmentID: number;
  departmentDesc: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  CustomerADD: Model_CustomerADD = {
    id: '001',
    type: 'GradeA',
    name: 'Pubate',
    ppu: 111,
  };

  DataFromBackEnd: Model_DepartmentEdit = {
    departmentID: 0,
    departmentDesc: '',
  };

  constructor(private myhttp: HttpClient) {}

  ngOnInit() {
    //alert(this.CustomerADD.id);
    // this.CustomerEdit.id = this.CustomerADD.id;
    // this.CustomerEdit.type = 'AAA';

    this.myhttp
      .get<Model_DepartmentEdit>(
        'https://lovetoshopmall.com/dataservice/categoryTest.php'
      )
      .subscribe((result) => {
        this.DataFromBackEnd = result;
        alert(this.DataFromBackEnd[0].departmentDesc);
      });
  }

  get_EmployeeByID() {}
}
