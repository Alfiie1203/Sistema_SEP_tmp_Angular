import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listar-respuestas-admin',
  templateUrl: './listar-respuestas-admin.component.html',
  styleUrls: ['./listar-respuestas-admin.component.css']
})
export class ListarRespuestasAdminComponent implements OnInit {
  userLogged=this.auth.obtenerUser();
  informacion: any[] = [];
  informacionh1: any[] = [];
  informacionCorreo: any[] = [];
  informacionCorreoh1: any[] = [];

  email = localStorage.getItem('email');
  
  fileName= 'RespuestasCompletas.xlsx';
  fileNameh1= 'RespuestasCompletas-h12022.xlsx';

  constructor(private auth: AuthService, private sepService: SepService,private router: Router) {

  }

  ngOnInit(): void {
    this.getInformacion();
    
    this.getInformacionh1();
    
  }

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table-com');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

  exportexcelh1(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table-com-h1');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameh1);
 
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

      this.informacionCorreo = this.sepService.filtrarPermisos(this.informacion,this.email);
      
    });
  }


  getInformacionh1(){
    this.sepService.getInformacion2022h1().subscribe(data=>{
      this.informacionh1 = [];
      data.forEach((element: any) => {
        this.informacionh1.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });

      this.informacionCorreoh1 = this.sepService.filtrarPermisos(this.informacionh1,this.email);
      
    });
  }





  eliminar(id: string){
    this.sepService.eliminar(id).then(() =>{
      this.router.navigate(['/listar-respuestas'])
    });
  }

  buttonAgregar(){
    this.router.navigate(['/informacion-compania'])
  }

}
