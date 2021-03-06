$(document).ready(Core);

function Core()
{
    SetTabSwitcher();
    SetReviews();
    SetMobileMenu();
}

function SetTabSwitcher()
{
    $('.btn__tab__switch').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active'))
        {
            return;
        }

        $('.btn__tab__switch').removeClass('active');
        $(this).addClass('active');

        let targetTab = $(this).attr('target');

        SwitchTab(targetTab)
    })
}

function SwitchTab(target)
{
    
    $('.tab.active').animate({
        opacity: 0
    }, 500, function() {
        $('.tab.active').removeClass('active');

        $(`[tab-name="${target}"]`).css('opacity', 0);
        $(`[tab-name="${target}"]`).addClass('active');
        
        let tabHeight = $(`[tab-name="${target}"]`)[0].clientHeight;
        $(`[tab-name="${target}"]`).closest('.tab__viewer').css('height', `${tabHeight}px`)

        $(`[tab-name="${target}"]`).animate({
            opacity: 1
        }, 500)
    })
}

function SetReviews()
{
    $('.review__item .show__all button').on('click', function() {
        $('.review__item.active').css('max-height', ``);

        let item = $(this).closest('.review__item');
        let height = $(item).find('.text').height();
        height += $(item).height();

        $(item).addClass('active');        
        $(item).css('max-height', `${height}px`)
        console.log(height)
    })
}

function SetMobileMenu()
{
    $('.btn__menu').on('click', function() {
        if ($(this).hasClass('active'))
        {
            $(this).removeClass('active');
            $('.menu').removeClass('active');
            $('body').removeClass('lock')
        }
        else
        {
            $(this).addClass('active');
            $('.menu').addClass('active');
            $('body').addClass('lock')
        }
    })
}
