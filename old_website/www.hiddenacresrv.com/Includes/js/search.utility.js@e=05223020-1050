// Build the link page by special file path
//function LinkPath(vFile)
//{
//    var vURL = null;
//    var vLocation = window.location;
//    var vPort = vLocation.port;
//    if (vPort != '') vPort = ":" + vPort;  
      
//    if (vFile.substring(0, 1) == "/")
//    {
//        vURL = vLocation.protocol + "//" + vLocation.hostname + vPort + vFile;
//    } else {
//        vURL = vLocation.protocol + "//" + vLocation.hostname + vPort +  "/" + vFile;
//    }
//    return vURL;
//}

//function BrowserLinkPath(vFile)
//{
//    var vURL = null;
//    var vLocation = window.location;
//    var vPort = vLocation.port;
//    if (vPort != '') vPort = ":" + vPort;  
    
//    if (vFile.substring(vFile.length-1) == "/")
//    {
//        vURL = vFile + getParsePortal();
//    } else {
//        vURL = vFile + "/" +  getParsePortal();
//    }
      
//    if (vFile.substring(0, 1) == "/")
//    {
//        vURL = vLocation.protocol + "//" + vLocation.hostname + vPort + vURL;
//    } else {
//        vURL = vLocation.protocol + "//" + vLocation.hostname + vPort +  "/" + vURL;
//    }
//    return vURL;
//}

// Get the portal name
// E.g : portal=camp-california
//function getParsePortal()
//{
//    var vPathName = window.location.pathname.toLowerCase();
//    var vIndex = vPathName.indexOf('portal=');
//    if (vIndex > -1)
//    {
//        vPathName = vPathName.substring(vIndex);
//        var vIndex2 = vPathName.indexOf('/');
//        if (vIndex2 > 0)
//        {
//            vPathName = vPathName.substring(0,vIndex2);
//        }
//    }   
//    return vPathName; 
//}

//function maskWindow(vFadeIn)
//{

//    try {
//        var vMaskObj = $('#maskWindow');
//        vMaskObj.css('backgroundColor','black');        
//        if (vFadeIn)
//        {
//            //            var vWidth = '100%';
//            //            var vHeight = '100%';
//            //            var vDocObj = $(window.document);
//            //            
//            //            if($.browser.msie)
//            //            {                
//            //                var v1 = vDocObj.height();
//            //                var v2 = vDocObj.outerWidth()
//            //                var v3 = vDocObj.outerHeight()
//            //                
//            //                vWidth = vDocObj.innerWidth();
//            //                vHeight = vDocObj.innerHeight(); 
//            //            } else {
//            //                vWidth = getTotalWidth();
//            //                vHeight = getTotalHeight(); 
//            //            }
//            var vSize = getDocumentSize();   
//            vMaskObj.width(vSize.width);
//            if (vSize.height < 600) vSize.height = 600;
//            vMaskObj.height(vSize.height);  
//            vMaskObj.fadeIn('slow');
//        } else {
//            vMaskObj.fadeOut('slow');
//        }
//    } catch (ex) {
//        alert('maskwindow :' + ex.message);
//    }
//}

function addMyFavorite(title)
{
    try {
        var url = window.location.href;
        if (window.sidebar && window.sidebar.addPanel) {
            // Mozilla Firefox Bookmark
            window.sidebar.addPanel(title, window.location.href, '');
        }
        else if (window.sidebar && jQuery.browser.mozilla) {
            //for other version of FF add rel="sidebar" to link like this:
            //<a id="bookmarkme" href="#" rel="sidebar" title="bookmark this page">Bookmark This Page</a>
            jQuery(this).attr('rel', 'sidebar');
        }
        else if (window.external && ('AddFavorite' in window.external)) {
            // IE Favorite
            window.external.AddFavorite(location.href, title);
        } else if (window.opera && window.print) {
            // Opera Hotlist
            this.title = title;
            return true;
        } else {
            // webkit - safari/chrome
            alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');

        }

        ////if (typeof(vObj) == 'undefined' || isUndefined(url))
        ////{
        //var url = window.location.href;
        //    // title = window.document.title;
        ////}
        
        ////        if(navigator.userAgent.indexOf("MSIE") != -1)
        ////        {
        ////            window.external.AddFavorite(url,title);
        ////        } else 

        //if (window.sidebar) // firefox
        //{
        //    window.sidebar.addPanel(title, url, "");
        //} else 
        //if(window.opera && window.print)
        //{   
        //    // opera
        //    var elem = document.createElement('a');
        //    elem.setAttribute('href',url);
        //    elem.setAttribute('title',title);
        //    elem.setAttribute('rel','sidebar');
        //    elem.click();
        //} 
        //else 
        //if(document.all)// ie
        //{
        //     window.external.addFavorite(url, title);
        //}
    } catch (ex) {
        alert('Do not support');
    }
}

