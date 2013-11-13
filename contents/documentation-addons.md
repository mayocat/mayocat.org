<!--
  layout: documentation-with-menu
  title: Addons
  -->

Use addons data
===============

**Data addons** enable theme developers to incorporate additional information in product pages, category pages, or even regular pages and blog posts. The addon system is flexible is automatically integrated in the back-office, and addons are localizable just like the rest of the theme and contents. The default set of supported addons fields is the following:

- **string**: an simple input type text)
- **textarea**: a bigger input box, for longer descriptions)
- **select lists**: a combo-box with several predefined options
- **WYSIWYG**: a rich-text editor


Addon fields are presented together in the back-office by **group**. A group is simply a collection of one or more addons, with which you can associate
a description and some restrictions on which type of entity (products, pages, collections, blog posts) it applies to.

Here is a screenshot extract of how an addon group is presented in the back-office. Here, we have defined a group with two fields (<strong>folded</strong> and **open**), for a theme that associates products with a set of dimensions:

![Addon group screenshot in the back-office](/images/addon-group.png "This is how a simple addon group is displayed in the back-office")

A simple addon group definition
-------------------------------

Here's how we define an addon data group in our theme.yml file:

    addons:
      dimensions:
        name: Dimensions
        text: Fill-in here the dimensions of the book: "15cm x 32cm" for example
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

Let's analyse line-by-line what we've done here:

- ```addons:``` is the top level element that starts the subsequent definitions of all of our theme addons
- ```  dimensions:``` starts a new group of addons. ```dimensions``` here is the **id** of our addon group. This id, or _slug_ helps us identify uniquely each addon group. It must be an alphanumeric string of characters, without whitespaces.
- ```    name:``` defines the "display name" of our addon group, as we can see it on the screenshot above
- ```    text:``` this this the help text that is displayed just under the addon group name, as we can read it on the screenshot
- ```    for: product```  specifies to which entity this group applies to. It can be a single entity, like ``product`` in our case, or a list of entities such as ```[page, article]``` should our addon be presented in both CMS pages and news articles.
- ```     fields:``` starts the list of fields this addon group defines
- ```       folded:``` starts the definition of an field addon for this group. ```folded``` here is an unique id of the field in its group.
- ```         name:``` defines the "display name" of our addon field (see screenshot)
- ```         type:``` precises the type of data to be stored. It is optional as it can be derived from the mentioned editor, and when defined must be one of ```string```, ```html``` or ```json```
- ```         placeholder:``` sets the placeholder value (the helper initial value that is initially displayed by browsers in inputs which value is not yet defined)


Display addons in your theme front-end
--------------------------------------

You can address the addon fields you have defined in the code of your front-end (the HTML/Handlebars files that compose your theme). Each of your theme addon field is addressable via the following construct:

    {{theme_addons.<groupId>.<fieldId>.display}}

Where ```groupId``` is the id of the group the field you want to address is defined in, and ```fieldId``` is the id of the field itself.

For our example above, we could then address our ```open``` and ```folded``` addon fields the following way:

    Open: {{theme_addons.dimensions.open.display}}
    Folded: {{theme_addons.dimensions.folded.display}}

A helper exists to make referencing addons easier. It's name is ```addon``` and its  syntax is:

    {{addon "<groupId>.<fieldId>"}}

Or, for our example:

    {{addon "dimensions.open"}}

The ```addon``` helper accept one optional parameter, named ```type```. The default value for ```type``` is ```display```, which means "output the display value", in the meaning of the value destined to be read by humans. The other acceptable value for ```type``` is ```raw```, which means "output the raw value", that can sometimes be different that the ```display``` value (for example for list fields, see below in the advanced usages section).

Should we need it, we can display a raw value this way:

    {{addon "dimensions.open" type="raw"}}

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

This will offer, in the back-office, a select box with the pre-set values:

![Select list addon field image](/images/select-list.png "This is how a addon field type list is displayed in the back-office")

At times, you might want to reference unique ids (a.k.a a set of ```key```) in addition to the list display values. This is particularly useful when you want to use those ids as CSS class names for example. Also, they are mandatory when you are defining a list field that is meant to be localized. To define unique ids for list values, simply express the ```listValues``` as an array of associative arrays, like the following:

    listValues: [{key: folio, name: Folio}, {key: quarto, name: Quarto}, {key: octavio, name: Octavio}]

This is the short-hand notation. If your list values set is more extensive, you might want to display them as an indented block for more clarity, as follow:

    listValues:
      - key: royal-folio
        name: Royal Folio (20 x 12½)
      - key: royal-quarto
        name: Royal Quarto (12½ x 10)
      - key: royal-octavio
        name: Royal Octavio (10 x 6¼)


### Localization

TBD.

