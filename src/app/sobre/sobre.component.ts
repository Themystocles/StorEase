import { Component, OnInit } from '@angular/core';
import { DrawerService } from '../drawer.service';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

 constructor(private drawerService: DrawerService) { }

  ngOnInit(): void {
    this.drawerService.showDrawer = false;
  }
  ngOnDestroy() {
    this.drawerService.showDrawer = true;
  }
}
