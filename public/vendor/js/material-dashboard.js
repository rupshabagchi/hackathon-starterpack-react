

 (function(){
     isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

     if (isWindows && !$('body').hasClass('sidebar-mini')){
        // if we are on windows OS we activate the perfectScrollbar function
        $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

        $('html').addClass('perfect-scrollbar-on');
    } else {
        $('html').addClass('perfect-scrollbar-off');
    }
 })();

var breakCards = true;

var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var mobile_menu_visible = 0,
    mobile_menu_initialized = false,
    toggle_initialized = false,
    bootstrap_nav_initialized = false;

var seq = 0, delays = 80, durations = 500;
var seq2 = 0, delays2 = 80, durations2 = 500;


$(document).ready(function(){

    $sidebar = $('.sidebar');

    $.material.init();

    // We put modals out of wrapper to working properly
    $('.modal').appendTo("body");

    md.initSidebarsCheck();

    if($('body').hasClass('sidebar-mini')){
        md.misc.sidebar_mini_active = true;
    }

    window_width = $(window).width();

    // check if there is an image set for the sidebar's background
    md.checkSidebarImage();

    md.initMinimizeSidebar();

    //    Activate bootstrap-select
    if($(".selectpicker").length != 0){
        $(".selectpicker").selectpicker();
    }

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();

    //removed class label and label-color from tag span and replaced with data-color
    var tagClass = $('.tagsinput').data('color');

    $('.tagsinput').tagsinput({
        tagClass: ' tag-'+ tagClass +' '
    });

    //    Activate bootstrap-select
    $(".select").dropdown({ "dropdownClass": "dropdown-menu", "optionClass": "" });

    $('.form-control').on("focus", function(){
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function(){
        $(this).parent(".input-group").removeClass("input-group-focus");
    });


    if(breakCards == true){
        // We break the cards headers if there is too much stress on them :-)
        $('[data-header-animation="true"]').each(function(){
            var $fix_button = $(this)
            var $card = $(this).parent('.card');

            $card.find('.fix-broken-card').click(function(){
                console.log(this);
                var $header = $(this).parent().parent().siblings('.card-header, .card-image');

                $header.removeClass('hinge').addClass('fadeInDown');

                $card.attr('data-count',0);

                setTimeout(function(){
                    $header.removeClass('fadeInDown animate');
                },480);
            });

            $card.mouseenter(function(){
                var $this = $(this);
                hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                $this.attr("data-count", hover_count);

                if (hover_count >= 20){
                    $(this).children('.card-header, .card-image').addClass('hinge animated');
                }
            });
        });
    }


});

// activate collapse right menu when the windows is resized
$(window).resize(function(){
    md.initSidebarsCheck();

    // reset the seq for charts drawing animations
    seq = seq2 = 0;

});

md = {
    misc:{
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    },

    checkSidebarImage: function(){
        $sidebar = $('.sidebar');
        image_src = $sidebar.data('image');

        if(image_src !== undefined){
            sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>';
            $sidebar.append(sidebar_container);
        }
    },

    initSidebarsCheck: function(){
        if($(window).width() <= 991){
            if($sidebar.length != 0){
                md.initRightMenu();

            } else {
                md.initBootstrapNavbarMenu();
            }
        }

    },

    initMinimizeSidebar:function(){

        // when we are on a Desktop Screen and the collapse is triggered we check if the sidebar mini is active or not. If it is active then we don't let the collapse to show the elements because the elements from the collapse are showing on the hover state over the icons in sidebar mini, not on the click.
        $('.sidebar .collapse').on('show.bs.collapse',function(){
            if($(window).width() > 991 && md.misc.sidebar_mini_active == true){
                return false;
            } else{
                return true;
            }
        });

        $('#minimizeSidebar').click(function(){
            var $btn = $(this);

            if(md.misc.sidebar_mini_active == true){
                $('body').removeClass('sidebar-mini');
                md.misc.sidebar_mini_active = false;

                if(isWindows){
                    $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
                }

            }else{

                $('.sidebar .collapse').collapse('hide').on('hidden.bs.collapse',function(){
                    $(this).css('height','auto');
                });

                if(isWindows){
                    $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar('destroy');
                }

                setTimeout(function(){
                    $('body').addClass('sidebar-mini');

                    $('.sidebar .collapse').css('height','auto');
                    md.misc.sidebar_mini_active = true;
                },300);
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function(){
                window.dispatchEvent(new Event('resize'));
            },180);

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function(){
                clearInterval(simulateWindowResize);
            },1000);
        });
    },

    checkScrollForTransparentNavbar: debounce(function() {
            if($(document).scrollTop() > 260 ) {
                if(transparent) {
                    transparent = false;
                    $('.navbar-color-on-scroll').removeClass('navbar-transparent');
                }
            } else {
                if( !transparent ) {
                    transparent = true;
                    $('.navbar-color-on-scroll').addClass('navbar-transparent');
                }
            }
    }, 17),


    initRightMenu: debounce(function(){
        $sidebar_wrapper = $('.sidebar-wrapper');

        if(!mobile_menu_initialized){
            $navbar = $('nav').find('.navbar-collapse').first().clone(true);

            nav_content = '';
            mobile_menu_content = '';

            $navbar.children('ul').each(function(){

                content_buff = $(this).html();
                nav_content = nav_content + content_buff;
            });

            nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';

            $navbar_form = $('nav').find('.navbar-form').clone(true);

            $sidebar_nav = $sidebar_wrapper.find(' > .nav');

            // insert the navbar form before the sidebar list
            $nav_content = $(nav_content);
            $nav_content.insertBefore($sidebar_nav);
            $navbar_form.insertBefore($nav_content);

            $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function(event) {
                event.stopPropagation();

            });

            // simulate resize so all the charts/maps will be redrawn
            window.dispatchEvent(new Event('resize'));

            mobile_menu_initialized = true;
        } else {
            if($(window).width() > 991){
                // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
                $sidebar_wrapper.find('.navbar-form').remove();
                $sidebar_wrapper.find('.nav-mobile-menu').remove();

                mobile_menu_initialized = false;
            }
        }

        if(!toggle_initialized){
            $toggle = $('.navbar-toggle');

            $toggle.click(function (){

                if(mobile_menu_visible == 1) {
                    $('html').removeClass('nav-open');

                    $('.close-layer').remove();
                    setTimeout(function(){
                        $toggle.removeClass('toggled');
                    }, 400);

                    mobile_menu_visible = 0;
                } else {
                    setTimeout(function(){
                        $toggle.addClass('toggled');
                    }, 430);


                    main_panel_height = $('.main-panel')[0].scrollHeight;
                    $layer = $('<div class="close-layer"></div>');
                    $layer.css('height',main_panel_height + 'px');
                    $layer.appendTo(".main-panel");

                    setTimeout(function(){
                        $layer.addClass('visible');
                    }, 100);

                    $layer.click(function() {
                        $('html').removeClass('nav-open');
                        mobile_menu_visible = 0;

                        $layer.removeClass('visible');

                         setTimeout(function(){
                            $layer.remove();
                            $toggle.removeClass('toggled');

                         }, 400);
                    });

                    $('html').addClass('nav-open');
                    mobile_menu_visible = 1;

                }
            });

            toggle_initialized = true;
        }
    }, 200),


    initBootstrapNavbarMenu: debounce(function(){

        if(!bootstrap_nav_initialized){
            $navbar = $('nav').find('.navbar-collapse').first().clone(true);

            nav_content = '';
            mobile_menu_content = '';

            //add the content from the regular header to the mobile menu
            $navbar.children('ul').each(function(){
                content_buff = $(this).html();
                nav_content = nav_content + content_buff;
            });

            nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';

            $navbar.html(nav_content);
            $navbar.addClass('off-canvas-sidebar');

            // append it to the body, so it will come from the right side of the screen
            $('body').append($navbar);

            $toggle = $('.navbar-toggle');

            $navbar.find('a').removeClass('btn btn-round btn-default');
            $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
            $navbar.find('button').addClass('btn-simple btn-block');

            $toggle.click(function (){
                if(mobile_menu_visible == 1) {
                    $('html').removeClass('nav-open');

                    $('.close-layer').remove();
                    setTimeout(function(){
                        $toggle.removeClass('toggled');
                    }, 400);

                    mobile_menu_visible = 0;
                } else {
                    setTimeout(function(){
                        $toggle.addClass('toggled');
                    }, 430);

                    $layer = $('<div class="close-layer"></div>');
                    $layer.appendTo(".wrapper-full-page");

                    setTimeout(function(){
                        $layer.addClass('visible');
                    }, 100);


                    $layer.click(function() {
                        $('html').removeClass('nav-open');
                        mobile_menu_visible = 0;

                        $layer.removeClass('visible');

                         setTimeout(function(){
                            $layer.remove();
                            $toggle.removeClass('toggled');

                         }, 400);
                    });

                    $('html').addClass('nav-open');
                    mobile_menu_visible = 1;

                }

            });
            bootstrap_nav_initialized = true;
        }
    }, 500),

    startAnimationForLineChart: function(chart, Chartist){

        chart.on('draw', function(data) {
          if(data.type === 'line' || data.type === 'area') {
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
          } else if(data.type === 'point') {
                seq++;
                data.element.animate({
                  opacity: {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'ease'
                  }
                });
            }
        });

        seq = 0;
    },
    startAnimationForBarChart: function(chart){

        chart.on('draw', function(data) {
          if(data.type === 'bar'){
              seq2++;
              data.element.animate({
                opacity: {
                  begin: seq2 * delays2,
                  dur: durations2,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
        });

        seq2 = 0;
    },
    initMaterialWizardDemo: function(){

        // Wizard Initialization
      	$('.wizard-card').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',

            onNext: function(tab, navigation, index) {
            	/*var $valid = $('.wizard-card form').valid();
            	if(!$valid) {
            		$validator.focusInvalid();
            		return false;
            	}*/
            },

            onInit : function(tab, navigation, index){

              //check number of tabs and fill the entire row
              var $total = navigation.find('li').length;
              $width = 100/$total;
              var $wizard = navigation.closest('.wizard-card');

              $display_width = $(document).width();

              if($display_width < 600 && $total > 3){
                  $width = 50;
              }

               navigation.find('li').css('width',$width + '%');
               $first_li = navigation.find('li:first-child a').html();
               $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
               $('.wizard-card .wizard-navigation').append($moving_div);
               refreshAnimation($wizard, index);
               $('.moving-tab').css('transition','transform 0s');
           },

            onTabClick : function(tab, navigation, index){
                /*var $valid = $('.wizard-card form').valid();

                if(!$valid){
                    return false;
                } else{
                    return true;
                }*/
            },

            onTabShow: function(tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index+1;

                var $wizard = navigation.closest('.wizard-card');

                // If it's the last tab then hide the last button and show the finish instead
                if($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                } else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                }

                button_text = navigation.find('li:nth-child(' + $current + ') a').html();

                setTimeout(function(){
                    $('.moving-tab').text(button_text);
                }, 150);

                var checkbox = $('.footer-checkbox');

                if( !index == 0 ){
                    $(checkbox).css({
                        'opacity':'0',
                        'visibility':'hidden',
                        'position':'absolute'
                    });
                } else {
                    $(checkbox).css({
                        'opacity':'1',
                        'visibility':'visible'
                    });
                }

                refreshAnimation($wizard, index);
            }
      	});


        // Prepare the preview for profile picture
        $("#wizard-picture").change(function(){
            readURL(this);
        });

        $('[data-toggle="wizard-radio"]').click(function(){
            wizard = $(this).closest('.wizard-card');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked','true');
        });

        $('[data-toggle="wizard-checkbox"]').click(function(){
            if( $(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            } else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked','true');
            }
        });

        $('.set-full-height').css('height', 'auto');

         //Function to show image before upload

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        $(window).resize(function(){
            $('.wizard-card').each(function(){
                $wizard = $(this);
                index = $wizard.bootstrapWizard('currentIndex');
                refreshAnimation($wizard, index);

                $('.moving-tab').css({
                    'transition': 'transform 0s'
                });
            });
        });

        function refreshAnimation($wizard, index){
            total_steps = $wizard.find('li').length;
            move_distance = $wizard.width() / total_steps;
            step_width = move_distance;
            move_distance *= index;

            $current = index + 1;

            if($current == 1){
                move_distance -= 8;
            } else if($current == total_steps){
                move_distance += 8;
            }

            $wizard.find('.moving-tab').css('width', step_width);
            $('.moving-tab').css({
                'transform':'translate3d(' + move_distance + 'px, 0, 0)',
                'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

            });
        }
    },
    checkFullPageBackgroundImage: function(){
        $page = $('.full-page');
        image_src = $page.data('image');

        if(image_src !== undefined){
            image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    }
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};

$().ready(function(){
    $sidebar = $('.sidebar');
    $sidebar_img_container = $sidebar.find('.sidebar-background');

    $full_page = $('.full-page');

    $sidebar_responsive = $('body > .navbar-collapse');

    window_width = $(window).width();

    fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();

    if( window_width > 767 && fixed_plugin_open == 'Dashboard' ){
        if($('.fixed-plugin .dropdown').hasClass('show-dropdown')){
            $('.fixed-plugin .dropdown').addClass('open');
        }

    }

    $('.fixed-plugin a').click(function(event){
      // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
        if($(this).hasClass('switch-trigger')){
            if(event.stopPropagation){
                event.stopPropagation();
            }
            else if(window.event){
               window.event.cancelBubble = true;
            }
        }
    });

    $('.fixed-plugin .active-color span').click(function(){
        $full_page_background = $('.full-page-background');

        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        var new_color = $(this).data('color');

        if($sidebar.length != 0){
            $sidebar.attr('data-active-color',new_color);
        }

        if($full_page.length != 0){
            $full_page.attr('filter-color',new_color);
        }

        if($sidebar_responsive.length != 0){
            $sidebar_responsive.attr('data-color',new_color);
        }
    });

    $('.fixed-plugin .background-color span').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        var new_color = $(this).data('color');

        if($sidebar.length != 0){
            $sidebar.attr('data-background-color',new_color);
        }
    });

    $('.fixed-plugin .img-holder').click(function(){
        $full_page_background = $('.full-page-background');

        $(this).parent('li').siblings().removeClass('active');
        $(this).parent('li').addClass('active');


        var new_image = $(this).find("img").attr('src');

        if( $sidebar_img_container.length !=0 && $('.switch-sidebar-image input:checked').length != 0 ){
            $sidebar_img_container.fadeOut('fast', function(){
               $sidebar_img_container.css('background-image','url("' + new_image + '")');
               $sidebar_img_container.fadeIn('fast');
            });
        }

        if($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0 ) {
            var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

            $full_page_background.fadeOut('fast', function(){
               $full_page_background.css('background-image','url("' + new_image_full_page + '")');
               $full_page_background.fadeIn('fast');
            });
        }

        if( $('.switch-sidebar-image input:checked').length == 0 ){
            var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
            var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

            $sidebar_img_container.css('background-image','url("' + new_image + '")');
            $full_page_background.css('background-image','url("' + new_image_full_page + '")');
        }

        if($sidebar_responsive.length != 0){
            $sidebar_responsive.css('background-image','url("' + new_image + '")');
        }
    });

    $('.switch-sidebar-image input').change(function(){
        $full_page_background = $('.full-page-background');

        $input = $(this);

        if($input.is(':checked')){
            if($sidebar_img_container.length != 0){
                $sidebar_img_container.fadeIn('fast');
                $sidebar.attr('data-image','#');
            }

            if($full_page_background.length != 0){
                $full_page_background.fadeIn('fast');
                $full_page.attr('data-image','#');
            }

            background_image = true;
        } else {
            if($sidebar_img_container.length != 0){
                $sidebar.removeAttr('data-image');
                $sidebar_img_container.fadeOut('fast');
            }

            if($full_page_background.length != 0){
                $full_page.removeAttr('data-image','#');
                $full_page_background.fadeOut('fast');
            }

            background_image = false;
        }
    });

    $('.switch-sidebar-mini input').change(function(){
        $body = $('body');

        $input = $(this);

        if(md.misc.sidebar_mini_active == true){
            $('body').removeClass('sidebar-mini');
            md.misc.sidebar_mini_active = false;

            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

        }else{

            $('.sidebar .collapse').collapse('hide').on('hidden.bs.collapse',function(){
                $(this).css('height','auto');
            });

            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar('destroy');

            setTimeout(function(){
                $('body').addClass('sidebar-mini');

                $('.sidebar .collapse').css('height','auto');
                md.misc.sidebar_mini_active = true;
            },300);
        }

        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function(){
            window.dispatchEvent(new Event('resize'));
        },180);

        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function(){
            clearInterval(simulateWindowResize);
        },1000);

    });

});
