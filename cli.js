#!/usr/bin/env node

'use strict'
const cac = require('cac')
const vsceItemProperty = require('vsce-item-property')
const prettyjson = require('prettyjson')

const cli = cac()

cli.command('*', 'Tell me the vsce name', input => {
  const itemName = input[0]

  vsceItemProperty(itemName)
    .then(res => console.log(prettyjson.render(res, { noColor: true })))
    .catch(err => console.log(err))
})

cli.parse()
