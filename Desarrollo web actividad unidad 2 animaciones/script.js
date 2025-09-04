$(document).ready(function() {
    function checkScroll() {
        $('.section').each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop() + $(window).height();
            
            if (position < scrollPosition - 50) {
                $(this).addClass('visible');
            }
        });
    }
    
    checkScroll();
    $(window).scroll(checkScroll);

    $('#scrollTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#scrollTop').addClass('visible');
        } else {
            $('#scrollTop').removeClass('visible');
        }
    });
    
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        var isValid = true;
        
        if ($('#name').val().trim() === '') {
            $('#nameError').show();
            $('#name').addClass('error');
            isValid = false;
        } else {
            $('#nameError').hide();
            $('#name').removeClass('error');
        }
        
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test($('#email').val())) {
            $('#emailError').show();
            $('#email').addClass('error');
            isValid = false;
        } else {
            $('#emailError').hide();
            $('#email').removeClass('error');
        }
        
        if ($('#subject').val().trim() === '') {
            $('#subjectError').show();
            $('#subject').addClass('error');
            isValid = false;
        } else {
            $('#subjectError').hide();
            $('#subject').removeClass('error');
        }
        
        if ($('#message').val().trim() === '') {
            $('#messageError').show();
            $('#message').addClass('error');
            isValid = false;
        } else {
            $('#messageError').hide();
            $('#message').removeClass('error');
        }
        
    
        if (isValid) {
            $('#successMessage').fadeIn();
            $('#contactForm')[0].reset();
            
    
            setTimeout(function() {
                $('#successMessage').fadeOut();
            }, 5000);
        }
        
        return false;
    });
    
    $('.info-item, .education-item, .contact-item').hover(
        function() {
            $(this).css('transform', $(this).hasClass('info-item') ? 'translateX(5px)' : 'scale(1.05)');
        },
        function() {
            $(this).css('transform', 'none');
        }
    );
    
    $('.progress').each(function() {
        $(this).animate({
            width: $(this).attr('data-width')
        }, 1500);
    });
});