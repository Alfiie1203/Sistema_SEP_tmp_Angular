import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-info-tsociales-con',
  templateUrl: './reg-info-tsociales-con.component.html',
  styleUrls: ['./reg-info-tsociales-con.component.css']
})
export class RegInfoTsocialesConComponent implements OnInit {
  userLogged=this.auth.obtenerUser();
  email = localStorage.getItem('email');
  informacionUser: any[] = [];  
  informacionCorreoUser: any[] = [];
  createRegister: FormGroup;
  ta1 = 0
  informacion: any[] = [];
  submitted = false;
  loading = false;
  fecha = new Date()
  id: string | null;

  constructor(private auth: AuthService, private fb: FormBuilder, private sepService: SepService, private toastr: ToastrService,
    private aRoute: ActivatedRoute, private router: Router) {
      this.createRegister = this.fb.group({    
        
        ts112: [''],
        ts113: [''],
        ts114: [''],
        ts115: ['', Validators.required], //
        ts116: [''],
        ts117: [''],
        ts118: [''],
        ts119: ['', Validators.required], //
        ts120: ['', Validators.required], //
        ts121: ['', Validators.required], //
        ts122: [''],
        ts123: [''],
        ts124: [''],
        ts125: [''],
        ts126: ['', Validators.required], //
        ts127: [''],
        ts128: [''],
        ts129: [''],
        ts130: [''],
        ts131: ['', Validators.required], //
        ts132: ['', Validators.required], //
        ts133: [''],
        ts134: ['', Validators.required], //
        ts135: [''],
        ts136: [''],
        ts137: ['', Validators.required], //
        ts138: [''],
        ts139: [''],
        ts140: [''],
        ts141: [''],
        ts142: [''],
        ts143: [''],
        ts144: [''],
        ts145: [''],
        ts146: [''],
        ts147: [''],
        ts148: [''],
        ts149: [''],
        ts150: [''],
        ts151: [''],
        ts152: [''],
        ts153: [''],
        ts154: [''],
        ts155: [''],
        ts156: [''],
        ts157: [''],
        ts158: [''],
        ts159: [''],
        ts160: [''],
        ts161: [''],
        ts162: [''],
        ts163: [''],
        ts164: [''],
        ts165: [''],
        ts166: [''],
        ts167: [''],
        ts168: [''],
        ts169: [''],
        ts170: [''],
        ts171: [''],
        ts172: [''],
        ts173: [''],
        ts174: [''],
        ts175: [''],
        ts176: [''],
        ts177: [''],
        ts178: [''],
        ts179: [''],
        ts180: ['', Validators.required], //
        ts181: [''],
        ts182: [''],
        ts183: [''],
        ts184: [''],
        ts185: [''],
        ts186: ['', Validators.required], //
        ts187: [''],
        ts188: [''],
        ts189: ['', Validators.required], //
        ts190: [''],
        ts191: ['', Validators.required], //
        ts192: ['', Validators.required], //
        ts193: [''],
        ts194: ['', Validators.required], //
        ts195: ['', Validators.required], //
        ts196: [''],
        ts197: ['', Validators.required], //
        ts198: ['', Validators.required], //
        ts199: ['', Validators.required], //        
        ts200: [''],
        ts201: ['', Validators.required], //
        ts202: [''],
        ts203: ['', Validators.required], //
        ts204: ['', Validators.required], //
        ts205: [''],
        ts206: [''],
        ts207: ['', Validators.required], //
        ts208: ['', Validators.required], //
        ts209: ['', Validators.required], //
        ts210: ['', Validators.required], //
        ts211: ['', Validators.required], //
        ts212: ['', Validators.required], //
        ts213: ['', Validators.required], //
        ts214: ['', Validators.required], //
        ts215: ['', Validators.required], //
        ts216: ['', Validators.required], //
        ts217: ['', Validators.required], //
        ts218: ['', Validators.required], //
        ts219: ['', Validators.required], //
        ts220: ['', Validators.required], //
        ts221: ['', Validators.required], //
        ts222: ['', Validators.required], //
        ts223: ['', Validators.required], //
        ts224: ['', Validators.required], //
        ts225: ['', Validators.required], //
        ts226: ['', Validators.required], //
        ts227: ['', Validators.required], //
        
      




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

  getInformacionUserCorreo(){

    const act: any = {
      tSocialesP2: '100%',
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
          this.router.navigate(['/edit-info-temas-sociales/',this.id])
        }
      })      
    }else{
      this.router.navigate(['/edit-info-temas-sociales/',this.id])
    }
    
  }

