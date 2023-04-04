import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged=this.auth.obtenerUser();


  constructor(private auth: AuthService, private router: Router) { }


  ngOnInit(): void {
  }

  salir(){
    this.auth.logOut();
    this.router.navigate(['/']); 
  }

}
