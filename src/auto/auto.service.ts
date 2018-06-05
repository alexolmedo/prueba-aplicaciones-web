import { Component, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Auto } from './auto.class';

@Injectable()
export class AutoService {
    private readonly arregloAutos: Auto[] = [];

    crearAuto(auto: Auto): Auto[]{
        this.arregloAutos.push(auto);
        return this.arregloAutos;
    }

    listarAuto(): Auto[]{
        return this.arregloAutos;
    }

    obtenerAuto(id: number): Auto{
        const indice = this.arregloAutos.findIndex((autoObjeto) => autoObjeto.id === id);
        if (indice === -1){
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'El auto no existe',
            }, 404);
        }
        return this.arregloAutos[indice];
    }

    editarAuto(auto: Auto): Auto[]{
        const indice = this.arregloAutos.findIndex((autoObjeto) => autoObjeto.id === auto.id);
        // Remove undefined fields
        Object.keys(auto).forEach(key => auto[key] === undefined ? delete auto[key] : '');
        // Update new values
        Object.assign(this.arregloAutos[indice], auto);
        return this.arregloAutos;
    }
}