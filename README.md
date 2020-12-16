#### This is a backside for data. Used for a park locator project.

##### Routes are as follows (note: more data may be added as time permits.)

- get( '/connections') will get all the connection collections
- get('/connections/id/:id) will get the connection by id
- get('/connections/type/:type') will get all the connections by type (HIKE, BIKE, RUN)
- post('/connections') will create a connection
- put('/connections/:id') will allow the updating of a connection based on provided it
- delete('/connection/:id') will delete the connection by id
  <br>
- get('/fedParks') will get all the federal parks in the database
- get('/localParks') will get all the local trails in the database
- get('/stateParks') will get all the state parks in the database
