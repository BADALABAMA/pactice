import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwapiComponent } from './swapi/swapi.component';

const routes: Routes = [{ path: 'swapi/:category', component: SwapiComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
