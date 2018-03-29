<img src="/client/src/Nav/logo.jpg" align="right" />

# Cart-o-grapher
[Raymond Ajax Metrulis](https://github.com/reizeismith), [Sean McNeeley](https://github.com/sean21mcn), and [Mikhal Misenas](https://github.com/mistermappy) collaborated on this project.
An app that provides a map of nearby E-commerce shop inventories, allowing users to potentially bypass the hassle and cost of shipping.

## Deployment
Check out the live site on [Heroku](https://cart-o-grapher.herokuapp.com/home)

[Demo](https://s3.amazonaws.com/instafake/gifs/React-App-Google-Chrome-3_29_2018-3_56_01-AM.gif?response-content-disposition=inline&X-Amz-Security-Token=FQoDYXdzELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDBtcZ7KoBo9d27WFdyK4A7Y4gbmf8CceokdPWCPQf3UeB%2BvrKJQCvfyWR4eF2O3wM%2BxwCT1Ks54y7nPWp16zce9OYH5j%2B6oNw1i46AwkE0tfLKIyZdECCAp1NNKCGsBZWzRhBr6G%2B1NuNm%2FCBe7fhJtQAIFsbe2yrgTu4EG6AhA5mQT%2F0fjvPbxo3BDeXCvfvruVQf%2BSTXOmTtLF%2FBSG21nZlzJXFyZYV76byTVKWopCckFkjr%2FyA00EVHuUyTKcGR09NNKdg4SwHo%2Bw8ksyvHw4FmsnpI%2F0z7mzL3nJBMHJ1NcRf%2BYsX3oojt%2BruRHVcw46yxIr7GYU520%2Fv3Sjw9A9cWqWfuQElP5Aq3tdxujAWPELO4TbxdugwH%2FzJf7ev8f%2BMqkqGpvM1lhITme6xFPrreKpVlvubRPGxO3iRkDVKLGqaitxNaqyjXFLB2SLXy5Q%2BSVe1WcIrRnlFLCDZA%2FQ%2ByrdM4BJGfOb8%2BDZAV9QraByDXneD%2FsYOnvPq1Ot73spnNz%2F95MFH8HCkTuhh2%2BaY7EyxIx%2FwWC3%2BW6AaerCHw8CTbnJqpoVjcS%2FbGW89ZwfKJOTAfvlOCfpMMXNEPiO24L3D8UNKJeo8tUF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180329T102052Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAJCYKQX427YSZFG7Q%2F20180329%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=29b3251e6044ad14f78feddf237523df8304d7486ea15dad658dece9600d0aa0)

## Installation
Requirements: Node v.6 and up
In Node CLI, cd to the main folder:
`npm install`
`nodemon server.js`

Then cd to client:
`npm install`
`npm start`

## Data Models
### 'users'

| Column                | Type                	          |
|-----------------------|---------------------------------|
|`id`                   | INTEGER (PRIMARY KEY)           |
|`username`             | STRING(100) (NOT NULL)(UNIQUE)  |
|`password`             | STRING(1000) (NOT NULL)         |

* ONE to ONE: shops

### 'shops'

| Column                | Type                	          |
|-----------------------|---------------------------------|
|`id`                   | INTEGER (PRIMARY KEY)           |
|`user_id`              | INTEGER (NOT NULL)              |
|`shopName`             | STRING (NOT NULL)               |
|`shopOwner`            | STRING (NOT NULL)               |
|`shopImg`              | STRING (NOT NULL)               |
|`about`                | STRING (NOT NULL)               |
|`country`              | STRING (NOT NULL)               |
|`address`              | STRING (NOT NULL)               |
|`city`                 | STRING (NOT NULL)               |
|`state`                | STRING (NOT NULL)               |
|`zip`                  | INTEGER(7) (NOT NULL)           |
|`phone`                | INTEGER(10)                     |
|`email`                | STRING (NOT NULL)               |
|`pickup`               | BOOLEAN                         |
|`delivery`             | BOOLEAN                         |
|`sunday`               | BOOLEAN                         |
|`monday`               | BOOLEAN                         |
|`tuesday`              | BOOLEAN                         |
|`wednesday`            | BOOLEAN                         |
|`thursday`             | BOOLEAN                         |
|`friday`               | BOOLEAN                         |
|`saturday`             | BOOLEAN                         |

* ONE to MANY: categories
* ONE to MANY: links

### 'categories'

| Column                | Type                	          |
|-----------------------|---------------------------------|
|`id`                   | INTEGER (PRIMARY KEY)           |
|`shop_id`              | INTEGER (NOT NULL)              |
|`category`             | STRING (NOT NULL)               |

* MANY to ONE: shops

### 'links'

| Column                | Type                	          |
|-----------------------|---------------------------------|
|`id`                   | INTEGER (PRIMARY KEY)           |
|`shop_id`              | INTEGER (NOT NULL)              |
|`link`                 | STRING (NOT NULL)               |

* MANY to ONE: shops

## Routes

* /home : homepage
* /api : login
* /api/signup : signup
* /api/owner : shop profile creator page

## Technology 

Node, Express, Leaflet, PostgreSQL
* [Create React App](https://github.com/facebookincubator/create-react-app) was used to make the project template.



