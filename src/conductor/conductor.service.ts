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
}