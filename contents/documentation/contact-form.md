<!--
  title: Adding a contact form
  layout: documentation-with-menu
  -->

Adding a contact form
=====================

You can simply add a contact form in your theme using a couple of handlebars helpers made for this purpose, and Mayocat will take care of the rest, sending an email to the shop owner with the form's data.
This form can be added in any page of your theme, be it a proper "contact" page, or any other page.

Crafting the form
-----------------

Creating the form is easy and similar to creating a standard HTML form, except that the input fields must be generated using handlebars helpers. You start a contact form using ```{{#contactForm}}```, which accept a ```subject``` as parameter (this will be the subject of the mail sent to the shop owner). Then you can add fields for user input with the ```{{contactField}}``` helper, that takes the name of the field as argument, and accepts a ```type``` parameter to control the type of input you want : text, textarea, etc. For example :

    {{#contactForm subject="Contact from the website"}}
        <label>Your name:</label>
        <div>
            {{contactField "Name" type="text"}}
        </div>

        <label>Your message:</label>
        <div>
            {{contactField "Message" type="textarea" rows="10"}}
        </div>
        <div>
            <input type="submit" value="Send !"/>
        </div>
    {{/contactForm}}

As you can see, the ```{{#contactForm}}``` and ```{{contactField}}``` helpers live in a regular HTML flow, and so you can design and style your form as you wish. Note that besides the expected ```type``` parameter, the ```{{contactField}}``` helper will accept any other parameter, which will be passed to the underlaying HTML tag : here we pass the parameter ```rows="10"``` so that our textarea is 10 rows long. Finally, finish your form with a regular ```<input type="submit">``` tag, and you're good to go as far as the form is concerned.

Submission feedback
-------------------

One last step to complete the process is to give feedback to the user when the message has been sent — or not. Mayocat provides for this the ```{{#contactFormSuccess}}``` helper, in which you can display a feedback message to the user. For example :

    {{#contactFormSuccess}}
        <div class="alert alert-success">
        The message has been sent through the Internetz!
        </div>
    {{else}}
        <div class="alert alert-danger">
        There was a hicup sending your message :( Try again later ?
        </div>
    {{/contactFormSuccess}}

As you can see, you can pass both a success and a failure message. Failure is of course not supposed to happen, but like they say, better safe than sorry. Note that this helper must be placed __outside__ the form (either before, or after).

Full example
------------

    {{#contactFormSuccess}}
        <div class="alert alert-success">
        The message has been sent through the Internetz!
        </div>
    {{else}}
        <div class="alert alert-danger">
        There was a hicup sending your message :( Try again later ?
        </div>
    {{/contactFormSuccess}}

    {{#contactForm subject="Contact from the website"}}
        <label>Your name:</label>
        <div>
            {{contactField "Name" type="text"}}
        </div>

        <label>Your message:</label>
        <div>
            {{contactField "Message" type="textarea" rows="10"}}
        </div>
        <div>
            <input type="submit" value="Send !"/>
        </div>
    {{/contactForm}}
