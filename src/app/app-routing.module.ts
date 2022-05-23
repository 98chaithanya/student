import { NewstudentComponent } from './newstudent/newstudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'',component:StudentlistComponent},
{path:'add',component:NewstudentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
