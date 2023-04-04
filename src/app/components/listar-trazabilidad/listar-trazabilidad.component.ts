import { Component, OnInit } from '@angular/core';
import { Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listar-trazabilidad',
  templateUrl: './listar-trazabilidad.component.html',
  styleUrls: ['./listar-trazabilidad.component.css']
})
export class ListarTrazabilidadComponent implements OnInit {
  
  conteoUser = 0
  fileNameh1= 'listado_trazabilidad_h1.xlsx';
  fileName= 'listado_trazabilidad.xlsx';
  userLogged=this.auth.obtenerUser();
  informacion: any[] = [];
  informacionh1: any[] = [];
  email = localStorage.getItem('email');
  
  informacionCorreoh1: any[] = [];
  informacionCorreo: any[] = [];

 
  constructor(private auth: AuthService, private storage: Storage, private sepService: SepService,private router: Router) { 
  }

  ngOnInit(): void {
    this.getUser();
    this.getUserh1();
  }

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table-traza');
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
    let element = document.getElementById('excel-table-traza-h1');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameh1);
 
  }

  getUser(){
    this.sepService.getInformacion().subscribe(data=>{
      this.informacion = [];
      data.forEach((element: any) => {        
        this.conteoUser = this.conteoUser + 1
        this.informacion.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });

      this.informacionCorreo = this.sepService.filtrarPermisos(this.informacion,this.email);
    });
  }

  getUserh1(){
    this.sepService.getInformacion2022h1().subscribe(data=>{
      this.informacionh1 = [];
      data.forEach((element: any) => {        
        this.conteoUser = this.conteoUser + 1
        this.informacionh1.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });

      this.informacionCorreoh1 = this.sepService.filtrarPermisos(this.informacionh1,this.email);
    });
  }




}
