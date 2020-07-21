import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { gsap, Expo } from 'gsap';

export type MenuPosition =
  | 'topLeft'
  | 'bottomLeft'
  | 'topRight'
  | 'bottomRight';

export interface MenuModel {
  menuTitle: string;
  menuLink?: string;
  menuImageUrl?: string;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @ViewChild('menu', { static: true }) menu: ElementRef;

  @Input() menuPosition: MenuPosition = 'topLeft';
  @Input() menuData: MenuModel[];
  @Input() color = '#3d363b';
  @Input() disabled: boolean;
  @Output() menuSelect = new EventEmitter<MenuModel>();

  ngOnInit(): void {
    this.setMenuPosition();
  }

  setMenuPosition() {
    const menu = this.menu.nativeElement as HTMLDivElement;
    switch (this.menuPosition) {
      case 'topLeft':
        menu.style.right = '0';
        menu.style.bottom = '0';
        return;
      case 'bottomLeft':
        menu.style.top = '0';
        menu.style.right = '0';
        return;
      case 'topRight':
        menu.style.left = '0';
        menu.style.bottom = '0';
        return;
      case 'bottomRight':
        menu.style.top = '0';
        menu.style.left = '0';
        return;
      default:
        return;
    }
  }

  setStyles() {
    return {
      backgroundColor: this.color,
      opacity: this.disabled ? 0.3 : 1,
      cursor: this.disabled ? 'default' : 'pointer',
    };
  }

  showMenu(
    menu: HTMLDivElement,
    btn: HTMLButtonElement,
    overlay: HTMLDivElement
  ) {
    gsap.to(overlay, {
      duration: 0,
      autoAlpha: 1,
    });
    gsap.to(btn, {
      duration: 0.3,
      autoAlpha: 0,
      x: this.translatePosition.positionX,
      y: this.translatePosition.positionY,
      scale: 1.6,
      ease: Expo.easeInOut as any,
    });
    gsap.to(menu, {
      duration: 0.4,
      scale: 1,
      x: -10,
      y: -10,
      autoAlpha: 1,
      width: 250,
      height: 'auto',
      borderRadius: '15px',
      ease: Expo.easeInOut as any,
    });
    gsap.from(menu.children, {
      delay: 0.1,
      autoAlpha: 0,
      ease: Expo.easeInOut as any,
    });
  }

  get translatePosition(): { positionX: number; positionY: number } {
    switch (this.menuPosition) {
      case 'topLeft':
        return { positionX: -20, positionY: -20 };
      case 'topRight':
        return { positionX: 10, positionY: -20 };
      case 'bottomLeft':
        return { positionX: -20, positionY: 20 };
      case 'bottomRight':
        return { positionX: 10, positionY: 10 };
      default:
        return;
    }
  }

  select = (menu: MenuModel) => this.menuSelect.emit(menu);

  closeMenu(
    menu: HTMLDivElement,
    btn: HTMLButtonElement,
    overlay: HTMLDivElement
  ) {
    gsap.to(overlay, {
      duration: 0,
      autoAlpha: 0,
    });
    gsap.to(btn, {
      duration: 0.4,
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
      ease: Expo.easeInOut as any,
    });
    gsap.to(menu, {
      duration: 0.3,
      scale: 0.4,
      x: -10,
      y: -10,
      autoAlpha: 0,
      width: 0,
      height: 0,
      borderRadius: 0,
      ease: Expo.easeInOut as any,
    });
    gsap.from(menu.children, {
      duration: 0,
      autoAlpha: 1,
      ease: Expo.easeInOut as any,
    });
  }
}
