import { Location } from '@angular/common';
import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
FetchApiService;
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/_config/config.service';
import { FetchApiService } from 'src/app/_services/fetch-api/fetch-api.service';

/*
สร้าง Model เพื่อไว้แสดงผล และส่งข้อมูล Form  ดังนี้ 
1.Model สำหรับ getAll
2.Model สำหรับ get By ID
3.Model สำหรับ Add หรือ Post
4.Model สำหรับ Edit หรือ Patch
5.Model สำหรับ Delete หรือ Delete // ปกติไม่ค่อยใช้ Model ในการ Delete ใช้แค่ id
วิธีการ 
1.ไปที่  http://json2ts.com/
2.ไปที่  swagger  copy ค่า json ของ getAll ออกมา และไปที่หน้าเวบ json2ts 
Case 1 . getAll--> นำ json ไปวางแล้ว gen TS Model ออกมา แก้ชื่อ Model โดยให้มี Model_ นำหน้า และ  _getALL ต่อท้าย
เพื่อการสื่อความหมาย 
export interface Model_Employee_GetAll {
        name: string;
        salary: number;
        married: boolean;
}
ก็จะ ได้ Model getALL แล้ว ทำต่อไป จนครบ 5 Model โดยแต่ละอัน จะใส่ suffix _ ต่อท้ายดังเช่น _Post _Patch _Delete
เช่น Model สำหรับ Post ก็จะเป็นชื่อ Model ดังเช่น Employee_Post ,Employee_Patch
3.สร้างตัวแปร Model ให้ครบ 5 หมวด
ตัวอย่าง 
Employee_GetAll! : Model_Employee_GetAll ;
Employee_GetByID! : Model_Employee_GetById ;
Employee_Post! : Model_Employee_Post ;
Employee_Patch! : Model_Employee_Patch ;
Employee_Delete! : Model_Employee_Delete ;

4.สร้าง function สำหรับ getAll,getByID,Post,Patch,Delete

*/

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css'],
})
export class PrototypeComponent implements OnInit {
  //สร้างตัวแปรดังนี้

  constructor() {}

  ngOnInit() {}
}
