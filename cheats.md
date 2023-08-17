`nest generate module ninjas` : Generate module called ninjas

`nest generate controller ninjas` : Generate a controller inside the ninjas module

`nest g service ninjas` : Generate a provider 

## NestJs 

NestJs provide an architecture out of the box to add a abstraction layer to nodejs framework like Express

it has somme Parts:

-  @Modules:   have *Controllers* and *Providers* , it used to encapsulate routes for features like the products or users 
- @Controllers: NestJS controllers handle incoming requests, define API endpoints, and implement business logic to generate appropriate HTTP responses.

- @Provider: is a class that we can inject in any controller or method that depend on it

- Entities: Entities are for tables or for collections.
- DTO: DTO stands for data transfer object. We can specify the object. (data you can expect from the body in the request).
- Service: NestJS service will perform database operation and return the appropriate response.



## Routes

* GET /ninjas -->[ all ninjas]
* GET /ninjas/:id --> [get one ninjas]
* POST /ninjas -->[one ninjas is created]
* PUT /ninjas/:id -->[modify one ninjas]
* Delete /ninjas/:id -->[delete one ninjas] 