function ajaxValue(vObj)
{
    if (typeof(vObj.d) != 'undefined') return vObj.d;
    return vObj;
}

function isUndefined(vObj)
{
    if (typeof(vObj) == 'undefined') return true;
    return false;
}

function getTotalHeight()
{
    //alert(document.body.scrollWidth + ' >>' + document.body.scrollHeight);
    var v1 = document.documentElement;
    var v2 = document.body;
    //debugger;
    if($.browser.msie){
        return document.compatMode == "CSS1Compat"? document.documentElement.clientHeight : document.body.clientHeight;
    }else{
        return self.innerHeight;
    }
}

function getTotalWidth ()
{ 
    if($.browser.msie){
        return document.compatMode == "CSS1Compat"? document.documentElement.clientWidth :
                 document.body.clientWidth;
    }else{
        return self.innerWidth;
    }
}      


function getDocumentSize() 
{
	var xScroll, yScroll;
	if (window.innerHeight && window.scrollMaxY) {	
		xScroll = window.innerWidth + window.scrollMaxX;
		yScroll = window.innerHeight + window.scrollMaxY;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		xScroll = document.body.scrollWidth;
		yScroll = document.body.scrollHeight;
	} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		xScroll = document.body.offsetWidth;
		yScroll = document.body.offsetHeight;
	}
	var windowWidth, windowHeight;
	if (self.innerHeight) {	// all except Explorer
		if(document.documentElement.clientWidth){
			windowWidth = document.documentElement.clientWidth; 
		} else {
			windowWidth = self.innerWidth;
		}
		windowHeight = self.innerHeight;
	} else if (document.documentElement && document.documentElement.scrollHeight) { // Explorer 6 Strict Mode
		windowWidth = document.documentElement.scrollWidth;
		windowHeight = document.documentElement.scrollHeight;
	} else if (document.body) { // other Explorers
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
	}	
	// for small pages with total height less then height of the viewport
	if(yScroll < windowHeight){
		pageHeight = windowHeight;
	} else { 
		pageHeight = yScroll;
	}
	// for small pages with total width less then width of the viewport
	if(xScroll < windowWidth){	
		pageWidth = xScroll;		
	} else {
		pageWidth = windowWidth;
	}
	//arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight);
	return {width:pageWidth, height:pageHeight, _width:windowWidth, _height:windowHeight};
}

// Replace blank
function replaceURLBlank(vString)
{
    vString = vString.replace(new RegExp('&','g'), 'and');
    vString = vString.replace(new RegExp('/','g'), ' or ');
    vString = vString.replace(new RegExp(' ','g'), '-');    
    return vString;
}

// Show the alert mesage
function AlertMsg(vFile, vMethod, vException)
{
    var vMessage = 'File :' + vFile;
    vMessage += '\rMethod :' + vMethod;
    vMessage += '\rException :' + vException;
    alert(vMessage);
}

function keyEsc()
{
//    var keyChar = -1
//    if   (document.layers)  keyChar =e.which;
//    if   (document.all) keyChar =   event.keyCode; 
//    if   (keyChar=="27") return  false;
} 


//function issafe(str)
//{
//    var reg = /^.*[||/|<|>].*$/;
//    return !reg.test(str); 
//}

