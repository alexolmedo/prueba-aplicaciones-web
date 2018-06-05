import { Body, Controller, Get, Post, Param, Put, UsePipes, HttpStatus, HttpException } from '@nestjs/common';
import { Auto } from './auto.class';
import { AutoService } from './auto.service';
import { FormatPipe } from 'format.pipe';
import { AUTO_SCHEMA_INSERT, AUTO_SCHEMA_UPDATE } from 'auto/auto.schema';

@Controller('Auto')
export class AutoController{
    constructor(private readonly autoService: AutoService){}

    @Get('listarAutos')
    listarAutos(){
        return this.autoService.listarAuto();
    }

    @Post('crearAuto')
    @UsePipes(new FormatPipe(AUTO_SCHEMA_INSERT))
    crearAuto(
        @Body() bodyParams){
            console.log(bodyParams);
            if (!(this.autoService.existeAuto(bodyParams.id) === -1)){
                return 'El auto ya existe';
            }
            const auto = new Auto(
                bodyParams.id,
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
    @UsePipes(new FormatPipe(AUTO_SCHEMA_UPDATE))
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