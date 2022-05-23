import { Component, OnInit } from '@angular/core';
import { Students } from '../student';
import { StudentService } from '../student.service';
import { StudentModel } from './student.model';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  title:string="product list";
// students:StudentModel[] | undefined;
  // students:StudentModel[] | undefined;

  stdnt: Students[] | undefined;
  constructor( private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data)=>{
      this.stdnt=JSON.parse(JSON.stringify(data));
    })
  }

}
