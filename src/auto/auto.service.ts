import { Component, Injectable } from '@nestjs/common';
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

    obtenerAuto(chasis: number): Auto{
        const indice = this.arregloAutos.findIndex((autoObjeto) => autoObjeto.chasis === chasis);
        return this.arregloAutos[indice];
    }

    editarAuto(auto: Auto): Auto[]{
        const indice = this.arregloAutos.findIndex((autoObjeto) => autoObjeto.chasis === auto.chasis);
        // Remove undefined fields
        Object.keys(auto).forEach(key => auto[key] === undefined ? delete auto[key] : '');
        // Update new values
        Object.assign(this.arregloAutos[indice], auto);
        return this.arregloAutos;
    }
}