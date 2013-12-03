<!--
  title: news.html
  layout: documentation-with-menu
  -->

news.html
=========

The news module offers shop owners a simple way to keep their customer updated with news articles. It is an easy to use blog.

Articles
--------

In the news template, you have access to the most recent articles. You iterate over them with

    {{articles}}
      {{#list}}
      [...] context of an article
      {{/list}}
    {{/articles}}

Since there can be many articles, the list of articles is paginated. The ```{{#list}}``` expression enters the context of the current list of articles displayed on this page. Checkout [the pagination section of the theme customization documentation](/documentation/theme#pagination) for more information about pagination. The context of a single article is the exact same as the one in [article.html](/documentation/template-article). Please refer to [article.html documentation](/documentation/template-article) for the full context available.

Pagination
----------

News articles are paginated on the news page, so your theme needs to display links to navigate between these pages. There are several approaches to do so. You can for example simply display _previous_ and _next_ links:

    {{articles}}
      {{#list}}
      [...] context of an article
      {{/list}}

      {{#pagination}}
        {{#previousPage}}
          <a href="{{url}}">← Newer</a>
         {{/previousPage}}

        {{#nextPage}}
          <a href="{{url}}">Older →</a>
        {{/nextPage}}
      {{/pagination}}
    {{/articles}}

Or you could display links to all pages:

    {{#pagination}}
      {{#pages}}
        {{#current}}
          {{number}}
        {{/current}}
        {{^current}}
          <a href="{{url}}">{{number}}</a>
        {{/current}}
      {{/pages}}
    {{/pagination}}

Full example
------------

    <h1>News</h1>

    <div class="articles">
        {{#articles}}
            {{#list}}
            <article class="h-entry">
                <h1 class="p-name">{{title}}</h1>

                <p>Published on
                    <time class="dt-published" datetime="{{publicationDate.dateTime}}">{{publicationDate.longDate}}</time>

                <div class="e-content">
                    <p>{{content}}</p>
                </div>
            </article>
            {{/list}}

            {{#previousPage}}
              <a href="{{url}}"><< Newer</a>
            {{/previousPage}}

            {{#pages}}
              {{#current}}
                {{number}}
              {{/current}}
              {{^current}}
                <a href="/news/?page={{number}}">{{number}}</a>
              {{/current}}
            {{/pages}}

            {{#nextPage}}
              <a href="{{url}}">Older >></a>
            {{/nextPage}}

        {{/articles}}
    </div>
