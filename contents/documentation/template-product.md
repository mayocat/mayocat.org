<!--
  title: product.html
  layout: documentation-with-menu
  -->

product.html
============

Introduction
------------

The ```product.html``` template is applied when a visitor browses a product page on your storefront. Inside this template, you enter the context of the product like this:

    {{#product}}
      [...] here you can exploit all context available for a product and documented below
    {{/product}}

For a full example, checkout the default theme [product.html template](https://github.com/mayocat/mayocat-shop/blob/0fc994fb34ce3087b257099a39be5837102ccf74/shop/themes/src/main/resources/themes/default/product.html)

Context available
-----------------

### Product data

Product data context regroups several product top-level properties with information about the product at hand. It contains a title for the product, a rich-text description, and price/availability information.

    "title" : "Berlingot de Carpentras",
    "description" : "<p>Le berlingot de Carpentras est un bonbon dur et translucide confectionn&eacute; &agrave; base de sirop de fruits confits. Il se pr&eacute;sente sous la forme de petites pyramides de diff&eacute;rentes couleurs et toujours stri&eacute;es de blanc.</p>\n",
    "unitPrice" : {
      "amount" : "16.00",
      "amountCompact" : "16",
      "currency" : {
        "localSymbol" : "$",
        "symbol" : "USD"
      }
    },
    "slug" : "texas",
    "url" : "http://thisisnotamap.localhost:8080/products/texas"

Usage example, implementing the [h-product microformat](http://microformats.org/wiki/h-product) :

    {{#product}}
    <div class="h-product">
       <h2 class="p-name">{{title}}</h2>
       {{#unitPrice}}
         <div class="p-price">{{amountCompact}}{{currency.localSymbol}}</div>
       {{/unitPrice}}
       {{^unitPrice}}
         <div class="not-available">This product is currently not available</div>
       {{/unitPrice}}
       <div class="e-description">{{description}}</div>

       [...]
    {{/product}}

### Add to cart

To enable visitors to purchase products, your product template must provide them with a button to add the product to the cart. Under its simplest form, this button is implemented like this:

    {{#unitPrice}}
     <form action="/cart/add" method="post">
       <div>
         <input type="hidden" name="product" value="{{../slug}}"/>
         <input type="submit" value="Add to cart"/>
       </div>
     </form>
     {{/unitPrice}}

Note that we enclose the form/button in ```{{#unitPrice}}``` because products without a unit price are not for sale and thus shouldn't be added to the cart.

We can also provide the cart a quantity when adding to the cart. This is simply implemented with an addition ```quantity``` for parameter, for example with an HTML5 number input:

    {{#unitPrice}}
     <form action="/cart/add" method="post">
       <div>
         <input type="hidden" name="product" value="{{../slug}}"/>
         Quantity: <input type="number" name="quantity" value="10" step="1" min="1" max="100"/>
         <input type="submit" value="Add to cart"/>
       </div>
     </form>
     {{/unitPrice}}


### Featured collection

Featured collection context is a top-level property of the ```product``` context, with information related to the featured collection this product is associated with, if any.

    "featured_collection" : {
      "title" : "My new collection",
      "description" : null,
      "images" : {
        "featured" : {
          "url" : "http://placehold.it/800x800"
        },
        "all" : [ {
          "url" : "http://placehold.it/800x800"
        } ]
      },
      "slug" : "my-new-collection",
      "url" : "/http://thisisnotamap.localhost:8080/collections/my-new-collection"
    }

<a name="images"></a>
### Images

The images context holds all product images information: the featured image data, and all other images data.

    "images" : {
      "featured" : {
        "title" : "Assortiment de berlingots de Carpentras",
        "description" : "Description",
        "featured" : true,
        "theme_product_url" : "/images/thisisnotamap62lgN.jpg?width=45&height=102",
        "url" : "/images/thisisnotamap62lgN.jpg"
      },
      "all" : [ {
        "title" : "Assortiment de berlingots de Carpentras",
        "description" : "Description",
        "theme_product_url" : "/images/thisisnotamap62lgN.jpg?width=140&height=322",
        "featured" : false,
        "url" : "/images/thisisnotamap62lgN.jpg"
      }, {
        "title" : "Assortiment de berlingots de Carpentras",
        "description" : "Assortiment de berlingots de Carpentras",
        "theme_product_url" : "/images/berlingot_de_carpentrasjpg.jpg?width=140&height=322",
        "featured" : true,
        "url" : "/images/berlingot_de_carpentrasjpg.jpg"
      },
      [...] other images
      ]
    }

### Addons

See [addons documentation](/documentation/addons) for more information.


