

var content=[ 
    {Jobs : "Are you a <b>Fresher</b> or <b>Experienced?</b>"},
    {Fresher : "We currently don't have any opening for fresher...Kindly forward your resume to <b>jobs@prematix.com</b>. We will contact you if there is any vacancy."},
    {Experienced : "We have the opening for the designations <b>Digital Marketing</b> ,<b>Dotnet</b> , <b>Sales and Support Excecutive</b> . If you feel you are a worthy candidate, drop your resume to <b>jobs@prematix.com</b>"},
    {Address : "We have two brances in <b> Hosur & Bangalore</b>, Which branch address your requires????"},
    {Bangalore : "<b>BANGALORE OFFICE</b><br>No. 589, 2nd floor, VP Chambers, 1st cross,<br>3rd block, Koramangala, Bengaluru - 560034 ,<br> Karnataka, India.<br>Landline: <b>080255 22220</b><br> Email:infoblr@prematix.com"},
    {Hosur : "<b>HOSUR OFFICE</b><br>51, Step colony, Dharga, Hosur - 635 126,<br>Tamilnadu, India.<br>Landline : <b>04344 270900</b><br>MobileNo : <b>9344 270900</b><br> Email:<b>info@prematix .com</b>"},
    {Product : "What kind of product is needed <b>Hardware</b> or <b>Software???</b>"},
    {Hardware : "Which hardware you require??<b>Printer / Scanner???</b>"},
    {Printer : "1.C7S Multi-function Android Smart Tablet<br>2.CM550S Printable Hand-held Terminal with Android Fingerprint Recognition<br>3.CM388 Rugged Android Smart Phone<br>4.CI350 Smart Thermal Printable Handheld Terminal<br> 5.C5S Enterprise-specific Smart Hand-held Terminal"},
    {Scanner  : "1.CT60/2.4G wireless bar code scanner<br>2.CT15Y WIFI Wireless Barcode Scanner<br>3.CT10X Bluetooth 1D Laser Barcode Scanner<br> 4.CT007X Wireless & Wired Laser Barcode Scanner<br>5.CT007H CCD Wireless Red Laser Barcode Scanner<br>6.CT20 Mini Bluetooth CCD Barcode Scanner<br>7.CT30 mini Bluetooth Laser Barcode Scanner<br>8.CT80 wireless dual-mode 2d barcode Scanner"},
    {Software : "We are ready to make all kinds of software for our clients, <b>Eg: Inventory, Payroll, Attendance Management etc.,</b> for any of your software requirements, kindly drop a mail to 'info@prematix.com' "},
    {C7S : "For <b>C7S Multi-function Android Smart Tablet</b> details,<br> <a href=' http://prematix.com/Brouchers/1st%20product.pdf' target='_blank'>Click here</a>"},
    {Profile : "For Company Profile,  Please check <br> <a href=' http://prematix.com/Brouchers/Prematix%20TechProfile.docx' target='_blank'>Click here</a>"}, 
    {CM550S  : "For <b>CM550S Printable Hand-held Terminal with Android Fingerprint Recognition</b> details, <a href='http://prematix.com/Brouchers/secondproduct.pdf' target='_blank'>click here</a>"}, 
    {CM388  : "For <b>CM388 Rugged Android Smart Phone</b> details, <a href='http://prematix.com/Brouchers/thirdproduct.pdf' target='_blank'>click here</a>"}, 
    {CI350  : "For <b>CI350 Smart Thermal Printable Handheld Terminal</b> details, <a href='http://prematix.com/Brouchers/fourthproduct.pdf' target='_blank'>click here</a>"}, 
    {C5S   : "For <b>C5S Enterprise-specific Smart Hand-held Terminal</b> details, <a href='http://prematix.com/Brouchers/fifthproduct.pdf' target='_blank'>click here</a>"}, 
    {CT60   : "For <b>CT60/2.4G wireless bar code scanner</b> details, <a href='http://prematix.com/Brouchers/sixthproduct.pdf' target='_blank'>click here</a>"}, 
    {CT15Y    : "For <b>CT15Y WIFI Wireless Barcode Scanner</b> details, <a href='http://prematix.com/Brouchers/seventhproduct.pdf' target='_blank'>click here</a>"}, 
    {CT10X    : "For <b>CT10X Bluetooth 1D Laser Barcode Scanner</b> details, <a href='http://prematix.com/Brouchers/eighthproduct.pdf' target='_blank'>click here</a>"}, 
    {CT007X    : "For <b>CT007X Wireless & Wired Laser Barcode Scanner</b> details, <a href='http://prematix.com/Brouchers/ninethproduct.pdf' target='_blank'>click here</a>"}, 
    {CT007H : "For <b>CT007H CCD Wireless Red Laser Barcode Scanner</b> details, <a href='http://prematix.com/Brouchers/tenthproduct.pdf' target='_blank'>click here</a>"}, 
    {CT20    : "For <b>CT20 Mini Bluetooth CCD Barcode Scanner</b> details, <a href='http://prematix.com/Brouchers/elventhproduct.pdf' target='_blank'>click here</a>"}, 
    {CT30    : "For <b>CT30 mini Bluetooth Laser Barcode Scanner</b> details, <a href='http://prematix.com/Brouchers/twelthproduct.pdf' target='_blank'>click here</a>"}, 
    {CT80    : "For <b>CT80 wireless dual-mode 2d barcode Scanner</b> details, <a href='http://prematix.com/Brouchers/thrtinthproduct.pdf' target='_blank'>click here</a>"}, 
];
 
