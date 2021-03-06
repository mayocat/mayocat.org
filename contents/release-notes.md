<!--
  title: Release notes
  layout: documentation-simple
  -->

Release notes
=============

<a name="0.30.1" ></a>
0.30.1
------

Release date: July 22st, 2014

Improvements to sequence addons and bug fix release

[View all closed issues](https://github.com/mayocat/mayocat-shop/issues?milestone=6)

<a name="0.30.0" ></a>
0.30.0
------

Release date: July, 10th, 2014

### New features

* Support for sequence addons
* New addon field type "image"
* Revamped uploads UI in the back-office
* Support for ordering images in galleries

### Other

* Performance improvement when serving images

Many bug fixes and improvements

[View all closed issues](https://github.com/mayocat/mayocat-shop/issues?milestone=5&state=closed)

<a name="0.20.1" ></a>
0.20.1
------

Release date: April 26st, 2014

Bug fix release. Fixes

* [#149 Error 500 when no product on shelf on home page](https://github.com/mayocat/mayocat-shop/issues/149)
* [#150 Concurrency issue in configuration service](https://github.com/mayocat/mayocat-shop/issues/150)

<a name="0.20.0"></a>
0.20.0
------

Release date: April 21st, 2014

### Major new features

* Support for variants and product types
* Support for a list of featured products on home page
* Emails to customer and tenant manager when purchase are made
* Support for product addons that can be displayed on order information
* Performance improvements:
    * Image filesystem cache
    * Tenant configuration cache
* New login page
* Display latest orders on back-office dashboard

### Other

Many bug fixes and improvements

[View all closed issues](https://github.com/mayocat/mayocat-shop/issues?milestone=4&state=closed)

<a name="0.11.0"></a>
0.11.0
------

Release date: February 3rd, 2014

### Major new features

* New default theme "minimal"

### Other

[View all closed issues](https://github.com/mayocat/mayocat-shop/issues?milestone=3&state=closed)

<a name="0.10"></a>
0.10
----

Release date: January 7th, 2014

### New features

* New JSON API for all front-end contexts. Any front-end page that can be accessed and themed with a template in HTML/mustache can now also be accessed as a read-only JSON API. This is a particularly useful superpower for front-end developers to make dynamic web sites easily.

### Bugs fixed

* Many bugs have been fixed. See [all issues closed on GitHub](https://github.com/mayocat/mayocat-shop/issues?milestone=1&state=closed)


<a name="0.9.1"></a>
0.9.1
-----

Release date: December 5th, 2013

This is a bug fix release, fixing [#65](https://github.com/mayocat/mayocat-shop/issues/65)

<a name="0.9.0"></a>
0.9.0
-----

Release date: December 4th, 213

### New features

* Full internationalization support. Mayocat Shop now support the full internationalization of:
    - contents (products, pages, shop data, addons, images metadata, etc.)
    - themes (the words and sentences used when creating a theme, like "{NUMBER_OF_ITEMS} in your cart")
    - back-office (the UI used by store owners)
* Contact feature that enables writing contact forms easily
* Consolidation of the front-end theme API
* Improved image edition dialog
* New memory-based stores for developers (to allow writing integration tests more easily)

<a name="0.8"></a>
0.8
---

Release date: August 1st, 2013

### New

* New default store front
* New shipping module to handle shipping costs. Three shipping costs strategies are available: flat rate (set a base price per order plus a fixed price per article), by weight, or by price. Several shipping carriers can be defined, each shipping to a defined set of destination, with a defined pricing, and with a defined delivery time. At checkout time, customers are offered choice between available carriers.
* Products can now have a weight defined (optional, can be turned off altogether in the administration section or in the global configuration file).
* New marketplace REST/JSON API :
    * GET /marketplace/api/products -> list all products (paginated) of the marketplace
    * GET /marketplace/api/shops -> list all shops in the marketplace
    * GET /marketplace/api/shops/{shop} -> get details on a particular shop
    * GET /marketplace/api/shops/{shop}/collections/{collection} -> get products of a collection in a shop
    * GET /marketplace/api/shops/{shop}/products -> get products of a shop

### Migration notes

A couple of properties have been removed from the ```mayocat.yml``` configuration file because they were not used. You **need** to remove them in your own file or the application will not start. The properties in question are in the "catalog.product" section. At the end of the file, remove:

    variants:
      default: true
    priceVariesWithVariants:
      default: true
      configurable: false
      visible: false

This release include database migrations. Don't forget to run the migration task when upgrading.

<a name="0.7.7.2"></a>
0.7.7.2
-------

Release date: June 10th, 2013

### New features ###

* Form validation in the manager's new tenant form 
* Storefront API for news article page

### Bugs fixed ###

* Fix the "undefined" title and description for attachments + migration of such data
* Fixed the "Back-Office" and "Front-office" links in the manager

<a name="0.7.7.1"></a>
0.7.7.1
-------

Release date: June 7th, 2013

### New features ###

* Support for mouse-wheel scroll in navigation inner scrolls

<a name="0.7.7"></a>
0.7.7
-----

Release date: June 6th, 2013

### New features ###

* Inner scroll in left sub-menu (when listing products, or pages)
* Support for shop owners to upload their logo
* Changed the ```/api/users/_me``` API to ```/api/me```
* Support for read-only addons
* Support for elasticsearch custom mapping for addons
* Support for updating entity index mapping when initializing ES
* Manager API improvements

<a name="0.7.6"></a>
0.7.6
-----

Release date: May 15th, 2013

### New features ###

* Basic elasticsearch support in prevision of marketplace API

<a name="0.7.5.1"></a>
0.7.5.1
-------

### Bugs fixed ###

Release date: May 7th, 2013

* Fix login outside the scope of a tenant

<a name="0.7.5"></a>
0.7.5
-----

Release date: May 6th, 2013

### New features ###

* Support for tenant (shop) addons definitions
* APIs for creating new tenants

<a name="0.7.4"></a>
0.7.4
-----

Released date: April 30th, 2013

* Use UUID instead of sequenced ids for entities primary keys

<a name="0.7.3"></a>
0.7.3
-----

Released date: April, 27th, 2013

* Switched from Liquibase to FlywayDB to handle database migrations.
