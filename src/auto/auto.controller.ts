import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { Auto } from './auto.class';
import { AutoService } from './auto.service';

@Controller('Auto')
export class AutoController{
    constructor(private readonly autoService: AutoService){}

    @Get('listarAutos')
    listarAutos(){
        return this.autoService.listarAuto();
    }

    @Post('crearAuto')
    crearAuto(
        @Body() bodyParams){
            console.log(bodyParams);
            const auto = new Auto(
                bodyParams.chasis,
                bodyParams.nombreMarca,
                bodyParams.colorUno,
                bodyParams.colorDos,
                bodyParams.nombreModelo,
                bodyParams.anio,
                bodyParams.idConductor);
            return this.autoService.crearAuto(auto);
    }

    @Get('obtenerAuto/:id')
    obtenerAuto(@Param() parametros) {
        return this.autoService.obtenerAuto(parametros.id);
    }

    @Put('editarAuto/:id')
    editarAuto(
        @Param() parametros,
        @Body() bodyParams) {
            const autoEdit: Auto = new Auto(parametros.id,
                bodyParams.nombreMarca,
                bodyParams.colorUno,
                bodyParams.colorDos,
                bodyParams.nombreModelo,
                bodyParams.anio,
                bodyParams.idConductor);
            console.log(autoEdit);
            return this.autoService.editarAuto(autoEdit);
    }

}