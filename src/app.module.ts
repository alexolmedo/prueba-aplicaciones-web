import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConductorController } from 'conductor/conductor.controller';
import { ConductorService } from './conductor/conductor.service';

@Module({
  imports: [],
  controllers: [AppController, ConductorController],
  providers: [AppService, ConductorService],
})
export class AppModule {}
