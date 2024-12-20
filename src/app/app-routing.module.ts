import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ListReservationsComponentComponent } from './list-reservations-component/list-reservations-component.component';
import { AddMenuComponentComponent } from './add-menu-component/add-menu-component.component';

const routes: Routes = [{ path: 'home', component: HomeComponentComponent },
  { path: 'reservations', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule) },
  { path: 'menus', loadChildren: () => import('./menumodule/menumodule.module').then(m => m.MenumoduleModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },


  



  { path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
