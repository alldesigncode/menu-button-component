import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { menuData } from './helpers/menuData';
import { MenuModel } from './button/button.component';
import { timer } from 'rxjs';

import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menuData = menuData;


  constructor() {}

  ngOnInit() {

  }





  onSelect(menu: MenuModel) {
    console.log(menu);
  }
}
