<!--
  layout: documentation-with-menu
  title: Configure your theme
  -->

Configure your theme
====================

In [**learn the basics**](/documentation-basics), we've seen how to create the basic files that make up a shop theme. We're now going to explore in-depth the configuration possibilities offered by ```theme.yml``` to tailor your shop.

There are four main sections that compose a full ```theme.yml``` file :

- [Metadatas](#metadatas): to set title and description of the theme.
- [Image formats](#thumbnails): to define standard image sizes to be used for your theme.
- [Page models](#models): to define different layout for different pages, products and categories
- [Addons data](#addons): to add data management in the back-office

<a name="metadatas"></a>

Metadatas
---------

Set title (required) and description (optional) for your theme.

    name: Theme name
    description: This is a responsive theme made for T-shirt stores

<a name="thumbnails"></a>

Images formats
--------------

Image formats for your theme let you define what standard image dimensions you want to display in various areas of your theme. You could, for example, define a format, let say a ```150 x 150``` pixels product thumbnail, to display every time you present a list of products (on the ```products.html``` page and on the ```collections.html``` pages). In addition to this, you could add a larger image format, say ```600 x 400``` pixels, to offer a full view of products on your products pages. There are many scenarios possible, the only limit is your imagination! You could even define different formats for different devices: a portrait format for mobiles and a landscape for tablets.

When you define a format, it will be available in the image edition dialog in the back-office, to give shop caretakers the full control over how the cropping of the original images they have uploaded is done. But don't worry, if this step is omitted, cropping will be computed by Mayocat Shop automatically so that we always respect the formats the theme designer has defined. Below is an illustration of the image edition dialog in the back-office that present the edition of a ```Product image``` format we've defined :

![Screenshot of the image edition in the back-office](/images/image-edition.png "Image edition in the back-office")

Image formats are defined in your ```theme.yml``` file. You can define as many as you need. Here's an example that defines two formats : one for a "full page background", and one for a "product image":

    images:
      background:
        width: 1200
        height: 800
        name: "Background's page"
        for: [product, page, article]
      product-image:
        width: 400
        height: 400
        name: "Product image"
        for: product


Let's go over this snippet line-by-line:

- ```images```: starts the definition of image formats
- ```background```: (and ```product-image``` below) each start a new format, and gives it an unique **id** (you can't use the same id twice in this list).
- ```width```: a number, measured in pixels, that defines the width of this format. It is optional if you define a ```height``` and just want the image to be scaled keeping the original image's ratio.
- ```height```: a number, measured in pixels, that defines the height of this format. It is optional if you define a ```width``` and just want the image to be scaled keeping the original image's ratio.
- ```for```: is either a list or a single entity type (```product```, ```page```, ```collection```, ```article```) that this format should applies to.

Now that you have defined your format, you can exploit them in your storefront templates, by calling their URLs that are provided to you automatically by Mayocat Shop. For example, to output the "Background's page" image format, in the context of a specific image, you can call :

    {{images.theme_background_url}}

The generic syntax is ```{{images.theme_<format-id>_url}}``` where **\<format-id\>** is the exact same id you've defined in your theme.yml image formats definition list.

You can find more information on how to manipulate images in your templates [here](/documentation-images).

<a name="models"></a>

Page models
-----------

Page models are a powerful feature of Mayocat Shop that let theme designers define different layouts for each one of the theme templates (```product```, ```page```, ```collection``` and ```article```) that shop owners can choose from when they organize their shop data. Once you've defined your models, they will appear in a select list in the back-office when editing a page, a product, a collection or a news article. For example, here's a list of models we've defined for products:

![Screenshot of the page model selection in the back-office](/images/page-models.png "Model selection in the back-office")

Just like image formats, page models are defined in your ```theme.yml```:

    models:
      2columns:
        name: Page with 2 columns
        file: 2columns.html
        for: page
      large-display:
        name: Product page with large display
        file: product-large.html
        for: product

Let's look at this definition more closely:

- ```models:``` starts the definition of your theme models
- ```2columns:``` (and below ```large-display:```) start the definition of a new page model, and gives it a unique **id**. This id must be unique across all your models so that we can identify them uniquely.
- ```name:``` is a nice name used in the model selector in the back-office (required).
- ```file:``` is the name of the file that implement this model. If you set it for example to ```product-large.html```, then you need to create this template in your theme that implements the large display you've defined. Note that you can put such files in a folder of your theme, and reference it's path relative to your theme folder: ```product-models/large.html```.
- ```for:``` the entities (```product```, ```page```, ```collection``` or ```article```) this page models applies to. If you set it to ```product```, then the model will be proposed in the select list in the back-office when editing a product (required).

That's it, you now have all the cards in hand to create great page models.

<a name="addons"></a>

Addons data
-----------

With addons, you can define and manage custom data easily and expose it to both the back-office and the web storefront. Like page models and image formats, you define addons in your ```theme.yml```.

Addons are so great they have their own documentation page, [check it out now!](/documentation-addons)
