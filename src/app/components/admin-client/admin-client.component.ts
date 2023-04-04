import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-client',
  templateUrl: './admin-client.component.html',
  styleUrls: ['./admin-client.component.css']
})
export class AdminClientComponent implements OnInit {
  userLogged=this.auth.obtenerUser();
  informacion: any[] = [];
  informacion1: any[] = [];
  informacionCorreo: any[] = [];
  informacionCorreo1: any[] = [];
  informacionCorreo2: any[] = [];

  email = localStorage.getItem('email');
  pageActual: number =1;
  filterPost = "";

  constructor(private auth: AuthService, private sepService: SepService, private router: Router) { }

  ngOnInit(): void {
    this.getInformacionCorreo()
  }

  
  notificacionInicial(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        '<b> Usted está visualizando: </b> las empresas de las que se tiene información para el periodo de reporte <b>2021</b> y están asignadas a su usuario<br><br>' +
        '<b>Lo que usted puede hacer: </b> <br> <b> 1) </b>Si puede visualizar un listado con una o mas empresas puede dar click en el botón de actualizar, este cargará los datos reportados para el periodo pasado y usted podrá modificarlos para reportar este periodo' +
        '<br> <b> 2) </b>Si no puede visualizar el listado dé click en agregar para crear un reporte nuevo asignado a su empresa'+
        '<br><br> <b> ¿Aún no sabes que hacer? <br></b>Revisa este video <br>'+
        '<a class="float-center" href="https://firebasestorage.googleapis.com/v0/b/sep-tmp.appspot.com/o/videos%2FMultimedia1.mp4?alt=media&token=bbfa8900-79fb-4b02-a88d-0233e6fdab21"> <img src="./assets/video.png" width="30" height="30" alt=""> Ver aquí</a>'+
        '<br></b>Comunícate con un asesor <br>'+
        '<a class="float-center" href="https://api.whatsapp.com/send/?phone=573168708252&text=Me+encuentro+en+el+apartado+de+*MIS+EMPRESAS+ASIGNADAS*+pero+estoy+teniendo+errores+con+*MENCIONE+AQUI+SUS+ERRORES*&type=phone_number&app_absent=0"> <img src="./assets/wa.png" width="30" height="30" alt=""> 3168708252</a>',
        
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
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
      
      this.informacionCorreo = this.sepService.filtrarPermisos(this.informacion,this.email);
      
    });


  }


}
