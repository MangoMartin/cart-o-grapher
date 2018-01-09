<img src="/client/public/logo.png" align="right" />
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

## Organization

## Technology 

Node, Express, Leaflet, PostgreSQL
[Create React App](https://github.com/facebookincubator/create-react-app) was used to make the project template.

### Find Cart-o-grapher registered stores near you and compare product prices from various retailers.

Cart-o-grapher is a store app that allows users to geolocate nearby Cart-o-grapher registered stores, so customers can buy products in person from stores that could only ship their products via other websites like Amazon. Shop owners can establish a shop profile and link their shop profiles from other sites, such as Ebay and Etsy.  Shop owners, especially new store owners and anyone looking to sell an item or two, can compare the highest and lowest price of products from various retail sites, allowing them to appraise their products instantly. 

