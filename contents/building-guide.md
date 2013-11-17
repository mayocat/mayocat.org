<!--
  layout: documentation-simple
  title: Building guide
  -->

Building and running Mayocat Shop
=================================

This page contains information to help developers building and running Mayocat Shop in development mode successfully. It addresses the case of running the application from the command line, as well as from integrated development environment such as Intellij IDEA.

Prerequisites
-------------

* JDK 1.7+
* Maven 3+
* Git
* PostgreSQL 9.2+
* Working knowledge of git and maven, and postgres administration

Building
--------

Clone mayocat-shop's repository.

    git clone git://github.com/mayocat/mayocat-shop.git

Better yet if you want to contribute to the project, fork the repository and clone your own repos so that you can propose pull requests.

### Building the sources

Go in mayocat-shop directory and run ```mvn clean install``` :

    $ pwd
    /home/twister/repos/mayocat-shop
    $ mvn clean install
    [INFO] Scanning for projects...
    ...

If everything runs correctly, you should see at the end of the process :

    [INFO] ------------------------------------------------------------------------
    [INFO] BUILD SUCCESS
    [INFO] ------------------------------------------------------------------------
    [INFO] Total time: 1:23.118s
    [INFO] Finished at: Wed May 29 16:31:50 CEST 2013
    [INFO] Final Memory: 59M/415M
    [INFO] ------------------------------------------------------------------------

### Configure postgres and mayocat

First, install and configure Postgres if needed.

If you are working on OSX, [the Postgres.app from Heroku](http://postgresapp.com/) is an easy way to setup a Postgres database quickly.

Then you need to create mayocat's database. By default, mayocat will look for a database named ```shop```, but you're free to pick any name and change it in the configuration.

For example :

    postgres=# create database mayocat;
    CREATE DATABASE
    postgres=#

Once you've created the database, copy the mayocat sample configuration file for development (located in ```shop/application/```) to create your own configuration :

    $ pwd
    /home/twister/repos/mayocat-shop/shop/application
    $ cp mayocat.yml.example mayocat.yml
    $

Then edit the file for your own needs and configuration. The database configuration sits under the ```database``` key.

The next step consists in running the database migrations. From the same ```shop/application``` folder, simply run :

    $ ./migrate.sh

If your database and mayocat are correctly configured, you will see an output similar to the one below :

    $ ./migrate.sh
    INFO  [2013-05-29 15:09:53,853] com.googlecode.flyway.core.metadatatable.MetaDataTableImpl: Creating Metadata table: "public"."schema_version"
    INFO  [2013-05-29 15:09:54,179] com.googlecode.flyway.core.command.DbMigrate: Current version of schema "public": << Empty Schema >>
    INFO  [2013-05-29 15:09:54,180] com.googlecode.flyway.core.command.DbMigrate: Migrating schema "public" to version 0073.0001
    INFO  [2013-05-29 15:09:54,381] com.googlecode.flyway.core.command.DbMigrate: Migrating schema "public" to version 0073.0002
    INFO  [2013-05-29 15:09:54,462] com.googlecode.flyway.core.command.DbMigrate: Migrating schema "public" to version 0073.0003
    [...]
    (truncated for brevity)
    [...]
    INFO  [2013-05-29 15:09:56,011] com.googlecode.flyway.core.command.DbMigrate: Successfully applied 48 migrations to schema "public" (execution time 00:02.165s).

From there, you're good to go and hack on Mayocat.

Running from the command line
-----------------------------

A startup script is provided as convenience to start Mayocat Shop in development mode from the command line. From ```mayocat/shop/application/```, simply run :

    ./startup_development.sh

And it will launch mayocat on port 8080 (if you haven't modified it in your configuration file).

Running from IntelliJ idea
--------------------------

### Importing the project modules

An alternative for faster development cycles is to run the application from an IDE. Here is illustrated the setup required to run Mayocat from Intellij IDEA.

First, you need to import the project in IDEA. From "File" > "Import project", pick up the root folder of mayocat sources (usually checked out from git as "mayocat-shop") and click "OK". On the following screen, keep the selection ("Import from existing model" and "Maven") and click "Next". On the next screen, make sure you click "Search for projects recursively" then click "next". Then continue the wizard by clicking "Next" as necessary and ultimately click the "Finish" button. This will import all mayocat modules in a new project, looking like this :

![Screen shot of the project in IDEA](/images/IDEA-project.png "Project in IDEA")

### Adding the client assets to the application classpath

The back-office clients (for individual shops as well as the "manager" back-office) are currently served by the application as "classpath assets" (this might change in the future were we could serve them as filesystem files assets and fallback on classpath). In development mode we want fast iteration on those assets (HTML files, JavaScript files, etc.) so we don't want to have them in a jar. the command-line startup script solves this by explicitly providing the client path in the classpath argument. In idea, we can't provide it as a run configuration argument, so we will need to add it manually to the application dependencies.

To do this, we first need to unmark the ```shop/client/src/main/resources/``` as source root. For this, just right click on that directory in the project pane, and select "Mark directory as" then "Unmark as Source Root" from the menu. Then we need to add the assets directory in that resources directory to the shop application classpath. To do this, right click on the application module under shop (mayocat-shop-application) and select "Open Module Settings". In the "Dependencies" tab, click the green plus sign on the top right corner and select "Jar or directories". Then find the "assets" directory under  ```shop/client/src/main/resources/``` just as on the picture below and click OK. Then when asked for the category of selected files, keep the default "classes" selection and click OK. You're done.

![Screenshot of adding the client to classpath](/images/IDEA-add-client-to-classpath.png "Adding the client to the classpath in IDEA")

### Running the application

Then to run the application, you need to create a new Run configuration. Open the "Run/Debug Configurations" dialog from "Run" > "Edit configuration". Click the green plus sign on the top left corner and select "Application" in the list that drops down. You should see a "Name:" field on the top of the right pane that allows you to name the configuration to be created. Name it "Mayocat Shop" or any other name of your liking. Then fill in the dialog as follow :

* As main class, set ```org.mayocat.shop.application.MayocatShopService```
* As VM options, you can set (and adapt to your liking): ```-server -Xms128m -Xmx512m -XX:MaxPermSize=192m -Dfile.encoding=utf-8 -Djava.awt.headless=true -XX:+UseParallelGC -XX:MaxGCPauseMillis=100```
* As program arguments : ```server mayocat.yml```
* As working directory : ```/path/to/sources/mayocat/shop/application ```where ```/path/to/sources/mayocat ```is the path to your git clone on your machine (this part should be already set when the dialog pops up, you just need to add ```/shop/application ```to it).
* In "Use classpath of module", select the "mayocat-shop-application" classpath

Overall it looks like this :

![Screenshot of the running configuration in IDEA](/images/IDEA-run-configuration.png "Run configuration in IDEA")


From there, your good to go. Click "Apply" then "OK".

To run or debug, now you just to click the green play arrow in the toolbar, or use menu navigation or shortcuts.

When running successfully, the "Run" view of IDEA should look like this :

![Screenshot of running Mayocat Shop in IDEA](/images/IDEA-mayocat-running.png "Running Mayocat Shop in IDEA")
