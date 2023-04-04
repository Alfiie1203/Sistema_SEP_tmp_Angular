import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-info-temas-sociales',
  templateUrl: './ver-info-temas-sociales.component.html',
  styleUrls: ['./ver-info-temas-sociales.component.css']
})
export class VerInfoTemasSocialesComponent implements OnInit {
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
        ts1:   ['',Validators.required],
        ts2:   ['',Validators.required],
        ts3:   ['',Validators.required],
        ts4:   ['',Validators.required],
        ts5:   ['',Validators.required],
        ts6:   ['',Validators.required],
        ts7:   ['',Validators.required],
        ts8:   ['',Validators.required],   
        ts9:   ['',Validators.required],
        ts10:  ['',Validators.required],
        ts11:  ['',Validators.required],
        ts12:  ['',Validators.required],
        ts13:  ['',Validators.required],
        ts14:  ['',Validators.required],
        ts15:  ['',Validators.required],
        ts16:  ['',Validators.required],
        ts17:  ['',Validators.required],
        ts18:  ['',Validators.required],
        ts19:  ['',Validators.required],
        ts20:  ['',Validators.required],       
        ts21:  ['',Validators.required],
        ts22:  ['',Validators.required],
        ts23:  ['',Validators.required],
        ts24:  ['',Validators.required],
        ts25:  ['',Validators.required],
        ts26:  ['',Validators.required],
        ts27:  ['',Validators.required],
        ts28:  ['',Validators.required],
        ts29:  ['',Validators.required], 
        ts30:  ['',Validators.required],
        ts31:  ['',Validators.required],
        ts32:  ['',Validators.required],
        ts33:  ['',Validators.required],
        ts34:  ['',Validators.required],
        ts35:  ['',Validators.required],
        ts36:  ['',Validators.required],
        ts37:  ['',Validators.required],
        ts38:  ['',Validators.required],
        ts39:  ['',Validators.required],
        ts40:  ['',Validators.required],
        ts41:  ['',Validators.required],
        ts42:  ['',Validators.required],
        ts43:  ['',Validators.required],
        ts44:  ['',Validators.required],
        ts45:  ['',Validators.required],
        ts46:  ['',Validators.required],
        ts47:  ['',Validators.required],
        ts48:  ['',Validators.required],
        ts49:  ['',Validators.required],
        ts50:  ['',Validators.required],
        ts51:  ['',Validators.required],
        ts52:  ['',Validators.required],
        ts53:  ['',Validators.required],
        ts54:  ['',Validators.required],
        ts55:  ['',Validators.required],
        ts56:  ['',Validators.required],
        ts57:  ['',Validators.required],
        ts58:  ['',Validators.required],
        ts59:  ['',Validators.required],
        ts60:  ['',Validators.required],
        ts61:  ['',Validators.required],
        ts62:  ['',Validators.required],
        ts63:  ['',Validators.required],
        ts64:  ['',Validators.required],
        ts65:  ['',Validators.required],
        ts66:  ['',Validators.required],
        ts67:  ['',Validators.required],
        ts68:  ['',Validators.required],
        ts69:  ['',Validators.required],         
        ts70:  ['',Validators.required],
        ts71:  ['',Validators.required],
        ts72:  ['',Validators.required],
        ts73:  ['',Validators.required],
        ts74:  ['',Validators.required],
        ts75:  ['',Validators.required],
        ts76:  ['',Validators.required],
        ts77:  ['',Validators.required],
        ts78:  ['',Validators.required],
        ts79:  ['',Validators.required],        
        ts80:  ['',Validators.required],
        ts81:  ['',Validators.required], 
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
    this.router.navigate(['/ver-info-temas-ambientales/',this.id])
    
  }



  editarinfo(){
    this.router.navigate(['/ver-info-temas-sociales-con/',this.id])

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
