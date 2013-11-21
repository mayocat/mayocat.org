<!--
  title: index.html
  layout: documentation-with-menu
  -->

index.html
==========

Introduction
------------

We've seen it in [learn the basics](/documentation-basics#getting-started), ```index.html``` is the **master template**. It constitutes the common structure of the web shop, for all its pages : header, footer, menus.

If we look at the default theme bundled with Mayocat Shop (which files you can checkout [here](https://github.com/mayocat/mayocat-shop/tree/mayocat-shop-0.8.2.1/shop/themes/src/main/resources/themes/default)), the index.html master template defines the following layout:

![Illustration of the default theme chrome](/images/index-html-chrome.png "Layout defined by the index.html template of the default theme.")

In this illustration, everything except the blue rectangle is actually written in ```index.html```. The blue rectangle, itself, represents the content rendered for the page the user visits. For the home page, it correspond to the ```home.html``` template, for a product page, it correspond to the ```product.html``` template rendered against a particular product (the product the user visits), etc.

This is realized through ```{{include templateContent}}``` call.

Context available
-----------------

### Site

Site-related data (site title and site logo) is available at the root of the context available in ```index.html```. This is useful to construct for example the header of the web shop.

The site context in JSON matches this structure:

     "site" : {
        "title" : "Demo Shop",
        "logo" : {
          "title" : "Shop logo title",
          "description" : "Shop logo description",
          "url" : "/images/html5.png",
          "theme_site_logo_url" : "/images/html5.png?width=150&height=150",
          [...] other image format URLs not useful in this context
        }
      }
      [...]

You can thus reference the site's title this way:

    {{site.title}}

Or even enter the ```site``` section and reference the title in this section:

    {{#site}}
      The title of my shop is: {{title}}
    {{/site}}

The logo context is present only if the shop owner has uploaded a logo. You can test its presence and act accordingly:

    {{#site}}
      {{#logo}}
        {{!-- Shop owner has uploaded a logo: let's use it! --}}
        <img class="logo" src="{{theme_site_logo_url}}" />
      {{/logo}}
      {{^logo}}
        {{!-- No logo uploaded: let's use a generic logo --}}
        <img class="logo" src="{{resource 'images/generic-logo.png'}}" />
      {{/logo}}
    {{/site}}

### Cart

A cart context is always present for ```index.html```, so that you can show a cart status (like number of items in cart, cart total price), typically in the shop header. Cart context in JSON looks like this:

      "cart" : {
        "numberOfItems" : 1,
        "items" : [ {
          "title" : "Sample product",
          "description" : "Sample product description",
          "quantity" : 1,
          "type" : "product",
          "slug" : "sample-product",
          "id" : "de3b0a46-bc62-47ee-89c1-14e8c355ba7b",
          "unitPrice" : {
            "amount" : "12.50",
            "amountCompact" : "12.50",
            "currency" : {
              "localSymbol" : "$",
              "symbol" : "USD"
            }
          },
          "itemTotal" : {
            "amount" : "12.50",
            "amountCompact" : "12.50",
            "currency" : {
              "localSymbol" : "$",
              "symbol" : "USD"
            }
          },
          "featuredImage" : null
        } ],
        "itemsTotal" : {
          "amount" : "12.50",
          "amountCompact" : "12.50",
          "currency" : {
            "localSymbol" : "$",
            "symbol" : "USD"
          }
        },
        "hasShipping" : false,
        "shipping" : null,
        "shippingOptions" : null,
        "selectedShippingOption" : null,
        "total" : {
          "amount" : "12.50",
          "amountCompact" : "12.50",
          "currency" : {
            "localSymbol" : "$",
            "symbol" : "USD"
          }
        }

You can exploit this context to display a small cart summary, for example:

    {{#cart}}
      <div class="cart-summary">
      {{numberOfItems}} {{inflect numberOfItems "item" "items"}}
      {{#total}}
        {{amountCompact}} {{currency.localSymbol}}
      {{/total}}
      </div>
    {{/cart}}

Note: there's a better way than the ```{{inflect}}``` helper to handle pluralization in your theme, checkout [the localization guide](/documentation-localization#pluralization).

### List of pages

Iterate over all **root pages** (pages at the top level of the page graph, i.e. they have no parent).

    {{#pages.roots}}
      URL: {{url}}
      Title: {{title}}
      Featured image {{featuredImage}}
      Slug: {{slug}}
    {{/pages.roots}}

### List of products

    {{products.all}}
      URL: {{url}}
      Title: {{title}}
      Featured image {{featuredImage}}
      Slug: {{slug}}
    {{/products.all}}

Note: the list of "all products" is paginated, by default grouped by ```24```.

### List of collections

    {{collections.all}}
      URL: {{url}}
      Title: {{title}}
      Featured image {{featuredImage}}
      Slug: {{slug}}
    {{/collections.all}}

### Other

    {{themePath}} -> The path to this theme. Useful for referencing theme resources
    {{page_title}} -> Title for the current page for SEO
    {{page_thumbnail}} -> Page thumbnail for the current page for SEO
    flash -> The flash context