import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-listar-todos',
  templateUrl: './listar-todos.component.html',
  styleUrls: ['./listar-todos.component.css']
})
export class ListarTodosComponent implements OnInit {

  items: Observable<any[]>;
  userLogged=this.auth.obtenerUser();

  constructor(private auth: AuthService, firestore: AngularFirestore, private router: Router) {    
    this.items = firestore.collection('respuestas').valueChanges();
   }

  ngOnInit(): void {
    this.getUser();
  }

  botonAgregar(){
    this.router.navigate(['/informacion-compania']);
  }

  getUser(){
    this.userLogged.subscribe(data =>{
      console.log(typeof data?.email);

    })
  }

}
