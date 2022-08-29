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
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

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
  apiURL: string = 'https://lovetoshopmall.com/dataservice/';
  //endpoint:string = '';

  constructor(private myhttp: HttpClient) {}

  ngOnInit() {
    // this.get_EmployeeByID();
    let data = this.getEmployees();
    // data.subscribe((response) => {
    //   alert(JSON.stringify(response));
    // });
    data.subscribe({
      next: (res) => {
        console.log(res);
        this.Message = 'ค้นคืนข้อมูล สำเร็จ';
        this.DataFromBackEnd = res;
      },
      error: (err: Error) => {
        err: err ? err : 'เกิดข้อผิดพลาด ไม่สามารถ ค้นคืนข้อมูล' + err.message;
        this.Message =
          'เกิดข้อผิดพลาด ไม่สามารถ ค้นคืนข้อมูล ::: ' + err.message;
        console.error(err);
      },
      complete: () => {
        console.info('complete'); // Stop & Destroy Observable
      },
    });

    console.log('Data ', data);
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
        this.Message = 'ค้นคืนข้อมูล สำเร็จ';
      },
      error: (err: Error) => {
        err: err ? err : 'เกิดข้อผิดพลาด ไม่สามารถ ค้นคืนข้อมูล' + err.message;
        this.Message =
          'เกิดข้อผิดพลาด ไม่สามารถ ค้นคืนข้อมูล ::: ' + err.message;
        console.error(err);
      },
      complete: () => {
        console.info('complete'); // Stop & Destroy Observable
      },
    });
  }

  getEmployees(): Observable<Model_DepartmentEdit> {
    return this.myhttp
      .get<Model_DepartmentEdit>(this.apiURL + '/categoryTest.php')
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);

    return throwError(() => {
      return errorMessage;
    });
  }
}
