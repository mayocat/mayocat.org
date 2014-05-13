<!--
  layout: documentation
  title: Installation guide
  -->

Installation guide
==================

Prerequisites
-------------

To install and run Mayocat Shop on a machine, you will need the following :

* A Java runtime environment, version 1.7 or above
* A Postgresql database, version 9.2 or above

The following guide assumes experience in operating a UNIX system. All examples are given in the context of a debian system, please adapt accordingly to your distribution flavor.

Unbox
-----

Download and unzip the lastest released version of Mayocat Shop.

If you're into one-liners, and assuming you have cURL and unzip commands available :

    curl -L http://www.mayocat.org/primeur > mayocat.zip && unzip -q mayocat.zip && rm mayocat.zip && ls | grep mayocat

Which should give you an output like this :


      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100 28.5M  100 28.5M    0     0  1233k      0  0:00:23  0:00:23 --:--:-- 1356k
    mayocat-shop-distribution-0.7


Create the database
-------------------

Create the database that will hold Mayocat Shop data. Here its name is ```shop``` but you can give it whichever name you want, as long as you address it accordingly in Mayocat's configuration file.

    postgres@host:~$ psql
    psql (9.2.4)
    Type "help" for help.

    postgres=# create database shop;
    CREATE DATABASE
    postgres=#

Configure the environment
-------------------------

### Database

Edit the database section of your ```mayocat.yml``` file (located in the ```configuration``` folder) accordingly. For example :

    database:
      driverClass: org.postgresql.Driver
      user: postgres
      password: yourPostgresqlPassword
      url: jdbc:postgresql://127.0.0.1/shop
      properties:
        charSet: UTF-8
      maxWaitForConnection: 1s
      validationQuery: "/* MayocatShop Health Check */ SELECT 1"
      minSize: 8
      maxSize: 32
      checkConnectionWhileIdle: true
      checkConnectionHealthWhenIdleFor: 10s
      closeConnectionIfIdleFor: 1 minute

### Files

The default configuration for files will work out of the box. You might want to change it (for example if you want permanent files to be written on a separate disk as the one the application is hosted in). If you do change it, you probably want to move the ```data``` directory that comes with mayocat shop to this new destination, so that you have the default shop theme mayocat is bundled with.

    files:
      permanentDirectory: /usr/local/data/
      temporaryDirectory: /var/tmp

### Security

If you are running Mayocat Shop in a production environment, it is important you change the signing and encryption keys. The encryption key is used to encrypt cookies for user sessions, and the signing key is used to sign the encrypted cookies to ensure they are not tampered with. You can use a command such as pwgen to generate key values. The encryptionKey is used to derivate a DES key and must be at least 8 characters long. The signingKey is used to create a Hmac with SHA256 key, and while any length is supported, recommended length is 64 bytes.

    security:
      encryptionKey: Please change me!
      signingKey: Me too, me too :)
      passwordSaltLogRounds: 10

