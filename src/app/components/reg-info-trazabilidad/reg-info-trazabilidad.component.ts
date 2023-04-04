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
  selector: 'app-reg-info-trazabilidad',
  templateUrl: './reg-info-trazabilidad.component.html',
  styleUrls: ['./reg-info-trazabilidad.component.css']
})
export class RegInfoTrazabilidadComponent implements OnInit {
  @ViewChild('trazabilidad') inputTrazabilidad: ElementRef;  
  @ViewChild('evidenciatz111') inputEvidenciatz111: ElementRef;
  userLogged=this.auth.obtenerUser();
  email = localStorage.getItem('email');
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
  urlta1: Observable<string>;
  por= "100%";

  constructor(private storage: AngularFireStorage, private auth: AuthService, private fb: FormBuilder, private sepService: SepService, private toastr: ToastrService,
    private aRoute: ActivatedRoute, private router: Router) {
      this.createRegister = this.fb.group({    
        
        //Matriz 1:
        //Pregunta 1
        tz1: ['',Validators.required],
        archivo: [''],
        tz111: [''],
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
        trazabilidad: ['',],
        
        evidenciatz111: ['',],

      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  
  

  ngOnInit(): void {    
    this.getInformacionCorreo()
    this.esEditar();
  }

  async ta1(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaPoligonos/Evidencia_'+this.id+'.xlsx';
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta1 = ref.getDownloadURL())).subscribe();
    
  }

  async ta2(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaPoligonos/Evidencia_'+this.id+'.zip';
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta1 = ref.getDownloadURL())).subscribe();
    
  }

  async ta3(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaPoligonos/Evidencia_'+this.id+'.kml';
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta1 = ref.getDownloadURL())).subscribe();
    
  }

  async ta4(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaPoligonos/Evidencia_'+this.id+'.geojson';
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta1 = ref.getDownloadURL())).subscribe();
    
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
    if (this.createRegister.invalid) {
      Swal.fire({
        title: '¿Estas seguro?',
        text: "Si sales de esta pagina sin haber guardado perderas el avance que hayas reportado !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, quiero salir!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/edit-info-temas-sociales-con/',this.id])
        }
      })      
    }else{
      this.router.navigate(['/edit-info-temas-sociales-con/',this.id])
    }
    
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

    if(this.inputTrazabilidad.nativeElement.value.length == 0){
      this.por = "Finalizado sin evidencia"
    }

    const act: any = {
      trazabilidad: this.por,
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
      tz111:  this.createRegister.value.tz111,
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
      archivo: this.createRegister.value.archivo,
      trazabilidad: this.inputTrazabilidad.nativeElement.value,
      evidenciatz111: this.inputEvidenciatz111.nativeElement.value

    }
    this.loading = true;
    this.sepService.editIformacion(id,asd).then(() =>{
      this.getInformacionUserCorreo();
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
          tz111:  data.payload.data()['tz111'],
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
          archivo: data.payload.data()['archivo'],
          trazabilidad: data.payload.data()['trazabilidad'],
          evidenciatz111: data.payload.data()['evidenciatz111'],



        })
      })  
      
    }
  }

}
