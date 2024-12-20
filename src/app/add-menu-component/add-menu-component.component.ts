import { Component, OnInit } from '@angular/core';
import { Menu } from '../modele/Menu';

@Component({
  selector: 'app-add-menu-component',
  templateUrl: './add-menu-component.component.html',
  styleUrls: ['./add-menu-component.component.css']
})
export class AddMenuComponentComponent implements OnInit{

  menu!: Menu;

  ngOnInit(): void {
    this.menu = new Menu();
  }

  add() {
    // this.user.category = "Customer";

   }
}
