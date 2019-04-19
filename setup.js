'use strict'
const debug = require('debug')('hydroIot:db:setup')
const inquirer= require('inquirer')
const chalk=require('chalk')
const db = require('./')

const prompt=inquirer.createPromptModule()

async function setup () {
    const answer=await prompt([
        {type:'confirm',name:'confirm',message:'Destroy ur DB,ru sure?'}
    ])
    if (!answer) {console.log(answer); return console.log('no,so nothing happened')}

  const config = {
    database: process.env.DB_NAME || 'hydroiot',
    username: process.env.DB_USER || 'hydro',
    password: process.env.DB_PASS || 'openlabsas',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true,
    operatorsAliases:false
  }
  await db(config).catch(handleFatalError)
  console.log('success!')
  process.exit(0)
}
  function handleFatalError (err) {
    console.error(`${chalk.red('[fatal error]')} ${err.message}`)
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
  }

setup()
