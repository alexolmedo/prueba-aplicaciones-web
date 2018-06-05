import { Component, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Conductor } from './conductor.class';

@Injectable()
export class ConductorService {
    private readonly arregloConductores: Conductor[] = [];

    crearConductor(conductor: Conductor): Conductor[]{
        this.arregloConductores.push(conductor);
        return this.arregloConductores;
    }

    existeConductor(id: number){
        return this.arregloConductores.findIndex((conductorObjeto) => conductorObjeto.id === id);
    }

    listarConductores(): Conductor[]{
        return this.arregloConductores;
    }

    obtenerConductor(id: number): Conductor{
        const indice = this.arregloConductores.findIndex((conductorObjeto) => conductorObjeto.id === id);
        if (indice === -1){
          throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'El conductor no existe',
          }, 404);
        }
        console.log(indice);
        return this.arregloConductores[indice];
    }

    editarConductor(conductor: Conductor): Conductor[]{
        const indice = this.arregloConductores.findIndex((conductorObjeto) => conductorObjeto.id === conductor.id);
        // Remove undefined fields
        Object.keys(conductor).forEach(key => conductor[key] === undefined ? delete conductor[key] : '');
        // Update new values
        Object.assign(this.arregloConductores[indice], conductor);
        return this.arregloConductores;
    }
}