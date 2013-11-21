<!--
  title: cart.html
  layout: documentation-with-menu
  -->

cart.html
=========

Introduction
------------

The ```cart``` template enables you to display a cart summary to customers, as well as options for the customer to:

- Update the quantity of items in the cart
- Removing items from the cart
- Picking the shipping option
- Processing to checkout

The form
--------

The cart template should expose an HTML ```form``` with actions to update the cart. The basic form is:

    {{#cart}}
      {{!-- enter the cart context --}}
      <form action="/cart/update/" method="post">
        <!-- Form actions: update item quantities, remove items, select shipping options
             [...]-->
      </form>
    {{/cart}}

Cart items
----------

You must then iterate over cart items, and present the visitor with opportunities to update item quantities and remove items from the cart. This is done as follow:

    [...] (form declaration)
    {{#items}}
      <dl>
        <dt>Item title</dt><dd>{{title}}</dd>
        <dt>Description</dt><dd>{{description}}</dd>
        <dt>Quantity</dt>
        <dd>
          <input type="text" name="quantity_{{@index}}" value="{{quantity}}"/>
          <input type="submit" name="update" value="Update" class="update"/>
          <input type="submit" name="remove_{{@index}}" value="Remove" class="remove"/>
        </dd>
        <dt>Total for item</dt><dd>{{itemTotal.amountCompact}}{{itemTotal.currency.localSymbol}}</dd>
      </dl>
    {{/items}}
    {{^items}}
        There are no items in the cart.
    {{/items}}

Note the ```{{@index}}``` notation in ```<input type="text" name="quantity_{{@index}}" value="{{quantity}}"/>``` : this allows Mayocat Shop to know which item to update the quantity for when the user submits the form.

Shipping
--------

In addition to cart items, your cart template must also present shipping options, when necessary. Shipping options must be presented when the shop owner has defined them in its back-office.

You can test if shipping options must be presented, in the context of the ```{{#cart}}``` with:

    {{#hasShipping}}
       <!-- Present shipping options-->
    {{/hasShipping}}

For when this tests positive, you need to:

- offer a select list with the shipping options available
- display information regarding the currently selected shipping option, including cost for the cart items (if any)

You can do this like this:

    <!-- Shipping options select list -->
    <select name="shipping_option">
      {{#shippingOptions}}
        <option value="{{id}}" {{#selected}}selected{{/selected}}>{{title}}</option>
      {{/shippingOptions}}
    </select>
    <input type="submit" name="shipping_option" value="Update"/>

    <!-- Currently selected option -->
    {{#selectedShippingOption}}
    <dl>
      <dt>Delivery time:</dt><dd>{{deliveryTime.minimumDays}} - {{deliveryTime.maximumDays}} day(s)</dd>
      <dt>Ships to:</dt><dd>{{destinations}}</dd>
      <dt>Cost for your cart: </dt><dd>{{../shipping.amountCompact}}{{../shipping.currency.localSymbol}}</dd>
    </dl>
    {{/selectedShippingOption}}

Cart summary
------------

At the bottom of the cart, you must display its total price:

    <div class="total">
        <strong>Cart total:</strong>
        {{#total}} {{amountCompact}}{{currency.localSymbol}} {{/total}}
    </div>

Link to checkout
----------------

When there are items in the cart, you must offer a link to the checkout form. This is a simple as:

      <a href="/checkout/">Continue to checkout</a>

Full example
------------

    {{#cart}}
        {{#if items}}
            <form method="post" action="/cart/update">

                {{#items}}
                    <div class="item" data-index="{{@index}}" data-quantity="{{quantity}}">

                        <div class="description">
                            <h3 class="title">{{title}}</h3>
                            <span>{{description}}</span>
                        </div>

                        <div class="itemDetail">
                            <div class="unitPrice">{{amountCompact}}{{currency.localSymbol}}</div>

                            <div class="quantity">
                                Quantity
                                <input type="text" size="3" name="quantity_{{@index}}" value="{{quantity}}"/>
                                <input type="submit" name="update" value="Update" class="update"/>
                            </div>
                        </div>

                        <div class="removeItem">
                            <input type="submit" name="remove_{{@index}}" value="Remove" class="visible-when-no-js"/>
                            <span class="remove cart-icon visible-when-js"></span>
                        </div>

                        <h3 class="title itemTotal">
                            {{itemTotal.amountCompact}}{{itemTotal.currency.localSymbol}}
                        </h3>
                    </div>
                {{/items}}


                {{#hasShipping}}
                    <div class="shipping item">
                        <div class="thumbnail">
                            Shipping
                        </div>
                        <div class="inner">
                            <select name="shipping_option">
                                {{#shippingOptions}}
                                    <option value="{{id}}" {{#selected}}selected{{/selected}}>{{title}}</option>
                                {{/shippingOptions}}
                            </select>
                            <input type="submit" name="shipping_option" value="Update" class="visible-when-no-js"/>
                            {{#selectedShippingOption}}
                                <div class="shippingDetails">
                                    Delivery time: {{deliveryTime.minimumDays}} - {{deliveryTime.maximumDays}}
                                    day(s) &mdash;
                                    ships to: {{destinations}}
                                </div>
                            {{/selectedShippingOption}}
                            <h3 class="title itemTotal">
                                {{shipping.amountCompact}}{{shipping.currency.localSymbol}}
                            </h3>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                {{/hasShipping}}

                <div class="total">
                    <div class="inner">
                        <h3 class="title">Total</h3>

                        <h3 class="title itemTotal">
                            {{#../total}} {{amountCompact}}{{currency.localSymbol}} {{/../total}}
                        </h3>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </form>

            <div class="checkout">
                <a href="/checkout/" class="button big-button">Continue checkout</a>
            </div>
        {{else}}
            Your cart is empty. Why no go and do some <a href="/products/">shopping</a>.
        {{/if}}
    {{/cart}}

