import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boddy',
  templateUrl: './boddy.component.html',
  styleUrls: ['./boddy.component.scss']
})
export class BoddyComponent implements OnInit {
  showItensEstoque? : boolean


  ngOnInit(): void {
   this.showItensEstoque = true;
  }

 ngOnDestroi(){
  this.showItensEstoque = false;
 }

  

}
