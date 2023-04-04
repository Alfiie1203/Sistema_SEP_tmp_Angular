import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SepService } from 'src/app/service/sep.service';
import Swal from 'sweetalert2';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-reg-info-tambientales',
  templateUrl: './reg-info-tambientales.component.html',
  styleUrls: ['./reg-info-tambientales.component.css']
})
export class RegInfoTambientalesComponent implements OnInit {
  @ViewChild('evidenciata1') input_ta1: ElementRef;
  @ViewChild('evidenciata2') input_ta2: ElementRef;
  @ViewChild('evidenciata17') input_ta17: ElementRef;
  @ViewChild('evidenciata18') input_ta18: ElementRef;
  @ViewChild('evidenciata81') input_ta81: ElementRef;
  @ViewChild('evidenciata84') input_ta84: ElementRef;
  @ViewChild('evidenciata85') input_ta85: ElementRef;
  @ViewChild('evidenciata86') input_ta86: ElementRef;
  @ViewChild('evidenciata88') input_ta88: ElementRef;
  @ViewChild('evidenciata89') input_ta89: ElementRef;
  @ViewChild('evidenciata90') input_ta90: ElementRef;
  
  @ViewChild('evidenciata91') input_ta91: ElementRef;  
  @ViewChild('evidenciata92') input_ta92: ElementRef;  
  @ViewChild('evidenciata93') input_ta93: ElementRef;  
  @ViewChild('evidenciata95') input_ta95: ElementRef;  
  @ViewChild('evidenciata96') input_ta96: ElementRef;
  userLogged=this.auth.obtenerUser();
  email = localStorage.getItem('email');
  informacionUser: any[] = [];  
  informacionCorreoUser: any[] = [];
  createRegister: FormGroup;
  informacion: any[] = [];
  submitted = false;
  loading = false;
  fecha = new Date()
  id: string | null;
  uploadPercent: Observable<number>;
  noAplica = "No Aplica"
  urlta1: Observable<string>;
  urlta2: Observable<string>;
  urlta17: Observable<string>;
  urlta18: Observable<string>;
  urlta81: Observable<string>;
  urlta84: Observable<string>;
  urlta85: Observable<string>;
  urlta86: Observable<string>;
  urlta88: Observable<string>;
  urlta89: Observable<string>;  
  urlta90: Observable<string>;
   
  urlta91: Observable<string>; 
  urlta92: Observable<string>; 
  urlta93: Observable<string>; 
  urlta95: Observable<string>; 
  urlta96: Observable<string>;

