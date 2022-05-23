import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { StudentModel } from '../studentlist/student.model';

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.css']
})
export class NewstudentComponent implements OnInit {
  title:string="add student";
  constructor( private studentService:StudentService,private router:Router) { }
  studentItem=new StudentModel(0,0," ");
  ngOnInit(): void {
  }
AddStudent(){
  this.studentService.newStudent(this.studentItem);
  console.log("called");
  alert("success")
  this.router.navigate(['/']);
}
}
