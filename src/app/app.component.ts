import {
  Component,
  VERSION,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
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
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('myNameElem') myNameElem: ElementRef;

  Message: string = 'idle';
  MessageErr!: any;
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
  testMode: boolean = true;
  //endpoint:string = '';

  constructor(private myhttp: HttpClient) {}

  ngOnInit() {
    this.get_EmployeeByID();
  }

  ngAfterViewInit() {
    console.log(this.myNameElem.nativeElement.value);
  }

  get_EmployeeByID() {
    const http$ = this.myhttp.get<Model_DepartmentEdit>(
      'https://lovetoshopmall.com/dataservice/categoryTest888.php'
    );
    http$.subscribe({
      next: (res) => {
        console.log(res);
        this.Message = 'Get Data Success';
      },
      error: (err: Error) => {
        err: err ? err : 'เกิดข้อผิดพลาด ไม่สามารถ ค้นคืนข้อมูล' + err.message;
        this.Message = 'เกิดข้อผิดพลาด ไม่สามารถ ค้นคืนข้อมูล ::: ' + err.message;
        console.error(err);
      },
      complete: () => {
        console.info('complete'); // Stop & Destroy Observable
      },
    });
  }
}
