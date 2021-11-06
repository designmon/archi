<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
/* Default comment here */ 


var $html = $('<div>Monika Pawlak is a Berlin-crafted Architecture graduate passionate about the disciplinary collaboration between Architecture and Technology and its impact on the design process and user's experience. <a href="mailto:7monika.p@gmail.com?subject=You are hired!">email</a> <a href="https://www.linkedin.com/in/monpawlak/">linkedin</a> <a href="tel:+4917640499662">phone</a></div>');    
var str = $html.prop('outerHTML');
var str = console.log(str);

var spans = '<span>' + str.split('').join('</span><span>') + '</span>';
$(spans).hide().appendTo('.css-typing').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});</script>
<!-- end Simple Custom CSS and JS -->
