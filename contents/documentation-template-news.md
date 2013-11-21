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
      [...] context of an article
    {{/articles}}

The context of a single article is the exact same as the one in [article.html](/documentation-template-article). Please refer to [article.html documentation](/documentation-template-article) for the full context available.

Pagination
----------

TBD.

Full example
------------

    <h1>News</h1>

    <div class="articles">
        {{#articles}}
            <article class="h-entry">
                <h2 class="p-name">{{title}}</h2>

                <p>Published on
                    <time class="dt-published"
                          datetime="{{publicationDate.dateTime}}">
                          {{publicationDate.longDate}}
                    </time></p>

                <div class="e-content">
                    <p>{{content}}</p>
                </div>
            </article>
        {{/articles}}
    </div>
