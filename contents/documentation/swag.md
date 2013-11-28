<!--
  layout: documentation-with-menu
  title: SWAG Helpers
  -->

Play with SWAG
==============

Mayocat Shop includes SWAG, a fancy collection of helpers for handlebars, developed by [@elving](http://github.com/elving/). Those helpers can help you build your theme.

Tou can find more information on [the official swag documentation page](http://elving.github.io/swag/).

Here's the list of the SWAG's helpers we embed and you can play with:

* [Strings](#strings)
* [Collections](#collections)
* [Math](#math)
* [Numbers](#numbers)
* [Comparisons](#comparisons)
* [Dates](#dates)
* [Inflections](#inflections)
* [HTML](#html)
* [Logging](#logging)
* [Miscellaneous](#miscellaneous)

## Strings

- **{{lowercase}}** : Turns a string to lowercase.
- **{{uppercase}}** : Turns a string to uppercase.
- **{{capitalizeFirst}}** : Capitalizes the first word in a string.
- **{{capitalizeEach}}** : Capitalizes each word in a string.
- **{{titleize}}** : Capitalizes all words within a string.
- **{{sentence}}** : Capitalizes the first word of each sentence in a string and converts the rest of the sentence
to lowercase.
- **{{reverse}}** : Reverses a string
- **{{truncate}}** : Truncates a string given a specified length, providing a custom string to denote an
omission.&nbsp;&nbsp;&nbsp;length [int] - The number of characters to keep (Required)&nbsp;&nbsp;&nbsp;omission [string] - A string to denote an omission (Optional)
- **{{center}}** : Centers a string using non-breaking spaces.&nbsp;&nbsp;&nbsp;spaces [int] - The number of spaces. (Required)
- **{{newLineToBr}}** : Converts new line characters \n to line breaks &lt;br&gt;.


    {{capitalizeFirst "MAYOCAT SHOP INCLUDE SWAG"}}
    Output : Mayocat shop include swag
    {{truncate "Mayocat Shop include SWAG" 20 "..."}}
    Output : Mayocat Shop include...
    {{center "Mayocat Shop include SWAG" 10}}
    Output : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mayocat Shop include SWAG

## Collections

- **{{first}}** : Returns the first item in a collection.
- **{{withFirst}}** : Use the first item in a collection inside a block.
- **{{last}}** : Returns the last item in a collection.
- **{{withLast}}** : Use the last item in a collection inside a block.
- **{{after}}** : Returns all of the items in the collection after the specified count.&nbsp;&nbsp;&nbsp;count [int] - How many items to omit from the beginning. (Required)
- **{{withAfter}}** : Use all of the items in the collection after the specified count inside a block.&nbsp;&nbsp;&nbsp;count [int] - How many items to omit from the beginning. (Required)
- **{{before}}** : Returns all of the items in the collection before the specified count.&nbsp;&nbsp;&nbsp;count [int] - How many items to omit from the end. (Required)
- **{{withBefore}}** : Use all of the items in the collection before the specified count inside a block.&nbsp;&nbsp;&nbsp;count [int] - How many items to omit from the end. (Required)
- **{{join}}** : Joins all elements of a collection into a string using a separator if specified.&nbsp;&nbsp;&nbsp;separator [string] - A string to use as a separator between the items. (Optional)
- **{{sort}}** : Returns the collection sorted.
- **{{withSort}}** : Uses the sorted collection inside the block.&nbsp;&nbsp;&nbsp;field [string] - String name of the field or property to sort by. (Optional)
- **{{length}}** : Returns the length of the collection.
- **{{lengthEqual}}** : Conditionally render a block based on the length of a collection.&nbsp;&nbsp;&nbsp;length [int] - The value to test against. (Required)
- **{{empty}}** : Conditionally render a block if the collection is empty.
- **{{any}}** : Conditionally render a block if the collection isn't empty.
- **{{inArray}}** : Conditionally render a block if a specified value is in the collection.&nbsp;&nbsp;&nbsp;value [string|int] - A value to test against. (Required)
- **{{eachIndex}}** : Renders a block using the array and each item's index.
- **{{eachProperty}}** : Uses the key and value of each property in an object to render a block.

## Math

- **{{add}}** : Returns the sum of two numbers.&nbsp;&nbsp;&nbsp;value [int] - The number to add to the expression. (Required)
- **{{subtract}}** : Returns the difference of two numbers.&nbsp;&nbsp;&nbsp;value [int] - The number to subtract from the expression. (Required)
- **{{divide}}** : Returns the division of two numbers.&nbsp;&nbsp;&nbsp;value [int] - The number to divide the expression. (Required)
- **{{multiply}}** : Returns the multiplication of two numbers.
&nbsp;&nbsp;&nbsp;value [int] - The number to multiply the expression. (Required)
- **{{floor}}** : Returns the value rounded down to the nearest integer.
- **{{ceil}}** : Returns the value rounded up to the nearest integer.
- **{{round}}** : Returns the value rounded to the nearest integer.

## Numbers

- **{{toFixed}}** : Returns exactly digits after the decimal place. The number is rounded if necessary, and the
fractional part is padded with zeros if necessary so that it has the specified length.
digits [int] - The number of digits to appear after the decimal point. (Optional)
- **{{toPrecision}}** : Returns the number in fixed-point or exponential notation rounded to precision significant
digits.
&nbsp;&nbsp;&nbsp;precision [int] - The number of digits. If omitted, it returns the entire number (without any
formatting). (Optional)
- **{{toExponential}}** : Returns the number in exponential notation with one digit before the decimal point,
rounded to fractions digits after the decimal point.
&nbsp;&nbsp;&nbsp;fractions [int] - An integer specifying the number of digits after the decimal point.
(Optional)
- **{{toInt}}** : Returns an integer.
- **{{toFloat}}** : Returns a floating point number.
- **{{digitGrouping}}** : Adds thousands separator to a number.
&nbsp;&nbsp;&nbsp;separator [string] - A string to use as a digit group separator. (Optional)

## Comparisons

- **{{is}}** : Conditionally render a block if the condition is true.
&nbsp;&nbsp;&nbsp;value [string|int] - the value to test against.
- **{{isnt}}** : Conditionally render a block if the condition is false.
&nbsp;&nbsp;&nbsp;value [string|int] - the value to test against.
- **{{gt}}** : Conditionally render a block if the value is greater than a given number.
&nbsp;&nbsp;&nbsp;value [string|int] - the value to test against.
- **{{gte}}** : Conditionally render a block if the value is greater or equal than a given number.
&nbsp;&nbsp;&nbsp;value [string|int] - the value to test against.
- **{{lt}}** : Conditionally render a block if the value is less than a given number.
&nbsp;&nbsp;&nbsp;value [string|int] - the value to test against.
- **{{lte}}** : Conditionally render a block if the value is less or equal than a given number.
&nbsp;&nbsp;&nbsp;value [string|int] - the value to test against.
- **{{or}}** : Conditionally render a block if one of the values is truthy.
&nbsp;&nbsp;&nbsp;values [string|int] - the values to test against.
- **{{and}}** : Conditionally render a block if both values are truthy.
&nbsp;&nbsp;&nbsp;values [string|int] - the values to test against.

## Dates

Use this token for format string : [http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime](http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime)

- **{{formatDate}}** : Formats a date into a string given a format. Accepts any value that can be passed to new
Date().
&nbsp;&nbsp;&nbsp;format [string] - The format string (Required)
- **{{now}}** : Returns the current date.
&nbsp;&nbsp;&nbsp;format [string] - The format string (Optional)
- **{{timeago}}** : Returns a human-readable time phrase from the given date.

## Inflections

- **{{inflect}}** : Returns the plural or singular form of a word based on a count. We recommand to use Mayocat
shop's expression <a>{{message}}</a> that let you manage localization.
&nbsp;&nbsp;&nbsp;singular [string] - The singular form of the word. (Required)
&nbsp;&nbsp;&nbsp;plural [string] - The plural form of the word. (Required)
&nbsp;&nbsp;&nbsp;include [boolean] - whether or not to include the count before the word. (Optional)
- **{{ordinalize}}** :Turns a number into an ordinal string.

## HTML

- **{{ul}}** : Creates an unordered list.
&nbsp;&nbsp;&nbsp;hash [html attributes] - HTML attributes to use on the ul element. (Optional)
- **{{ol}}** : Same as the ul helper but creates and ordered list.
- **{{br}}** : Returns
 tags based on a count.
&nbsp;&nbsp;&nbsp;count [int] - The number of `br` elements to render. (Optional)

## Logging

- **{{log}}** : Simple console.log()
- **{{debug}}** : Simple console.debug() that shows the current context.

## Miscellaneous

- **{{default}}** : Provides a default or fallback value if a value doesn't exist.&nbsp;&nbsp;&nbsp;defaultValue [string|int] - The default value to use.
- **{{partial}}** : Provides an easy way to register and use partials inside your templates. This helper only works
if you define your templates as common.js modules, since it uses the common.js require function to find and register
your templates with Handlebars.registerPartial. It was created with brunch in mind (which I use a lot), because
brunch automatically wraps your scripts and templates in common.js modules to use in the browser.
&nbsp;&nbsp;&nbsp;name [string] - The name or path of the file in which your template is define. You can tell swag
where your templates folder is by overriding Swag.Config.partialsPath. (Required)
&nbsp;&nbsp;&nbsp;data [int|string|collection] - The data you want to use inside the partial. (Optional)