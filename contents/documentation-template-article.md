<!--
  title: article.html
  layout: documentation-with-menu
  -->

article.html
===========

The ```article.html``` displays a single [news](/documentation-template-news) article.

Contents
--------

In a fashion similar to [content pages](/documentation-template-page), news articles have a ```{{title}}``` and a ```{{content}}``` field. For example:

    <article>
      <h2>{{title}}</h2>

      {{content}}
    </article>

Publication date
----------------

The publication date is available in various pre-defined formats:

    "publicationDate" : {
      "shortDate" : "11/21/13",
      "longDate" : "November 21, 2013",
      "dayOfMonth" : 21,
      "monthOfYear" : 11,
      "year" : 2013,
      "time" : 1385044290457,
      "dateTime" : "2013-11-21T15:31:30.457+01:00"
    }

You can exploit them with expressions such as ```{{publicationDate.shortDate}}``` or ```{{publicationDate.dayOfMonth}}/{{publicationDate.monthOfYear}}```.

For more custom formats, you can exploit the ```{{formatDate}}``` [SWAG helper](/documentation-swag). For example:

    {{formatDate publicationDate.time "%F"}}

Images
------

This is similar to [page images](/documentation-template-page#images). Please refer to the [page images](/documentation-template-page#images) for more information.

Full example
------------

    {{#article}}
      <article class="h-entry">
          <h1 class="p-name">{{title}}</h1>

          {{#images.featured}}
            <img class="photo" src="{{theme_article-big_url}}" title="{{title}}" alt="{{description}}"/>
          {{/images.featured}}

          <p>Published on
              <time class="dt-published" datetime="{{publicationDate.dateTime}}">{{publicationDate.longDate}}</time>

          <div class="e-content">
              <p>{{content}}</p>
          </div>

          <aside>
          {{#images}}
            {{#all}}
              {{^featured}}
                <img class="photo" src="{{theme_page_aside_small_url}}" title="{{title}}" alt="{{description}}"/>
              {{/featured}}
            {{/all}}
          {{/images}}
          </aside>
      </article>
    {{/article}}