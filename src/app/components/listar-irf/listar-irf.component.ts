import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listar-irf',
  templateUrl: './listar-irf.component.html',
  styleUrls: ['./listar-irf.component.css']
})
export class ListarIrfComponent implements OnInit {
  userLogged=this.auth.obtenerUser();
  informacion: any[] = [];
  informacionh1: any[] = [];
  
  email = localStorage.getItem('email');
  
  informacionCorreo: any[] = [];
  informacionCorreoh1: any[] = [];
  prueba = 0;
  fileName= 'IRF.xlsx';
  fileNameh1= 'IRF-h1.xlsx';
  condicional = '';

  constructor(private auth: AuthService, private sepService: SepService,private router: Router) {

  }

  ngOnInit(): void {
    this.getInformacion();
    this.getInformacionh1();
  }

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table-irf');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

  exportexcel2(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table-irf2');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

  exportexcel3(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table-irf-h1');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameh1);
 
  }

  exportexcel4(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table-irf2-h1');
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
        if (element.payload.doc.data().tz7 > 0) {
          this.condicional = 'Si'
        }else {
          this.condicional = 'No'
        }
        this.informacion.push({
          id:element.payload.doc.id,
          uno: ((element.payload.doc.data().tz7) / (element.payload.doc.data().tz6)) * 100,
          dos: this.condicional,
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
        if (element.payload.doc.data().tz7 > 0) {
          this.condicional = 'Si'
        }else {
          this.condicional = 'No'
        }
        this.informacionh1.push({
          id:element.payload.doc.id,
          uno: ((element.payload.doc.data().tz7) / (element.payload.doc.data().tz6)) * 100,
          dos: this.condicional,
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
