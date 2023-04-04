import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-powerbi',
  templateUrl: './powerbi.component.html',
  styleUrls: ['./powerbi.component.css']
})
export class PowerbiComponent implements OnInit {
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  salir(){
    this.auth.logOut();
    this.router.navigate(['/']); 
  }
}