//function chksafe(a)
//{ 
//    fibdn = new array ( ,\, 、, ,, ;, /);
//    i=fibdn.length;
//    j=a.length;
//    for (ii=0;ii { for (jj=0;jj { temp1=a.charat(jj);
//    temp2=fibdn[ii];
//    if (tem;p1==temp2)
//    { return 0; }
//    }
//    }
//    return 1;
//}


//function URLEncode(vString)
//{    
//    // var strSpecial="!\"#$%&()*+,/:;<=>?[]^`{|}~%";
//    // var strSpecial="\"#%&()*+,/:;<=>?[]^`{|}~%";
//    var reg = /^\"|#|%|&|(|)|*|+|,|/|:|;|<|=|>|?|[|]|^|`|{|\||}|~|%|$/;
//    
//    vString = vString.replace(new RegExp('!','g'), '');
//    //    vString = vString.replace(new RegExp('\"','g'), '');
//    //    vString = vString.replace(new RegExp('#','g'), '');
//    //    vString = vString.replace(new RegExp('$','g'), '');
//    //    vString = vString.replace(new RegExp('%','g'), '');
//    //    vString = vString.replace(new RegExp('&','g'), '');
//    //    vString = vString.replace(new RegExp('(','g'), '');
//    //    vString = vString.replace(new RegExp(')','g'), '');
//    //    vString = vString.replace(new RegExp('*','g'), '');
//    //    vString = vString.replace(new RegExp('+','g'), '');
//    //    vString = vString.replace(new RegExp(',','g'), '');
//    //    vString = vString.replace(new RegExp('/','g'), '');
//    //    vString = vString.replace(new RegExp(':','g'), '');
//    //    vString = vString.replace(new RegExp(';','g'), '');
//    //    vString = vString.replace(new RegExp('<','g'), '');
//        
//        return vString; 
//} 

/* 
--***********************************************************************************************
-- 	                            Default.js
--***********************************************************************************************
*/


/* 
--***********************************************************************************************
-- 	Common JS Utilities
--***********************************************************************************************
*/

function TrimString(p_sSringToTrim) 
{
	//return p_sSringToTrim.replace(/^\s+|\s+$/g,"");
	p_sSringToTrim = LTrimString(p_sSringToTrim);
	p_sSringToTrim = RTrimString(p_sSringToTrim);
	return p_sSringToTrim;
}

function LTrimString(p_sSringToTrim) 
{
	return p_sSringToTrim.replace(/^\s+/,"");
}

function RTrimString(p_sSringToTrim) 
{
	return p_sSringToTrim.replace(/\s+$/,"");
}

function GetQueryStringItem(p_sQueryStringKey) 
{
    var sQueryString = location.search;
    if (sQueryString.indexOf(p_sQueryStringKey) >= 0) 
    {
        var pPointer = sQueryString.indexOf(p_sQueryStringKey) + p_sQueryStringKey.length + 1;
        if (sQueryString.indexOf("&", pPointer) >= 0) 
        {
            return sQueryString.substring(pPointer, sQueryString.indexOf("&", pPointer));
        } 
        else 
        {
            return sQueryString.substring(pPointer, sQueryString.length);
        }
    } 
    else 
    {
        return null;
    }
}

function GetTextBoxValue(p_sTextBoxClientId)
{
    var sReturn = "";
    var tbTextBox = document.getElementById(p_sTextBoxClientId);
	if (tbTextBox != null)
	{
	    sReturn = tbTextBox.value;
	}
	return sReturn;
}

function GetDDLSelectionValue(p_sDDLClientId)
{
    var sReturn = "";
    var ddlDropDownList = document.getElementById(p_sDDLClientId);
	if ((ddlDropDownList != null) && (ddlDropDownList.selectedIndex > 0))
	{
	    sReturn = ddlDropDownList.options[ddlDropDownList.selectedIndex].value;
	}
	return sReturn;
}

