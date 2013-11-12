<!--
  layout: documentation-with-menu
  title: Configure your theme
  -->

Configure your theme
====================

Using theme.yml you can custom Mayocat Shop to your needs and built a tailor made theme.

- <a href="#metadatas">Metadatas</a> : to set title and description of the theme.
- <a href="#thumbnails">Images formats</a> : to manage size and context of each format.
- <a href="#models">Pages models</a> : to set different layout for different pages, products and categories
- <a href="#addons">Addons data</a> :  to add data management in the backoffice


<a name="metadatas"></a>

Metadatas
---------

Set title (required) and description (optional) for your theme.

    name: Theme name
    description: This is a responsive theme made for T-shirt stores

<a name="thumbnails"></a>

Images formats
--------------

To set image for your theme you have to define an id, a width, an height, a name and a context.

- id : alphanumeric id without spaces (required).
- width : a number in pixel, set to none if you want the image to fit the height and keep its original ration (required).
- height : a number in pixel, set to none if you want the image to fit the width and keep its original ration (required).
- name : a nice name used in the image editor in the backoffice (required).
- for : a single value or a table to define in wich context the image will be available (product, page, article) (required).

In this example "background" is set to be called in all contexts and "product-image" only in product context

    thumbnails:
      background:
        width: 1200
        height: 800
        name: "Background's page"
        for: [product, page, article]
      product-image:
        width: 1200
        height: 800
        name: "Product image"
        for: product
                
To display a specific image format use {{images.theme_<b>format-name</b>_url}}. More information on <a>{{#images}}</a>

<a name="models"></a>

Page models
-----------

To set different models for your theme you have to define an id, a name and a context. You can choose for each content the models to use in the backoffice.

By default, pages are based on page.html, products on product.html and categories on category.html

- id : alphanumeric id without spaces (required).
- name : a nice name used in the model selector (required).
- for : a single value to define for which content the model will be available (product, page, category, article) (required).

    models:
      2columns:
        name: Page with 2 columns
        file: 2columns.html
        for: page
      large-display:
        name: Product page with large display
        file: product-large.html
        for: product

<a name="addons"></a>

Addons data
===========

Addons are made to manage more data and easily custom your backoffice. <br />
<a class="active" href="/documentation-addons">Use addons data</a>
