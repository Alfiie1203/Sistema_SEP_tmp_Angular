import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import Swal from 'sweetalert2';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-ver-info-temas-ambientales',
  templateUrl: './ver-info-temas-ambientales.component.html',
  styleUrls: ['./ver-info-temas-ambientales.component.css']
})
export class VerInfoTemasAmbientalesComponent implements OnInit {
  @ViewChild('evidenciata1') input_ta1: ElementRef;
  @ViewChild('evidenciata2') input_ta2: ElementRef;
  @ViewChild('evidenciata17') input_ta17: ElementRef;
  @ViewChild('evidenciata18') input_ta18: ElementRef;
  @ViewChild('evidenciata81') input_ta81: ElementRef;
  @ViewChild('evidenciata84') input_ta84: ElementRef;
  @ViewChild('evidenciata85') input_ta85: ElementRef;
  @ViewChild('evidenciata86') input_ta86: ElementRef;
  @ViewChild('evidenciata88') input_ta88: ElementRef;
  @ViewChild('evidenciata89') input_ta89: ElementRef;
  @ViewChild('evidenciata90') input_ta90: ElementRef;
  
  @ViewChild('evidenciata91') input_ta91: ElementRef;  
  @ViewChild('evidenciata92') input_ta92: ElementRef;  
  @ViewChild('evidenciata93') input_ta93: ElementRef;  
  @ViewChild('evidenciata95') input_ta95: ElementRef;  
  @ViewChild('evidenciata96') input_ta96: ElementRef;
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
  urlta1: Observable<string>;
  urlta2: Observable<string>;
  urlta17: Observable<string>;
  urlta18: Observable<string>;
  urlta81: Observable<string>;
  urlta84: Observable<string>;
  urlta85: Observable<string>;
  urlta86: Observable<string>;
  urlta88: Observable<string>;
  urlta89: Observable<string>;  
  urlta90: Observable<string>;
   
  urlta91: Observable<string>; 
  urlta92: Observable<string>; 
  urlta93: Observable<string>; 
  urlta95: Observable<string>; 
  urlta96: Observable<string>;