function PerformDisplayContentUpdatingDataContainerOveray(updatingLabelInnerText)
{
    if (!dContentDataContainer)
    {
        //alert("HI");
        //alert(zm_lUpdatingLabelID);
        var zm_lUpdatingLabel = document.getElementById(zm_lUpdatingLabelID);
        var dContentDataContainer = document.getElementById("dContentDataContainer");
        var dContentUpdatingDataContainer = document.getElementById("dContentUpdatingDataContainer");
    }
    
    //alert("HI2");
    if (!zm_lUpdatingLabel)
    {
        zm_lUpdatingLabel.innerText = updatingLabelInnerText;
    }
    //alert("HI3");
    dContentDataContainer.style.display = "none";
    dContentUpdatingDataContainer.style.display = "block";
}

function PerformHideContentUpdatingDataContainerOverlay()
{
//    alert("PerformHideContentUpdatingDataContainerOverlay");
//    alert("zm_lUpdatingLabelID: "+  zm_lUpdatingLabelID);
//    alert("dSiteContentDataContainer: "+  document.getElementById("dContentDataContainer"));
//    alert("dSiteContentUpdatingDataContainer: "+  document.getElementById("dContentUpdatingDataContainer"));
    
    if (!dContentDataContainer)
    {
        var zm_lUpdatingLabel = document.getElementById(zm_lUpdatingLabelID);
        var dContentDataContainer = document.getElementById("dContentDataContainer");
        var dContentUpdatingDataContainer = document.getElementById("dContentUpdatingDataContainer");
    }
    
    dContentDataContainer.style.display = "block";
    dContentUpdatingDataContainer.style.display = "none";
}

/* 
--***********************************************************************************************
-- 	Open New Window
--***********************************************************************************************
*/

function PerformOpenNewWindow(p_sUrl, p_sWindowSettings)
{
    var wWindow = window.open(p_sUrl, "NewWindow", p_sWindowSettings);
    wWindow.name = "NewWindow";
}

function PerformOpenNewWindow(p_sUrl, p_sWindowSettings, p_sNewWindowName)
{
    var wWindow = window.open(p_sUrl, p_sNewWindowName, p_sWindowSettings);
    wWindow.name = p_sNewWindowName;
}

/* 
--***********************************************************************************************
-- 	HTML ENCODE
--***********************************************************************************************
*/

function PerformEncodeHtml(p_sTextBoxClientId) 
{
    var sReturn = "";
    var tbTextBox = document.getElementById(p_sTextBoxClientId);

    if(tbTextBox != null)
    {
        //tbTextBox.value = escape(tbTextBox.value);
        
        sReturn = tbTextBox.value;
        
        // ampersands (&)
        sReturn = sReturn.replace(/\&/g,'&amp;');

        // less-thans (<)
        sReturn = sReturn.replace(/\</g,'&lt;');

        // greater-thans (>)
        sReturn = sReturn.replace(/\>/g,'&gt;');

        sReturn = sReturn.replace(new RegExp('"','g'), '&quot;');
        
        tbTextBox.value = sReturn;
    }
    
	return true;
}

// DropDownList
// Get the combox object's value and text
function GetCombox(vClientID)
{
    try {
        var vObj = document.getElementById(vClientID);
        if (vObj != null && vObj.length > 0)
        {
            var index = vObj.selectedIndex;
            if (index > -1) 
            {
                var vName = vObj.options[index].text;
                var vValue = vObj.options[index].value;
                if (vValue == '-1') 
                {
                    vName = '';
                    vValue = '0';
                }
                
                return {text:vName,value:vValue}; 
            }
        }   
    } catch (ex) {}
    return {text:'',value:''};  
}

