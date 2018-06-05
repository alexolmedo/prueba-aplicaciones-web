import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { Conductor } from './conductor.class';
import { ConductorService } from './conductor.service';

@Controller('Conductor')
export class ConductorController{
    constructor(private readonly conductorService: ConductorService){}

    @Get('listarConductores')
    listarConductores(){
        return this.conductorService.listarConductores();
    }

    @Post('crearConductor')
    crearConductor(
        @Body() bodyParams){
            console.log(bodyParams);
            const conductor = new Conductor(
                bodyParams.id,
                bodyParams.nombres,
                bodyParams.apellidos,
                bodyParams.fechaNacimiento,
                bodyParams.numeroAutos,
                bodyParams.licenciaValida);
            return this.conductorService.crearConductor(conductor);
    }

    @Get('obtenerConductor/:id')
    anadirACartelera(@Param() parametros) {
        return this.conductorService.obtenerConductor(parametros.id);
    }

}