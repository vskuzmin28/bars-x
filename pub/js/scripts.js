// call popup

$('.call').click(function(){
	event.preventDefault();
	$('.popup-call').bPopup({
   	closeClass:'icon__close',
    	amsl: 0,
    	positionStyle: 'fixed',
    });	
});

// call popup

$('.call-policy').click(function(){
	event.preventDefault();
	$('.popup-policy').bPopup({
   	closeClass:'icon__close',
    	amsl: 0,
    	positionStyle: 'fixed',
    });	
});

// nav logics

$('.header__navigation li a').click(function(){
	$('.header__navigation li a').removeClass('header__navigation__link__active');
	$(this).addClass('header__navigation__link__active');		
});


// input + & -

jQuery(document).ready(function($) {
        $('.quont-minus').click(function () {
            var $input = $(this).parent().find('input');
            var val = +$input[0].defaultValue;
            var count = parseInt($input.val()) - val;
            count = count < val ? val : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.quont-plus').click(function () {
            var $input = $(this).parent().find('input');
            var val = +$input[0].defaultValue;
            $input.val(parseInt($input.val()) + val);
            $input.change();
            return false;
        });
    });