// Occur when load the main page finish
var vSearchState = null;
function LoadIFrameAD()
{
    $("iframe.IFrameAD").each(function() {
        var vIFrameObj = $(this);
        var vURL = vIFrameObj.attr("_src");

        if (typeof (vURL) != 'undefined') {
            //Check to if the stateid and regionid are set
            var iState = vURL.indexOf("stateid=");
            var iRegion = vURL.indexOf("regionid=");
            if (vSearchState == null && (iState < 0 || iRegion < 0)) {
                vSearchState = ""
                var vStateObj = $('select.States');
                if (vStateObj.html() != null) {
                    //default search page
                    var vRegionsObj = $('select.Regions');
                    var vRegionClientId = vRegionsObj.attr('id');
                    var vRegionEnum = GetCombox(vRegionClientId);
                    ;
                    if (iState < 0) {
                        vSearchState = '&stateid=' + vStateObj.val();
                    }
                    if (iRegion < 0) {
                        vSearchState += '&regionid=' + vRegionEnum.value;
                    }
                }
                else {
                    //Is Search Result or Estination Page
                    vStateObj = $('div.ADState');
                    if (vStateObj.html() != null) {
                        if (iState < 0) {
                            vSearchState = '&stateid=' + vStateObj.attr('state');
                        }
                        if (iRegion < 0) {
                            vSearchState += '&regionid=' + vStateObj.attr('regionId');
                        }
                        if (vStateObj.attr("zipcode") != "") {
                            vSearchState += '&zipcode=' + vStateObj.attr("zipcode");
                        }
                    }
                }
            }
            vURL += vSearchState;

            vIFrameObj.attr("src", vURL);
        }
    });
} 

function onLoadMap()
{
    var vIframe = $("#mapIFrame");
    
    if (typeof (vIframe.attr("src")) == "undefined") {
        var vUrl = LinkPath("map.htm?date=01102018");
        vIframe.attr('src', vUrl);
    }  
}

var vIsLoadMapComplete = false;
function onLoadMapComplete(vType)
{
    var vIframe = $("#mapIFrame");
    if (typeof (vIframe.attr("src")) != "undefined")
    {
        //$("button#zd_bSearch").removeCSS("NoDisplay");        
        vIsLoadMapComplete = true;
    }
}

function isLoadMapComplete()
{
    return vIsLoadMapComplete;
}

function slideShow() 
{
    if ($('#gallery-slide-show a').length > 1)
    {
	    $('#gallery-slide-show a').css({opacity: 0.0});
	    $('#gallery-slide-show a:first').css({opacity: 1.0});
	    $('#gallery-slide-show a:first').addClass('show');
	    $('#gallery-slide-show .content').html($('#gallery-slide-show a:first').find('img')).animate({opacity: 0.7}, 400);
	    setInterval('gallery()',5000);	
	}
}

function gallery() 
{
	var current = ($('#gallery-slide-show a.show')?  $('#gallery-slide-show a.show') : $('#gallery-slide-show a:first'));
	var next = ((current.next().length) ? current.next() : $('#gallery-slide-show a:first'));	
	next.css({opacity: 0.0}).addClass('show').animate({opacity: 1.0}, 1000);
	current.animate({opacity: 0.0}, 1000).removeClass('show');	
}



function AdjustMoreText() {
    try {
        var vClass1 = ".text-ellipsis";
        var vClass2 = ".listSite";

        var vItemClass = "";
        for (var i = 1; i <= 2; i++) {
            if (i == 1) {
                vItemClass = vClass1;
            }
            else {
                vItemClass = vClass2;
            }

            $(vItemClass).each(function () {
                var vOldHeight = $(this).css("height");
                $(this).css("height", "auto");
                var vNewHeight = $(this).css("height");

                var vHeight1 = Number(vOldHeight.replace("px", ""));
                var vHeight2 = Number(vNewHeight.replace("px", ""));
                if (vHeight1 >= vHeight2) {
                    $(this).parent().find(".more").hide();
                    //console.log("hide:" + vHeight1 + "_" + vHeight2);
                }
                else {
                    $(this).css("height", vOldHeight);
                    $(this).parent().find(".more").show();
                    //console.log("show:" + vHeight1 + "_" + vHeight2);
                }

                if ($(this).parent().find(".more").text() == "less" )
                {
                   // $(this).css("height", vOldHeight);
                    $(this).parent().find(".more").show();
                }
            })
        }

    } catch (ex) {
        alert('AdjustMoreText :' + ex.message);
    }
}