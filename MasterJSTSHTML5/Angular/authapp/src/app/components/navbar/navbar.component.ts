import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  autenticado : boolean = false;
  constructor(@Inject(DOCUMENT) public document: Document, public auth:AuthService) {

  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(res=>{
        console.log(res);
        this.autenticado = res;
    });
  }

}
