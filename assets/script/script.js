$(document).ready(function(){

    // template
    const template = $('.template');
    for (let i = 0; i < 3; i++) {
        const clone = template.contents().clone();
        $('.feature-card-container').append(clone);;
    }

    // accordion
    $('.accordion-header').click(function(){
        $('.accordion-description').not($(this).next('.accordion-description')).slideUp();
        $(this).next(".accordion-description").slideToggle();
        $(this).find('.accordion-icon').toggleClass('bx-chevron-down bx-chevron-up')
    })
})