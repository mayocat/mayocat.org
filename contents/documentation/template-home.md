<!--
  title: home.html
  layout: documentation-with-menu
  -->

home.html
=========

Introduction
------------

The ```home.html```, as it name suggests, handles the presentation of the home page of your shop. In addition to all the context shared by all templates (see [```index.html```](/documentation/template-index), you have access to the home page contents and to a list of products.

Page content
------------

If a content page with ```home``` as slug is defined in the back-office, it will be exposed to the ```home.html``` template. You can then exploit it under the ```{{#home}}``` context, for example:

    {{#home}}
        <article class="contents">
            {{content}}
        </article>
        <ul class="carousel">
            {{#images.all}}
                <li><img class="photo" src="{{theme_home_carousel_url}}" title="{{title}}" alt="{{description}}"/></li>
            {{/images.all}}
        </ul>
    {{/home}}

The ```{{#home}}``` context is exactly the same as the ```{{#page}}``` context in the ```page.html``` template. Checkout the [```page.html```](/documentation/template-page) documentation for full information on what you can do with it.


List of products
----------------

You also have access to a short list of products:

    <ul>
        {{#products.list}}
            <li>
                <a href="{{url}}">{{title}}</a>
            </li>
        {{/products.list}}
    </ul>

This list is similar to the list you would have in the ```products``` template, except only the first page is available. You can define the number of items available in your theme.yml [pagination section](/documentation/theme), under the ```home``` key.