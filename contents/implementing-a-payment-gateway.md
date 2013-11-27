<!--
  layout: documentation
  title: Implementing a payment gateway
  -->

Implementing a payment gateway
==============================

Prerequisites
-------------

- Working knowledge of the Java programming language and of the Maven build system
- Development environment for working with Mayocat. See [the building guide](/building-guide)

Creating the project structure
------------------------------

TBD.

Interfaces to implement
-----------------------

You will need to implement two interfaces:

- [org.mayocat.shop.payment.PaymentGateway](https://github.com/mayocat/mayocat-shop/blob/master/shop/payment/api/src/main/java/org/mayocat/shop/payment/PaymentGateway.java)
- [org.mayocat.shop.payment.GatewayFactory](https://github.com/mayocat/mayocat-shop/blob/master/shop/payment/api/src/main/java/org/mayocat/shop/payment/GatewayFactory.java)

API available
-------------

TBD.

Examples
--------

- [Monetaweb](https://github.com/mayocat/payment-gateways/tree/master/monetaweb) (simple HTTP-based payment gateway)
- [Paypal Adaptive Payments](https://github.com/mayocat/mayocat-shop/tree/master/shop/payment/vendor/paypal/adaptivepayments) (multi-tenant payment gateway)