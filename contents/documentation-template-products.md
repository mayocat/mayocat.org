<!--
  title: products.html
  layout: documentation-with-menu
  -->

products.html
============

Introduction
------------

The ```products.html``` template is similar to [product.html](/documentation-template-product), except that _all_ products are available through ```{{products.all}}```. In this template, you typically iterate over all products and links to them. For example:

Example
-------

    <div class="products">
      <ul>
        {{products.all}}
        <li>
          <a href="{{url}}">
            <img src='{{images.featured.theme_product-image_url}}' alt='{{title}}'/>
          </a>
        </li>
        {{/products.all}}
      </ul>
    </div>