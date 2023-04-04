import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-info-compania',
  templateUrl: './ver-info-compania.component.html',
  styleUrls: ['./ver-info-compania.component.css']
})
export class VerInfoCompaniaComponent implements OnInit {
  userLogged=this.auth.obtenerUser();
  info: any[] = [];  

  createRegister: FormGroup;
  email = localStorage.getItem('email');
  informacionUser: any[] = [];  
  informacionCorreoUser: any[] = [];
  informacion: any[] = [];
  updateInfo: any;
  submitted = false;
  loading = false;
  fecha = new Date()
  id: string | null;
  idUser: string;
  umlUser: string | null;

  constructor(private auth: AuthService, private fb: FormBuilder, private sepService: SepService, private toastr: ToastrService,
    private aRoute: ActivatedRoute, private router: Router) {
      this.createRegister = this.fb.group({
        materiaPrima: ['',Validators.required],
        grupoEmpresarial: ['',Validators.required],
        nombreLegal: ['',Validators.required],
        sitioWeb: ['',Validators.required],
        capacidadProducion: ['',Validators.required],
        nombres: ['',Validators.required],
        apellidos: ['',Validators.required],
        paisRecidencia: ['',Validators.required],
        telefono: ['',Validators.required],
        correoElectronico: ['',[Validators.required,Validators.email]],
        cargo: ['',Validators.required],
        pais: ['',Validators.required],
        departamento: ['',Validators.required],
        municipio: ['',Validators.required],
        coordenadas: ['',Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    
    this.getInformacionCorreo();
    this.getInformacionUserCorreo();
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

  
  notificacionInicial(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        '<b> Usted esta visualizando: </b> las empresas de las que se tiene información para el periodo de reporte <b>2021</b> y estan asignadas a su usuario<br><br>' +
        '<b>Lo que usted puede hacer: </b> <br> <b> 1) </b>Si puede visualizar un listado con una o mas empresas puede dar click en el boton de actualizar, este cargara los datos reportados para el periodo pasado y usted podrá modificarlos para reportar este periodo' +
        '<br> <b> 2) </b>Si no puede visualizar el listado de click en agregar para crear un reporte nuevo asignado a su empresa'+
        '<br><br> <b> ¿Aun no sabes que hacer? <br></b>Comunicate con un asesor <br>'+
        '<a class="float-center" href="https://api.whatsapp.com/send/?phone=573160242199&text=Me+encuentro+en+el+apartado+de+*MIS+EMPRESAS+ASIGNADAS*+pero+estoy+teniendo+errores+con+*MENCIONE+AQUI+SUS+ERRORES*&type=phone_number&app_absent=0"> <img src="./assets/wa.png" width="30" height="30" alt=""> 3160242199</a>'
    })
  }


  getInformacionCorreo(){
    this.sepService.getInformacion().subscribe(data=>{
      this.informacion.pop();
      data.forEach((element: any) => {
        this.informacion.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    });
  }

  getInformacionUserCorreo(){

    

    this.sepService.getUsers().subscribe(data=>{
      data.forEach((element: any) => {
        
        this.informacionUser.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        for (let i = 0; i < this.informacionUser.length; i++) {
          if (this.informacionUser[i]["codigoUML"] == this.id) {
            
            this.umlUser = this.informacionUser[i]["codigoUML"]
          }
          
        }
        this.idUser = element.payload.doc.id;
        
      });
    });
  }

  


  editar(){
    this.router.navigate(['/ver-info-gobernanza/',this.id])

  }


  esEditar() {
    if (this.id !== null) {
      this.loading = true;
      this.sepService.getInformacionById(this.id).subscribe(data =>{
        this.loading= false;
        this.createRegister.setValue({
          materiaPrima: data.payload.data()['materiaPrima'],
          grupoEmpresarial: data.payload.data()['grupoEmpresarial'],
          nombreLegal: data.payload.data()['nombreLegal'],
          //millname: data.payload.data()['millname'],
          sitioWeb: data.payload.data()['sitioWeb'],
          capacidadProducion: data.payload.data()['capacidadProducion'],
          nombres: data.payload.data()['nombres'],
          apellidos: data.payload.data()['apellidos'],
          paisRecidencia: data.payload.data()['paisRecidencia'],
          telefono: data.payload.data()['telefono'],
          correoElectronico: data.payload.data()['correoElectronico'],
          cargo: data.payload.data()['cargo'],
          pais: data.payload.data()['pais'],
          departamento: data.payload.data()['departamento'],
          municipio: data.payload.data()['municipio'],
          coordenadas: data.payload.data()['coordenadas']
          //fechaCreacion: data.payload.data()['fechaCreacion'],
          //codEmpresa: data.payload.data()['codEmpresa'],
        })
      })  
      
    }
  }


}
