<!--
  title: products.html
  layout: documentation-with-menu
  -->

products.html
============

Introduction
------------

The ```products.html``` template is similar to [product.html](/documentation-template-product), except that it offers a list products are available through ```{{products.list}}```. The product list is paginated (see [the pagination section of the theme.yml documentation](/documentation-theme#pagination) for more information about pagination. In this template, you would typically iterate over all products and links to them. For example:

Example
-------

    <div class="products">
      <ul>
        {{#products.list}}
        <li>
          <a href="{{url}}">
            <img src='{{images.featured.theme_product-image_url}}' alt='{{title}}'/>
          </a>
        </li>
        {{/products.all}}
      </ul>
    </div>

Pagination
----------

On this template products are paginated, so your theme needs to display links to navigate between these pages. There are several approaches to do so. You can for example simply display _previous_ and _next_ links:

    {{products}}
      {{#list}}
      [...] here display the product list
      {{/list}}

      {{#previousPage}}
        <a href="{{url}}">← Previous</a>
      {{/previousPage}}

      {{#nextPage}}
        <a href="{{url}}">Next →</a>
      {{/nextPage}}
    {{/articles}}

Or you could display links to all pages:

    [...]
    {{#pages}}
      {{#current}}
        {{number}}
      {{/current}}
      {{^current}}
        <a href="{{url}}">{{number}}</a>
      {{/current}}
    {{/pages}}

Full example
------------

    <h1>Products</h1>

    {{#products}}
        {{#list}}
            <h2>{{title}}</h2>
        {{/list}}

        {{currentPage}} / {{length pages}}<br />

        {{#pages}}
            {{#current}}
                {{number}}
            {{/current}}
            {{^current}}
                <a href="/products/?page={{number}}">{{number}}</a>
            {{/current}}
        {{/pages}}

        <br />

        {{#previousPage}}
            <a href="{{url}}">< Previous</a>
        {{/previousPage}}

        {{#nextPage}}
            <a href="{{url}}">Next ></a>
        {{/nextPage}}
    {{/products}}