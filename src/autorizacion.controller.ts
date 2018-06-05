import { Body, Controller, Post, Res } from '@nestjs/common';

@Controller('Autorizacion')
export class AutorizacionController {

    @Post('iniciarSesion')
    iniciarSesion(@Body() bodyParams, @Res() response) {
        if (bodyParams.usuario === 'adrianeguez' && bodyParams.password === '12345678910') {
            response.cookie('token', 'adrianeguez');
            const auth = {
                mensaje: 'Ok',
            };
            return response.send(auth);
        }
        return response.send('Error de autenticación');
    }

    @Post('cerrarSesion')
    cerrarSesion(@Res() response) {
        response.cookie('token', undefined);
        const auth = {
            mensaje: 'Usted salió del sistema',
        };
        return response.send(auth);
    }
}