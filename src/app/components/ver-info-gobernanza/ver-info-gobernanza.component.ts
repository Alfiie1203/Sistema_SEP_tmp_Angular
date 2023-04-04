import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-info-gobernanza',
  templateUrl: './ver-info-gobernanza.component.html',
  styleUrls: ['./ver-info-gobernanza.component.css']
})
export class VerInfoGobernanzaComponent implements OnInit {
  
  userLogged=this.auth.obtenerUser();
  createRegister: FormGroup;
  email = localStorage.getItem('email');
  informacionUser: any[] = [];  
  informacionCorreoUser: any[] = [];
  informacion: any[] = [];
  submitted = false;
  loading = false;
  fecha = new Date()
  id: string | null;
  Si = "Si"
  No = "No"
  constructor(private auth: AuthService, private fb: FormBuilder, private sepService: SepService, private toastr: ToastrService,
    private aRoute: ActivatedRoute, private router: Router) {
      this.createRegister = this.fb.group({    
        
        //Matriz 1:
        //Pregunta 1
        go1: ['',Validators.required],
        go2: ['',Validators.required],
        go3: ['',Validators.required],
        go4: ['',Validators.required],
        go5: ['',Validators.required],
        go6: ['',Validators.required],
        go7: ['',Validators.required],
        //Pregunta 2
        go8: ['',Validators.required],
        go9: ['',Validators.required],
        go10: ['',Validators.required],
        go11: ['',Validators.required],
        go12: ['',Validators.required],
        go13: ['',Validators.required],
        go14: ['',Validators.required],
        //Pregunta 3       
        go15: ['',Validators.required],
        go16: ['',Validators.required],
        go17: ['',Validators.required],
        go18: ['',Validators.required],
        go19: ['',Validators.required],
        go20: ['',Validators.required],       
        go21: ['',Validators.required],
        //Pregunta 4
        go22: ['',Validators.required],
        go23: ['',Validators.required],
        go24: ['',Validators.required],
        go25: ['',Validators.required],
        go26: ['',Validators.required],
        go27: ['',Validators.required],
        go28: ['',Validators.required],
        //Pregunta 5
        go29: ['',Validators.required], 
        go30: ['',Validators.required],
        go31: ['',Validators.required],
        go32: ['',Validators.required],
        go33: ['',Validators.required],
        go34: ['',Validators.required],
        go35: ['',Validators.required],
        //Pregunta 6
        go36: ['',Validators.required],
        go37: ['',Validators.required],
        go38: ['',Validators.required],
        go39: ['',Validators.required],
        go40: ['',Validators.required],
        go41: ['',Validators.required],
        go42: ['',Validators.required],
        //Pregunta 7
        go43: ['',Validators.required],
        go44: ['',Validators.required],
        go45: ['',Validators.required],
        go46: ['',Validators.required],
        go47: ['',Validators.required],
        go48: ['',Validators.required],
        go49: ['',Validators.required],
        //Pregunta 8
        go50: ['',Validators.required],
        go51: ['',Validators.required],
        go52: ['',Validators.required],
        go53: ['',Validators.required],
        go54: ['',Validators.required],
        go55: ['',Validators.required],
        go56: ['',Validators.required],
        //Pregunta 9
        go57: ['',Validators.required],
        go58: ['',Validators.required],
        go59: ['',Validators.required],
        go60: ['',Validators.required],
        go61: ['',Validators.required],
        go62: ['',Validators.required],
        go63: ['',Validators.required],
        //Pregunta 10
        go64: ['',Validators.required],
        go65: ['',Validators.required],
        go66: ['',Validators.required],
        go67: ['',Validators.required],
        go68: ['',Validators.required],
        go69: ['',Validators.required],         
        go70: ['',Validators.required],

        
        //go71: ['',Validators.required],
        //go72: ['',Validators.required],
        //go73: ['',Validators.required],
        //go74: ['',Validators.required],

        //Matriz 2:
        go75: ['',Validators.required],
        //Pregunta 1
        go76: ['',Validators.required],
        go77: ['',Validators.required],
        go78: ['',Validators.required],
        //Pregunta 2
        go79: ['',Validators.required],        
        go80: ['',Validators.required],        
        go81: ['',Validators.required], 
        //Pregunta 3       
        go82: ['',Validators.required],
        go83: ['',Validators.required],
        go84: ['',Validators.required],
        //Pregunta 4
        go85: ['',Validators.required],
        go86: ['',Validators.required],
        go87: ['',Validators.required],


        //Matriz 3:
        go88: ['',Validators.required],
        go89: [''],
        //Pregunta 1
        go90: ['',Validators.required],
        go91: [''],
        //Pregunta 2
        go92: ['',Validators.required],        
        go93: [''], 
        //Pregunta 3
        go94: ['',Validators.required], 
        go95: [''],




        //Matriz 4
        go96: ['',Validators.required],
        go97: [''],
        go98: [''],
        go99: ['',Validators.required]




      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {  
    this.getInformacionCorreo();
    this.esEditar();
  }

  salir(){
      this.router.navigate(['/ver-info-compania/',this.id])
    
  }

  getInformacionCorreo(){
    this.sepService.getUsers().subscribe(data=>{
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
      gobernanza: '100%',
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
    
    this.router.navigate(['/ver-info-temas-ambientales/',this.id])

  }


  esEditar() {
    if (this.id !== null) {
      this.loading = true;
      this.sepService.getInformacionById(this.id).subscribe(data =>{
        this.loading= false;

        this.createRegister.setValue({
          go1: data.payload.data()['go1'],
          go2: data.payload.data()['go2'],
          go3: data.payload.data()['go3'],    
          go4: data.payload.data()['go4'],      
          go5: data.payload.data()['go5'],      
          go6: data.payload.data()['go6'],      
          go7: data.payload.data()['go7'],      
          go8: data.payload.data()['go8'],      
          go9: data.payload.data()['go9'],      
          go10: data.payload.data()['go10'],

          
          go11: data.payload.data()['go11'],
          go12: data.payload.data()['go12'],
          go13: data.payload.data()['go13'],    
          go14: data.payload.data()['go14'],      
          go15: data.payload.data()['go15'],      
          go16: data.payload.data()['go16'],      
          go17: data.payload.data()['go17'],      
          go18: data.payload.data()['go18'],      
          go19: data.payload.data()['go19'],      
          go20: data.payload.data()['go20'],

          
          go21: data.payload.data()['go21'],
          go22: data.payload.data()['go22'],
          go23: data.payload.data()['go23'],    
          go24: data.payload.data()['go24'],      
          go25: data.payload.data()['go25'],      
          go26: data.payload.data()['go26'],      
          go27: data.payload.data()['go27'],      
          go28: data.payload.data()['go28'],      
          go29: data.payload.data()['go29'],      
          go30: data.payload.data()['go30'],

          
          go31: data.payload.data()['go31'],
          go32: data.payload.data()['go32'],
          go33: data.payload.data()['go33'],    
          go34: data.payload.data()['go34'],      
          go35: data.payload.data()['go35'],      
          go36: data.payload.data()['go36'],      
          go37: data.payload.data()['go37'],      
          go38: data.payload.data()['go38'],      
          go39: data.payload.data()['go39'],      
          go40: data.payload.data()['go40'],

          
          go41: data.payload.data()['go41'],
          go42: data.payload.data()['go42'],
          go43: data.payload.data()['go43'],    
          go44: data.payload.data()['go44'],      
          go45: data.payload.data()['go45'],      
          go46: data.payload.data()['go46'],      
          go47: data.payload.data()['go47'],      
          go48: data.payload.data()['go48'],      
          go49: data.payload.data()['go49'],      
          go50: data.payload.data()['go50'],

          
          go51: data.payload.data()['go51'],
          go52: data.payload.data()['go52'],
          go53: data.payload.data()['go53'],    
          go54: data.payload.data()['go54'],      
          go55: data.payload.data()['go55'],      
          go56: data.payload.data()['go56'],      
          go57: data.payload.data()['go57'],      
          go58: data.payload.data()['go58'],      
          go59: data.payload.data()['go59'],      
          go60: data.payload.data()['go60'],

          
          go61: data.payload.data()['go61'],
          go62: data.payload.data()['go62'],
          go63: data.payload.data()['go63'],    
          go64: data.payload.data()['go64'],      
          go65: data.payload.data()['go65'],      
          go66: data.payload.data()['go66'],      
          go67: data.payload.data()['go67'],      
          go68: data.payload.data()['go68'],      
          go69: data.payload.data()['go69'],      
          go70: data.payload.data()['go70'],



          //Matriz 2:
          go75: data.payload.data()['go75'],
          //Pregunta 1
          go76: data.payload.data()['go76'],
          go77: data.payload.data()['go77'],
          go78: data.payload.data()['go78'],
          //Pregunta 2
          go79: data.payload.data()['go79'],        
          go80: data.payload.data()['go80'],        
          go81: data.payload.data()['go81'], 
          //Pregunta 3       
          go82: data.payload.data()['go82'],
          go83: data.payload.data()['go83'],
          go84: data.payload.data()['go84'],
          //Pregunta 4
          go85: data.payload.data()['go85'],
          go86: data.payload.data()['go86'],
          go87: data.payload.data()['go87'],



          //Matriz 3:
          go88: data.payload.data()['go88'],
          go89: data.payload.data()['go89'],
          //Pregunta 1
          go90: data.payload.data()['go90'],
          go91: data.payload.data()['go91'],
          //Pregunta 2
          go92: data.payload.data()['go92'],        
          go93: data.payload.data()['go93'], 
          //Pregunta 3
          go94: data.payload.data()['go94'], 
          go95: data.payload.data()['go95'],




          //Matriz 4
          go96: data.payload.data()['go96'],
          go97: data.payload.data()['go97'],
          go98: data.payload.data()['go98'],
          go99: data.payload.data()['go99']



        })
      })  
      
    }
  }

}