  constructor(private storage: AngularFireStorage, private auth: AuthService,private fb: FormBuilder, private sepService: SepService, private toastr: ToastrService,
    private aRoute: ActivatedRoute, private router: Router) {
      this.createRegister = this.fb.group({    
        
        //Matriz 1:
        //Pregunta 1
        ta1: ['',Validators.required],
        evidenciata1 : [''],
        ta2: ['',Validators.required],
        evidenciata2 : [''],
        ta3: ['',Validators.required],
        ta4: ['',Validators.required],
        ta5: ['',Validators.required],
        ta6: ['',Validators.required],
        ta7: ['',Validators.required],
        ta8: ['',Validators.required],        
        //Pregunta 2
        ta9: ['',Validators.required],
        ta10: ['',Validators.required],
        ta11: ['',Validators.required],
        ta12: ['',Validators.required],
        ta13: ['',Validators.required],
        ta14: ['',Validators.required],
        ta15: ['',Validators.required],
        ta16: ['',Validators.required],
        //Pregunta 3       
        ta17: ['',Validators.required],
        evidenciata17 : [''],
        ta18: ['',Validators.required],
        evidenciata18 : [''],
        ta19: ['',Validators.required],
        ta20: ['',Validators.required],       
        ta21: ['',Validators.required],
        ta22: ['',Validators.required],
        ta23: ['',Validators.required],
        ta24: ['',Validators.required],
        //Pregunta 4
        ta25: ['',Validators.required],
        ta26: ['',Validators.required],
        ta27: ['',Validators.required],
        ta28: ['',Validators.required],
        ta29: ['',Validators.required], 
        ta30: ['',Validators.required],
        ta31: ['',Validators.required],
        ta32: ['',Validators.required],
        //Pregunta 5
        ta33: ['',Validators.required],
        ta34: ['',Validators.required],
        ta35: ['',Validators.required],
        ta36: ['',Validators.required],
        ta37: ['',Validators.required],
        ta38: ['',Validators.required],
        ta39: ['',Validators.required],
        ta40: ['',Validators.required],
        //Pregunta 6
        ta41: ['',Validators.required],
        ta42: ['',Validators.required],
        ta43: ['',Validators.required],
        ta44: ['',Validators.required],
        ta45: ['',Validators.required],
        ta46: ['',Validators.required],
        ta47: ['',Validators.required],
        ta48: ['',Validators.required],
        //Pregunta 7
        ta49: ['',Validators.required],
        ta50: ['',Validators.required],
        ta51: ['',Validators.required],
        ta52: ['',Validators.required],
        ta53: ['',Validators.required],
        ta54: ['',Validators.required],
        ta55: ['',Validators.required],
        ta56: ['',Validators.required],
        //Pregunta 8
        ta57: ['',Validators.required],
        ta58: ['',Validators.required],
        ta59: ['',Validators.required],
        ta60: ['',Validators.required],
        ta61: ['',Validators.required],
        ta62: ['',Validators.required],
        ta63: ['',Validators.required],
        ta64: ['',Validators.required],
        //Pregunta 9
        ta65: ['',Validators.required],
        ta66: ['',Validators.required],
        ta67: ['',Validators.required],
        ta68: ['',Validators.required],
        ta69: ['',Validators.required],         
        ta70: ['',Validators.required],
        ta71: ['',Validators.required],
        ta72: ['',Validators.required],
        //Pregunta 10
        ta73: ['',Validators.required],
        ta74: ['',Validators.required],
        ta75: ['',Validators.required],
        ta76: ['',Validators.required],
        ta77: ['',Validators.required],
        ta78: ['',Validators.required],
        ta79: ['',Validators.required],        
        ta80: ['',Validators.required],






        ta81: ['',Validators.required],
        evidenciata81 : [''],
        //ta82: ['',Validators.required],
        //ta83: ['',Validators.required],
        ta84: ['',Validators.required],
        evidenciata84 : [''],
        ta85: ['',Validators.required],
        evidenciata85 : [''],
        ta86: ['',Validators.required],
        evidenciata86 : [''],
        //ta87: ['',Validators.required],
        ta88: ['',Validators.required],        
        evidenciata88 : [''],
        ta89: ['',Validators.required],        
        evidenciata89 : [''],
        ta90: ['',Validators.required],
        evidenciata90 : [''],
        evidenciata91 : [''],
        evidenciata92 : [''],
        evidenciata93 : [''],
        evidenciata95 : [''],
        evidenciata96 : [''],
        ta91: ['',Validators.required],
        ta92: ['',Validators.required],        
        ta93: ['',Validators.required], 
        ta94: ['',Validators.required], 
        ta95: ['',Validators.required],
        ta96: ['',Validators.required],
        ta97: ['',Validators.required],
        ta98: ['',Validators.required],
        ta99: ['',Validators.required],


        
        ta100: ['',Validators.required],
        ta101: ['',Validators.required],
        ta102: ['',Validators.required],
        ta103: ['',Validators.required],
        ta104: ['',Validators.required],
        ta105: ['',Validators.required],
        ta106: ['',Validators.required],
        ta107: ['',Validators.required],
        ta108: ['',Validators.required],
        ta109: ['',Validators.required],
        ta110: ['',Validators.required],
        ta111: ['',Validators.required],
        ta112: ['',Validators.required],
        ta113: ['',Validators.required],
        ta114: ['',Validators.required],
        ta115: ['',Validators.required],
        ta116: ['',Validators.required],
        ta117: ['',Validators.required],
        ta118: ['',Validators.required],
        ta119: ['',Validators.required],
        ta120: ['',Validators.required],
        




      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
     }

  ngOnInit(): void { 
    this.createRegister.value.ta1
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
      
      this.info = [];
      for (let i = 0; i < this.informacion.length; i++) {
    //alexagalloz9@gmail.com | pedro.gonfrier@prestigecol.com | gerencia@frupalma.com | dgonzalez@numar.net
        if (this.informacion[i]["id"] == this.id) {
          this.info.push(this.informacion[i])
        }
      }
    });
  }


