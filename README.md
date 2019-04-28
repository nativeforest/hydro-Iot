##hydroiot-db
##usage

``` js
const setupDatabase = require('se-db')

setupDabase(config).then(db => {
  const { Agent, Metric } = db

}).catch(err => console.error(err))
```
