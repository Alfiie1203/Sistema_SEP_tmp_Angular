import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-kobo',
  templateUrl: './kobo.component.html',
  styleUrls: ['./kobo.component.css']
})
export class KoboComponent implements OnInit {
  
  userLogged=this.auth.obtenerUser();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
