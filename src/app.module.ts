import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConductorController } from 'conductor/conductor.controller';
import { ConductorService } from './conductor/conductor.service';
import { AutoController } from 'auto/auto.controller';
import { AutoService } from 'auto/auto.service';

@Module({
  imports: [],
  controllers: [AppController, ConductorController, AutoController],
  providers: [AppService, ConductorService, AutoService],
})
export class AppModule {}
