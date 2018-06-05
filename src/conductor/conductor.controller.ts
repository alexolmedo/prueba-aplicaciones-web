import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
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
    obtenerConductor(@Param() parametros) {
        return this.conductorService.obtenerConductor(parametros.id);
    }

    @Put('editarConductor/:id')
    editarConductor(
        @Param() parametros,
        @Body() bodyParams) {
            const conductorEdit: Conductor = new Conductor(parametros.id,
            bodyParams.nombres,
            bodyParams.apellidos,
            bodyParams.fechaNacimiento,
            bodyParams.numeroAutos,
            bodyParams.licenciaValida);
            console.log(conductorEdit);
            return this.conductorService.editarConductor(conductorEdit);
    }

}