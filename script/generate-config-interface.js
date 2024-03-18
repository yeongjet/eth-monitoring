require('json5/lib/register')
const fs = require('fs')
const path = require('path')
const { quicktype, InputData, jsonInputForTargetLanguage } = require('quicktype-core')

const configFile = path.join(__dirname, '../config/local.json5')
const outputFile = path.join(__dirname, '../src/infrastructure/config/type.ts')
const leadingComments = [
    `
/**
 * DO NOT EDIT:
 *
 * This file has been auto-generated from config/sample.json5 using quicktype.
 * Any changes will be overwritten.
 */
`
]

const generateConfigInterface = async ({
    configFile,
    outputFile,
    leadingComments,
    disableLint
}) => {
    const jsonInput = jsonInputForTargetLanguage('typescript')
    await jsonInput.addSource({
        name: 'config',
        samples: [JSON.stringify(require(configFile))]
    })
    const inputData = new InputData()
    inputData.addInput(jsonInput)
    const result = await quicktype({
        inputData,
        lang: 'typescript',
        leadingComments,
        rendererOptions: { 'just-types': true, 'nice-property-names': true }
    })
    result.lines.shift()
    if (disableLint) {
        result.lines.unshift('/* eslint-disable prettier/prettier */')
    }
    fs.writeFileSync(outputFile, result.lines.join('\n'))
    console.log('done')
}

;(async () => {
    await generateConfigInterface({
        configFile,
        outputFile,
        leadingComments,
        disableLint: true
    })
})()
