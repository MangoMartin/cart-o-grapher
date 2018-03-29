<img src="/client/src/Nav/logo.jpg" align="right" />

# Cart-o-grapher
[Raymond Ajax Metrulis](https://github.com/reizeismith), [Sean McNeeley](https://github.com/sean21mcn), and [Mikhal Misenas](https://github.com/mistermappy) collaborated on this project.
An app that provides a map of nearby E-commerce shop inventories, allowing users to potentially bypass the hassle and cost of shipping.

## Deployment
Check out the live site on [Heroku](https://.herokuapp.com/)
<p style="text-align: center;">
	<img src= "https://media.giphy.com/media//giphy.gif" width="900">
</p>

## Installation
Requirements: Node v.6 and up
In Node CLI:
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



