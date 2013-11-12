<!--
  layout: documentation-with-menu
  title: SWAG Helpers
  -->

Play with SWAG
==============

Mayocat Shop include SWAG, a fancy collection of helpers for handlebars :

More information on <a target="_blank" href="http://elving.github.io/swag/">http://elving.github.io/swag/</a>

Here's the list of the SWAG's helpers to play with :

<ul>
    <li><a href="#strings">Strings</a></li>
    <li><a href="#collections">Collections</a></li>
    <li><a href="#math">Math</a></li>
    <li><a href="#numbers">Numbers</a></li>
    <li><a href="#comparisons">Comparisons</a></li>
    <li><a href="#dates">Dates</a></li>
    <li><a href="#inflections">Inflections</a></li>
    <li><a href="#html">HTML</a></li>
    <li><a href="#logging">Logging</a></li>
    <li><a href="#miscellaneous">Miscellaneous</a></li>
</ul>

<h2 id="strings">Strings</h2>
<p>
    <b>{{lowercase}}</b> : Turns a string to lowercase.<br>
    <b>{{uppercase}}</b> : Turns a string to uppercase.<br>
    <b>{{capitalizeFirst}}</b> : Capitalizes the first word in a string.<br>
    <b>{{capitalizeEach}}</b> : Capitalizes each word in a string.<br>
    <b>{{titleize}}</b> : Capitalizes all words within a string.<br>
    <b>{{sentence}}</b> : Capitalizes the first word of each sentence in a string and converts the rest of the sentence
    to lowercase.<br>
    <b>{{reverse}}</b> : Reverses a string.<br>
    <b>{{truncate}}</b> : Truncates a string given a specified length, providing a custom string to denote an
    omission.<br>
    &nbsp;&nbsp;&nbsp;length [int] - The number of characters to keep (Required)<br>
    &nbsp;&nbsp;&nbsp;omission [string] - A string to denote an omission (Optional)<br>
    <b>{{center}}</b> : Centers a string using non-breaking spaces.<br>
    &nbsp;&nbsp;&nbsp;spaces [int] - The number of spaces. (Required)<br>
    <b>{{newLineToBr}}</b> : Converts new line characters \n to line breaks &lt;br&gt;.<br>
</p>

<code>
    {{capitalizeFirst "MAYOCAT SHOP INCLUDE SWAG"}}<br>
    Output : Mayocat shop include swag<br>
    {{truncate "Mayocat Shop include SWAG" 20 "..."}}<br>
    Output : Mayocat Shop include...<br>
    {{center "Mayocat Shop include SWAG" 10}}<br>
    Output : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mayocat Shop include SWAG<br>
</code>


<h2 id="collections">Collections</h2>
<p>
    <b>{{first}}</b> : Returns the first item in a collection.<br>
    <b>{{withFirst}}</b> : Use the first item in a collection inside a block.<br>
    <b>{{last}}</b> : Returns the last item in a collection.<br>
    <b>{{withLast}}</b> : Use the last item in a collection inside a block.<br>
    <b>{{after}}</b> : Returns all of the items in the collection after the specified count.<br>
    &nbsp;&nbsp;&nbsp;count [int] - How many items to omit from the beginning. (Required)<br>
    <b>{{withAfter}}</b> : Use all of the items in the collection after the specified count inside a block.<br>
    &nbsp;&nbsp;&nbsp;count [int] - How many items to omit from the beginning. (Required)<br>
    <b>{{before}}</b> : Returns all of the items in the collection before the specified count.<br>
    &nbsp;&nbsp;&nbsp;count [int] - How many items to omit from the end. (Required)<br>
    <b>{{withBefore}}</b> : Use all of the items in the collection before the specified count inside a block.<br>
    &nbsp;&nbsp;&nbsp;count [int] - How many items to omit from the end. (Required)<br>
    <b>{{join}}</b> : Joins all elements of a collection into a string using a separator if specified.<br>
    &nbsp;&nbsp;&nbsp;separator [string] - A string to use as a separator between the items. (Optional)<br>
    <b>{{sort}}</b> : Returns the collection sorted.<br>
    <b>{{withSort}}</b> : Uses the sorted collection inside the block.<br>
    &nbsp;&nbsp;&nbsp;field [string] - String name of the field or property to sort by. (Optional)<br>
    <b>{{length}}</b> : Returns the length of the collection.<br>
    <b>{{lengthEqual}}</b> : Conditionally render a block based on the length of a collection.<br>
    &nbsp;&nbsp;&nbsp;length [int] - The value to test against. (Required)<br>
    <b>{{empty}}</b> : Conditionally render a block if the collection is empty.<br>
    <b>{{any}}</b> : Conditionally render a block if the collection isn't empty.<br>
    <b>{{inArray}}</b> : Conditionally render a block if a specified value is in the collection.<br>
    &nbsp;&nbsp;&nbsp;value [string|int] - A value to test against. (Required)<br>
    <b>{{eachIndex}}</b> : Renders a block using the array and each item's index.<br>
    <b>{{eachProperty}}</b> : Uses the key and value of each property in an object to render a block.<br>
