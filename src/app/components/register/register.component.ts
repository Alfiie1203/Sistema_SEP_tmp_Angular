import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userLogged=this.auth.obtenerUser();
  informacion: any[] = [];

  createRegister: FormGroup;
  informacionUser: any[] = [];  
  informacionCorreoUser: any[] = [];
  
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder, private sepService: SepService, private auth: AuthService, private toastr: ToastrService) {
    this.createRegister = this.fb.group({
      nombre: ['',Validators.required],
      email: ['',Validators.required],
      pass: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registrar(){
    this.submitted = true;
    if(this.createRegister.invalid){
      this.toastr.error('Recuerda que todos los campos son obligatorios','Algo salio mal !',{
        timeOut: 10000,
        progressBar: true
      });
      return;
    }
    const usuario: any = {
      usuario: this.createRegister.value.nombre,
      email: this.createRegister.value.email,
      pass: this.createRegister.value.pass,   
    }
    this.loading = true;

      
      this.auth.register(usuario.email,usuario.pass).then(res =>{
        localStorage.setItem('email',usuario.email);


        this.loading = false;
        }).catch(error =>{
          console.log(error);
          this.loading = false;
        });



    
    
    
        
  }

}
