import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  userLogged=this.auth.obtenerUser();

  createRegister: FormGroup;
  
  submitted = false;
  loading = false;


  constructor(private fb: FormBuilder, private auth: AuthService, private toastr: ToastrService) {
      this.createRegister = this.fb.group({
        email: ['',Validators.required],
        pass: ['',Validators.required]
      })
    }

  ngOnInit(): void {
  }

  ingresar(){
    this.submitted = true;
    if(this.createRegister.invalid){
      this.toastr.error('Recuerda que todos los campos son obligatorios, no olvides seguir los ejemplos','Algo salio mal !',{
        timeOut: 5000,
        progressBar: true
      });
      return;
    }
    const usuario: any = {
      email: this.createRegister.value.email,
      pass: this.createRegister.value.pass
    }
    this.loading = true;

    this.auth.login(usuario.email,usuario.pass).then(res =>{
      localStorage.setItem('email',usuario.email.toLowerCase());
      //this.router.navigate(['/listar-respuestas-correo']); 
      this.loading = false;
      }).catch(error =>{
        console.log(error);
        this.loading = false;
      });
        
  }



  logout(){
    this.auth.logOut();
  }

}