  constructor(private storage: AngularFireStorage, private auth: AuthService,private fb: FormBuilder, private sepService: SepService, private toastr: ToastrService,
    private aRoute: ActivatedRoute, private router: Router) {
      this.createRegister = this.fb.group({    
        
        //Matriz 1:
        //Pregunta 1
        ta1: ['',Validators.required],
        evidenciata1 : [''],
        ta2: ['',Validators.required],
        evidenciata2 : [''],
        ta3: ['',Validators.required],
        ta4: ['',Validators.required],
        ta5: ['',Validators.required],
        ta6: ['',Validators.required],
        ta7: ['',Validators.required],
        ta8: ['',Validators.required],        
        //Pregunta 2
        ta9: ['',Validators.required],
        ta10: ['',Validators.required],
        ta11: ['',Validators.required],
        ta12: ['',Validators.required],
        ta13: ['',Validators.required],
        ta14: ['',Validators.required],
        ta15: ['',Validators.required],
        ta16: ['',Validators.required],
        //Pregunta 3       
        ta17: ['',Validators.required],
        evidenciata17 : [''],
        ta18: ['',Validators.required],
        evidenciata18 : [''],
        ta19: ['',Validators.required],
        ta20: ['',Validators.required],       
        ta21: ['',Validators.required],
        ta22: ['',Validators.required],
        ta23: ['',Validators.required],
        ta24: ['',Validators.required],
        //Pregunta 4
        ta25: ['',Validators.required],
        ta26: ['',Validators.required],
        ta27: ['',Validators.required],
        ta28: ['',Validators.required],
        ta29: ['',Validators.required], 
        ta30: ['',Validators.required],
        ta31: ['',Validators.required],
        ta32: ['',Validators.required],
        //Pregunta 5
        ta33: ['',Validators.required],
        ta34: ['',Validators.required],
        ta35: ['',Validators.required],
        ta36: ['',Validators.required],
        ta37: ['',Validators.required],
        ta38: ['',Validators.required],
        ta39: ['',Validators.required],
        ta40: ['',Validators.required],
        //Pregunta 6
        ta41: ['',Validators.required],
        ta42: ['',Validators.required],
        ta43: ['',Validators.required],
        ta44: ['',Validators.required],
        ta45: ['',Validators.required],
        ta46: ['',Validators.required],
        ta47: ['',Validators.required],
        ta48: ['',Validators.required],
        //Pregunta 7
        ta49: ['',Validators.required],
        ta50: ['',Validators.required],
        ta51: ['',Validators.required],
        ta52: ['',Validators.required],
        ta53: ['',Validators.required],
        ta54: ['',Validators.required],
        ta55: ['',Validators.required],
        ta56: ['',Validators.required],
        //Pregunta 8
        ta57: ['',Validators.required],
        ta58: ['',Validators.required],
        ta59: ['',Validators.required],
        ta60: ['',Validators.required],
        ta61: ['',Validators.required],
        ta62: ['',Validators.required],
        ta63: ['',Validators.required],
        ta64: ['',Validators.required],
        //Pregunta 9
        ta65: ['',Validators.required],
        ta66: ['',Validators.required],
        ta67: ['',Validators.required],
        ta68: ['',Validators.required],
        ta69: ['',Validators.required],         
        ta70: ['',Validators.required],
        ta71: ['',Validators.required],
        ta72: ['',Validators.required],
        //Pregunta 10
        ta73: ['',Validators.required],
        ta74: ['',Validators.required],
        ta75: ['',Validators.required],
        ta76: ['',Validators.required],
        ta77: ['',Validators.required],
        ta78: ['',Validators.required],
        ta79: ['',Validators.required],        
        ta80: ['',Validators.required],






        ta81: ['',Validators.required],
        evidenciata81 : [''],
        //ta82: ['',Validators.required],
        //ta83: ['',Validators.required],
        ta84: ['',Validators.required],
        evidenciata84 : [''],
        ta85: ['',Validators.required],
        evidenciata85 : [''],
        ta86: ['',Validators.required],
        evidenciata86 : [''],
        //ta87: ['',Validators.required],
        ta88: ['',Validators.required],        
        evidenciata88 : [''],
        ta89: ['',Validators.required],        
        evidenciata89 : [''],
        ta90: ['',Validators.required],
        evidenciata90 : [''],
        evidenciata91 : [''],
        evidenciata92 : [''],
        evidenciata93 : [''],
        evidenciata95 : [''],
        evidenciata96 : [''],
        ta91: ['',Validators.required],
        ta92: ['',Validators.required],        
        ta93: ['',Validators.required], 
        ta94: ['',Validators.required], 
        ta95: ['',Validators.required],
        ta96: ['',Validators.required],
        ta97: ['',Validators.required],
        ta98: ['',Validators.required],
        ta99: ['',Validators.required],


        
        ta100: ['',Validators.required],
        ta101: ['',Validators.required],
        ta102: ['',Validators.required],
        ta103: ['',Validators.required],
        ta104: ['',Validators.required],
        ta105: ['',Validators.required],
        ta106: ['',Validators.required],
        ta107: ['',Validators.required],
        ta108: ['',Validators.required],
        ta109: ['',Validators.required],
        ta110: ['',Validators.required],
        ta111: ['',Validators.required],
        ta112: ['',Validators.required],
        ta113: ['',Validators.required],
        ta114: ['',Validators.required],
        ta115: ['',Validators.required],
        ta116: ['',Validators.required],
        ta117: ['',Validators.required],
        ta118: ['',Validators.required],
        ta119: ['',Validators.required],
        ta120: ['',Validators.required],
        




      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {    
    this.createRegister.value.ta1
    this.getInformacionCorreo()
    this.esEditar();
  }


  infota1(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'Política o compromiso de no deforestación a través de una política disponible en el sitio web de la planta extractora o de la empresa matriz, o una declaración aprobada por el director general o un miembro del consejo de administración, un contrato firmado entre el Agregador de Datos y la planta extractora en el que se establezcan compromisos claros de no deforestación o cualquier otra prueba correspondiente.',
        
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
  }

  infota2(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'Política o el compromiso de no utilizar turba a través de una política disponible en el sitio web de la planta o de la empresa matriz, o enviada al agregador de datos y aprobada por un representante de la empresa, o un contrato firmado entre el agregador de datos y la planta extractora en el que se establezcan compromisos claros de no deforestación o cualquier otra prueba correspondiente.',
        
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
  }

  infota17(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'Para ser seleccionado como Sí, los elementos que el plan de acción debe incluir:'+
        '• Medidas con un plazo determinado para lograr la no deforestación en toda la zona de producción de la planta extractora (plantaciones gestionadas directamente y fincas de terceros)'+
        '• Identificación de proveedores de RFF procedentes de zonas que no hayan contribuido a la deforestación desde el 31 de diciembre de 2015 o antes'+
        '• Sensibilización y formación para garantizar que los proveedores y el personal de campo puedan aplicar el compromiso de no deforestación, incluidos los indicadores de objetivos y los plazos;'+
        '• Seguimiento del progreso y evaluación, incluyendo indicadores y plazos.',
        
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
  }

  infota18(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'Para ser seleccionado como "Sí", los elementos que el plan de acción debe cubrir incluyen:'+
        '• Medidas con plazos definidos para la no explotación de las áreas de turba que abarquen toda la zona de producción de la planta extractora (tanto las plantaciones gestionadas directamente como las fincas de terceros);'+
        '• Trazabilidad de los proveedores de RFF, incluyendo indicadores y plazos;'+
        '• Identificación de los proveedores de RFF de toda la base de producción que no operan en áreas despejadas para la turba desde el 31 de diciembre de 2015, o de áreas que se gestionan de acuerdo con las mejores prácticas;'+
        '• Sensibilización y formación para garantizar que proveedores y personal de campo puedan aplicar el compromiso de no deforestación incluyendo indicadores y plazos;'+
        '• Seguimiento del progreso y evaluación, incluyendo indicadores de objetivos y calendarios',
        
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
  }


  infota84(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'En caso de enfoques de paisaje que apoyen a proveedores externos'+
        '• Verificar la existencia de acuerdos debidamente firmados entre las plantas extractoras y los proveedores. Esto podría ser en forma de contrato firmado, actas de reuniones, comunicación por correo electrónico'+
        '• Verificar la existencia de documentos de descripción de los programas, incluidos los plazos y los objetivos, así como el monitoreo de los avances.'+
        'En el caso de los programas de apoyo a los pequeños propietarios independientes:'+
        '• Verificar la existencia de documentos de descripción del programa, incluyendo plazos y objetivos, así como el monitoreo de los avances.'+
        '• Dependiendo del tipo de iniciativas seleccionadas, deben aportarse pruebas de su aplicación'+
        'Es importante demostrar que cualquiera de estos programas incluye la base de suministro de la planta extractora en cuestión. En el caso de que la planta extractora y su base de suministro estén actualmente cubiertas por un programa de terceros gestionado por otra organización o empresa, debe proporcionarse una confirmación de la naturaleza del programa y de que la planta extractora está incluida. Algunos ejemplos podrían ser la descripción del programa en el sitio web de la organización con la lista de plantas extractoras incluidas; la confirmación directa de la organización, etc.',
        
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
  }

  infota86(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'Existencia de un sistema de monitoreo sólido'+
        'Existe una amplia gama de iniciativas sobre el terreno. Sin embargo, el enfoque general debe ser el rastreo de la ubicación de los proveedores externos, la verificación de la no deforestación o de la explotación de la turba mediante el monitoreo por satélite, y la observación directa a través de visitas al sitio.'+
        'Es importante demostrar que cualquiera de estos programas incluye el caso de suministro de la planta extractora en cuestión. En el caso de que la planta extractora y su base de suministro estén actualmente cubiertas por un programa de terceros gestionado por otra organización o empresa, debe proporcionarse una confirmación de la naturaleza del programa y de que la planta extractora está incluida.'+
        'Algunos ejemplos podrían ser la descripción del programa en el sitio web de la organización con la lista de plantas extractoras incluidas; la confirmación directa de la organización, etc.',
        
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
  }


  infota85(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'Informes periódicos de seguimiento - los informes se deben elaborar con regularidad (al menos cada 6 meses). La planta extractora, la empresa matriz o cualquier otra empresa que controle la base de suministro de la planta deben poner a disposición protocolos o procedimientos que describan claramente cómo se están tratando las alertas y las personas responsables.'+
        'Se pueden aportar pruebas de cómo se respondió a las alertas anteriores de acuerdo con los pasos descritos en los protocolos de los sistemas de quejas o alertas disponibles'+
        'Algunos de los principales proveedores de servicios de seguimiento por satélite son Satelligence, Maphubs, Global Forest Watch Pro, AidEnviroment/Earthequalizer, Earthworm/Starling, entre otros',
        
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
  }




  infota88(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'La planta extractora debe contar con un sistema de quejas y reclamos en donde se registre cualquier queja haya tenido lugar.'+
        'Cualquier queja registrada en el sistema de la empresa debe ser registrado en el IRF según las opciones de respuesta.'+
        'Se debe considerar lo siguiente, como mínimo, si existe un proceso de reclamación:'+
        'Existe una guía interna para el personal en la que se detalla cómo tratar eficazmente las quejas y reclamaciones, que incluye los siguientes puntos:'+
        '• Explica claramente quién es el responsable interno de tratar las quejas y reclamaciones'+
        '• Qué miembro del equipo es responsable de tomar decisiones internas y/o tomar posiciones sobre las quejas y tiene la responsabilidad final de comunicar las decisiones'+
        '• Existen pasos claros para clasificar una queja como registrada, en progreso/seguimiento, y resuelta',
        
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
  }

  

  infota89(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'Cualquier evidencia que muestre las visitas recibidas por la planta extractora en relación con el sistema y las condiciones.'+
        'Terceras partes, como empresas independientes, consultorías, ONG o el propio Agregador de Datos que visitan la empresa.'+
        'Las pruebas pueden incluir una declaración firmada por la empresa independiente, un informe de la visita, un correo electrónico que confirme las visitas o cualquier otra prueba de que se ha producido por la visita.',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
  }


  infota93(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'Los mapas operativos de la planta extractora deben mostrar que no hay zonas urbanizables y que las áreas de plantación, conservación y comunitarias existentes están claramente delimitadas.'+
        'Estos mapas también deberían mostrar que no hay zonas de preparación de tierras en un área de <5-10 ha de los límites de la plantación.'+
        'Otras pruebas que podrían incluirse son'+
        '• Registro del último desbroce del terreno'+
        '• Registro de la última plantación nueva'+
        '• La declaración de la zona, que describe el año de plantación de los árboles de palma aceitera'+
        'Comprobar a través de mapas y/o imágenes de satélite (si están disponibles) si ha habido algún desmonte a 31 de diciembre de 2015 y si hay zonas urbanizables alrededor de la concesión de la planta extractora.',

      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
  }

  infota91(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'Informe de evaluación de AVC-ARC disponible y verifique a través del sitio web de la empresa si la evaluación de AVC es realizada por un evaluador autorizado o un profesional registrado, bajo una revisión independiente.'+
        'Las organizaciones registradas se pueden encontrar aquí:'+
        'AVC-ARC: https://hcvnetwork.org/find-'+
        'evaluadores/'+
        'Sólo ARC: http://highcarbonstock.org/hcs-'+
        'enfoque- proceso-de-revisión-de-calidad/hcs-aproximación-'+
        'organizaciones registradas/'+
        'Para las evaluaciones ya realizadas que incluyan solo la parte de AVC, se puede aplicar una fase de transición que dure hasta 2023.',
        
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
  }

  infota92(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'Plan de manejo y monitoreo disponible incluyendo información sobre:'+
        '• qué actividades están permitidas/prohibidas en las distintas zonas,'+
        '• protocolos de monitoreo (por satélite, sobre el terreno basados en la comunidad, etc.)'+
        '• responsabilidades y funciones del equipo, por ejemplo, procedimientos operativos normalizados'+
        '• planes/registros de formación del personal'+
        '• proceso de participación de la comunidad'+
        '• recursos disponibles'+
        '• Sistemas de monitoreo satelital que incorporen áreas identificadas de AVC/ARC en el sistema de vigilancia y alerta',
        
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
  }



  infota95(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'Informe de evaluación de la turba o del suelo que incluya la metodología aplicada y mapas que muestren la extensión, naturaleza, distribución y profundidad de la turba.'+
        'La evaluación debe incluir al menos la metodología de identificación de los suelos de turba, mapas que muestren la extensión, naturaleza, distribución, uso del suelo (plantado, conservación y otros) y profundidad de la turba, y la recomendación de evitar la plantación en suelos de turba',
        
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Entiendo!'
    })
  }


  infota96(){
    Swal.fire({
      title: '<strong>¿Necesitas ayuda?</u></strong>',
      icon: 'info',
      html:
        'Acciones identificadas en el plan de manejo y la planificación anual. El plan de manejo debe estar actualizado y debe basarse en los resultados de la última evaluación (véase más arriba) y reflejar las medidas que garanticen que la turba no tendrá impactos adversos en la plantación existente (antes del 31 de diciembre de 2015) y que se evitará la plantación en nuevas áreas (a partir del 31 de diciembre), independientemente de la profundidad. Asimismo, deberá reflejarse un plan de remediación (en caso de ser necesario) En el monitoreo del plan de manejo, verifique si la planta extractora y las bases de suministro cuentan con un plan de monitoreo, y si éste se implementa como tal. Los elementos de un plan de monitoreo adecuado incluyen:'+
        'Monitoreo sobre medidas de agua y cobertura del suelo, y prevención de incendios mediante la revisión de registros.'+
        'Seguimiento del hundimiento de la turba y del nivel de agua de la turba, al menos trimestralmente, y registro del mismo, y consideración de las medidas de gestión del agua y de la cubierta del suelo en caso de hundimiento.'+
        'El monitoreo de la prevención de incendios debe ser establecido y registrado en consecuencia.'+
        'Las pruebas de la aplicación podrían ser'+
        '• Informe de situación que describa los progresos realizados a lo largo de diferentes visitas'+
        '• Pruebas fotográficas'+
        '• Informes o comunicaciones diarias tras las visitas sobre el terreno del personal requerido',
        
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
    });
  }


  async ta1(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta1_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta1 = ref.getDownloadURL())).subscribe();
    
  }

  ta2(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta2_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta2 = ref.getDownloadURL())).subscribe();

  }

  ta17(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta17_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta17 = ref.getDownloadURL())).subscribe();

  }

  ta18(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta18_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta18 = ref.getDownloadURL())).subscribe();

  }

  ta81(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta81_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta81 = ref.getDownloadURL())).subscribe();

  }

  ta84(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta84_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta84 = ref.getDownloadURL())).subscribe();

  }

  ta85(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta85_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta85 = ref.getDownloadURL())).subscribe();

  }

  ta86(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta86_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta86 = ref.getDownloadURL())).subscribe();

  }

  ta88(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta88_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta88 = ref.getDownloadURL())).subscribe();

  }

  ta89(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta89_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta89 = ref.getDownloadURL())).subscribe();

  }

  ta90(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta90_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta90 = ref.getDownloadURL())).subscribe();

  }

  ta91(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta91_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta91 = ref.getDownloadURL())).subscribe();

  }

  ta92(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta92_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta92 = ref.getDownloadURL())).subscribe();

  }

  ta93(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta93_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta93 = ref.getDownloadURL())).subscribe();

  }

  ta95(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta95_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta95 = ref.getDownloadURL())).subscribe();

  }

  ta96(e: any){
    const alea = Math.random().toString(36).substring(2);
    const file = e.target.files[0]
    const filePath = 'CarpetaEvidencias/Evidencia_'+this.id+'_ta96_'+'_'+alea;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    task.snapshotChanges().pipe(finalize(() => this.urlta96 = ref.getDownloadURL())).subscribe();

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
          this.router.navigate(['/edit-info-gobernanza/',this.id])
        }
      })      
    }else{
      this.router.navigate(['/edit-info-gobernanza/',this.id])
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

  getInformacionUserCorreo(){

    const act: any = {
      tAmbiental: '100%',
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

  editarinfo(id: string){
    const asd: any = {
      ta1: this.createRegister.value.ta1,
      evidenciata1 : this.input_ta1.nativeElement.value,
      ta2: this.createRegister.value.ta2,
      evidenciata2 : this.input_ta2.nativeElement.value,
      ta3: this.createRegister.value.ta3,      
      ta4: this.createRegister.value.ta4,      
      ta5: this.createRegister.value.ta5,      
      ta6: this.createRegister.value.ta6,      
      ta7: this.createRegister.value.ta7,      
      ta8: this.createRegister.value.ta8,      
      ta9: this.createRegister.value.ta9,      
      ta10: this.createRegister.value.ta10,

      ta11: this.createRegister.value.ta11,
      ta12: this.createRegister.value.ta12,
      ta13: this.createRegister.value.ta13,      
      ta14: this.createRegister.value.ta14,      
      ta15: this.createRegister.value.ta15,      
      ta16: this.createRegister.value.ta16,      
      ta17: this.createRegister.value.ta17,  
      evidenciata17 : this.input_ta17.nativeElement.value,  
      ta18: this.createRegister.value.ta18, 
      evidenciata18 : this.input_ta18.nativeElement.value,  
      ta19: this.createRegister.value.ta19,      
      ta20: this.createRegister.value.ta20,

      ta21: this.createRegister.value.ta21,
      ta22: this.createRegister.value.ta22,
      ta23: this.createRegister.value.ta23,      
      ta24: this.createRegister.value.ta24,      
      ta25: this.createRegister.value.ta25,      
      ta26: this.createRegister.value.ta26,      
      ta27: this.createRegister.value.ta27,      
      ta28: this.createRegister.value.ta28,      
      ta29: this.createRegister.value.ta29,      
      ta30: this.createRegister.value.ta30,

      ta31: this.createRegister.value.ta31,
      ta32: this.createRegister.value.ta32,
      ta33: this.createRegister.value.ta33,      
      ta34: this.createRegister.value.ta34,      
      ta35: this.createRegister.value.ta35,      
      ta36: this.createRegister.value.ta36,      
      ta37: this.createRegister.value.ta37,      
      ta38: this.createRegister.value.ta38,      
      ta39: this.createRegister.value.ta39,      
      ta40: this.createRegister.value.ta40,

      ta41: this.createRegister.value.ta41,
      ta42: this.createRegister.value.ta42,
      ta43: this.createRegister.value.ta43,      
      ta44: this.createRegister.value.ta44,      
      ta45: this.createRegister.value.ta45,      
      ta46: this.createRegister.value.ta46,      
      ta47: this.createRegister.value.ta47,      
      ta48: this.createRegister.value.ta48,      
      ta49: this.createRegister.value.ta49,      
      ta50: this.createRegister.value.ta50,

      ta51: this.createRegister.value.ta51,
      ta52: this.createRegister.value.ta52,
      ta53: this.createRegister.value.ta53,      
      ta54: this.createRegister.value.ta54,      
      ta55: this.createRegister.value.ta55,      
      ta56: this.createRegister.value.ta56,      
      ta57: this.createRegister.value.ta57,      
      ta58: this.createRegister.value.ta58,      
      ta59: this.createRegister.value.ta59,      
      ta60: this.createRegister.value.ta60,

      ta61: this.createRegister.value.ta61,
      ta62: this.createRegister.value.ta62,
      ta63: this.createRegister.value.ta63,      
      ta64: this.createRegister.value.ta64,      
      ta65: this.createRegister.value.ta65,      
      ta66: this.createRegister.value.ta66,      
      ta67: this.createRegister.value.ta67,      
      ta68: this.createRegister.value.ta68,      
      ta69: this.createRegister.value.ta69,      
      ta70: this.createRegister.value.ta70,

      ta71: this.createRegister.value.ta71,
      ta72: this.createRegister.value.ta72,
      ta73: this.createRegister.value.ta73,
      ta74: this.createRegister.value.ta74,
      ta75: this.createRegister.value.ta75,
      ta76: this.createRegister.value.ta76,
      ta77: this.createRegister.value.ta77,
      ta78: this.createRegister.value.ta78,
      ta79: this.createRegister.value.ta79,        
      ta80: this.createRegister.value.ta80,
      
      


      ta81: this.createRegister.value.ta81, 
      evidenciata81 : this.input_ta81.nativeElement.value,
      //ta82: this.createRegister.value.ta82,
      //ta83: this.createRegister.value.ta83,
      ta84: this.createRegister.value.ta84,
      evidenciata84 : this.input_ta84.nativeElement.value,
      ta85: this.createRegister.value.ta85,
      evidenciata85 : this.input_ta85.nativeElement.value,
      ta86: this.createRegister.value.ta86,
      evidenciata86 : this.input_ta86.nativeElement.value,
      //ta87: this.createRegister.value.ta87,
      ta88: this.createRegister.value.ta88,
      evidenciata88 : this.input_ta88.nativeElement.value,
      ta89: this.createRegister.value.ta89,
      evidenciata89 : this.input_ta89.nativeElement.value,
      ta90: this.createRegister.value.ta90,      
      evidenciata90 : this.input_ta90.nativeElement.value,
      evidenciata91 : this.input_ta91.nativeElement.value,
      evidenciata92 : this.input_ta92.nativeElement.value,
      evidenciata93 : this.input_ta93.nativeElement.value,
      evidenciata95 : this.input_ta95.nativeElement.value,
      evidenciata96 : this.input_ta96.nativeElement.value,
      ta91: this.createRegister.value.ta91,
      ta92: this.createRegister.value.ta92,        
      ta93: this.createRegister.value.ta93, 
      ta94: this.createRegister.value.ta94, 
      ta95: this.createRegister.value.ta95,
      ta96: this.createRegister.value.ta96,
      ta97: this.createRegister.value.ta97,
      ta98: this.createRegister.value.ta98,
      ta99: this.createRegister.value.ta99,

      
      ta100: this.createRegister.value.ta100,
      ta101: this.createRegister.value.ta101,
      ta102: this.createRegister.value.ta102,
      ta103: this.createRegister.value.ta103,
      ta104: this.createRegister.value.ta104,
      ta105: this.createRegister.value.ta105,
      ta106: this.createRegister.value.ta106,
      ta107: this.createRegister.value.ta107,
      ta108: this.createRegister.value.ta108,
      ta109: this.createRegister.value.ta109,
      ta110: this.createRegister.value.ta110,
      ta111: this.createRegister.value.ta111,
      ta112: this.createRegister.value.ta112,
      ta113: this.createRegister.value.ta113,
      ta114: this.createRegister.value.ta114,
      ta115: this.createRegister.value.ta115,
      ta116: this.createRegister.value.ta116,
      ta117: this.createRegister.value.ta117,
      ta118: this.createRegister.value.ta118,
      ta119: this.createRegister.value.ta119,
      ta120: this.createRegister.value.ta120

      

    }
    this.loading = true;
    this.sepService.editIformacion(id,asd).then(() =>{
      
      this.getInformacionUserCorreo();
      this.loading = false;
      this.router.navigate(['/edit-info-temas-sociales/',id])
    })

  }


  esEditar() {
    if (this.id !== null) {
      this.loading = true;
      this.sepService.getInformacionById(this.id).subscribe(data =>{
        this.loading= false;
        this.createRegister.setValue({
          ta1: data.payload.data()['ta1'],
          evidenciata1: data.payload.data()['evidenciata1'],
          ta2: data.payload.data()['ta2'],
          evidenciata2: data.payload.data()['evidenciata2'],
          ta3: data.payload.data()['ta3'],    
          ta4: data.payload.data()['ta4'],      
          ta5: data.payload.data()['ta5'],      
          ta6: data.payload.data()['ta6'],      
          ta7: data.payload.data()['ta7'],      
          ta8: data.payload.data()['ta8'],      
          ta9: data.payload.data()['ta9'],      
          ta10: data.payload.data()['ta10'],

          
          ta11: data.payload.data()['ta11'],
          ta12: data.payload.data()['ta12'],
          ta13: data.payload.data()['ta13'],    
          ta14: data.payload.data()['ta14'],      
          ta15: data.payload.data()['ta15'],      
          ta16: data.payload.data()['ta16'],      
          ta17: data.payload.data()['ta17'],
          evidenciata17: data.payload.data()['evidenciata17'],      
          ta18: data.payload.data()['ta18'], 
          evidenciata18: data.payload.data()['evidenciata18'],     
          ta19: data.payload.data()['ta19'],      
          ta20: data.payload.data()['ta20'],

          
          ta21: data.payload.data()['ta21'],
          ta22: data.payload.data()['ta22'],
          ta23: data.payload.data()['ta23'],    
          ta24: data.payload.data()['ta24'],      
          ta25: data.payload.data()['ta25'],      
          ta26: data.payload.data()['ta26'],      
          ta27: data.payload.data()['ta27'],      
          ta28: data.payload.data()['ta28'],      
          ta29: data.payload.data()['ta29'],      
          ta30: data.payload.data()['ta30'],

          
          ta31: data.payload.data()['ta31'],
          ta32: data.payload.data()['ta32'],
          ta33: data.payload.data()['ta33'],    
          ta34: data.payload.data()['ta34'],      
          ta35: data.payload.data()['ta35'],      
          ta36: data.payload.data()['ta36'],      
          ta37: data.payload.data()['ta37'],      
          ta38: data.payload.data()['ta38'],      
          ta39: data.payload.data()['ta39'],      
          ta40: data.payload.data()['ta40'],

          
          ta41: data.payload.data()['ta41'],
          ta42: data.payload.data()['ta42'],
          ta43: data.payload.data()['ta43'],    
          ta44: data.payload.data()['ta44'],      
          ta45: data.payload.data()['ta45'],      
          ta46: data.payload.data()['ta46'],      
          ta47: data.payload.data()['ta47'],      
          ta48: data.payload.data()['ta48'],      
          ta49: data.payload.data()['ta49'],      
          ta50: data.payload.data()['ta50'],

          
          ta51: data.payload.data()['ta51'],
          ta52: data.payload.data()['ta52'],
          ta53: data.payload.data()['ta53'],    
          ta54: data.payload.data()['ta54'],      
          ta55: data.payload.data()['ta55'],      
          ta56: data.payload.data()['ta56'],      
          ta57: data.payload.data()['ta57'],      
          ta58: data.payload.data()['ta58'],      
          ta59: data.payload.data()['ta59'],      
          ta60: data.payload.data()['ta60'],

          
          ta61: data.payload.data()['ta61'],
          ta62: data.payload.data()['ta62'],
          ta63: data.payload.data()['ta63'],    
          ta64: data.payload.data()['ta64'],      
          ta65: data.payload.data()['ta65'],      
          ta66: data.payload.data()['ta66'],      
          ta67: data.payload.data()['ta67'],      
          ta68: data.payload.data()['ta68'],      
          ta69: data.payload.data()['ta69'],      
          ta70: data.payload.data()['ta70'],


          ta71: data.payload.data()['ta71'],
          ta72: data.payload.data()['ta72'],
          ta73: data.payload.data()['ta73'],
          ta74: data.payload.data()['ta74'], 
          ta75: data.payload.data()['ta75'],
          ta76: data.payload.data()['ta76'],
          ta77: data.payload.data()['ta77'],
          ta78: data.payload.data()['ta78'],
          ta79: data.payload.data()['ta79'],        
          ta80: data.payload.data()['ta80'], 
          
          



          ta81: data.payload.data()['ta81'], 
          evidenciata81: data.payload.data()['evidenciata81'],
          //ta82: data.payload.data()['ta82'],
          //ta83: data.payload.data()['ta83'],
          ta84: data.payload.data()['ta84'],
          evidenciata84: data.payload.data()['evidenciata84'],
          ta85: data.payload.data()['ta85'],
          evidenciata85: data.payload.data()['evidenciata85'],
          ta86: data.payload.data()['ta86'],
          evidenciata86: data.payload.data()['evidenciata86'],
          //ta87: data.payload.data()['ta87'],
          ta88: data.payload.data()['ta88'],
          evidenciata88: data.payload.data()['evidenciata88'],
          ta89: data.payload.data()['ta89'],
          evidenciata89: data.payload.data()['evidenciata89'],
          ta90: data.payload.data()['ta90'],
          evidenciata90: data.payload.data()['evidenciata90'],
          evidenciata91: data.payload.data()['evidenciata91'],
          evidenciata92: data.payload.data()['evidenciata92'],
          evidenciata93: data.payload.data()['evidenciata93'],
          evidenciata95: data.payload.data()['evidenciata95'],
          evidenciata96: data.payload.data()['evidenciata96'],
          ta91: data.payload.data()['ta91'],
          ta92: data.payload.data()['ta92'],        
          ta93: data.payload.data()['ta93'], 
          ta94: data.payload.data()['ta94'], 
          ta95: data.payload.data()['ta95'],
          ta96: data.payload.data()['ta96'],
          ta97: data.payload.data()['ta97'],
          ta98: data.payload.data()['ta98'],
          ta99: data.payload.data()['ta99'],
          
          ta100: data.payload.data()['ta100'],
          ta101: data.payload.data()['ta101'],
          ta102: data.payload.data()['ta102'],
          ta103: data.payload.data()['ta103'],
          ta104: data.payload.data()['ta104'],
          ta105: data.payload.data()['ta105'],
          ta106: data.payload.data()['ta106'],
          ta107: data.payload.data()['ta107'],
          ta108: data.payload.data()['ta108'],
          ta109: data.payload.data()['ta109'],
          ta110: data.payload.data()['ta110'],
          ta111: data.payload.data()['ta111'],
          ta112: data.payload.data()['ta112'],
          ta113: data.payload.data()['ta113'],
          ta114: data.payload.data()['ta114'],
          ta115: data.payload.data()['ta115'],
          ta116: data.payload.data()['ta116'],
          ta117: data.payload.data()['ta117'],
          ta118: data.payload.data()['ta118'],
          ta119: data.payload.data()['ta119'],
          ta120: data.payload.data()['ta120']



        })
      })  
      
    }
  }

}
