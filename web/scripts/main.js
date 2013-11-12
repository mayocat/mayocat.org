$(function() {

    /**
     * Discover unit
     */

    function DiscoverUnit() {
        var instance = this;

        // Hide all the articles except the first one
        $('[data-discover-id]:not(:first)').hide();

        // Create the navigation menu used to display selected items
        var menu = $('.discover-unit-menu'),
            menuActive = menu.clone(true);

        menuActive.insertAfter(menu).addClass('active');

        // Disable links on the active menu
        $('a', menuActive).click(function(event) {
            event.preventDefault();
        });
        
        // Bind events on the real menu
        $('[data-discover-bind-to]', menu).click(function(event) {
            event.preventDefault();

            var $this = $(this);

            instance.changeSelectedItemMenuTo($this);
            instance.changeContentTo($this.data('discover-bind-to'));
        });
    }

    DiscoverUnit.prototype.fixChromeOSXScroll = (function() {
        var body = $('body');

        return function() {
            return body.scrollTop(body.scrollTop());
        };
    })();

    DiscoverUnit.prototype.changeSelectedItemMenuTo = function (element) {
        var menu = $('.discover-unit-menu.active'),
            offsetTop = element.parent().get(0).offsetTop;

        menu.animate({
            top: offsetTop
        }, 200);

        $('.discover-unit-menu-container', menu).animate({
            scrollTop: offsetTop
        }, 200)
    };

    DiscoverUnit.prototype.changeContentTo = function (id) {
        var instance = this,
            discoverContent = $('.discover-unit-content'),
            oldContent = $('[data-discover-id]').filter(':visible'),
            newContent = $('[data-discover-id="'+ id +'"]');

        discoverContent.css('height', discoverContent.height());

        $.Deferred().resolve().promise()

            .then(function() {
                return oldContent.fadeOut(250);
            })

            .then(function() {
                newContent.css('opacity', 0).show();

                return discoverContent.animate(
                    {
                        height: newContent.height()
                    },

                    {
                        duration: 250,
                        step: instance.fixChromeOSXScroll
                    }
                );
            })

            .then(instance.fixChromeOSXScroll)

            .then(function() {
                return newContent.animate({
                    opacity: 1
                }, 250);
            });
    };

    new DiscoverUnit();

});