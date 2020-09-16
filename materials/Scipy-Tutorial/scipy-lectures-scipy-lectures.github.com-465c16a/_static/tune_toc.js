function preload_images() {
    var img = new Image();
    img.src="_images/plusBox.png";
    img.src="_images/minBox.png";
    img.src="_images/plusBoxHighlight.png";
    img.src="_images/minBoxHighlight.png";
    img.src="_images/noneBox.png";
}
preload_images();

//Function to make the index toctree collapsible
$(function () {
    $('.toctree-l3')
	.click(function(event){
	    if (event.target.tagName.toLowerCase() != "a") {
		if ($(this).children('ul').length > 0) {
		    $(this).css('list-style-image',
		    (!$(this).children('ul').is(':hidden')) ? 'url(_images/plusBoxHighlight.png)' : 'url(_images/minBoxHighlight.png)');
		    $(this).children('ul').toggle();
		}
		return true; //Makes links clickable
	    }
	})
	.mousedown(function(event){ return false; }) //Firefox highlighting fix
	.css({cursor:'pointer', 'list-style-image':'url(_images/plusBox.png)'})
	.children('ul').hide();
    $('ul li ul li:not(:has(ul))').css({cursor:'default', 'list-style-image':'url(_images/noneBox.png)'});
    $('.toctree-l4').css({cursor:'default', 'list-style-image':'url(_images/noneBox.png)'});
    var sidebarbutton = $('#sidebarbutton');
    sidebarbutton.css({
	'display': 'none'
    });

    $('.toctree-l3').hover(
	function () {
	    if ($(this).children('ul').length > 0) {
		$(this).css('background-color', '#D0D0D0').children('ul').css('background-color', '#F0F0F0');
		$(this).css('list-style-image',
		    (!$(this).children('ul').is(':hidden')) ? 'url(_images/minBoxHighlight.png)' : 'url(_images/plusBoxHighlight.png)');
	    }
	    else {
		$(this).css('background-color', '#F9F9F9');
	    }
	},
	function () {
	    $(this).css('background-color', 'white').children('ul').css('background-color', 'white');
	    if ($(this).children('ul').length > 0) {
		$(this).css('list-style-image',
		    (!$(this).children('ul').is(':hidden')) ? 'url(_images/minBox.png)' : 'url(_images/plusBox.png)');
	    }
	}
    );
});

