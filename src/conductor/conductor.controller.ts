import { Controller, Get, Post, Body } from '@nestjs/common';
import { ConductorService } from './conductor.service';
import { Conductor } from './conductor.class';

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
                  bodyParams.nombres,
                  bodyParams.apellidos,
                  bodyParams.fechaNacimiento,
                  bodyParams.numeroAutos,
                  bodyParams.licenciaValida);
            return this.conductorService.crearConductor(conductor);

    }

}