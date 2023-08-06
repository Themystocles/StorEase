import { Component } from '@angular/core';
import { DrawerService } from './drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StorEase';
 
  constructor(public drawerService: DrawerService) {
    
    
  }
}