</p>


<h2 id="math">Math</h2>
<p>
    <b>{{add}}</b> : Returns the sum of two numbers.<br>
    &nbsp;&nbsp;&nbsp;value [int] - The number to add to the expression. (Required)<br>
    <b>{{subtract}}</b> : Returns the difference of two numbers.<br>
    &nbsp;&nbsp;&nbsp;value [int] - The number to subtract from the expression. (Required)<br>
    <b>{{divide}}</b> : Returns the division of two numbers.<br>
    &nbsp;&nbsp;&nbsp;value [int] - The number to divide the expression. (Required)<br>
    <b>{{multiply}}</b> : Returns the multiplication of two numbers.<br>
    &nbsp;&nbsp;&nbsp;value [int] - The number to multiply the expression. (Required)<br>
    <b>{{floor}}</b> : Returns the value rounded down to the nearest integer.<br>
    <b>{{ceil}}</b> : Returns the value rounded up to the nearest integer.<br>
    <b>{{round}}</b> : Returns the value rounded to the nearest integer.<br>
</p>


<h2 id="numbers">Numbers</h2>
<p>
    <b>{{toFixed}}</b> : Returns exactly digits after the decimal place. The number is rounded if necessary, and the
    fractional part is padded with zeros if necessary so that it has the specified length.<br>
    digits [int] - The number of digits to appear after the decimal point. (Optional)<br>
    <b>{{toPrecision}}</b> : Returns the number in fixed-point or exponential notation rounded to precision significant
    digits.<br>
    &nbsp;&nbsp;&nbsp;precision [int] - The number of digits. If omitted, it returns the entire number (without any
    formatting). (Optional)<br>
    <b>{{toExponential}}</b> : Returns the number in exponential notation with one digit before the decimal point,
    rounded to fractions digits after the decimal point.<br>
    &nbsp;&nbsp;&nbsp;fractions [int] - An integer specifying the number of digits after the decimal point.
    (Optional)<br>
    <b>{{toInt}}</b> : Returns an integer.<br>
    <b>{{toFloat}}</b> : Returns a floating point number.<br>
    <b>{{digitGrouping}}</b> : Adds thousands separator to a number.<br>
    &nbsp;&nbsp;&nbsp;separator [string] - A string to use as a digit group separator. (Optional)<br>
</p>