The password salt log round parameters allows to set the number of [bcrypt rounds](http://codahale.com/how-to-safely-store-a-password/) used to hash passwords.

### Everything else

Mayocat Shop is built on top of the DropWizard framework from Yammer, so everything in the [DropWizard standard configuration file](https://github.com/codahale/dropwizard/blob/master/dropwizard-example/example.yml) can also be configured in Mayocat. Should you want to fine tune HTTP options, database or Logging, this is where you'll find information.

Configure Mayocat
-----------------

### Considerations regarding multi-tenancy

Mayocat Shop is a platform that allows to create multi-tenant e-commerce applications. Applications builders will most of the times want to control what settings individual tenants can control and are made aware of. The configuration of Mayocat accounts for this need, and most configuration settings are built around the ```default```, ```configurable``` and ```visible``` triplet values. The ```default``` value is the value provided by the platform for a setting when it is not overridden at the level of the tenant own configuration, the ```configurable``` value allows to decide whether a setting is overridable or not by a tenant, and the ```visible``` value is a flag that says a setting is visible or not by the tenant (it is useful for the case of a setting that is not configurable but of which the tenant can be made aware of. For instance you might want to create a platform where the default locale is a specific value that tenants cannot change, say "fr-FR", but make it visible so that it helps tenant configure the "alternative locales" settings).

### General

TBD.

    general:
      locales:
        main:
          default: en-US
          configurable: false
          visible: true
        others:
         default: []
         configurable: false

### Theme

The theme section allows to define what front-end theme to use.

    theme:
      active:
        default: default
        configurable: true

### Catalog

TBD.

    catalog:
      currencies:
      main:
        default: EUR
        visible: true
        configurable: false
      products:
        categories:
          default: true
          configurable: true
          visible: true
        stock:
          default: true
          configurable: true
          visible: true

Running the application
-----------------------

### Run the database migration

Before the first run or when upgrading the application, the database migration needs to be run. On the first run, this will create the database tables required by the application. It is run by executing the ```migrate.sh``` script file :

    # ./bin/migrate.sh

Successful output will look like this :

    INFO  [2013-04-05 11:57:55,222] liquibase: Successfully acquired change log lock
    INFO  [2013-04-05 11:57:55,806] liquibase: Creating database history table with name: databasechangelog
    INFO  [2013-04-05 11:57:55,839] liquibase: Reading from databasechangelog
    INFO  [2013-04-05 11:57:55,846] liquibase: Reading from databasechangelog
    INFO  [2013-04-05 11:57:56,755] liquibase: ChangeSet org/mayocat/store/rdbms/migrations/migration-0.1.xml::1::jvelo ran successfully in 646ms
    INFO  [2013-04-05 11:57:56,859] liquibase: Successfully released change log lock

### Starting mayocat

Once the database is migrated, you can finally run the mayocat application :

    # ./bin/startup.sh

If everything is fine, you should be greeted by a console output like the following :


    INFO  [2013-04-05 12:03:47,536] com.yammer.dropwizard.cli.ServerCommand: Starting MayocatShopService
              +         +         +         +         +
       o  +      o  +      o  +      o  +      o  +           +        +
            o         o         o         o         o     o       +        o
    _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_,------,      o
    -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-|   /\_/\
    _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-~|__( ^ .^)  +     +
    -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-""  ""
          o         o         o         o         o         o   +       o
       +         +         +         +         +         +
            o         o         o         o         o         o      o     +

    MayocatShop 0.7

    INFO  [2013-04-05 12:03:47,541] org.eclipse.jetty.server.Server: jetty-8.y.z-SNAPSHOT
    INFO  [2013-04-05 12:03:47,645] com.sun.jersey.server.impl.application.WebApplicationImpl: Initiating Jersey application [...]
    INFO  [2013-04-05 12:03:47,810] com.yammer.dropwizard.config.Environment: The following paths were found for the configured resources:

        GET     /api/search (org.mayocat.rest.resources.SearchResource)

        [...] (output truncated for brevity)

        GET     /products/{slug} (org.mayocat.shop.catalog.front.resource.ProductResource)

    INFO  [2013-04-05 12:03:47,811] com.yammer.dropwizard.config.Environment: tasks =

        POST    /tasks/gc (com.yammer.dropwizard.tasks.GarbageCollectionTask)
        POST    /tasks/bi (org.mayocat.search.elasticsearch.BuildIndexTask)

    INFO  [2013-04-05 12:03:48,400] org.elasticsearch.node: [Jigsaw] {0.20.5}[3007]: initializing ...

    [...] (output truncated for brevity)

    INFO  [2013-04-05 12:03:50,147] org.elasticsearch.cluster.metadata: [Jigsaw] [entities] creating index, cause [api], shards [5]/[1], mappings []

### Create the initial admin user

Currently, the initial admin user needs to be created via a POST request on the REST API. Here's an example request with cURL :


    curl -i -H "Content-Type: application/json" -X POST -d " \
      {                                                      \
        \"slug\"   : \"admin\",                              \
        \"email\"    : \"me@example.com\",                   \
        \"password\":\"thepassword\"                         \
      }                                                      \
      "                                                      \
      http://<yourhost>:8080/api/users/

Where of course you should replace the username, email and password with values of your choosing.

If successful, you should read back :

    HTTP/1.1 200 OK
    Date: Mon, 22 Apr 2013 15:51:18 GMT
    Content-Type: application/json
    Content-Length: 0

### Accessing the shop back-office

In your browser, simply open ```http://<host>:8080/admin/```.

<div class="warning">
The trailing slash counts !
</div>

You should be greeted with the following login form

![Screenshot of the login dialog in Mayocat Sdop](/images/login-mayocat.png "Mayocat Shop login dialog")

Which you can fill-in with the credentials you've provided when creating the admin user.

Multi-tenancy
-------------

### Activation

Mayocat Shop is designed to run as a multi-tenant platform. By default, Mayocat Shop is packaged with multi-tenancy turned off, to ease the setup process. To turn on multi-tenancy, simply edit the configuration :

    multitenancy:
      activated: true
      defaultTenant: shop

### Creating new tenants

To create new tenants, you can visit the tenant manager UI at ```http://<host>:8080/manager/```, and log in with the credentials of the admin user you've created.