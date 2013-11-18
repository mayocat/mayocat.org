<!--
  layout: documentation-with-menu
  title: Theme localization
  -->

Theme localization
==================

Many online shops have customers coming from more than just one region of the world. Localization is the process of accommodating several countries and languages so that no customer is left behind!

Localization in Mayocat Shop is easy and complete: everything, both in the theme and in the shop's data, can be localized.

Localization for shop owners
----------------------------

Before we dive into the actual meat, the localization of themes, let's see what localization means for shop owners.

When setting-up their shop, shop owners choose the languages they want to expose in their storefront. There is a "main" language, often times the language of the country the shop is born in, and "alternatives" languages for accommodating other customers. Here's an excerpt from the dialog in the back-office where shop owners select the languages they want:

![Screenshot of the languages selection in the back-office](/images/language-selection.png "Language selection in the back-office")

Once they've set this up, the shop owners or managers can edit all their content in the languages they've picked: products, content pages, new articles, etc. Here's how it looks like for them, in the back-office:

![Screenshot of product localization in the back-office](/images/product-localization.png "Product localization in the back-office")

Localization of the words of the theme
--------------------------------------

Now we've covered what localization means for shop owners, let's dig the localization of themes. As a theme creator, you are expected to facilitate the localization of all the words displayed in your theme that don't come from the shop's data. We call them _words of the theme_. Those can be many things: mentions in the footer, the link to the cart, etc. Basically, any other words and sentences your theme needs!

The actual localization of the words of the theme happens in a folder of your theme named ```localization```. Here you can provide the theme with one file per language it supports. The file themselves are ```.properties``` files with a very simple syntax we cover below. Here is an example of the contents of such a folder for a theme that support English, Italian, Japanese, Russian and Chinese:

![Localization properties files for a theme](/images/theme-localization-files.png "Localization properties files for a theme")

Here's an excerpt of the contents of such files, here for the English language:

<a name="snippet"></a>

    eshop.cart.title=What have you in your basket?
    eshop.cart.numberOfItems=Number of items: {NUMBER_OF_ITEMS}
    eshop.cart.item=You have {QUANTITY, plural, =0 {no cheese} =1 {1 cheese of type {CHEESE_NAME}} other {# cheeses of type {CHEESE_NAME}}}  in your basket
    eshop.cart.review=Review order
    eshop.cart.delivery=Delivery details
    eshop.cart.payement=Payment details
    eshop.cart.cart=Cart
    # [...] More words

As you can see, each line is a localization entry, where a ```key``` (a unique id) is matched with a word or a sentence. They are separated by the sign ```=``` ;  on the left of the sign is the ```key ```, and on the right, the word or sentence in the language we are working on.

Then, displaying the sentence for a certain ```key``` in the theme requires you to call a ```{{message}}``` Handlebars's helper, passing it the desired ```key```, like this:

    {{message 'eshop.cart.title'}}

With this, when a user is visiting the english version of the shop, he will read:

    What have you in your basket?

Whereas a user visiting the French version, assuming you have created the matching ```fr.properties``` localization file properly, will read:

    Qu'as-tu donc dans ton panier?


### Variables

On the second line of the excerpt, you can see the sentence is ```Number of items: {NUMBER_OF_ITEMS}```. Here, with ```{NUMBER_OF_ITEMS}``` we've introduce the notion of a localization ```variable```. Localization variables let translators place dynamic data (here the number of items in the cart) anywhere they want in the localized sentences – that's useful since languages work differently in terms of ordering of sentence constructs. It is customary to define localization variables all WITH_CAPS_LIKE_THIS to identify them  easily.

You pass variables to the ```{{message}}``` helper the following way:

    {{message 'eshop.cart.numberOfItems' NUMBER_OF_ITEMS=cart.numberOfItems}}

Assuming the prospective customer has added 3 items in his cart, he will read:

    Number of items: 3

<a name="pluralization"></a>

### Pluralization

Variables can be used to handle pluralization correctly. The syntax for pluralization is shown on the third line on the [snippet above](#snippet). When you need to manage pluralization in a sentence depending of the value of a variable, you open a pluralization chunk with ```{VARIABLE_NAME, plural, ```  and close it with a final ```}``` where variable name is the name of the variable that will determine which of the following options will be picked, options that you define this way :

    =0 {no cheese} =1 {1 cheese of type {CHEESE_NAME}} other {# cheeses of type {CHEESE_NAME}}

In this option list, ```=0``` starts an option for the case when the passed variable is equal to zero. The actual option value is then enclosed in ```{``` and ```}```, it is the ```no cheese``` chunk. You also can use variables in option values, this is the case with the variable ``` CHEESE_NAME``` in the second and third options in our example. The second option is the case where there the value of the control variable is equal to ```1``` ; and finally the third option represents _all other cases_ and is started by the keyword ```other```. The ```#``` sign in the ```other``` option represent the value of the pluralization control variable.

We can try out the pluralization. With the following code in a template :

    {{message 'eshop.cart.item' QUANTITY=0}} <br />
    {{message 'eshop.cart.item' QUANTITY=1 CHEESE_NAME='Michachon'}} <br />
    {{message 'eshop.cart.item' QUANTITY=5 CHEESE_NAME='Chafouette'}}

We can see all our cases are covered correctly :

    You have no cheese in your basket
    You have 1 cheese of type Michachon in your basket
    You have 5 cheeses of type Chafouette in your basket

A more real-world scenario for this message, would be to use it in the cart template, in the context of the cart items :

    {{#cart.items}}
      <li>{{message 'eshop.cart.item' QUANTITY=this.quantity CHEESE_NAME=this.title}}</li>
    {{/cart.items}}

### More information

You can explore the full possibilities available when formatting localization messages on the [ICU User Guide web page](http://userguide.icu-project.org/formatparse/messages).

Localization of data addons
---------------------------

See [the localization section on the addon page](/documentation-addons#localization).