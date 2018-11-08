//  MAIL SEND JS

var resume;
var formdata = new FormData();
function resumefile(filegot){
console.log(filegot)
    
   formdata.append("image", filegot.target.files[0]);
}


var Name,contactno,fromemail2,Qualification,specialization,experience,skills;
function jobsmailsend(){
    Name=$("#Name").val();
    contactno=$("#contactno").val();
    fromemail2=$("#fromemail2").val() ;
    Qualification=$("#Qualification").val();
    specialization=$("#specialization").val();
    experience=$("#experience").val();
    skills=$("#skills").val();
   
    if( Name !== '' &&  contactno !== '' &&  fromemail2 !== '' && Qualification !== '' && specialization !== '' && experience !== '' && skills !== '' ){
      console.log(Name);
      $.ajax({
        method: "POST",
        url: `http://paypre.info/prematix_resume_mail?name=${Name}&contact=${contactno}&email=${fromemail2}&qualification=${Qualification}&specialization=${specialization}&experience=${experience}&skills=${skills}`,
        data:formdata, 
        dataType: 'json',
        processData: false, 
        cache: false, 
        contentType: false,
        
        }).done(function(data,jqXHR) {
        console.log( "success",data );
        $("#message").empty().html("Email is been sent at "+fromemail+" . Please check inbox!");
        
        })
        .fail(function(data) {
        console.log(data);
        });
      
       var x = document.getElementById("snackbar1");
       $("#snackbar1").text("Your details has been dropped to us. We will reach you soon....");
       x.className = "show";
       setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
       $("#Name").val('');
       $("#contactno").val('');
       $("#fromemail2").val('') ;
       $("#Qualification").val('');
       $("#specialization").val('');
       $("#experience").val('');
       $("#skills").val('');
       $("#resume").val('');
    }else{
      var x = document.getElementById("snackbar1");
      $("#snackbar1").text("Kindly Fill all the details to Proceed further......");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
  

}


function chatdivshow(){
  $('.chatcontent,.chaticon,.closeicon').slideToggle(15);
  $('.chatcloseicon').toggleClass('transformstyle');
  
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000);
} 


//Disable Inspect Element

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
  return false;
  }
}


//visitor count script

window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;   //compatibility for firefox and chrome
var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};      
pc.createDataChannel("");    //create a bogus data channel
pc.createOffer(pc.setLocalDescription.bind(pc), noop);    // create offer and set local description
pc.onicecandidate = function(ice){  //listen for candidate events
	if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
	var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
	console.log('my IP: ', myIP);   
	pc.onicecandidate = noop;
	
	ipget(myIP);
};

navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

var platform=navigator.platform;
var browser=navigator.sayswho;

var baseurl=`http://paypre.info/`;

function ipget(ipaddress){
	console.log(baseurl+"visitorcountinsert?ipaddress="+ipaddress+"&platform="+platform+"&browser="+browser);
  $.ajax({
    type:'post',
    url:baseurl+"visitorcountinsert?ipaddress="+ipaddress+"&platform="+platform+"&browser="+browser,
	
  }
  ).done(function(data){
    console.log(data)
	
  });
}


function mailsend(){
	var fromemail=$("#contactemail").val() || '';
	var text=$("#contacttext").val() || '';
	var name=$("#contactname").val() || '';
	var mobileno=$("#contactmobileno").val() || '';
	if( fromemail === '' ||  text ==='' || name ==='' || mobileno === '' ){
	 var x = document.getElementById("snackbar");
       $("#snackbar").text("Kindly Fill all the details to Proceed further......");
      
       x.className = "show";
       setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
   
   }else{
		$("#message").text("Sending E-mail...Please wait");
	
		$.ajax({
			type:'post',
			url:baseurl+"prematix_contact_mail?fromemail="+fromemail+"&text="+text+"&name="+name+"&mobileno="+mobileno+"",
			
		}).done(function(data){
			
			if(data.StatusCode === 200 ){
			  var x = document.getElementById("snackbar");
			  $("#snackbar").text("We have received your specifications & you will be notified shortly...");
			  x.className = "show";
			  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
			}
			$("#contactemail").val('');
			$("#contacttext").val('');
			$("#contactname").val('');
			$("#contactmobileno").val('');
		});
   }
}

