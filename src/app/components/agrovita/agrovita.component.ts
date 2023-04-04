import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-agrovita',
  templateUrl: './agrovita.component.html',
  styleUrls: ['./agrovita.component.css']
})
export class AgrovitaComponent implements OnInit {
  userLogged=this.auth.obtenerUser();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
