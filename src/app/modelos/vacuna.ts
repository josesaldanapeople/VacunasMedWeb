export class Dosis{
    id!:number;
    numDosis!:string;
    administracion!:string;
    fecha_caducidad!:string;
    dosis_admin!:string;
    fabricante!:string;
    lote!:string;
    siguiente!:string;

}

export class Vacuna{
    nombre!:string;
    descripcion!:string;
    aplicada!:boolean;
    causa_perdida!:string;
    fecha!:string;
    hora!:string;
    dosis!:Dosis[]

}


