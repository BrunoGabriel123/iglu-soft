import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }


  ngOnInit() {
 
  }
  navigateToLanche() {
    this.router.navigate(['/lanche']);
  }
   
}
