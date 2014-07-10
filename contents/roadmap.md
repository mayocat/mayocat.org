<!--
  layout: community-simple
  title: Roadmap
  -->

Roadmap
=======

<div class="info message">
Note: this is a tentative  high-level road-map containing items we plan on working in the short and medium term and it is subject to change.
For fine grained issues, please visit <a href="https://github.com/mayocat/mayocat-shop/issues?labels=&page=1&state=open">issues on GitHub</a>.
</div>

<br /> 

V0.30.0
-------

Estimated delivery : July 2014

Key features :

* __Sequencable addons__ sequencable addons are addons the back-office user can manage as list or sequence : he can add/remove items. For theme/platform developers the sequencable addons are very easy to define, just adding one configuration line to regular a regular addon definition.
* __New addon fields types__ image, image gallery, file
* __Overhaul of the gallery and image upload management__

V0.40.0
-------

Estimated delivery : October 2014

Key features :

* __Full management of taxes and currencies__
* __Simple customer management__
* __Vouchers management__

Future (before 1.0)
-------------------

Features to create a fully functional marketplace :

- Multi-tenant billing
- Support for the definition and management of escrow and cuts by the platform
- Back-office for running the marketplace, including curation tools (highlighted products, highlighted shops, etc.)

Other future items
------------------

- [Addon refatoring](roadmap/addons-refatoring)
- Stock movements
- Store language per user in the back-office
- Models for categories
- Collections and tags overhaul
- Better error reporting for theme developers
- Move from Handlebars.js to Handlebars.java for server-side rendering (see <https://github.com/mayocat/mayocat-shop/issues/56>)
- Attachments management UI
- UI for managing theme localization in the back-office
- IP geolocation APIs
- SEO integration in entities pages (plugin ?)
- Customer/newsletter management
- CDNs integration

Passed items (implemented)
---------------------------

- Product variants
- [Homepage management](roadmap/homepage-management)
- [Emails alerts on orders](roadmap/email-alerts-on-order)
- Images and link plugin for the WYSIWYG editor
- [New login page](roadmap/new-login-page)
