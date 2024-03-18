import { Module } from '@nestjs/common'
import { createClient } from 'redis'
import * as controllers from '@interface/http/controller'
import * as services from '@application/service'
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'
import { ScheduleModule } from '@nestjs/schedule'
import { CONFIG, REDIS } from '@infra/provide-symbol'
import { config } from '@infra/config'

@Module({
    imports: [ScheduleModule.forRoot()],
    controllers: Object.values(controllers),
    providers: [
        ...Object.values(services),
        {
            provide: CONFIG,
            useValue: config
        },
        {
            provide: REDIS,
            useFactory: () => {
                return createClient({
                    socket: {
                        host: config.redis.host,
                        port: config.redis.port
                    },
                    database: config.redis.database
                })
            }
        }
    ]
})
export class AppModule {}
