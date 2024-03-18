import json5 from 'json5'
import findRoot from 'find-root'
import fs from 'fs'
import { Config } from './type'

export const config: Config = json5.parse(
    fs.readFileSync(`${findRoot(__dirname)}/config/${process.env.NODE_ENV}.json5`, 'utf-8')
)
