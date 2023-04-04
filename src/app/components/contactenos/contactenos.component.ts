import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {
  userLogged=this.auth.obtenerUser();
  createRegister: FormGroup;
  informacion: any[] = [];
  submitted = false;
  loading = false;
  fecha = new Date()
  id: string | null;

  constructor(private auth: AuthService, private fb: FormBuilder, private sepService: SepService, private toastr: ToastrService,
    private aRoute: ActivatedRoute, private router: Router) {
      this.createRegister = this.fb.group({    
        
        //Matriz 1:
        //Pregunta 1
        tz1: ['',Validators.required],
        tz2: ['',Validators.required],
        tz3: ['',Validators.required],
        tz4: ['',Validators.required],
        tz5: ['',Validators.required],
        tz6: ['',Validators.required],
        tz7: ['',Validators.required],
        tz8: ['',Validators.required],
        tz9: ['',Validators.required],
        tz10: ['',Validators.required],
        tz11: ['',Validators.required],

      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {    
    this.getInformacionCorreo()
    this.esEditar();
  }

  getInformacionCorreo(){
    this.sepService.getInformacion().subscribe(data=>{
      this.informacion = [];
      data.forEach((element: any) => {
        this.informacion.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    });
  }

  editar() {
    this.submitted = true;
    if(this.createRegister.invalid){
      this.toastr.error('Recuerda que todos los campos son obligatorios, no olvides seguir los ejemplos','Algo salio mal !',{
        timeOut: 5000,
        progressBar: true
      });
      return;
    }
    if(this.id === null){
      this.router.navigate(['/listar-respuestas-correo'])
    }else{
      this.editarinfo(this.id);
    }

  }

  editarinfo(id: string){
    const asd: any = {
      tz1:  this.createRegister.value.tz1,
      tz2:  this.createRegister.value.tz2,
      tz3:  this.createRegister.value.tz3,      
      tz4:  this.createRegister.value.tz4,      
      tz5:  this.createRegister.value.tz5,      
      tz6:  this.createRegister.value.tz6,
      tz7:  this.createRegister.value.tz7,
      tz8:  this.createRegister.value.tz8,      
      tz9:  this.createRegister.value.tz9,      
      tz10: this.createRegister.value.tz10,      
      tz11: this.createRegister.value.tz11,
      

    }
    this.loading = true;
    this.sepService.editIformacion(id,asd).then(() =>{
      this.loading = false;
      this.router.navigate(['/listar-respuestas-correo'])
    })

  }

  esEditar() {
    if (this.id !== null) {
      this.loading = true;
      this.sepService.getInformacionById(this.id).subscribe(data =>{
        this.loading= false;
        this.createRegister.setValue({
          tz1:  data.payload.data()['tz1'],
          tz2:  data.payload.data()['tz2'],
          tz3:  data.payload.data()['tz3'],    
          tz4:  data.payload.data()['tz4'],      
          tz5:  data.payload.data()['tz5'],      
          tz6:  data.payload.data()['tz6'],
          tz7:  data.payload.data()['tz7'],
          tz8:  data.payload.data()['tz8'],    
          tz9:  data.payload.data()['tz9'],      
          tz10: data.payload.data()['tz10'],      
          tz11: data.payload.data()['tz11'],



        })
      })  
      
    }
  }

}
