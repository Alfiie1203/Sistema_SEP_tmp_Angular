import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userLogged=this.auth.obtenerUser();
  email1="lourdes.hernandez@aak.com"; //mex
  email2="lilia.gonzalez@aak.com"; //mex
  email3="carolina.lopez@aak.com"; //col
  email4="luis.rangel@proforest.net";
  email5="jose_morenoperalta@cargill.com";
  email6="georgios_tolis@cargill.com";
  email7="catalina_roman@cargill.com";
  email8="santiago.cortes@ldc.com";
  email9="lilia.gonzalez@aak.com";  //mex
  email10="jonathan.escolar@aak.com";
  email11="alexandra@proforest.net";
  email12="diego_munoz@cargill.com";


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  salir(){
    this.auth.logOut();
    this.router.navigate(['/']); 
  }

}
