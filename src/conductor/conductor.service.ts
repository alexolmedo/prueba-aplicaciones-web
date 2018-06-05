import { Component, Injectable } from '@nestjs/common';
import { Conductor } from './conductor.class';

@Injectable()
export class ConductorService {
    private readonly arregloConductores: Conductor[] = [];

    crearConductor(conductor: Conductor): Conductor[]{
        this.arregloConductores.push(conductor);
        return this.arregloConductores;
    }

    listarConductores(): Conductor[]{
        return this.arregloConductores;
    }

    obtenerConductor(id: number): Conductor{
        const indice = this.arregloConductores.findIndex((conductorObjeto) => conductorObjeto.id === id);
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