var errormsg=["Sorry!! I can't undestand.","Sorry !!! Could you say that Again!!!",'Come Again!!!','Will you repeat that?','Sorry!!!',"Sorry!!! i didn't get that.","Sorry !!! What was that?","Sorry say that again?","I missed what you said, say it Again?"];

function msgsend(e,msg){ 
    if((e.keyCode === 13 || e.keyCode === 1 || window.event.detail === 1) &&  msg.length > 0 ){
        var Meg=msg;
        $('.chatdiv').append('<div class="rightsidediv"><div class="innerrghtside"><p class="rightside">'+Meg+'</p></div></div>');
        chat();
		$('.msgbox').val('');
		$(".qtncnt").animate({ scrollTop: $('.qtncnt').prop("scrollHeight")});
		
    }
}
var tempkey;
var showerror=false;
var rancount=0;
function chat(){
    var Msg=$('.msgbox').val();
    var temp=Msg.toString().toLowerCase().trim().replace(' ',''); 
    if(temp.length > 0){
        for(var i=0; i<content.length; i++) {
            for(key in content[i]) {
                tempkey= key.toLowerCase();  
                if(temp.indexOf(tempkey)!= -1 ) {
                    $('.chatdiv').append('<div class="leftside"><div class="innerlftside"><p class="msgcontent">'+content[i][key]+'</p></div></div>');
                    $(".qtncnt").animate({ scrollTop: $('.qtncnt').prop("scrollHeight")});
                    showerror=false;
                    return null;
                }else{
                    showerror=true;
                }  
            }
        }
        if(showerror){
            showerror=false;
            rancount=Math.floor(Math.random() * (8 - 0 + 1)) + 0;
            $('.chatdiv').append('<div class="leftside"><div class="innerlftside"><p class="msgcontent">'+errormsg[rancount]+'</p></div></div>');
            $(".qtncnt").animate({ scrollTop: $('.qtncnt').prop("scrollHeight")}); 
        }
    }
    
    // Back Up
    // if(temp.length > 0){
    //     for(var i=0; i<content.length; i++) {
    //         for(key in content[i]) {
    //             tempkey= key.toLowerCase(); 
    //             for(var j=0;j< templength.length;j++){
    //                 if(tempkey.indexOf(templength[j]) !=-1 ) {
    //                     $('.chatdiv').append('<div class="leftside"><div class="innerlftside"><p class="msgcontent">'+content[i][key]+'</p></div></div>');
    //                     $(".qtncnt").animate({ scrollTop: $('.qtncnt').prop("scrollHeight")});
    //                 }else{
                        
    //                 }
    //             }
                
    //         }
    //     }
    // }
    




 }


 