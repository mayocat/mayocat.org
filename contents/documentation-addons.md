<!--
  layout: documentation-with-menu
  title: Addons
  -->

Use addons data
===============

**Data addons** enable theme developers to incorporate additional information in product pages, category pages, or even regular pages and blog posts. The addon system is flexible is automatically integrated in the back-office, and addons are localizable just like the rest of the theme and contents. The default set of supported addons fields is the following :

- **string** : an simple input type text)
- **textarea** : a bigger input box, for longer descriptions)
- **select lists** : a combo-box with several predefined options
- **WYSIWYG** : a rich-text editor


Addon fields are presented together in the back-office by **group**. A group is simply a collection of one or more addons, with which you can associate
a description and some restrictions on which type of entity (products, pages, collections, blog posts) it applies to.

Here is a screenshot extract of how an addon group is presented in the back-office. Here, we have defined a group with two fields (<strong>folded</strong> and **open**), for a theme that associates products with a set of dimensions :

<img src="/images/documentation/addon-group.png" style="border: 1px solid  #eee" />

A simple addon group definition
-------------------------------

Here's how we define an addon data group in our theme.yml file :

    addons:
      dimensions:
        name: Dimensions
        text: Fill-in here the dimnsions of the book : "15cm x 32cm for example
        for: product
        fields:
          folded:
            name: Folded
            type: string
            placeholder: 15cm x 32cm
          open:
            name: Open
            type: string
            placeholder: 42cm x 65cm

Let's analyse line-by-line what we've done here :

- ```addons:``` is the top level element that starts the subsequent definitions of all of our theme addons
- ```  dimensions:``` starts a new group of addons. ```dimensions``` here is the **id** of our addon group. This id, or _slug_ helps us identify uniquely each addon group. It must be an alphanumeric string of characters, without whitespaces.
- ```    name:``` defines the "display name" of our addon group, as we can see it on the screenshot above
- ```    text:``` this this the help text that is displayed just under the addon group name, as we can read it on the screenshot
  ```    for: product```  specifies to which entity this group applies to. It can be a single entity, like ``product`` in our case, or a list of entities such as ```[page, article]``` should our addon be presented in both CMS pages and news articles.
- ```     fields:``` starts the list of fields this addon group defines
- ```       folded:``` starts the definition of an field addon for this group. ```folded``` here is an unique id of the field in its group.
- ```         name:``` defines the "display name" of our addon field (see screenshot)
- ```         type:``` precises the type of data to be stored. It is optional as it can be derived from the mentioned editor, and when defined must be one of ```string```, ```html``` or ```json```
- ```         placeholder:``` sets the placeholder value (the helper initial value that is initially displayed by browsers in inputs which value is not yet defined)


To display addon data in your theme front-end, see <a>{{addon}}</a>

Advanced usages
---------------

### List fields

Lists addon fields can be defined the following way:

    addons:
      features:
        name: Features
        text: Select the size the book is released in
        for: product
        fields:
          size:
            name: Size
            editor: selectBox
            properties:
              listValues: [Folio, Quarto, Octavio]

This will offer, in the back-office, a select box with the pre-set values :

<img src="/images/documentation/select-list.png" style="border: 1px solid  #eee" />

### Localization

TBD.

