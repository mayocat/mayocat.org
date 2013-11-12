<!--
  layout: documentation-with-menu
  title: Addons
  -->

Use addons data
===============

You have to define data group and data.

For each data group :

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


    addons:
      addonsgroup1:
        name: Characteristics
        for: product
        fields:
          brand:
          name: Brand
          type: string
          editor: selectBox
          properties:
            listValues: [{key: brand1, name: Brand's name 1}, {key: brand2, name: Brand's name 1}, {key: brand3, name: Brand's name 1}]
            localized: true
          productRef:
            name: Product reference
            type: string
            editor: text

                
To display addons data see <a>{{addon}}</a>
