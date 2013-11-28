<!--
  title: collection.html
  layout: documentation-with-menu
  -->

collection.html
===============

Introduction
------------

The ```collection.html``` template is used to display the collection pages. Essentially, collections are lists of products, and in this way the ```collection.html``` template is very similar to the ```products.html```, the difference being that the list of products is just a subset of the all products, and it adds additional content (the collection title and description).

The list of products in a collection is paginated. You can control the number of products to display per page on a collection with the ```collection``` key entry in your theme.yml pagination configuration. Read [the pagination section of the theme configuration documentation page](/documentation/theme#pagination) for more information.

Context available
-----------------

In ```collection.html```, you enter the collection own context with ```{{#collection}}```. Then in this context, you have access to the collection's title and description, as well as its full, paginated, list of products.

Full example
------------

    {{#collection}}
        <h1>{{title}}</h1>
        {{description}}
        {{#products}}
            <ul>
            {{#list}}
              <h2><a href="{{url}}">{{title}}</h2></h2>
            {{/list}}
            </ul>
            {{#pages}}
                {{#current}}
                    {{number}}
                {{/current}}
                {{^current}}
                    <a href="{{url}}">{{number}}</a>
                {{/current}}
            {{/pages}}
        {{/products}}
    {{/collection}}

