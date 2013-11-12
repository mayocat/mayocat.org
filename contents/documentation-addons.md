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

<br />
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


To display addon data in your theme front-end, see <a>{{addon}}</a>

Advanced usages
---------------

- id : alphanumeric id without spaces (required).
- name : a title displayed in the backoffice (required).
- for : a single value or a table to define in wich context the image will be available (product, page, article) (required).
- For each data :
- id : alphanumeric id without spaces (required).
- name : a nicename displayed before the editor (required).
- type : the type of data (string, HTML, JSON) (optional)
- editor : the type of editor to display in the backoffice (text, selectBox, wysiwyg, textarea) (required)
- properties : list of properties
    - listValues : list of values in a selectbox : [{key: key1, name: Name 1}, {key: key1, name: Name 2}] (optional)
    - localized : whether the data is localized or not : boolean (optional)




