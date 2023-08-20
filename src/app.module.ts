import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ship } from './model/ship.entity';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { ShipModule } from './ship/ship.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ShipSchedulerModule } from './scheduled-job/ship-scheduler.module';

@Module({
  imports: [ HttpModule,
    ShipModule,
    ShipSchedulerModule,
    ConfigModule.forRoot(),
    CacheModule.register({
      isGlobal: true
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root1234',
    database: 'spacex_ship',
    entities: [Ship],
    synchronize: true, //For development only
    insecureAuth: false
  })
],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
