import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import Swal from 'sweetalert2';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-ver-info-trazabilidad',
  templateUrl: './ver-info-trazabilidad.component.html',
  styleUrls: ['./ver-info-trazabilidad.component.css']
})
export class VerInfoTrazabilidadComponent implements OnInit {
  @ViewChild('trazabilidad') inputTrazabilidad: ElementRef;
  userLogged=this.auth.obtenerUser();
  email = localStorage.getItem('email');
  info: any[] = [];  
  informacionUser: any[] = [];  
  informacionCorreoUser: any[] = [];
  createRegister: FormGroup;
  informacion: any[] = [];
  submitted = false;
  loading = false;
  fecha = new Date()
  id: string | null;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  constructor(private storage: AngularFireStorage, private auth: AuthService, private fb: FormBuilder, private sepService: SepService, private toastr: ToastrService,
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
        trazabilidad: [''],

      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {   
    this.getInformacionCorreo()
    this.getInformacion()
    this.esEditar();
  }

  getInformacion(){
    this.sepService.getInformacion().subscribe(data=>{
      this.informacion = [];
      data.forEach((element: any) => {
        this.informacion.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      
      this.info = [];
      for (let i = 0; i < this.informacion.length; i++) {
    //alexagalloz9@gmail.com | pedro.gonfrier@prestigecol.com | gerencia@frupalma.com | dgonzalez@numar.net
        if (this.informacion[i]["id"] == this.id) {
          this.info.push(this.informacion[i])
        }
      }
    });
  }

  onUpload(e: any){
    const file = e.target.files[0]
    const filePath = 'CarpetaTrazabilidad/Trazabilidad_Extractora'+this.id+'.xlsx';
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    //this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();


  }

  salir(){
      this.router.navigate(['/ver-info-temas-sociales-con/',this.id])
    
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

  getInformacionUserCorreo(){

    const act: any = {
      trazabilidad: '100%',
    }

    this.sepService.getUsers().subscribe(data=>{
      this.informacionUser = [];
      data.forEach((element: any) => {
        this.informacionUser.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      this.informacionCorreoUser = [];
      for (let i = 0; i < this.informacionUser.length; i++) {
    //alexagalloz9@gmail.com | pedro.gonfrier@prestigecol.com | gerencia@frupalma.com | dgonzalez@numar.net
        if (this.informacionUser[i]["email"] == this.email) {
          this.informacionCorreoUser.push(this.informacionUser[i])   
          this.sepService.editUser(this.informacionUser[i]['id'],act)
        }
      }
    });
  }

  editar() {
    
    this.router.navigate(['/listar-respuestas-admin'])

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
          trazabilidad: data.payload.data()['trazabilidad'],



        })
      })  
      
    }
  }


}
