import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-menu-power',
  templateUrl: './menu-power.component.html',
  styleUrls: ['./menu-power.component.css']
})
export class MenuPowerComponent implements OnInit {
  userLogged=this.auth.obtenerUser();
  email1="mariana.avalos@proforest.net";
  email2="alfredo.1203@hotmail.com";
  email3="julio.martinez@proforest.net";
  email4="maximino.rivas@proforest.net";
  email5="sergio@proforest.net";
  email6="esteban@proforest.net";
  
  email7="mar.diaz@proforest.net";


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  salir(){
    this.auth.logOut();
    this.router.navigate(['/']); 
  }

}

