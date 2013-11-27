<!--
  layout: documentation-with-menu
  title: Setup your payment system
  -->

Setup your payment system
=========================

Foreword
--------

Mayocat Shop can be plugged with virtually any payment gateway. The default payment gateway Mayocat Shop ships with is Paypal adaptive payments.

At the root of your shop folder, you'll find a ```payments``` folder that contains configuration for the payment gateways supported by your shop. Here it is highlighted in this screenshot:

![Highlighted payments folder screenshot](/images/payments-folder-highlighted.png "Highlighted payments folder")

Inside this folder, each folder correspond to the configuration folder for one payment gateway. For example, for Paypal adaptive payments, you'll find a ```paypaladaptivepayments``` folder. There can be as many folders as means of payments supported, and you need at least one to start accepting payments. Here is a screenshot for a shop that would support paypal, mangopay and stripe as means of payments:

![Payments folder contents screenshot](/images/payments-folder-contents.png "Payments folder contents")

Configuring paypal
------------------

If your hosting provider offers paypal as a payment gateway, configuring it for your shop is very straightforward. All that is needed is a ```configuration.yml``` file in ```paypaladaptivepayments``` mentioned above. The file is a simple YAML file with only one parameter: the email address at which to send the big money $$. For example:

    email: payments@myshop.com

And that's it! you're good to go.


List of payment gateways already implemented
--------------------------------------------

You can see all payment gateways available [here](https://github.com/mayocat/payment-gateways).

For administrators
------------------

Checkout how to [setup paypal adaptive payments for your server](/paypaladaptivepayments-setup).

For developers
--------------

Checkout the [payment gateway implementation guide](/implementing-a-payment-gateway)