  async ta1(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta1_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta1 = ref.getDownloadURL())).subscribe();
    
  }

  ta2(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta2_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta2 = ref.getDownloadURL())).subscribe();

  }

  ta17(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta17_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta17 = ref.getDownloadURL())).subscribe();

  }

  ta18(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta18_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta18 = ref.getDownloadURL())).subscribe();

  }

  ta81(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta81_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta81 = ref.getDownloadURL())).subscribe();

  }

  ta84(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta84_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta84 = ref.getDownloadURL())).subscribe();

  }

  ta85(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta85_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta85 = ref.getDownloadURL())).subscribe();

  }

  ta86(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta86_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta86 = ref.getDownloadURL())).subscribe();

  }

  ta88(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta88_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta88 = ref.getDownloadURL())).subscribe();

  }

  ta89(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta89_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta89 = ref.getDownloadURL())).subscribe();

  }

  ta90(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta90_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta90 = ref.getDownloadURL())).subscribe();

  }

  ta91(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta91_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta91 = ref.getDownloadURL())).subscribe();

  }

  ta92(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta92_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta92 = ref.getDownloadURL())).subscribe();

  }

  ta93(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta93_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta93 = ref.getDownloadURL())).subscribe();

  }

  ta95(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta95_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta95 = ref.getDownloadURL())).subscribe();

  }

  ta96(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta96_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta96 = ref.getDownloadURL())).subscribe();

  }

  salir(){
      this.router.navigate(['/ver-info-gobernanza/',this.id])
    
  }



  getInformacionUserCorreo(){

    const act: any = {
      tAmbientales: '100%',
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

  editar(){
    this.router.navigate(['/ver-info-temas-sociales/',this.id])
  }

  getInformacion(){
    if (this.id !== null) {
      this.sepService.getInformacionById(this.id).subscribe(data=>{
        this.info = [];
        data.forEach((element: any) => {
          this.info.push({
            id:element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });        
      });
    }
    
  }


  esEditar() {
    if (this.id !== null) {
      this.loading = true;
      this.sepService.getInformacionById(this.id).subscribe(data =>{
        this.loading= false;
        this.createRegister.setValue({
          ta1: data.payload.data()['ta1'],
          evidenciata1: data.payload.data()['evidenciata1'],
          ta2: data.payload.data()['ta2'],
          evidenciata2: data.payload.data()['evidenciata2'],
          ta3: data.payload.data()['ta3'],
          ta4: data.payload.data()['ta4'],
          ta5: data.payload.data()['ta5'],
          ta6: data.payload.data()['ta6'],
          ta7: data.payload.data()['ta7'],
          ta8: data.payload.data()['ta8'],
          ta9: data.payload.data()['ta9'],
          ta10: data.payload.data()['ta10'],

          
          ta11: data.payload.data()['ta11'],
          ta12: data.payload.data()['ta12'],
          ta13: data.payload.data()['ta13'],    
          ta14: data.payload.data()['ta14'],      
          ta15: data.payload.data()['ta15'],      
          ta16: data.payload.data()['ta16'],      
          ta17: data.payload.data()['ta17'],
          evidenciata17: data.payload.data()['evidenciata17'],      
          ta18: data.payload.data()['ta18'], 
          evidenciata18: data.payload.data()['evidenciata18'],     
          ta19: data.payload.data()['ta19'],      
          ta20: data.payload.data()['ta20'],

          
          ta21: data.payload.data()['ta21'],
          ta22: data.payload.data()['ta22'],
          ta23: data.payload.data()['ta23'],    
          ta24: data.payload.data()['ta24'],      
          ta25: data.payload.data()['ta25'],      
          ta26: data.payload.data()['ta26'],      
          ta27: data.payload.data()['ta27'],      
          ta28: data.payload.data()['ta28'],      
          ta29: data.payload.data()['ta29'],      
          ta30: data.payload.data()['ta30'],

          
          ta31: data.payload.data()['ta31'],
          ta32: data.payload.data()['ta32'],
          ta33: data.payload.data()['ta33'],    
          ta34: data.payload.data()['ta34'],      
          ta35: data.payload.data()['ta35'],      
          ta36: data.payload.data()['ta36'],      
          ta37: data.payload.data()['ta37'],      
          ta38: data.payload.data()['ta38'],      
          ta39: data.payload.data()['ta39'],      
          ta40: data.payload.data()['ta40'],

          
          ta41: data.payload.data()['ta41'],
          ta42: data.payload.data()['ta42'],
          ta43: data.payload.data()['ta43'],    
          ta44: data.payload.data()['ta44'],      
          ta45: data.payload.data()['ta45'],      
          ta46: data.payload.data()['ta46'],      
          ta47: data.payload.data()['ta47'],      
          ta48: data.payload.data()['ta48'],      
          ta49: data.payload.data()['ta49'],      
          ta50: data.payload.data()['ta50'],

          
          ta51: data.payload.data()['ta51'],
          ta52: data.payload.data()['ta52'],
          ta53: data.payload.data()['ta53'],    
          ta54: data.payload.data()['ta54'],      
          ta55: data.payload.data()['ta55'],      
          ta56: data.payload.data()['ta56'],      
          ta57: data.payload.data()['ta57'],      
          ta58: data.payload.data()['ta58'],      
          ta59: data.payload.data()['ta59'],      
          ta60: data.payload.data()['ta60'],

          
          ta61: data.payload.data()['ta61'],
          ta62: data.payload.data()['ta62'],
          ta63: data.payload.data()['ta63'],    
          ta64: data.payload.data()['ta64'],      
          ta65: data.payload.data()['ta65'],      
          ta66: data.payload.data()['ta66'],      
          ta67: data.payload.data()['ta67'],      
          ta68: data.payload.data()['ta68'],      
          ta69: data.payload.data()['ta69'],      
          ta70: data.payload.data()['ta70'],


          ta71: data.payload.data()['ta71'],
          ta72: data.payload.data()['ta72'],
          ta73: data.payload.data()['ta73'],
          ta74: data.payload.data()['ta74'], 
          ta75: data.payload.data()['ta75'],
          ta76: data.payload.data()['ta76'],
          ta77: data.payload.data()['ta77'],
          ta78: data.payload.data()['ta78'],
          ta79: data.payload.data()['ta79'],        
          ta80: data.payload.data()['ta80'], 
          
          



          ta81: data.payload.data()['ta81'], 
          evidenciata81: data.payload.data()['evidenciata81'],
          //ta82: data.payload.data()['ta82'],
          //ta83: data.payload.data()['ta83'],
          ta84: data.payload.data()['ta84'],
          evidenciata84: data.payload.data()['evidenciata84'],
          ta85: data.payload.data()['ta85'],
          evidenciata85: data.payload.data()['evidenciata85'],
          ta86: data.payload.data()['ta86'],
          evidenciata86: data.payload.data()['evidenciata86'],
          //ta87: data.payload.data()['ta87'],
          ta88: data.payload.data()['ta88'],
          evidenciata88: data.payload.data()['evidenciata88'],
          ta89: data.payload.data()['ta89'],
          evidenciata89: data.payload.data()['evidenciata89'],
          ta90: data.payload.data()['ta90'],
          evidenciata90: data.payload.data()['evidenciata90'],
          evidenciata91: data.payload.data()['evidenciata91'],
          evidenciata92: data.payload.data()['evidenciata92'],
          evidenciata93: data.payload.data()['evidenciata93'],
          evidenciata95: data.payload.data()['evidenciata95'],
          evidenciata96: data.payload.data()['evidenciata96'],
          ta91: data.payload.data()['ta91'],
          ta92: data.payload.data()['ta92'],        
          ta93: data.payload.data()['ta93'], 
          ta94: data.payload.data()['ta94'], 
          ta95: data.payload.data()['ta95'],
          ta96: data.payload.data()['ta96'],
          ta97: data.payload.data()['ta97'],
          ta98: data.payload.data()['ta98'],
          ta99: data.payload.data()['ta99'],
          
          ta100: data.payload.data()['ta100'],
          ta101: data.payload.data()['ta101'],
          ta102: data.payload.data()['ta102'],
          ta103: data.payload.data()['ta103'],
          ta104: data.payload.data()['ta104'],
          ta105: data.payload.data()['ta105'],
          ta106: data.payload.data()['ta106'],
          ta107: data.payload.data()['ta107'],
          ta108: data.payload.data()['ta108'],
          ta109: data.payload.data()['ta109'],
          ta110: data.payload.data()['ta110'],
          ta111: data.payload.data()['ta111'],
          ta112: data.payload.data()['ta112'],
          ta113: data.payload.data()['ta113'],
          ta114: data.payload.data()['ta114'],
          ta115: data.payload.data()['ta115'],
          ta116: data.payload.data()['ta116'],
          ta117: data.payload.data()['ta117'],
          ta118: data.payload.data()['ta118'],
          ta119: data.payload.data()['ta119'],
          ta120: data.payload.data()['ta120']



        })
      })  
      
    }
  }

}
