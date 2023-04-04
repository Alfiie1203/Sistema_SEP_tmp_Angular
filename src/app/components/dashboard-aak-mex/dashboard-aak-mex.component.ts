import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard-aak-mex',
  templateUrl: './dashboard-aak-mex.component.html',
  styleUrls: ['./dashboard-aak-mex.component.css']
})
export class DashboardAAKMexComponent implements OnInit {

  userLogged=this.auth.obtenerUser();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
