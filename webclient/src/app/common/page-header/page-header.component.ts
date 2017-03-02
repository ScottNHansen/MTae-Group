import { Component } from '@angular/core';


@Component({
  selector: 'page-header',
  styles: [String(require('./page-header.css'))],
  templateUrl: './page-header.component.html'
})
export class PageHeaderComponent {

  public activePageTitle: string = 'FART';
  public routerLink: string = '/home';
  public pageIcon: string = 'fa fa-chevron-circle-down'

  constructor() {

  }
}
