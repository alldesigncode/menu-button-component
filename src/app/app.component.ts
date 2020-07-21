import { Component } from '@angular/core';
import { menuData } from './helpers/menuData';
import { MenuModel } from './button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuData = menuData;

  onSelect(menu: MenuModel) {
    console.log(menu);

  }
}
