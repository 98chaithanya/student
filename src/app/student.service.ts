import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentModel } from './studentlist/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  getStudents(){
    return this.http.get("https://jsonplaceholder.typicode.com/albums");
  }
  newStudent(item: StudentModel)
{
  return this.http.post("https://jsonplaceholder.typicode.com/albums",{"student":item})
  .subscribe(data=>{console.log(data)});
}
}
