<!--
  layout: documentation-with-menu
  title: Basics
  -->

Learn the basics
================

Foreword
--------

Mayocat Shop themes are created using today's **standard web technologies**. In many aspects, creating a theme for Mayocat Shop is not different than creating a regular website with simple HTML, CSS and JavaScript. Mayocat Shop's HTML files are empowered using Mustache/Handlebars expressions, that let you place the different elements exposed by Mayocat Shop (for example for a product page : the product title, its price, its description and many other things). Handlebars expression are enclosed in ```{{``` and ```}}``` symbols. For example  ```{{product.title}}``` is a handlebars expression that addresses the product title. Placing this expression in the right context (the context of a product) will result in your theme displaying the title of the product as it has been entered in the back-office by the shop owner.

Shop files
----------

In Mayocat, each shop has its own folder, where are stored all shop-specific data, such as the shop own theme(s) and payment configuration. In a typical scenario, web designers and front-end developers will access this folder, located on the server where Mayocat Shop is running, via the FTP protocol (although many other scenarios are possible, using version control systems for example).

When accessing the shop's folder, you will be presented with two folders:

- ```payments```: This folder holds the configurations files to setup payments so that the shop can start accepting payments.<br>[Learn more about payment configuration](/documentation-payments)
- ```themes```: This folder holds the list of themes that are designed specifically for the shop accessed. In a theme folder, you will find all the files that make the theme : HTML templates, the ```theme.yml ``` theme configuration file, and of course  all the CSS, JavaScript, images, fonts and other files that make a regular website. The name of the theme folder can be anything you wish, the theme selection in the back-office is based on the theme title set in theme.yml.

![Example of a shop top-level directory](/images/folder-list.png "Example of a shop top-level directory")

Anatomy of a theme
------------------

While rich themes can contain many files, a very small set of files is mandatory to implement, this set compose the essential structure of a shop's theme. Two important files are ```theme.yml``` and ```index.html```.

The ```theme.yml``` file contains the general configuration for the theme. It is discussed extensively in [Configure your theme](/documentation-theme).

The ```index.html``` is the main container for all the pages, it contains the header and the footer, and the layout for the current page. Think of the ```index.html``` file as the common shell for all pages of your shop's website : the product pages, the CMS pages, blog posts, collections, etc. The actual content (of a product, a collection, etc.) is called in ```index.html``` with ```{{include templateContent}}```.

Besides these two files, there are templates which are mandatory to implement for your theme to be functional :

- ```product.html``` for the product page
- ```page.html``` for the content page
- ```products.html``` for the page that display all products
- ```home.html``` for the homepage
- ```category.html``` for the categories pages
- ```cart.html``` for the cart

This is the minimum set of files to have a functional theme, but keep in mind that you can create different template for products, categories or content pages using the **models**. You can read more about models in the [theme configuration documentation](/documentation-theme).

Below is an illustration of the anatomy of a simple theme

![Illustration of the files that compose a simple theme](/images/theme-files.png "The files of a simple theme")

Getting started
---------------

Let's get our hands dirty and start hacking a simple shop theme. The first step is to create our theme's folder in the ```themes``` directory dedicated to our shop. We're going to name it ```my-fancy-theme```. In this folder, we create with our favorite text editor the following files :

```theme.yml``` with the following content :

    name: My fancy theme
    description: A theme to illustrate the theme creation process

Note can read the complete documentation of ```theme.yml``` in the  [theme configuration documentation](/documentation-theme).

```index.html``` with the following content :

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        {{!-- Define this page title and expose it to search engines --}}
        <title>{{page_title}}</title>
        {{!-- Include the stylesheets used by our fancy theme --}}
        <link rel="stylesheet" type="text/css" href="{{resource 'styles.css'}}"/>
    </head>

    <body>
    <header>
        {{!-- Enter the site context, that holds information relative to the shop : it's title, a possible logo, etc. --}}
        {{#site}}
            <h1>
                <a href="/">
                    {{!-- If there is a logo, we display it --}}
                    {{#logo}}
                    {{!-- here {{url}} is the logo URL and {{title}} its title --}}
                        <img src="{{url}}" alt='{{title}}'/>
                    {{/logo}}
                    {{!-- Display the shop's title --}}
                    {{title}}
                </a>
            </h1>
        {{/site}}
    </header>

    <section>
        {{!-- Include the current's template content --}}
        {{include templateContent}}
    </section>
    </body>
    </html>

As you can see, Handlebars comments are expressed between ```{{!--``` and ```--}}```. This is an easy way to document your code. Let's now look at the interesting parts in this file. First we can see ```<link rel="stylesheet" type="text/css" href="{{resource 'styles.css'}}"/>```, which let us include a CSS stylesheet of our theme. The ```{{resource '<relativePath>'}}``` helper ensures the proper path will be set so that Mayocat Shop finds the ```styles.css``` file.

TODO document {{#site}}

Let's add the ```styles.css``` file, with the following content :

    body {
        background: #fffce9;
    }

    h1 a,
    h1 a:hover,
    h1 a:visited {
        text-decoration: none;
    }

And ```home.html``` with the following content :

    <p>Welcome to our fancy shop !</p>

    <strong>Our products :</strong>

    <ul>
    {{#products.all}}
      <li>
          {{!-- For each product in our shop, display a link to its page --}}
          <a href="{{url}}">{{title}}</a>
      </li>
    {{/products.all}}
    </ul>

Our theme directory tree now look like this:

![Illustration of the fancy theme tree structure](/images/fancy-theme-tree.png "Fancy theme tree structure")

We now have enough to try it out. Assuming we've created a couple of products in our back-office, if we point our browser to our e-shop, we can check out the following result on the home page :

![Screenshot of the home page of our shop](/images/fancy-shop-home.png "Fancy Shop home page")

<a>Download default theme</a>
