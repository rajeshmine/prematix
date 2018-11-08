function fbs_click(){
	
	var img_location=document.getElementById("first_img").alt;
	// t=document.title;	
    var t=img_location;
    window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;
		
}

function google_plus_click(){
	var img_location=document.getElementById("first_img").alt;
	// t=document.title;	
    var t=img_location;
	$("#google_plus_id").attr("href", "https://plus.google.com/share?url=" + t);
		
	
}
function twitter_click(){
		var img_location=document.getElementById("first_img").alt;
	// t=document.title;	
    var t=img_location;
	var n=encodeURIComponent(t)
	$("#twitter_id").attr("href", "https://twitter.com/share?url=" + n);

}
function linked_ln(){
	var img_location=document.getElementById("first_img").alt;
	// t=document.title;	
    var t=img_location;
	$("#linked_in_id").attr("href", "https://www.linkedin.com/shareArticle?mini=true&url=" + t);
		
	
}
var img_location=document.getElementById("first_img").alt;
	// t=document.title;	
    var t=img_location;
var twitterHandle = t;

function tweetCurrentPage() {
	
    window.open('https://twitter.com/share?url='+escape(window.location.href)+'&text='+document.title + twitterHandle, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false; 
}

;(function($){
  
  /**
   * jQuery function to prevent default anchor event and take the href * and the title to make a share popup
   *
   * @param  {[object]} e           [Mouse event]
   * @param  {[integer]} intWidth   [Popup width defalut 500]
   * @param  {[integer]} intHeight  [Popup height defalut 400]
   * @param  {[boolean]} blnResize  [Is popup resizeabel default true]
   */
  $.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {
    
    // Prevent default anchor event
    e.preventDefault();
    
    // Set values for window
    intWidth = intWidth || '500';
    intHeight = intHeight || '400';
    strResize = (blnResize ? 'yes' : 'no');

    // Set title and open popup with focus on it
    var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
        strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,            
        objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
  }
  
  /* ================================================== */
  
  $(document).ready(function ($) {
    $('.customer.share').on("click", function(e) {
      $(this).customerPopup(e);
    });
  });
    
}(jQuery));