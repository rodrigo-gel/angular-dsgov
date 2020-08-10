import { WizardComponent } from './components/wizard/wizard.component';
import { SelectComponent } from './components/select/select.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"select",
    component:SelectComponent
  }
  ,
  {
    path:"wizard",
    component:WizardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
