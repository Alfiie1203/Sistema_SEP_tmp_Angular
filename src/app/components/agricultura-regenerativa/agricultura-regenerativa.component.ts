import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-agricultura-regenerativa',
  templateUrl: './agricultura-regenerativa.component.html',
  styleUrls: ['./agricultura-regenerativa.component.css']
})
export class AgriculturaRegenerativaComponent implements OnInit {
  
  userLogged=this.auth.obtenerUser();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
