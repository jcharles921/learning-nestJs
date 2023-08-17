`nest generate module ninjas` : Generate module called ninjas

`nest generate controller ninjas` : Generate a controller inside the ninjas module

`nest g service ninjas` : Generate a provider 

## NestJs 

NestJs provide an architecture out of the box to add a abstraction layer to nodejs framework like Express

it has somme Parts:

-  @Modules:   have *Controllers* and *Providers* , it used to encapsulate routes for features like the products or users 
- @Controllers: specify a specify action and the end of a route
 



## Routes

* GET /ninjas -->[ all ninjas]
* GET /ninjas/:id --> [get one ninjas]
* POST /ninjas -->[one ninjas is created]
* PUT /ninjas/:id -->[modify one ninja]
* Delete /ninjas/:id -->[delete one ninja] 