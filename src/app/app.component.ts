import {
  Component,
  VERSION,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

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
  @ViewChild('AAA') AAA: ElementRef;
  @ViewChild('myNameElem') myNameElem: ElementRef;

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

  isLoading: boolean = false;
  //endpoint:string = '';

  constructor(private myhttp: HttpClient) {}

  ngOnInit() {
    // console.log(this.AAA.nativeElement.value);

    this.myhttp
      .get<Model_DepartmentEdit>(
        'https://lovetoshopmall.com/dataservice/categoryTest.php'
      )
      .subscribe(
        (result) => {
          // success
          this.isLoading = true;
          alert(this.isLoading);
        },
        (err) => {
          // some error happened
          this.isLoading = false;
          alert(this.isLoading);
        }
      );
  }

  ngAfterViewInit() {
    console.log(this.myNameElem.nativeElement.value);
  }

  get_EmployeeByID() {}
}
