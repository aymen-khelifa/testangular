import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenumoduleRoutingModule } from './menumodule-routing.module';
import { AddMenuComponentComponent } from '../add-menu-component/add-menu-component.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddMenuComponentComponent
  ],
  imports: [
    CommonModule,
    MenumoduleRoutingModule,FormsModule,
  ]
})
export class MenumoduleModule { }
