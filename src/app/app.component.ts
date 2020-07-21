import { Component } from '@angular/core';
import { MenuModel } from './button/button.component';
import { menuData } from './helpers/menuData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuData = menuData;










  onMenuSelect(menuItem: MenuModel) {
    console.log(menuItem);
  }
}
