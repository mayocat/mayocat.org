<!--
  layout: documentation-with-menu
  title: Basics
  -->

Learn the basics
================

To begin
--------

Mayocat Shop works with Mustache / Handlebars inside HTML files. You will manipulate Handlebars expression, marked with {{ and }}, inside basics HTML files. So you can add CSS and Javascript files as you have always done.

When connecting to your FTP you will find 2 folders payments and themes :

- In the payments folder you will find the configurations files to setup payments.<br><a>Learn more about payment configuration</a>
- In the theme folder you will find all the files for your template : HTML files to build the pages and theme.yml to configure the theme. And of course you could add CSS files, Javascript files, images... This folder can be name as you wish, the theme selection in the backoffice is based on the theme title set in theme.yml.

Structure
----------

index.html is the main container for all the pages, it contains the header and the footer, and the layout for the current page. This layout is called with {{include layout}}. By default specific layout are called for each context :

- product.html for the product page
- page.html for the content page
- products.html for the page that display all products
- home.html for the homepage
- category.html for the categories pages
- cart.html for the cart

You can set differents pages for the product, the categories and the content pages using models in the <a href="/documentation-theme">theme configuration</a>.
You can custom the structure and include HTML file using <a>{{includeTemplate}}</a>.
To link pages and ressources manually use <a>{{ressource}}</a>.
                
<a>Download default theme</a>
