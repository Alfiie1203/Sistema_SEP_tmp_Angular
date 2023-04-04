import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard-aak-col',
  templateUrl: './dashboard-aak-col.component.html',
  styleUrls: ['./dashboard-aak-col.component.css']
})
export class DashboardAAKColComponent implements OnInit {

  userLogged=this.auth.obtenerUser();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
