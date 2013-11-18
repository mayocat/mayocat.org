<!--
  title: Release notes
  layout: documentation-simple
  -->

Release notes
=============

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

### Screenshots

_Default store front_

![Screenshot of the default storefront](/images/release-notes/0.8/default-shop.png "Default storefront")

<small>
Illustration credits: <http://www.flickr.com/photos/eryn_rickard/6945539588/> <http://www.flickr.com/photos/ronniechan/5213321824/> <http://www.flickr.com/photos/stampinmom/5572631859>
</small>

_Shipping management_

![Screenshot of the shipping costs management in the back-office](/images/release-notes/0.8/shipping-costs.png "Shipping costs management in the back-office")

### Migration notes

A couple of properties have been removed from the ##mayocat.yml## configuration file because they were not used. You **need** to remove them in your own file or the application will not start. The properties in question are in the "catalog.product" section. At the end of the file, remove:

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
* Changed the ##/api/users/_me## API to ##/api/me##
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