  editar() {
    this.submitted = true;
    if(this.createRegister.invalid){
      this.toastr.error('Recuerda que todos los campos son obligatorios, no olvides seguir los ejemplos','Alta salio mal !',{
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
      
      ts112: this.createRegister.value.ts112,
      ts113: this.createRegister.value.ts113,
      ts114: this.createRegister.value.ts114,
      ts115: this.createRegister.value.ts115,
      ts116: this.createRegister.value.ts116,
      ts117: this.createRegister.value.ts117,
      ts118: this.createRegister.value.ts118,
      ts119: this.createRegister.value.ts119,
      
      ts120: this.createRegister.value.ts120,
      ts121: this.createRegister.value.ts121,
      ts122: this.createRegister.value.ts122,
      ts123: this.createRegister.value.ts123,
      ts124: this.createRegister.value.ts124,
      ts125: this.createRegister.value.ts125,
      ts126: this.createRegister.value.ts126,
      ts127: this.createRegister.value.ts127,
      ts128: this.createRegister.value.ts128,
      ts129: this.createRegister.value.ts129,
      
      ts130: this.createRegister.value.ts130,
      ts131: this.createRegister.value.ts131,
      ts132: this.createRegister.value.ts132,
      ts133: this.createRegister.value.ts133,
      ts134: this.createRegister.value.ts134,
      ts135: this.createRegister.value.ts135,
      ts136: this.createRegister.value.ts136,
      ts137: this.createRegister.value.ts137,
      ts138: this.createRegister.value.ts138,
      ts139: this.createRegister.value.ts139,
      
      ts140: this.createRegister.value.ts140,
      ts141: this.createRegister.value.ts141,
      ts142: this.createRegister.value.ts142,
      ts143: this.createRegister.value.ts143,
      ts144: this.createRegister.value.ts144,
      ts145: this.createRegister.value.ts145,
      ts146: this.createRegister.value.ts146,
      ts147: this.createRegister.value.ts147,
      ts148: this.createRegister.value.ts148,
      ts149: this.createRegister.value.ts149,
      
      ts150: this.createRegister.value.ts150,
      ts151: this.createRegister.value.ts151,
      ts152: this.createRegister.value.ts152,
      ts153: this.createRegister.value.ts153,
      ts154: this.createRegister.value.ts154,
      ts155: this.createRegister.value.ts155,
      ts156: this.createRegister.value.ts156,
      ts157: this.createRegister.value.ts157,
      ts158: this.createRegister.value.ts158,
      ts159: this.createRegister.value.ts159,
      
      ts160: this.createRegister.value.ts160,
      ts161: this.createRegister.value.ts161,
      ts162: this.createRegister.value.ts162,
      ts163: this.createRegister.value.ts163,
      ts164: this.createRegister.value.ts164,
      ts165: this.createRegister.value.ts165,
      ts166: this.createRegister.value.ts166,
      ts167: this.createRegister.value.ts167,
      ts168: this.createRegister.value.ts168,
      ts169: this.createRegister.value.ts169,
      
      ts170: this.createRegister.value.ts170,
      ts171: this.createRegister.value.ts171,
      ts172: this.createRegister.value.ts172,
      ts173: this.createRegister.value.ts173,
      ts174: this.createRegister.value.ts174,
      ts175: this.createRegister.value.ts175,
      ts176: this.createRegister.value.ts176,
      ts177: this.createRegister.value.ts177,
      ts178: this.createRegister.value.ts178,
      ts179: this.createRegister.value.ts179,
      
      ts180: this.createRegister.value.ts180,
      ts181: this.createRegister.value.ts181,
      ts182: this.createRegister.value.ts182,
      ts183: this.createRegister.value.ts183,
      ts184: this.createRegister.value.ts184,
      ts185: this.createRegister.value.ts185,
      ts186: this.createRegister.value.ts186,
      ts187: this.createRegister.value.ts187,
      ts188: this.createRegister.value.ts188,
      ts189: this.createRegister.value.ts189,
      
      ts190: this.createRegister.value.ts190,
      ts191: this.createRegister.value.ts191,
      ts192: this.createRegister.value.ts192,
      ts193: this.createRegister.value.ts193,
      ts194: this.createRegister.value.ts194,
      ts195: this.createRegister.value.ts195,
      ts196: this.createRegister.value.ts196,
      ts197: this.createRegister.value.ts197,
      ts198: this.createRegister.value.ts198,
      ts199: this.createRegister.value.ts199,

           
      ts200: this.createRegister.value.ts200,
      ts201: this.createRegister.value.ts201,
      ts202: this.createRegister.value.ts202,
      ts203: this.createRegister.value.ts203,
      ts204: this.createRegister.value.ts204,
      ts205: this.createRegister.value.ts205,
      ts206: this.createRegister.value.ts206,
      ts207: this.createRegister.value.ts207,
      
      ts208: this.createRegister.value.ts208,
      ts209: this.createRegister.value.ts209,
      ts210: this.createRegister.value.ts210,
      ts211: this.createRegister.value.ts211,
      ts212: this.createRegister.value.ts212,
      ts213: this.createRegister.value.ts213,
      ts214: this.createRegister.value.ts214,
      ts215: this.createRegister.value.ts215,
      ts216: this.createRegister.value.ts216,
      ts217: this.createRegister.value.ts217,
      ts218: this.createRegister.value.ts218,
      ts219: this.createRegister.value.ts219,
      ts220: this.createRegister.value.ts220,
      ts221: this.createRegister.value.ts221,
      ts222: this.createRegister.value.ts222,
      ts223: this.createRegister.value.ts223,
      ts224: this.createRegister.value.ts224,
      ts225: this.createRegister.value.ts225,
      ts226: this.createRegister.value.ts226,
      ts227: this.createRegister.value.ts227


      

    }
    this.loading = true;
    this.sepService.editIformacion(id,asd).then(() =>{
      this.getInformacionUserCorreo();
      this.loading = false;
      this.router.navigate(['/edit-info-trazabilidad/',id])
    })

  }


  esEditar() {
    if (this.id !== null) {
      this.loading = true;
      this.sepService.getInformacionById(this.id).subscribe(data =>{
        this.loading= false;
        this.createRegister.setValue({
          
          ts112: data.payload.data()['ts112'],
          ts113: data.payload.data()['ts113'],
          ts114: data.payload.data()['ts114'],
          ts115: data.payload.data()['ts115'],
          ts116: data.payload.data()['ts116'],
          ts117: data.payload.data()['ts117'],
          ts118: data.payload.data()['ts118'],
          ts119: data.payload.data()['ts119'],
          ts120: data.payload.data()['ts120'],
          ts121: data.payload.data()['ts121'],
          ts122: data.payload.data()['ts122'],
          ts123: data.payload.data()['ts123'],
          ts124: data.payload.data()['ts124'],
          ts125: data.payload.data()['ts125'],
          ts126: data.payload.data()['ts126'],
          ts127: data.payload.data()['ts127'],
          ts128: data.payload.data()['ts128'],
          ts129: data.payload.data()['ts129'],
          ts130: data.payload.data()['ts130'],
          ts131: data.payload.data()['ts131'],
          ts132: data.payload.data()['ts132'],
          ts133: data.payload.data()['ts133'],
          ts134: data.payload.data()['ts134'],
          ts135: data.payload.data()['ts135'],
          ts136: data.payload.data()['ts136'],
          ts137: data.payload.data()['ts137'],
          ts138: data.payload.data()['ts138'],
          ts139: data.payload.data()['ts139'],
          ts140: data.payload.data()['ts140'],
          ts141: data.payload.data()['ts141'],
          ts142: data.payload.data()['ts142'],
          ts143: data.payload.data()['ts143'],
          ts144: data.payload.data()['ts144'],
          ts145: data.payload.data()['ts145'],
          ts146: data.payload.data()['ts146'],
          ts147: data.payload.data()['ts147'],
          ts148: data.payload.data()['ts148'],
          ts149: data.payload.data()['ts149'],
          ts150: data.payload.data()['ts150'],
          ts151: data.payload.data()['ts151'],
          ts152: data.payload.data()['ts152'],
          ts153: data.payload.data()['ts153'],
          ts154: data.payload.data()['ts154'],
          ts155: data.payload.data()['ts155'],
          ts156: data.payload.data()['ts156'],
          ts157: data.payload.data()['ts157'],
          ts158: data.payload.data()['ts158'],
          ts159: data.payload.data()['ts159'],
          ts160: data.payload.data()['ts160'],
          ts161: data.payload.data()['ts161'],
          ts162: data.payload.data()['ts162'],
          ts163: data.payload.data()['ts163'],
          ts164: data.payload.data()['ts164'],
          ts165: data.payload.data()['ts165'],
          ts166: data.payload.data()['ts166'],
          ts167: data.payload.data()['ts167'],
          ts168: data.payload.data()['ts168'],
          ts169: data.payload.data()['ts169'],
          ts170: data.payload.data()['ts170'],
          ts171: data.payload.data()['ts171'],
          ts172: data.payload.data()['ts172'],
          ts173: data.payload.data()['ts173'],
          ts174: data.payload.data()['ts174'],
          ts175: data.payload.data()['ts175'],
          ts176: data.payload.data()['ts176'],
          ts177: data.payload.data()['ts177'],
          ts178: data.payload.data()['ts178'],
          ts179: data.payload.data()['ts179'],
          ts180: data.payload.data()['ts180'],
          ts181: data.payload.data()['ts181'],
          ts182: data.payload.data()['ts182'],
          ts183: data.payload.data()['ts183'],
          ts184: data.payload.data()['ts184'],
          ts185: data.payload.data()['ts185'],
          ts186: data.payload.data()['ts186'],
          ts187: data.payload.data()['ts187'],
          ts188: data.payload.data()['ts188'],
          ts189: data.payload.data()['ts189'],
          ts190: data.payload.data()['ts190'],
          ts191: data.payload.data()['ts191'],
          ts192: data.payload.data()['ts192'],
          ts193: data.payload.data()['ts193'],
          ts194: data.payload.data()['ts194'],
          ts195: data.payload.data()['ts195'],
          ts196: data.payload.data()['ts196'],
          ts197: data.payload.data()['ts197'],
          ts198: data.payload.data()['ts198'],
          ts199: data.payload.data()['ts199'],
          ts200: data.payload.data()['ts200'],
          ts201: data.payload.data()['ts201'],
          ts202: data.payload.data()['ts202'],
          ts203: data.payload.data()['ts203'],
          ts204: data.payload.data()['ts204'],
          ts205: data.payload.data()['ts205'],
          ts206: data.payload.data()['ts206'],
          ts207: data.payload.data()['ts207'],          
          ts208: data.payload.data()['ts208'],
          ts209: data.payload.data()['ts209'],
          ts210: data.payload.data()['ts210'],
          ts211: data.payload.data()['ts211'],
          ts212: data.payload.data()['ts212'],
          ts213: data.payload.data()['ts213'],
          ts214: data.payload.data()['ts214'],
          ts215: data.payload.data()['ts215'],
          ts216: data.payload.data()['ts216'],
          ts217: data.payload.data()['ts217'],
          ts218: data.payload.data()['ts218'],
          ts219: data.payload.data()['ts219'],
          ts220: data.payload.data()['ts220'],
          ts221: data.payload.data()['ts221'],
          ts222: data.payload.data()['ts222'],
          ts223: data.payload.data()['ts223'],
          ts224: data.payload.data()['ts224'],
          ts225: data.payload.data()['ts225'],
          ts226: data.payload.data()['ts226'],
          ts227: data.payload.data()['ts227'],



        })
      })  
      
    }
  }

}
