#!/usr/bin/env node
'use strict';

var program = require('commander');
var pkg = require('../package.json');
var convertToBTC = require('./ConvertBTC');

program.version(pkg.version).description('Convert Bitcoin to any currency defined.').option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)').option('-A, --amount <amount>', 'Amount to be converted. (Default: 1)').parse(process.argv);

console.log(convertToBTC(program.currency, program.amount));