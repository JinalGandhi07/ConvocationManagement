import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwardsComponent } from './awards/awards.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TicketComponent } from './ticket/ticket.component';
import  {AdminComponent} from './admin/admin.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'schedule', component:ScheduleComponent},
  {path:'register',component: RegisterComponent},
  {path:'awards',component: AwardsComponent},
  {path:'contact',component: ContactusComponent},
  {path:'ticket',component: TicketComponent},
  {path:'admin',component: AdminComponent},
  // {path:'signup',component: SignupComponent},
  // {path:'summary',component: SummaryComponent},
  // {path:'**',component: SigninComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
