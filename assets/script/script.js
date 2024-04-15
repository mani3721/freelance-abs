$(document).ready(function(){
    $('.accordion-header').click(function(){
        $('.accordion-description').not($(this).next('.accordion-description')).slideUp();
        $(this).next(".accordion-description").slideToggle();
        $(this).find('.accordion-icon').toggleClass('bx-chevron-down bx-chevron-up')
    })
})