<!--
  layout: documentation-simple
  title: Release process
  -->

Release process
===============

Maven release
-------------

Dry run:

    $ mvn release:prepare -DdryRun=true -DautoVersionSubmodules

When everything is alright:

    $ mvn release:prepare -DautoVersionSubmodules
    $ mvn release:perform

Release notes
-------------

Write release notes describing :

* New features
* Bugs fixed
* How to migrate to the this new version

See [the release notes](/release-notes).

Create github release
---------------------

Go to <https://github.com/mayocat/mayocat-shop/tags> and click "add release notes" on the tag you are releasing.