<h2 id="comparisons">Comparisons</h2>
<p>
    <b>{{is}}</b> : Conditionally render a block if the condition is true.<br>
    &nbsp;&nbsp;&nbsp;value [string|int] - the value to test against.<br>
    <b>{{isnt}}</b> : Conditionally render a block if the condition is false.<br>
    &nbsp;&nbsp;&nbsp;value [string|int] - the value to test against.<br>
    <b>{{gt}}</b> : Conditionally render a block if the value is greater than a given number.<br>
    &nbsp;&nbsp;&nbsp;value [string|int] - the value to test against.<br>
    <b>{{gte}}</b> : Conditionally render a block if the value is greater or equal than a given number.<br>
    &nbsp;&nbsp;&nbsp;value [string|int] - the value to test against.<br>
    <b>{{lt}}</b> : Conditionally render a block if the value is less than a given number.<br>
    &nbsp;&nbsp;&nbsp;value [string|int] - the value to test against.<br>
    <b>{{lte}}</b> : Conditionally render a block if the value is less or equal than a given number.<br>
    &nbsp;&nbsp;&nbsp;value [string|int] - the value to test against.<br>
    <b>{{or}}</b> : Conditionally render a block if one of the values is truthy.<br>
    &nbsp;&nbsp;&nbsp;values [string|int] - the values to test against.<br>
    <b>{{and}}</b> : Conditionally render a block if both values are truthy.<br>
    &nbsp;&nbsp;&nbsp;values [string|int] - the values to test against.<br>
</p>


<h2 id="dates">Dates</h2>
<p>
    Use this token for format string : <a target="_blank"
                                          href="http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime">http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime</a><br>
    <b>{{formatDate}}</b> : Formats a date into a string given a format. Accepts any value that can be passed to new
    Date().<br>
    &nbsp;&nbsp;&nbsp;format [string] - The format string (Required)<br>
    <b>{{now}}</b> : Returns the current date.<br>
    &nbsp;&nbsp;&nbsp;format [string] - The format string (Optional)<br>
    <b>{{timeago}}</b> : Returns a human-readable time phrase from the given date.<br>
</p>


<h2 id="inflections">Inflections</h2>
<p>
    <b>{{inflect}}</b> : Returns the plural or singular form of a word based on a count. We recommand to use Mayocat
    shop's expression <a>{{message}}</a> that let you manage localization.<br>
    &nbsp;&nbsp;&nbsp;singular [string] - The singular form of the word. (Required)<br>
    &nbsp;&nbsp;&nbsp;plural [string] - The plural form of the word. (Required)<br>
    &nbsp;&nbsp;&nbsp;include [boolean] - whether or not to include the count before the word. (Optional)<br>
    <b>{{ordinalize}}</b> :Turns a number into an ordinal string.<br>
</p>


<h2 id="html">HTML</h2>
<p>
    <b>{{ul}}</b> : Creates an unordered list.<br>
    &nbsp;&nbsp;&nbsp;hash [html attributes] - HTML attributes to use on the ul element. (Optional)<br>
    <b>{{ol}}</b> : Same as the ul helper but creates and ordered list.<br>
    <b>{{br}}</b> : Returns <br> tags based on a count.<br>
    &nbsp;&nbsp;&nbsp;count [int] - The number of `br` elements to render. (Optional)<br>
</p>


<h2 id="logging">Logging</h2>
<p>
    <b>{{log}}</b> : Simple console.log()<br>
    <b>{{debug}}</b> : Simple console.debug() that shows the current context.<br>
</p>


<h2 id="miscellaneous">Miscellaneous</h2>
<p>
    <b>{{default}}</b> : Provides a default or fallback value if a value doesn't exist.<br>
    &nbsp;&nbsp;&nbsp;defaultValue [string|int] - The default value to use.<br>
    <b>{{partial}}</b> : Provides an easy way to register and use partials inside your templates. This helper only works
    if you define your templates as common.js modules, since it uses the common.js require function to find and register
    your templates with Handlebars.registerPartial. It was created with brunch in mind (which I use a lot), because
    brunch automatically wraps your scripts and templates in common.js modules to use in the browser.<br>
    &nbsp;&nbsp;&nbsp;name [string] - The name or path of the file in which your template is define. You can tell swag
    where your templates folder is by overriding Swag.Config.partialsPath. (Required)<br>
    &nbsp;&nbsp;&nbsp;data [int|string|collection] - The data you want to use inside the partial. (Optional)<br>
</p>

