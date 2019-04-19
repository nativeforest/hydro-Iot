'use strict'
const test = require('ava')
let config={
    loggin: function(){}
}
let db= null
test.beforeEach(async()=>{
    const setupDataBase=require('../')
    db= await setupDataBase(config)
})
test('Agent',t=>{
    t.truthy(db.Agent,'Agent s exist')})
    