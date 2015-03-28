/* 
 * Handles Code for lightbox
 * 
 */


jQuery(document).ready(function($){
    
    $('.lightbox_trigger').click(function(e) {
      //code that makes lightbox appear  
      e.preventDefault();
      var image_href = $(this).attr("href");
      
      //if lightbox already exists
      if($('#lightbox').length > 0) 
      {
       //insert img tag with clicked link's href as src value
       $('#content').html('<img src="' + image_href + '"/>');
      
       //show lightbox window
       $('#lightbox').show();
      }
      else 
      {
       //light box doesnt exists
       
       //create html for lightbox window
       var lightbox =
       '<div id="lightbox">' +
       '<p>Click to close</p>' +
       '<div id="content">' + //insert clicked link's href into img scr
       '<img src="'+ image_href +'"/>' +
       '</div>' +
       '</div>';
       
       //insert lightbox HTML into page
       $('body').append(lightbox);
      }
      
    });
    
    //click to make get rid of lightbox window
    $('#lightbox').live('click', function(){        
        $('#lightbox').hide();
    });
    
});