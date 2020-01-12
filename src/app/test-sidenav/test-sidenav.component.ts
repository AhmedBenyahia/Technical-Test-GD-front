import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-test-sidenav',
  templateUrl: './test-sidenav.component.html',
  styleUrls: ['./test-sidenav.component.css']
})
export class TestSidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  showMenu: any;

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleMenu() {
    this.showMenu = ! this.showMenu;
  }
}
