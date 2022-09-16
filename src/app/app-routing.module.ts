import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCepComponent } from './get-cep/get-cep.component';

const routes: Routes = [
  { path: '', redirectTo: 'get-cep', pathMatch: 'full' },
  { path: 'get-cep', component: GetCepComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
