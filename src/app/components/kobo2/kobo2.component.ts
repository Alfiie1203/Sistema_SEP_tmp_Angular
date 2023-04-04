import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-kobo2',
  templateUrl: './kobo2.component.html',
  styleUrls: ['./kobo2.component.css']
})
export class Kobo2Component implements OnInit {

  userLogged=this.auth.obtenerUser();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
