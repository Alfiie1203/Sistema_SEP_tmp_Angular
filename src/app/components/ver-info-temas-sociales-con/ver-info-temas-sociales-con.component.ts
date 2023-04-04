import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-ver-info-temas-sociales-con',
  templateUrl: './ver-info-temas-sociales-con.component.html',
  styleUrls: ['./ver-info-temas-sociales-con.component.css']
})
export class VerInfoTemasSocialesConComponent implements OnInit {
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
        
        ts112: ['',Validators.required],
        ts113: ['',Validators.required],
        ts114: ['',Validators.required],
        ts115: ['',Validators.required],
        ts116: ['',Validators.required],
        ts117: ['',Validators.required],
        ts118: ['',Validators.required],
        ts119: ['',Validators.required],
        ts120: ['',Validators.required],
        ts121: ['',Validators.required],
        ts122: ['',Validators.required],
        ts123: ['',Validators.required],
        ts124: ['',Validators.required],
        ts125: ['',Validators.required],
        ts126: ['',Validators.required],
        ts127: ['',Validators.required],
        ts128: ['',Validators.required],
        ts129: ['',Validators.required],
        ts130: ['',Validators.required],
        ts131: ['',Validators.required],
        ts132: ['',Validators.required],
        ts133: ['',Validators.required],
        ts134: ['',Validators.required],
        ts135: ['',Validators.required],
        ts136: ['',Validators.required],
        ts137: ['',Validators.required],
        ts138: ['',Validators.required],
        ts139: ['',Validators.required],

        ts140: ['',Validators.required],
        ts141: ['',Validators.required],
        ts142: ['',Validators.required],
        ts143: ['',Validators.required],
        ts144: ['',Validators.required],
        ts145: ['',Validators.required],
        ts146: ['',Validators.required],
        ts147: ['',Validators.required],
        ts148: ['',Validators.required],
        ts149: ['',Validators.required],

        ts150: ['',Validators.required],
        ts151: ['',Validators.required],
        ts152: ['',Validators.required],
        ts153: ['',Validators.required],
        ts154: ['',Validators.required],
        ts155: ['',Validators.required],
        ts156: ['',Validators.required],
        ts157: ['',Validators.required],
        ts158: ['',Validators.required],
        ts159: ['',Validators.required],

        ts160: ['',Validators.required],
        ts161: ['',Validators.required],
        ts162: ['',Validators.required],
        ts163: ['',Validators.required],
        ts164: ['',Validators.required],
        ts165: ['',Validators.required],
        ts166: ['',Validators.required],
        ts167: ['',Validators.required],
        ts168: ['',Validators.required],
        ts169: ['',Validators.required],

        ts170: ['',Validators.required],
        ts171: ['',Validators.required],
        ts172: ['',Validators.required],
        ts173: ['',Validators.required],
        ts174: ['',Validators.required],
        ts175: ['',Validators.required],
        ts176: ['',Validators.required],
        ts177: ['',Validators.required],
        ts178: ['',Validators.required],
        ts179: ['',Validators.required],

        ts180: ['',Validators.required],
        ts181: ['',Validators.required],
        ts182: ['',Validators.required],
        ts183: ['',Validators.required],
        ts184: ['',Validators.required],
        ts185: ['',Validators.required],
        ts186: ['',Validators.required],
        ts187: ['',Validators.required],
        ts188: ['',Validators.required],
        ts189: ['',Validators.required],

        ts190: ['',Validators.required],
        ts191: ['',Validators.required],
        ts192: ['',Validators.required],
        ts193: ['',Validators.required],
        ts194: ['',Validators.required],
        ts195: ['',Validators.required],
        ts196: ['',Validators.required],
        ts197: ['',Validators.required],
        ts198: ['',Validators.required],
        ts199: ['',Validators.required],
        
        ts200: ['',Validators.required],
        ts201: ['',Validators.required],
        ts202: ['',Validators.required],
        ts203: ['',Validators.required],
        ts204: ['',Validators.required],
        ts205: ['',Validators.required],
        ts206: ['',Validators.required],
        ts207: ['',Validators.required],
      




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
      this.router.navigate(['/ver-info-temas-sociales/',this.id])
    
  }


  editarinfo(){
    this.router.navigate(['/ver-info-trazabilidad/',this.id])

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



        })
      })  
      
    }
  }


}
