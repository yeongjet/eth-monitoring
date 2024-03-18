/* eslint-disable prettier/prettier */
/**
 * DO NOT EDIT:
 *
 * This file has been auto-generated from config/sample.json5 using quicktype.
 * Any changes will be overwritten.
 */

export interface Config {
    server: Server
    redis: Redis
    pulsar: Pulsar
}

export interface Pulsar {
    host: string
    port: number
}

export interface Redis {
    host: string
    port: number
    database: number
}

export interface Server {
    http: Pulsar
}
