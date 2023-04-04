import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-info-tsociales',
  templateUrl: './reg-info-tsociales.component.html',
  styleUrls: ['./reg-info-tsociales.component.css']
})
export class RegInfoTsocialesComponent implements OnInit {
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
        
        //Matriz 1:
        //Pregunta 1
        ts1:   [''],
        ts2:   [''],
        ts3:   [''],
        ts4:   [''],
        ts5:   [''],
        ts6:   [''],
        ts7:   [''],
        ts8:   [''],   
        ts9:   [''],
        ts10:  [''],
        ts11:  [''],
        ts12:  [''],
        ts13:  [''],
        ts14:  [''],
        ts15:  [''],
        ts16:  [''],
        ts17:  [''],
        ts18:  [''],
        ts19:  [''],
        ts20:  [''],       
        ts21:  [''],
        ts22:  [''],
        ts23:  [''],
        ts24:  [''],
        ts25:  [''],
        ts26:  [''],
        ts27:  [''],
        ts28:  [''],
        ts29:  [''], 
        ts30:  [''],
        ts31:  [''],
        ts32:  [''],
        ts33:  [''],
        ts34:  [''],
        ts35:  [''],
        ts36:  [''],
        ts37:  [''],
        ts38:  [''],
        ts39:  [''],
        ts40:  [''],
        ts41:  [''],
        ts42:  [''],
        ts43:  [''],
        ts44:  [''],
        ts45:  [''],
        ts46:  [''],
        ts47:  [''],
        ts48:  [''],
        ts49:  [''],
        ts50:  [''],
        ts51:  [''],
        ts52:  [''],
        ts53:  [''],
        ts54:  [''],
        ts55:  [''],
        ts56:  [''],
        ts57:  [''],
        ts58:  [''],
        ts59:  [''],
        ts60:  [''],
        ts61:  [''],
        ts62:  [''],
        ts63:  [''],
        ts64:  [''],
        ts65:  [''],
        ts66:  [''],
        ts67:  [''],
        ts68:  [''],
        ts69:  [''],         
        ts70:  [''],
        ts71:  [''],
        ts72:  [''],
        ts73:  [''],
        ts74:  [''],
        ts75:  [''],
        ts76:  [''],
        ts77:  [''],
        ts78:  [''],
        ts79:  [''],        
        ts80:  [''],
        ts81:  [''], 
        ts82:  ['',Validators.required],
        ts83:  ['',Validators.required],
        ts84:  ['',Validators.required],
        ts85:  ['',Validators.required],
        ts86:  ['',Validators.required],
        ts87:  ['',Validators.required],
        ts88:  ['',Validators.required],
        ts89:  ['',Validators.required],
        ts90:  ['',Validators.required],
        ts91:  ['',Validators.required],
        ts92:  ['',Validators.required],        
        ts93:  ['',Validators.required], 
        ts94:  ['',Validators.required], 
        ts95:  ['',Validators.required],
        ts96:  ['',Validators.required],
        ts97:  ['',Validators.required],
        ts98:  ['',Validators.required],
        ts99:  ['',Validators.required],
        ts100: ['',Validators.required],
        ts101: ['',Validators.required],
        ts102: ['',Validators.required],
        ts103: ['',Validators.required],
        ts104: ['',Validators.required],
        ts105: ['',Validators.required],
        ts106: ['',Validators.required],
        ts107: ['',Validators.required],
        ts108: ['',Validators.required],
        ts109: ['',Validators.required],
        ts110: ['',Validators.required],        
        ts111: ['',Validators.required],
      




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
      tSocialesP1: '100%',
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
          this.router.navigate(['/edit-info-temas-ambientales/',this.id])
        }
      })      
    }else{
      this.router.navigate(['/edit-info-temas-ambientales/',this.id])
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
      ts1:   this.createRegister.value.ts1,
      ts2:   this.createRegister.value.ts2,
      ts3:   this.createRegister.value.ts3,      
      ts4:   this.createRegister.value.ts4,      
      ts5:   this.createRegister.value.ts5,      
      ts6:   this.createRegister.value.ts6,      
      ts7:   this.createRegister.value.ts7,      
      ts8:   this.createRegister.value.ts8,      
      ts9:   this.createRegister.value.ts9,      
      ts10:  this.createRegister.value.ts10,
      ts11:  this.createRegister.value.ts11,
      ts12:  this.createRegister.value.ts12,
      ts13:  this.createRegister.value.ts13,      
      ts14:  this.createRegister.value.ts14,      
      ts15:  this.createRegister.value.ts15,      
      ts16:  this.createRegister.value.ts16,      
      ts17:  this.createRegister.value.ts17,      
      ts18:  this.createRegister.value.ts18,      
      ts19:  this.createRegister.value.ts19,      
      ts20:  this.createRegister.value.ts20,
      ts21:  this.createRegister.value.ts21,
      ts22:  this.createRegister.value.ts22,
      ts23:  this.createRegister.value.ts23,      
      ts24:  this.createRegister.value.ts24,      
      ts25:  this.createRegister.value.ts25,      
      ts26:  this.createRegister.value.ts26,      
      ts27:  this.createRegister.value.ts27,      
      ts28:  this.createRegister.value.ts28,      
      ts29:  this.createRegister.value.ts29,      
      ts30:  this.createRegister.value.ts30,
      ts31:  this.createRegister.value.ts31,
      ts32:  this.createRegister.value.ts32,
      ts33:  this.createRegister.value.ts33,      
      ts34:  this.createRegister.value.ts34,      
      ts35:  this.createRegister.value.ts35,      
      ts36:  this.createRegister.value.ts36,      
      ts37:  this.createRegister.value.ts37,      
      ts38:  this.createRegister.value.ts38,      
      ts39:  this.createRegister.value.ts39,      
      ts40:  this.createRegister.value.ts40,
      ts41:  this.createRegister.value.ts41,
      ts42:  this.createRegister.value.ts42,
      ts43:  this.createRegister.value.ts43,      
      ts44:  this.createRegister.value.ts44,      
      ts45:  this.createRegister.value.ts45,      
      ts46:  this.createRegister.value.ts46,      
      ts47:  this.createRegister.value.ts47,      
      ts48:  this.createRegister.value.ts48,      
      ts49:  this.createRegister.value.ts49,      
      ts50:  this.createRegister.value.ts50,
      ts51:  this.createRegister.value.ts51,
      ts52:  this.createRegister.value.ts52,
      ts53:  this.createRegister.value.ts53,      
      ts54:  this.createRegister.value.ts54,      
      ts55:  this.createRegister.value.ts55,      
      ts56:  this.createRegister.value.ts56,      
      ts57:  this.createRegister.value.ts57,      
      ts58:  this.createRegister.value.ts58,      
      ts59:  this.createRegister.value.ts59,      
      ts60:  this.createRegister.value.ts60,
      ts61:  this.createRegister.value.ts61,
      ts62:  this.createRegister.value.ts62,
      ts63:  this.createRegister.value.ts63,      
      ts64:  this.createRegister.value.ts64,      
      ts65:  this.createRegister.value.ts65,      
      ts66:  this.createRegister.value.ts66,      
      ts67:  this.createRegister.value.ts67,      
      ts68:  this.createRegister.value.ts68,      
      ts69:  this.createRegister.value.ts69,      
      ts70:  this.createRegister.value.ts70,
      ts71:  this.createRegister.value.ts71,
      ts72:  this.createRegister.value.ts72,
      ts73:  this.createRegister.value.ts73,
      ts74:  this.createRegister.value.ts74,
      ts75:  this.createRegister.value.ts75,
      ts76:  this.createRegister.value.ts76,
      ts77:  this.createRegister.value.ts77,
      ts78:  this.createRegister.value.ts78,
      ts79:  this.createRegister.value.ts79,        
      ts80:  this.createRegister.value.ts80,   
      ts81:  this.createRegister.value.ts81,

      ts82:  this.createRegister.value.ts82,
      ts83:  this.createRegister.value.ts83,
      ts84:  this.createRegister.value.ts82 + this.createRegister.value.ts83,

      ts85:  this.createRegister.value.ts85,
      ts86:  this.createRegister.value.ts86,
      ts87:  this.createRegister.value.ts86 + this.createRegister.value.ts85,

      ts88:  this.createRegister.value.ts88,
      ts89:  this.createRegister.value.ts89,
      ts90:  this.createRegister.value.ts89 + this.createRegister.value.ts88,

      ts91:  this.createRegister.value.ts91,
      ts92:  this.createRegister.value.ts92,        
      ts93:  this.createRegister.value.ts91 + this.createRegister.value.ts92,

      ts94:  this.createRegister.value.ts94, 
      ts95:  this.createRegister.value.ts95,
      ts96:  this.createRegister.value.ts94 + this.createRegister.value.ts95,

      ts97:  this.createRegister.value.ts97,
      ts98:  this.createRegister.value.ts98,
      ts99:  this.createRegister.value.ts97 + this.createRegister.value.ts98, 

      ts100: this.createRegister.value.ts100,
      ts101: this.createRegister.value.ts101,
      ts102: this.createRegister.value.ts100 + this.createRegister.value.ts101,

      ts103: this.createRegister.value.ts103,
      ts104: this.createRegister.value.ts104,
      ts105: this.createRegister.value.ts103 + this.createRegister.value.ts104,

      ts106: this.createRegister.value.ts106,
      ts107: this.createRegister.value.ts107,
      ts108: this.createRegister.value.ts106 + this.createRegister.value.ts107,

      ts109: this.createRegister.value.ts109,
      ts110: this.createRegister.value.ts110,
      ts111: this.createRegister.value.ts110 + this.createRegister.value.ts109


      

    }
    this.loading = true;
    this.sepService.editIformacion(id,asd).then(() =>{
      this.getInformacionUserCorreo();
      this.loading = false;
      this.router.navigate(['/edit-info-temas-sociales-con/',id])
    })

  }


  esEditar() {
    if (this.id !== null) {
      this.loading = true;
      this.sepService.getInformacionById(this.id).subscribe(data =>{
        this.loading= false;
        this.createRegister.setValue({
          ts1:   data.payload.data()['ts1'],
          ts2:   data.payload.data()['ts2'],
          ts3:   data.payload.data()['ts3'],    
          ts4:   data.payload.data()['ts4'],      
          ts5:   data.payload.data()['ts5'],      
          ts6:   data.payload.data()['ts6'],      
          ts7:   data.payload.data()['ts7'],      
          ts8:   data.payload.data()['ts8'],      
          ts9:   data.payload.data()['ts9'],      
          ts10:  data.payload.data()['ts10'],          
          ts11:  data.payload.data()['ts11'],
          ts12:  data.payload.data()['ts12'],
          ts13:  data.payload.data()['ts13'],    
          ts14:  data.payload.data()['ts14'],      
          ts15:  data.payload.data()['ts15'],      
          ts16:  data.payload.data()['ts16'],      
          ts17:  data.payload.data()['ts17'],      
          ts18:  data.payload.data()['ts18'],      
          ts19:  data.payload.data()['ts19'],      
          ts20:  data.payload.data()['ts20'],          
          ts21:  data.payload.data()['ts21'],
          ts22:  data.payload.data()['ts22'],
          ts23:  data.payload.data()['ts23'],    
          ts24:  data.payload.data()['ts24'],      
          ts25:  data.payload.data()['ts25'],      
          ts26:  data.payload.data()['ts26'],      
          ts27:  data.payload.data()['ts27'],      
          ts28:  data.payload.data()['ts28'],      
          ts29:  data.payload.data()['ts29'],      
          ts30:  data.payload.data()['ts30'],          
          ts31:  data.payload.data()['ts31'],
          ts32:  data.payload.data()['ts32'],
          ts33:  data.payload.data()['ts33'],    
          ts34:  data.payload.data()['ts34'],      
          ts35:  data.payload.data()['ts35'],      
          ts36:  data.payload.data()['ts36'],      
          ts37:  data.payload.data()['ts37'],      
          ts38:  data.payload.data()['ts38'],      
          ts39:  data.payload.data()['ts39'],      
          ts40:  data.payload.data()['ts40'],          
          ts41:  data.payload.data()['ts41'],
          ts42:  data.payload.data()['ts42'],
          ts43:  data.payload.data()['ts43'],    
          ts44:  data.payload.data()['ts44'],      
          ts45:  data.payload.data()['ts45'],      
          ts46:  data.payload.data()['ts46'],      
          ts47:  data.payload.data()['ts47'],      
          ts48:  data.payload.data()['ts48'],      
          ts49:  data.payload.data()['ts49'],      
          ts50:  data.payload.data()['ts50'],          
          ts51:  data.payload.data()['ts51'],
          ts52:  data.payload.data()['ts52'],
          ts53:  data.payload.data()['ts53'],    
          ts54:  data.payload.data()['ts54'],      
          ts55:  data.payload.data()['ts55'],      
          ts56:  data.payload.data()['ts56'],      
          ts57:  data.payload.data()['ts57'],      
          ts58:  data.payload.data()['ts58'],      
          ts59:  data.payload.data()['ts59'],      
          ts60:  data.payload.data()['ts60'],          
          ts61:  data.payload.data()['ts61'],
          ts62:  data.payload.data()['ts62'],
          ts63:  data.payload.data()['ts63'],    
          ts64:  data.payload.data()['ts64'],      
          ts65:  data.payload.data()['ts65'],      
          ts66:  data.payload.data()['ts66'],      
          ts67:  data.payload.data()['ts67'],      
          ts68:  data.payload.data()['ts68'],      
          ts69:  data.payload.data()['ts69'],      
          ts70:  data.payload.data()['ts70'],
          ts71:  data.payload.data()['ts71'],
          ts72:  data.payload.data()['ts72'],
          ts73:  data.payload.data()['ts73'],
          ts74:  data.payload.data()['ts74'], 
          ts75:  data.payload.data()['ts75'],
          ts76:  data.payload.data()['ts76'],
          ts77:  data.payload.data()['ts77'],
          ts78:  data.payload.data()['ts78'],
          ts79:  data.payload.data()['ts79'],        
          ts80:  data.payload.data()['ts80'],
          ts81:  data.payload.data()['ts81'], 
          ts82:  parseInt(data.payload.data()['ts82'],10),
          ts83:  parseInt(data.payload.data()['ts83'],10),
          ts84:  parseInt(data.payload.data()['ts84'],10),
          ts85:  parseInt(data.payload.data()['ts85'],10),
          ts86:  parseInt(data.payload.data()['ts86'],10),
          ts87:  parseInt(data.payload.data()['ts87'],10),
          ts88:  parseInt(data.payload.data()['ts88'],10),
          ts89:  parseInt(data.payload.data()['ts89'],10),
          ts90:  parseInt(data.payload.data()['ts90'],10),
          ts91:  parseInt(data.payload.data()['ts91'],10),
          ts92:  parseInt(data.payload.data()['ts92'],10),        
          ts93:  parseInt(data.payload.data()['ts93'],10), 
          ts94:  parseInt(data.payload.data()['ts94'],10), 
          ts95:  parseInt(data.payload.data()['ts95'],10),
          ts96:  parseInt(data.payload.data()['ts96'],10),
          ts97:  parseInt(data.payload.data()['ts97'],10),
          ts98:  parseInt(data.payload.data()['ts98'],10),
          ts99:  parseInt(data.payload.data()['ts99'],10),
          ts100: parseInt(data.payload.data()['ts100'],10),
          ts101: parseInt(data.payload.data()['ts101'],10),
          ts102: parseInt(data.payload.data()['ts102'],10),
          ts103: parseInt(data.payload.data()['ts103'],10),
          ts104: parseInt(data.payload.data()['ts104'],10),
          ts105: parseInt(data.payload.data()['ts105'],10),
          ts106: parseInt(data.payload.data()['ts106'],10),
          ts107: parseInt(data.payload.data()['ts107'],10),
          ts108: parseInt(data.payload.data()['ts108'],10),
          ts109: parseInt(data.payload.data()['ts109'],10),
          ts110: parseInt(data.payload.data()['ts110'],10),
          ts111: parseInt(data.payload.data()['ts111'],10) ,

        })
      })  
      
    }
  }

}
