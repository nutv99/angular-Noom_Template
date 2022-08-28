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
สร้าง Model ดังนี้ 
1.Model สำหรับ getAll
2.Model สำหรับ get By ID
3.Model สำหรับ Add หรือ Post
4.Model สำหรับ Edit หรือ Patch
5.Model สำหรับ Delete หรือ Delete 
วิธีการ ไปที่ swagger 
Case 1 . getAll-->
*/
 * 

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent implements OnInit {
//สร้างตัวแปรดังนี้ 

  constructor() { }

  ngOnInit() {
  }

}