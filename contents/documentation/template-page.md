<!--
  title: page.html
  layout: documentation-with-menu
  -->

page.html
=========

Introduction
------------

The ```page.html``` template displays a content page. Content pages are simple CMS pages the shop owner can edit in its back-office.

Page contents
-------------

Pages have two main properties that are interesting when rendering them as HMTL : ```title``` and ```content```. Here is how you can display those properties in the simplest form:

    {{#page}}
    <h1>{{title}}</h1>
    <article class="contents">
        {{content}}
    </article>
    {{/page}}

<a name="images"></a>
Images
------

In a similar fashion to [product images](/documentation/template-products#images), pages can hold images: one featured image, and a list of all the page images. Assuming you've defined the proper [image formats](/documentation/theme#images-formats) in your ```theme.yml``` as follow:

    images:
      page-aside-featured:
        # Format for the featured big image on content pages
        width: 400
        height: 400
        name: "Page big"
        for: page
      page-aside-small:
        # Format for the small images on content pages
        width: 100
        height: 100
        name: "Page small"
        for: page
You can display a page's images with the matching formats as follow:

    {{#images}}
      {{#featured}}
      <img class="photo" src="{{theme_page-aside-featured_url}}" title="{{title}}" alt="{{description}}"/>
      {{/featured}}
      {{#all}}
      {{^featured}}
         <img class="photo" src="{{theme_page-aside-small_url}}" title="{{title}}" alt="{{description}}"/>
      {{/featured}}
      {{/all}}
    {{/images}}

Addons
------

See [addons documentation](/documentation/addons) for more information.

Full example
------------

    {{#page}}
        <h1>{{title}}</h1>
        <article class="contents">
            {{content}}
        </article>
        <aside>
            {{#images}}
                {{#featured}}
                 <img class="photo" src="{{theme_page_aside_featured_url}}" title="{{title}}" alt="{{description}}"/>
                {{/featured}}
                {{#all}}
                    {{^featured}}
                        <img class="photo" src="{{theme_page_aside_small_url}}" title="{{title}}" alt="{{description}}"/>
                    {{/featured}}
                {{/all}}
            {{/images}}
        </aside>
    {{/page}}
