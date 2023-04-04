import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {
  
  createRegister: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder, private sepService: SepService, private toastr: ToastrService,
    private aRoute: ActivatedRoute, private router: Router) {
      this.createRegister = this.fb.group({    
        
        //Matriz 1:
        //Pregunta 1
        userEmail: ['',Validators.required]

      })
     }

  ngOnInit(): void {
  }

  enviarEmail(){
    this.auth.resetPass(this.createRegister.value.userEmail);

    
    Swal.fire({
      title: '<strong>¡ Correo enviado !</u></strong>',
      icon: 'info',
      html:
        '<b> Te enviaremos un enlace para que restablezcas tu contraseña <br>  Es probable que llegue a la bandeja de no deseados </b>',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuar'
    });

    
    this.router.navigate(['/']);


  }

}
