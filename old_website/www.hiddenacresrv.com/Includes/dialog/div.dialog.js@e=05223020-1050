/*********************************************************************
******************* Dialog Public Method Start ***********************
**********************************************************************/
function getDialogWindowObject() {
    var vWin = window;
    try {
        var vCount = 5;
        while (vCount > 0) {
            vCount = vCount - 1;
            if (typeof (vWin.parent.frameElement) != 'unknown') {
                vWin = vWin.parent;
            } else {
                break;
            }
        }
    } catch (ex) { }
    return vWin;
}

// close and exit the div window
function cancelDlg(vIsRedirect) {
    try {
        if (typeof (vIsRedirect) == 'undefined') vIsRedirect = false;
        if (vIsRedirect) {
            if (isDivDialog()) {
                dialog.close('update');
            } else {
                //var vURL = tool.getPath();
                var vURL = getHostPath();

                if (vURL.indexOf('https:') == 0) {
                    var vIndex = vURL.indexOf(':');
                    vURL = 'http' + vURL.substr(vIndex);
                }

                var userAgent = navigator.userAgent.toLowerCase();
                var vIsIE = /msie/.test(userAgent) && !/opera/.test(userAgent);
                if (vIsIE) {
                    window.location.href = vURL + '/includes/dialog/closedlg.htm';
                } else {
                    // Support Firefox 
                    var vWindow = getDialogWindowObject();
                    vWindow.location.href = vURL + '/includes/dialog/closedlg.htm';
                }
            }
        } else {
            // Error: Unspecified error. It must call by the timeout
            window.setTimeout("dialog.cancel()", 120);
        }
    } catch (ex) {
        alert('cancelDlg :' + ex.message);
    }
}

var vDialogResultValue = null;
var vDialogResultType = null;
// close and exit the div window
function closeDlg(vValue, vType) {
    vDialogResultValue = vValue;
    vDialogResultType = vType;
    window.setTimeout("private_close_div_dialog()", 120);
}

function private_close_div_dialog() {
    dialog.close(vDialogResultValue, vDialogResultType);
}

// Get the top window div dialog
// True is window object, otherwise is div window object
function getTop(vIsDialog) {
    try {
        // dialog has defined method : isDialogTop()
        // main window has defined method : isMainTop()   
        var vWin = null;
        if (typeof (vIsDialog) == 'undefined') vIsDialog = true;
        if (vIsDialog == false) {
            vWin = window.top;
        } else {
            var vCount = 10;
            var vWin = window;
            while (vCount > 0) {
                vCount = vCount - 1;
                //alert(vWin.location.href + '\r\n' + vWin.parent.location.href);
                if (typeof (vWin.parent.isDialogTop) == 'function') {
                    // The isDialogTop is must defined in the div dialog page
                    break;
                } else
                    if (typeof (vWin.parent.isMainTop) == 'function') {
                        // The isMainTop is must defined in the main page
                        vWin = vWin.parent;
                        break;
                    } else {
                        if (vWin.parent == null || vWin.parent == vWin) {
                            break;
                        } else {
                            var vTemp = vWin.parent;
                            if (typeof (vTemp.document) == 'object') // unknown
                            {
                                vWin = vWin.parent;
                            } else {
                                break;
                            }
                        }
                    }
            }
        }
    } catch (ex) {
        //alert('Can not get the top window');
    }
    return vWin;
}

function isDivDialog() {
    try {
        // dialog has defined method : isDialogTop()

        var vCount = 10;
        var isDialog = false;
        var vWin = window;
        while (vCount > 0) {
            vCount = vCount - 1;
            if (typeof (vWin.parent.isDialogTop) == 'function') {
                isDialog = true;
                break;
            } else {
                if (vWin.parent == null || vWin.parent == vWin) {
                    break;
                } else {
                    vWin = vWin.parent;
                }
            }
        }
        return isDialog;
    } catch (ex) {
        //alert('isDivDialog : Can not get the top window');
    }
    return false;
}

function isExistDialog() {
    var vIsExist = false;
    try {
        var vObj = window.top.frames;
        //var vElement = window.top.document.documentElement;
        // var vObj = vElement.getElementsByTagName('IFRAME');
        if (vObj != null) {
            var vLength = vObj.length;
            for (var i = 0; i < vLength; i++) {
                //if (vObj[i].className == 'win_dialog_obj')
                if (vObj[i].frameElement.className == 'win_dialog_obj') {
                    vIsExist = true;
                    break;
                }
            }
        }
    } catch (ex) {
        alert(ex.message);
    }
    return vIsExist;
}

function getHostPath() {
    try {
        var vVirtualName = '';
        var vHostname = window.location.hostname
        if (vHostname.indexOf('.') == -1) {
            var vPathName = window.location.pathname;
            if (vPathName.indexOf('/') == 0) {
                vPathName = window.location.pathname.substr(1);
            }
            var vIndex = vPathName.indexOf('/');
            vVirtualName = '/' + vPathName.substr(0, vIndex);
        }
        var vProtocol = window.location.protocol;
        var vPort = window.location.port;
        var vHref = vProtocol + "//" + vHostname + vVirtualName;
        if (vPort != '' && vPort != 80) {
            vHref = vProtocol + "//" + vHostname + ":" + vPort + vVirtualName;
        } 
        return vHref;
    } catch (ex) {
        alert('getPath :' + ex.message);
    }
}

// Occur when open a div dialog
function openDlg(vURL, vWidth, vHeight, vType) {
    try {
        if (vURL.toLowerCase().indexOf('https://') == 0 ||
            vURL.toLowerCase().indexOf('http://') == 0) {
        } else {
            if (vURL.indexOf('/') != 0) vURL = '/' + vURL;
            vURL = getHostPath() + vURL;
        }
        if (typeof (vType) == 'undefined') vTitle = '';
        dialog.open(vType, vURL, vWidth, vHeight);
    } catch (ex) {
        alert('>openDlg :' + ex.message);
    }
}


/*********************************************************************
******************* Dialog Public Method End ***********************
**********************************************************************/

var binfo = (function () {
    var ua = navigator.userAgent.toLowerCase();
    return {
        ie: /*@cc_on!@*/false,
        i7: /*@cc_on!@*/false && (parseInt(ua.match(/msie (\d+)/)[1], 10) >= 7)
    };
})();

var userAgent = navigator.userAgent.toLowerCase();
// Figure out what browser is being used
WebBrowser = {
    version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
    safari: /webkit/.test(userAgent),
    opera: /opera/.test(userAgent),
    msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
    mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
};

//var config = { opac : 0.50, bgcolor : '#fff', bzi : null, it : null, il : null };
var config = { opac: 0.50, bgcolor: '#333333', bzi: null, it: null, il: null };
var syncIcon = { opac: 0.80, bgcolor: '#333333', bzi: null, it: null, il: null };

var tool =
{
    windowStatus: function (vMessage) {
        window.status = vMessage;
    },

    buildIFrame: function (vIsLink, vLinkPage, vLoadMethod) {
        var sy = vIsLink ? '' : 'style="visibility:hidden;" ';
        var vOnload = '';
        if (vLoadMethod != null && vLoadMethod != '') vOnload = 'onload="' + vLoadMethod;
        var vIframe = '<iframe id="frmain" ' + vOnload + '" src="' + vLinkPage + '" name="frmain" frameborder="0" ';
        vIframe += 'width="100%" height="100%" scrolling="no" ' + sy + ' allowtransparency="true"><\/iframe>';

        return vIframe;
    },

    reStyle: function (e) {
        e.style.cssText = 'margin:0;padding:0;background-image:none;background-color:transparent;border:0;';
    },

    setStyle: function (e, dict) {
        var style = e.style;
        for (var n in dict) {
            style[n] = dict[n];
        }
    },

    getStyle: function (e, p) {
        if (WebBrowser.msie) {
            return e.currentStyle[p];
        } else {
            return e.ownerDocument.defaultView.getComputedStyle(e, '').getPropertyValue(p);
        }
    },

    setOpac: function (e, opac) {
        if (WebBrowser.msie) {
            opac = Math.round(opac * 100);
            e.style.filter = (opac > 100 ? '' : 'alpha(opacity=' + opac + ')');
        } else {
            e.style.opacity = opac;
        }
    },

    getVoid: function () {
        if (WebBrowser.msie) {
            return (binfo.i7 ? '' : 'javascript:\'\'');
        }
        return 'javascript:void(0)';
    },

    addEvent: function (o, e, l) {
        if (WebBrowser.msie) {
            o.attachEvent('on' + e, l);
        } else {
            o.addEventListener(e, l, false);
        }
    },

    removeEvent: function (o, e, l) {
        if (WebBrowser.msie) {
            o.detachEvent('on' + e, l);
        } else {
            o.removeEventListener(e, l, false);
        }
    },

    isdtd: function (doc) {
        return ('CSS1Compat' == (doc.compatMode || 'CSS1Compat'));
    },

    getClientSize: function (w) {
        if (WebBrowser.msie) {
            var oSize, doc = w.document.documentElement;
            oSize = (doc && doc.clientWidth) ? doc : w.document.body;

            if (oSize)
                return { w: oSize.clientWidth, h: oSize.clientHeight };
            else
                return { w: 0, h: 0 };
        } else {
            return { w: w.innerWidth, h: w.innerHeight };
        }
    },

    getEvent: function () {
        if (WebBrowser.msie) return window.event;
        var func = tool.getEvent.caller;
        while (func != null) {
            var arg = func.arguments[0];
            if (arg && (arg + '').indexOf('Event') >= 0) {
                return arg;
            }
            func = func.caller;
        }
        return null;
    },

    getElementPos: function (o) {
        var l, t;
        if (o.getBoundingClientRect) {
            var el = o.getBoundingClientRect();
            l = el.left;
            t = el.top;
        }
        else {
            l = o.offsetLeft - Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
            t = o.offsetTop - Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        }
        return { x: l, y: t };
    },

    getScrollPos: function (w) {
        if (WebBrowser.msie) {
            var doc = w.document;
            var oPos = { X: doc.documentElement.scrollLeft, Y: doc.documentElement.scrollTop };
            if (oPos.X > 0 || oPos.Y > 0) return oPos;
            return { X: doc.body.scrollLeft, Y: doc.body.scrollTop };
        } else {
            return { X: w.pageXOffset, Y: w.pageYOffset };
        }
    },

    getLink: function (c) {
        if (c.length == 0) return;
        return '<' + 'link href="' + c + '" type="text/css" rel="stylesheet"/>';
    },

    regdoll: function (vWindow) {
        try {
            if (WebBrowser.msie) {
                if (typeof (vWindow.document.getElementById) == 'function') {
                    // IE9.0 Version
                    vWindow.getObjById = function (id) {
                        return vWindow.document.getElementById(id);
                    }
                } else {
                    // IE 6.0, 7.0, 8.0
                    vWindow.getObjById = vWindow.document.getElementById;
                }
            } else {
                vWindow.getObjById = function (id) {
                    return vWindow.document.getElementById(id);
                }
            }
        } catch (ex) {
            alert('regdoll :' + ex.message);
        }
    },

    getDocument: function (e) {
        return e.ownerDocument || e.document;
    },

    disContextMenu: function (doc) {
        doc.oncontextmenu = function (e) {
            e = e || event || this.parentWindow.event;
            var o = e.srcElement || e.target;
            if (!(o.type == 'password' || o.type == 'text' || o.type == 'textarea')) {
                if (WebBrowser.msie) {
                    e.returnValue = false;
                } else {
                    e.preventDefault();
                }
            }
        };
    },

    getPath: function () {
        var bp, len, sc = document.getElementsByTagName('script');
        for (var i = 0; i < sc.length; i++) {
            bp = sc[i].src.substring(0, sc[i].src.toLowerCase().indexOf('div.dialog.js'));
            len = bp.lastIndexOf('/');

            if (len > 0) bp = bp.substring(0, len + 1);
            if (bp) break;
        }

        if (WebBrowser.msie && bp.indexOf('../') != -1) {
            var fp = window.location.href;
            fp = fp.substring(0, fp.lastIndexOf('/'));
            while (bp.indexOf('../') >= 0) {
                bp = bp.substring(3);
                fp = fp.substring(0, fp.lastIndexOf('/'));
            }
            return fp + '/' + bp;
        } else {
            return bp;
        }
    },

    removeNode: function (n) {
        return n.parentNode.removeChild(n);
    }
};

var dialog = (function () {
    var vIsHttps = false;
    var tdoc;
    var twin = window.parent, cover;
    while (twin.parent && twin.parent != twin) {
        try {
            if (twin.parent.document.domain != document.domain) {
                break;
            }
        } catch (ex) {
            twin = window; // is https	
            break;
        }
        twin = twin.parent;
    }

    if (typeof (twin.document) != 'unknown') {
        tdoc = twin.document;
    } else {
        vIsHttps = true;
        twin = window;
        tdoc = twin.document;
    }

    var getzi = function () {
        if (!config.bzi) config.bzi = 999;
        return config.bzi++;
    };

    var resizehdl = function (vDlgHeight, vDlgLocationY) {
        if (!cover) return;
        var rel = tool.isdtd(tdoc) ? tdoc.documentElement : tdoc.body;

        var vWidth = Math.max(rel.scrollWidth, rel.clientWidth, tdoc.scrollWidth || 0) - 1;
        var vHeight = Math.max(rel.scrollHeight, rel.clientHeight, tdoc.scrollHeight || 0) - 1;

        if (typeof (vDlgHeight) != 'undefined' && typeof (vDlgLocationY) != 'undefined') {
            var vTempHeight = parseInt(vDlgHeight, 10) + parseInt(vDlgLocationY, 10);
            if (vHeight < vTempHeight) vHeight = vTempHeight + 20;
        }

        tool.setStyle(cover,
		{
		    'width': vWidth + 'px',
		    'height': vHeight + 'px'
		});
    };

    return {
        cancel: function () {
            try {
                var vWindow = getTop();
                var P = vWindow.parent;
                P.cancel();
            } catch (ex) {
                alert('cancel 001:' + ex.message);
            }
        },

        close: function (vValue, vType) {
            try {
                var vWindow = getTop();
                var P = vWindow.parent;
                if (typeof (vValue) == 'undefined') vValue = 'update'
                P.closedlg(vValue, vType, false);
            } catch (ex) {
                alert(vStatus + ' close_dialog :' + ex.message);
            }
        },

        // call by div.content.js file
        closeDialog: function (vWindow, vCover, vValue, vType) {
            try {
                var dlg = ('object' == typeof (vWindow)) ? vWindow.frameElement : document.getElementById(vWindow);
                if (dlg && typeof (vWindow) == 'object') {
                    try {
                        var D = vWindow.loadinndlg(true);
                        if (typeof (D.updateByDlg) == 'function' || typeof (D.updateByDlg2) == 'function' || typeof (D.updateByDlg3) == 'function') {

                            if (typeof (vValue) == 'undefined' && typeof (vValue) == 'undefined') {
                                // is cancel div window
                                var vArgType = vWindow.dlgArgs().type;
                                if (typeof (vArgType) != 'undefined') {
                                    if (typeof (D.updateByDlg) == 'function') D.updateByDlg('cancel', vArgType);
                                    if (typeof (D.updateByDlg2) == 'function') D.updateByDlg2('cancel', vArgType);
                                    if (typeof (D.updateByDlg3) == 'function') D.updateByDlg3('cancel', vArgType);
                                }
                            } else {
                                if (typeof (vType) == 'undefined') vType = vWindow.dlgArgs().type;
                                if (typeof (vValue) == 'undefined') vValue = 'update';

                                if (typeof (D.updateByDlg) == 'function') D.updateByDlg(vValue, vType);
                                if (typeof (D.updateByDlg2) == 'function') D.updateByDlg2(vValue, vType);
                                if (typeof (D.updateByDlg3) == 'function') D.updateByDlg3(vValue, vType);
                            }
                        }
                    } catch (ex) {
                        alert('close div window :' + ex.message);
                    }
                    tool.removeNode(dlg);
                }
                if (vCover) this.hcover(vCover);
            } catch (ex2) {
                //alert('close div window2 :' + ex2.message);
            }
        },

        close2: function (vValue, vType) {
            try {
                var vWindow = getTop();
                var P = vWindow.parent;
                var D = P.loadinndlg(true);

                if (typeof (vValue) == 'undefined') vValue = 'update';
                vIframeID = P.dlgArgs.frameId;
                if (typeof (vIframeID) == 'undefined') {
                    alert('Do not find the frame id');
                } else {
                    var vContentWindow = D.document.getElementById(vIframeID).contentWindow;
                    var d2 = vContentWindow.document.getElementById('frmain').contentWindow;
                    d2.updateByDlg(vValue, vType);
                }
            } catch (ex) {
                alert('close2 :' + ex.message);
            }
        },


        close3: function (vIframeID, vValue, vType) {
            try {
                var vWindow = getTop();
                var P = vWindow.parent;
                var D = P.loadinndlg(true);

                if (typeof (vValue) == 'undefined') vValue = 'update';
                var vContentWindow = D.document.getElementById(vIframeID).contentWindow;
                var d2 = vContentWindow.document.getElementById('frmain').contentWindow;
                d2.updateByDlg(vValue, vType); ;
            } catch (ex) {
                alert('close2 :' + ex.message);
            }
        },

        maskWindow: function (vIsShow) {
            var vWindow = getTop();
            var vParent = vWindow.parent;
            vParent.maskWindow(vIsShow);
        },

        buildDialogLineScript: function () {
            var vJavascript = 'var W = frameElement._dlgargs.win;\r\n ' +
                            'var dlgcover = W.dialog.gcover();\r\n ' +
                            'var isHttps = false;\r\n ' +
                            ' var isReturnValue = null;\r\n ' +
                            'var isReturnType = null; \r\n ' +
                            'function isDialogTop()\r\n ' +
                            '{\r\n ' +
                            '   return true;\r\n ' +
                            '}\r\n ' +
                            'function dlgArgs()\r\n ' +
                            '{\r\n ' +
                            '   return frameElement._dlgargs;\r\n ' +
                            '} \r\n ' +

                            'function setReHeight(vDialogWidth,vDialogHeight) \r\n ' +
                            '{ \r\n ' +
                            '    try { \r\n ' +
                            '        var vDialogId = dlgArgs().frameId; \r\n ' +
                            '        W.tool.setStyle( frameElement,{width : vDialogWidth + "px", height : vDialogHeight + "px"}); \r\n ' +
                            '        recontze("resizedlg");  \r\n ' +
            //'        loadbtnevt(); \r\n ' + 
                            '        W.dialog.resize(window, vDialogId, vDialogWidth, vDialogHeight); \r\n ' +
                            '    } catch (ex) { \r\n ' +
                            '        alert("ReHeight :" + ex.message); \r\n ' +
                            '    } \r\n ' +
                            '}  \r\n ' +

                            'function onIFrameLoad(vIFrameObj) {\r\n ' +
                            'try {\r\n ' +
                            '       var vURL = vIFrameObj.src.toLowerCase();\r\n ' +
                            '       if (vURL.indexOf("https://") > -1)\r\n ' +
                            '           isHttps = true;\r\n ' +
                            '       maskWindow(false,false,6); \r\n ' +
                            '       if (dlgArgs().tit == "")\r\n ' +
                            '       {\r\n ' +
                            '          var vIFrameDoc = vIFrameObj.contentWindow.document;\r\n ' +
                            '          var vTitleObj = getObjById("txt");\r\n ' +
                            '            if (vIFrameDoc.title == "")\r\n ' +
                            '            {\r\n ' +
                            '                vTitleObj.innerHTML = "Dialog";\r\n ' +
                            '           } else {\r\n ' +
                            '              vTitleObj.innerHTML = vIFrameDoc.title;\r\n ' +
                            '           }\r\n ' +
                            '       }\r\n ' +
                            '       recontze("onIFrameLoad");\r\n ' +
                            '   } catch (ex) {\r\n ' +
                            '      getObjById("txt").innerHTML = "Dialog";\r\n ' +
                            '   }\r\n ' +
                            '} \r\n ' +

                            'function maskWindow(vIsShow, vIsFramework, vIndex)\r\n ' +
                            '{\r\n ' +
                            'try\r\n ' +
                            '{\r\n ' +
                            'var vMaskObj = getObjById("throbber");\r\n ' +
                            'var vSyncIcon = getObjById("syncIcon");\r\n ' +
                            'if (vMaskObj != null && vSyncIcon != null)\r\n ' +
                            '{\r\n ' +
                            '   if (vIsShow)\r\n ' +
                            '   {\r\n ' +
                            '       var vWidth = parseInt(dlgArgs().width,10);\r\n ' +
                            '       var vHeight = parseInt(dlgArgs().height,10); \r\n ' +
                            '       if (typeof(vIsFramework) == "undefined")\r\n ' +
                            '       {\r\n ' +
                            '           vIsFramework = false;\r\n ' +
                            '       } \r\n ' +
                            '       var vTopHeight = 30;\r\n ' +
                            '       if (vIsFramework == false)\r\n ' +
                            '       {\r\n ' +
                            '           vMaskObj.style.top = vTopHeight + "px";\r\n ' +
                            '       }\r\n ' +
                            '       vMaskObj.style.width = vWidth + "px";\r\n ' +
                            '       if (vHeight < vTopHeight) {\r\n ' +
                            '           vMaskObj.style.height = "0px"; \r\n ' +
                            '       } else {\r\n ' +
                            '           vMaskObj.style.height = (vHeight - vTopHeight) + "px"; \r\n ' +
                            '       }\r\n ' +
                            '       vSyncIcon.style.top = "80px";\r\n ' +
                            '       vSyncIcon.style.width = vWidth + "px";\r\n ' +
                            '       vSyncIcon.style.height = vHeight + "px"; \r\n ' +
                            '       vMaskObj.style["display"] = "";\r\n ' +
                            '       vSyncIcon.style["display"] = "";\r\n ' +
                            '   } else {\r\n ' +
                            '       vMaskObj.style["display"] = "none";\r\n ' +
                            '       vSyncIcon.style["display"] = "none";\r\n ' +
                            '   }\r\n ' +
                            '}\r\n ' +
                            '} catch (ex) {\r\n ' +
                            '   alert("maskWindow :" + ex.message);\r\n ' +
                            '}\r\n ' +
                            '} \r\n ' +
                            'window.focus();\r\n ' +
                            'W.tool.regdoll(window);' +
                            'if (W.WebBrowser.msie) {\r\n ' +
                            '   try {\r\n ' +
                            '       document.execCommand("BackgroundImageCache", false, true);\r\n ' +
                            ' }catch(e){} } \r\n ' +
                            'var recontze = function(vType)\r\n ' +
                            '{\r\n ' +
                            '   // debugger\r\n ' +
                            '   try {\r\n ' +
                            '       if (W.WebBrowser.msie && !W.binfo.i7)\r\n ' +
                            '       {\r\n ' +
                            '           getObjById("contain").style.height = document.body.offsetHeight - 2;\r\n ' +
                            '           getObjById("contain").style.width = document.body.offsetWidth - 2;\r\n ' +
                            '       } \r\n ' +
                            '       var h = parseInt(getObjById("contain").offsetHeight,10);\r\n ' +
                            '       if (h < 30) {\r\n ' +
                            '       } else {\r\n ' +
                            '           h -= parseInt(getObjById("dtit").offsetHeight,10);\r\n ' +
                            '           h -= parseInt(getObjById("dfoot").offsetHeight,10); \r\n ' +
                            '           getObjById("dinner").style.height = Math.max( h - 9, 0 ) + "px";\r\n ' +
                            '       }\r\n ' +
                            '   } catch (ex) {\r\n ' +
//                            '       alert("recontze :" + ex.message);\r\n ' +
                            '   }\r\n ' +
                            '}; \r\n ' +
                            'var crtel = function( t, l, w, h )\r\n ' +
                            '{\r\n ' +
                            '   try {\r\n ' +
                            '       var o = dlgArgs().topw.document.createElement("div");\r\n ' +
                            '       var vZindex = dlgArgs().zIndex + 1;\r\n ' +
                            '       W.tool.setStyle(o, { "position" : "absolute", ' +
                            '                           "top" : t + "px",\r\n ' +
                            '                           "left" : l + "px",\r\n ' +
                            '                           border : "1px solid #000",\r\n ' +
                            '                           "width" : w + "px",\r\n ' +
                            '                           "height" : h + "px",\r\n ' +
                            '                           "zIndex" : vZindex,\r\n ' +
                            '                           "backgroundColor" : "#666" }); \r\n ' +
                            '       W.tool.setOpac(o, 0.30);\r\n ' +
                            '       dlgArgs().topw.document.body.appendChild(o);\r\n ' +
                            '       return o;\r\n ' +
                            '   } catch (ex) {\r\n ' +
                            '       alert("crtel :" + ex.message);\r\n ' +
                            '   }\r\n ' +
                            '};  \r\n ' +
                            'var drag = function() {\r\n ' +
                            '   var regwin = [], lacoor, curpos, tdark; \r\n ' +
                            '   var cluphdl = function()\r\n ' +
                            '   {\r\n ' +
                            '   for (var i = 0; i < regwin.length; i++ )\r\n ' +
                            '   {\r\n ' +
                            '       W.tool.removeEvent( regwin[i].document, "mousemove", dragmovehdl );\r\n ' +
                            '       W.tool.removeEvent( regwin[i].document, "mouseup", draguphdl );\r\n ' +
                            '   }\r\n ' +
                            '}; \r\n ' +
                            'var dragmovehdl = function(evt)\r\n ' +
                            '{\r\n ' +
                            '   try {\r\n ' +
                            '       if(!lacoor) return;\r\n ' +
                            '       if(!evt)\r\n ' +
                            '       evt = W.tool.getDocument(this).parentWindow.event; \r\n ' +
                            '       var curcoor = { x : evt.screenX, y : evt.screenY };\r\n ' +
                            '       curpos = { x : curpos.x + ( curcoor.x - lacoor.x ), y : curpos.y + ( curcoor.y - lacoor.y ) };\r\n ' +
                            '       lacoor = curcoor; \r\n ' +
                            '       tdark.style.left = curpos.x + "px";\r\n ' +
                            '       tdark.style.top = curpos.y + "px";\r\n ' +
                            '   } catch (ex) {\r\n ' +
                            '       alert("dragmovehdl :" + ex.message);\r\n ' +
                            '   }\r\n ' +
                            '}; \r\n ' +
                            'var draguphdl = function(evt)\r\n ' +
                            '{\r\n ' +
                            '   try {\r\n ' +
                            '       if(!lacoor) return;\r\n ' +
                            '       if(!evt)\r\n ' +
                            '       {\r\n ' +
                            '           evt = W.tool.getDocument(this).parentWindow.event;\r\n ' +
                            '           cluphdl();\r\n ' +
                            '       }\r\n ' +
                            '       W.tool.removeNode(tdark);\r\n ' +
                            '       lacoor = null;\r\n ' +
                            '       tdark = null;\r\n ' +
                            '       W.tool.setStyle( frameElement, {top : curpos.y + "px", left : curpos.x + "px"});\r\n ' +
                            '       if(dlgArgs().sc)\r\n ' +
                            '       {\r\n ' +
                            '           var tp = W.tool.getScrollPos(dlgArgs().topw);\r\n ' +
                            '           W.config.it = curpos.y - tp.Y;\r\n ' +
                            '           W.config.il = curpos.x - tp.X;\r\n ' +
                            '       };\r\n ' +
                            '   } catch (ex) {\r\n ' +
                            '       alert("draguphdl :" + ex.message);' +
                            '   }\r\n ' +
                            '}; \r\n ' +
                            'return { downhdl : function(evt)\r\n ' +
                            '{\r\n ' +
                            '   try {\r\n ' +
                            '       var view = null;\r\n ' +
                            '       if(!evt)\r\n ' +
                            '       {\r\n ' +
                            '           view = W.tool.getDocument(this).parentWindow;\r\n ' +
                            '           evt = view.event;' +
                            '       } else {\r\n ' +
                            '           view = evt.view;\r\n ' +
                            '       }\r\n ' +
                            'var tget = evt.srcElement || evt.target;\r\n ' +
                            'if( tget.id == "xbtn") return;\r\n ' +
                            'var fw = frameElement.offsetWidth;\r\n ' +
                            'var fh = frameElement.offsetHeight;\r\n ' +
                            'curpos = { x : frameElement.offsetLeft, y : frameElement.offsetTop };\r\n ' +
                            'lacoor = { x : evt.screenX, y : evt.screenY };\r\n ' +
                            'tdark = crtel(curpos.y, curpos.x, fw, fh);\r\n ' +
                            'for( var i = 0; i < regwin.length; i++ )\r\n ' +
                            '{\r\n ' +
                            '   W.tool.addEvent( regwin[i].document, "mousemove", dragmovehdl );\r\n ' +
                            '   W.tool.addEvent( regwin[i].document, "mouseup", draguphdl );\r\n ' +
                            '}' +
                            ' if(evt.preventDefault) {\r\n ' +
                            'evt.preventDefault();\r\n ' +
                            '} else  {\r\n ' +
                            'evt.returnValue = false;\r\n ' +
                            '}\r\n ' +
                            '} catch (ex) {\r\n ' +
//                            '   alert(" downhdl error :" + ex.message);\r\n ' +
                            '}\r\n ' +
                            '}, \r\n ' +
                            'reghdl : function(w)\r\n ' +
                            '{\r\n ' +
                            'regwin.push(w);\r\n ' +
                            '}\r\n ' +
                            '};\r\n ' +
                            '}();  \r\n ' +
                            '(function()\r\n ' +
                            '{\r\n ' +
                            '   window.onload = function()\r\n ' +
                            '   {\r\n ' +
                            '       try {\r\n ' +
                            '           recontze("onload"); \r\n' +
                            '           loadbtnevt(); \r\n ' +
                            '           maskWindow(true,true,1);\r\n ' +
                            '           loadinnfrm(); \r\n ' +
                            '           if(W.WebBrowser.msie)\r\n ' +
                            '           {\r\n ' +
                            '               window.document.onmousedown = setop;\r\n ' +
                            '           } else {\r\n ' +
                            '               window.onmousedown = setop;\r\n ' +
                            '           }\r\n ' +
                            '           getObjById("dtit").onmousedown = drag.downhdl; \r\n ' +
                            '           drag.reghdl(window);\r\n ' +
                            '           drag.reghdl(dlgArgs().topw);\r\n ' +
                            '           drag.reghdl(W);  \r\n ' +
                            '           if(dlgArgs().link == false)\r\n ' +
                            '           {\r\n ' +
                            '               maskWindow(false,false,2);\r\n ' +
                            '           }\r\n ' +
                            '               W.tool.disContextMenu(document);\r\n ' +
                            '           } catch (ex) {\r\n ' +
                            '               alert("div onload :" + ex.message);\r\n ' +
                            '           }' +
                            ' }; \r\n ' +
                            'var setop = function(evt) {\r\n ' +
                            '   if (!evt) {\r\n ' +
                            '   evt = event || this.parentWindow.event;\r\n ' +
                            '} \r\n ' +
                            'evt.cancelBubble = true; };\r\n ' +
                            'var loadinnfrm = function() {\r\n ' +
                            'try {\r\n ' +
                            'if (dlgArgs().link == "hcode")\r\n ' +
                            '{\r\n ' +
                            '   getObjById("dinner").innerHTML = "Error Page!!!";\r\n ' +
                            '} else {\r\n ' +
                            '   maskWindow(true,false,3);\r\n ' +
                            '   getObjById("dinner").innerHTML = W.tool.buildIFrame(dlgArgs().link,dlgArgs().page,"if (typeof(onIFrameLoad) != \'undefined\') onIFrameLoad(this)");\r\n ' +
                            '}\r\n ' +
                            '} catch (ex) {\r\n ' +
                            'alert("loadinnfrm :" + ex.message);\r\n ' +
                            '}\r\n ' +
                            '}; \r\n ' +
                            'window.loadinndlg = function(vIsCloseAction) {\r\n ' +
                            'try {\r\n ' +
                            'if (typeof(vIsCloseAction) == "undefined")\r\n ' +
                            'vIsCloseAction = false;\r\n ' +
                            'if (vIsCloseAction == false)\r\n ' +
                            '{ if( !frameElement.parentNode )\r\n ' +
                                'return null;\r\n ' +
                                'var frmain = getObjById("frmain");\r\n ' +
                                'var innwin = frmain.contentWindow; \r\n ' +
                                'maskWindow(false,false,4);\r\n ' +
                                'frmain.style.visibility = ""; \r\n ' +
                                'if(W.WebBrowser.msie) { if (typeof(innwin.document) != "unknown")\r\n ' +
                                '   { var inndoc = innwin.document; inndoc.onmousedown = setop; }\r\n ' +
                                '} else {\r\n ' +
                                '   innwin.onmousedown = setop;\r\n ' +
                                '} \r\n ' +
                                'drag.reghdl(innwin);\r\n ' +
                                'innwin.focus();\r\n ' +
                           '}\r\n ' +
                                'return W;\r\n ' +
                           '} catch (ex) {\r\n ' +
                                'alert("loadinndlg :" + ex.message);\r\n ' +
                           '}\r\n ' +
                           '}; \r\n ' +

                            'window.ZIndex = function() {\r\n ' +
                            'return dlgArgs().zIndex;\r\n ' +
                            '}; \r\n ' +
                            'window.cancel = function() {\r\n ' +
                            'if (isReturnValue != null && isReturnType != null)\r\n ' +
                            '{\r\n ' +
                            'return closedlg(isReturnValue, isReturnType);\r\n ' +
                            '} else { return closedlg(); }  }; \r\n ' +
                            'window.closedlg = function(vValue, vType)\r\n ' +
                            '{\r\n ' +
                            'try { var vIFrameObj = getObjById("frmain");\r\n ' +
                            '//if (vIFrameObj) vIFrameObj.src = W.tool.getVoid(); \r\n ' +
                            'maskWindow(false,false,5);\r\n ' +
                            'W.dialog.closeDialog(window, dlgcover, vValue, vType);\r\n ' +
                            '} catch (ex) {\r\n ' +
                            '//alert("closedlg :" + ex.message);\r\n ' +
                            '}\r\n ' +
                            '}; \r\n ' +
                            'window.updateTitle = function(vTitle)\r\n ' +
                            '{\r\n ' +
                            'try {\r\n ' +
                            'if (vTitle != null)\r\n ' +
                            '{\r\n ' +
                            'var vTitleObj = getObjById("txt");\r\n ' +
                            'vTitleObj.innerHTML = vTitle;\r\n ' +
                            '}\r\n ' +
                            '} catch (ex) {\r\n ' +
                            '   alert("updateTitle :" + ex.message);\r\n ' +
                            '}\r\n ' +
                            '}; \r\n ' +
                            'window.updateCancel = function(vValue, vType)\r\n ' +
                            '{\r\n ' +
                            'try {\r\n ' +
                            '   isReturnValue = vValue;\r\n ' +
                            '   isReturnType = vType;\r\n ' +
                            '} catch (ex) {\r\n ' +
                            '   alert("updateCancel :" + ex.message); }\r\n ' +
                            '}; \r\n ' +
                            'window.linkURL = function(vURL)\r\n ' +
                            '{\r\n ' +
                            '   try {\r\n ' +
                            '       var vIFrame = getObjById("frmain");\r\n ' +
                            '       if (vIFrame != null)\r\n ' +
                            '       {\r\n ' +
                            '           vIFrame.src = vURL; maskWindow(true,false,3);\r\n ' +
                            '       }\r\n ' +
                            '   } catch (ex) {\r\n ' +
                            '       alert("linkURL :" + ex.message); }\r\n ' +
                            '};\r\n ' +
                            ' window.resizedlg = function(vDialogWidth, vDialogHeight)\r\n ' +
                            '{\r\n ' +
                            '    try {\r\n ' +
                            '        var vDialogId = dlgArgs().frameId; \r\n ' +
                            '        vDialogWidth = parseInt(vDialogWidth,10) + 30;\r\n ' +
                            '        vDialogHeight = parseInt(vDialogHeight,10) + 40; \r\n ' +
                            '        W.tool.setStyle( frameElement,{width : vDialogWidth + "px", height : vDialogHeight + "px"});\r\n ' +
                            '        recontze("resizedlg"); loadbtnevt(); \r\n ' +
                            '        W.dialog.resize(window, vDialogId, vDialogWidth, vDialogHeight); }\r\n ' +
                            '        catch (ex) {\r\n ' +
                            '            alert("resizedlg :" + ex.message);\r\n ' +
                            '        }\r\n ' +
                            '}; \r\n ' +
                            'var loadbtnevt = function()\r\n ' +
                            '{\r\n ' +
                            '   try {\r\n ' +
                            '       if (W.WebBrowser.msie) { }; \r\n ' +
                            '       var vTitleObj = getObjById("txt");\r\n ' +
                            '       if (dlgArgs().tit != "")\r\n ' +
                            '       {\r\n ' +
                            '           vTitleObj = dlgArgs().tit;\r\n ' +
                            '       }\r\n ' +
                            '       vTitleObj.style["top"] = "6px"; \r\n ' +
                            '       getObjById("xbtn").onmouseover = function()\r\n ' +
                            '       {\r\n ' +
                            '           this.className = "ui-icon ui-state-hover";\r\n ' +
                            '           this.style["top"] = "4px";\r\n ' +
                            '           this.style["right"] = "14px"; }; \r\n ' +
                            '           getObjById("xbtn").onmouseout = function()\r\n ' +
                            '           {\r\n ' +
                            '               this.className = "ui-icon";\r\n ' +
                            '               this.style["top"] = "5px";\r\n ' +
                            '               this.style["right"] = "15px";\r\n ' +
                            '           };\r\n ' +
                            '           getObjById("xbtn").onclick = cancel;\r\n ' +
                            '       } catch (ex) {\r\n ' +
                            '           alert("loadbtnevt :" + ex.message); ' +
                            '       } ' +
                            '}; \r\n ' +
                            '})();';
            return vJavascript;
        },

        buildHTML: function (vIFrame) {
            try {
                var vCSS = tool.getLink('/div.dialog.css')
                var vPath = tool.getPath();

                tdoc.body.appendChild(vIFrame);
                var doc = vIFrame.contentWindow.document;
                doc.open();

                var vHTML = "";
                vHTML += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n';
                vHTML += '<html xmlns="http://www.w3.org/1999/xhtml">\r\n';

                vHTML += '<head>\r\n';
                vHTML += '	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\r\n';
                vHTML += '  <link href="' + vPath + 'div.dialog.css" type="text/css" rel="stylesheet"/>\r\n';
                vHTML += '	<script type="text/javascript">\r\n';
                vHTML += this.buildDialogLineScript();
                vHTML += '	\r\n</script>\r\n';
                vHTML += '	<title>Empty</title>\r\n';
                vHTML += '</head>\r\n';

                vHTML += '<body>\r\n';
                vHTML += '    <div id="contain" class="contain">\r\n';
                vHTML += '	    <div id="dtit" class="dlgtit">\r\n';
                vHTML += '			<span id="txt"></span>\r\n';
                vHTML += '			<div id="xbtn" class="ui-icon"></div>\r\n';
                vHTML += '		</div>\r\n';
                vHTML += '		<div id="dinner" class="dlginner"></div>\r\n';
                vHTML += '		<div id="dfoot" class="dlgfoot2" style="display:none;">\r\n';
                vHTML += '			<ul id="btns">\r\n';
                vHTML += '				<li id="dark"></li>\r\n';
                vHTML += '			</ul>\r\n';
                vHTML += '		</div>\r\n';
                vHTML += '	</div>\r\n';
                vHTML += '	<div id="throbber" style="z-index: 2;filter:alpha(opacity=8);opacity:0.08;background-color:#333333;position:absolute;display:none;border:solid 1px yellow; text-align:center; vertical-align:top;"></div>\r\n';
                vHTML += '	<div id="syncIcon" style="z-index: 3;position:absolute;text-align:center;vertical-align:top;display:none;">\r\n';
                vHTML += '	    <img alt="Mask Icon" src="' + vPath + 'images/wait.gif" />\r\n';
                vHTML += '	</div>\r\n';
                vHTML += '</body>\r\n';
                vHTML += '</html>\r\n';

                doc.writeln(vHTML);
                doc.close();
            } catch (ex) {
                alert('buildHTML :' + ex.message);
            }
        },

        getZIndex: function (vType) {
            var vZIndex = getzi();
            var isParent = '';
            try {
                var vWindow = getTop();
                if (typeof (vWindow.parent.ZIndex) == 'function') {
                    vZIndex = vWindow.parent.ZIndex() + 2;
                    //isParent = 'window.parent';

                }
            } catch (ex) {
                vZIndex += 1000;
            }
            // alert(isParent + ' >>> ' + vType + '  >>> ' + vZIndex);
            return vZIndex;
        },

        resize: function (vWindow, vDialogID, vDialogWidth, vDialogHeight) {
            try {
                var dfrm = ('object' == typeof (vWindow)) ? vWindow.frameElement : document.getElementById(vWindow);
                var clsize = tool.getClientSize(twin);
                var spos = tool.getScrollPos(twin);

                //var it = ( vLocation && l.top ) ? spos.Y + l.top : Math.max( spos.Y + ( clsize.h - vDialogHeight - 20 ) / 2, 0 );
                //var il = ( vLocation && l.left ) ? spos.X + l.left : Math.max( spos.X + ( clsize.w - vDialogWidth - 20 ) / 2, 0 );

                var it = Math.max(spos.Y + (clsize.h - vDialogHeight - 20) / 2, 0);
                var il = Math.max(spos.X + (clsize.w - vDialogWidth - 20) / 2, 0);

                tool.setStyle(dfrm,
			    {
			        'top': parseInt(it, 10) + 'px',
			        'left': parseInt(il, 10) + 'px',
			        'width': parseInt(vDialogWidth, 10) + 'px',
			        'height': parseInt(vDialogHeight, 10) + 'px'
			    });
            } catch (ex) {
                alert('resize :' + ex.message);
            }
        },

        open: function (vDialogType, vURL, vDialogWidth, vDialogHeight, vIsCover, vLink, vIFrameID, vIsScroll, vLocation) {
            try {
                if (typeof (vIsCover) == 'undefined') vIsCover = true;
                if (typeof (vLink) == 'undefined') vLink = true;
                if (typeof (vIFrameID) == 'undefined') vIFrameID = 'win_' + ((Math.random()) * (100000000000000000));

                var vZIndex = this.getZIndex('open') + 1;
                var dinfo = { tit: '',  // Get the title from iframe page
                    type: vDialogType,
                    page: vURL,
                    win: window,
                    topw: twin,
                    link: vLink,
                    sc: vIsScroll,
                    width: vDialogWidth,
                    height: vDialogHeight,
                    zIndex: vZIndex,
                    isHttps: vIsHttps,
                    frameId: vIFrameID
                };

                var clsize = tool.getClientSize(twin);
                var spos = tool.getScrollPos(twin);

                var it = (vLocation && vLocation.top) ? spos.Y + vLocation.top : Math.max(spos.Y + (clsize.h - vDialogHeight - 20) / 2, 0);
                var il = (vLocation && vLocation.left) ? spos.X + vLocation.left : Math.max(spos.X + (clsize.w - vDialogWidth - 20) / 2, 0);

                //var vZIndex = this.getZIndex('open');			
                //alert('open :' + vZIndex);	

                var dfrm = tdoc.createElement('iframe');
                tool.reStyle(dfrm);
                if (vIFrameID) {
                    dfrm.id = vIFrameID;
                    dfrm.className = 'win_dialog_obj';
                }

                dfrm.frameBorder = 0;
                dfrm.scrolling = "no";

                var vIsHTML = false;
                if (vIsHTML) {
                    var vDialogFrame = tool.getPath() + 'div.dialog.html';
                    dfrm.src = vDialogFrame;
                }

                tool.setStyle(dfrm,
			    {
			        'position': 'absolute', 'top': it + 'px', 'left': il + 'px',
			        'width': vDialogWidth + 'px', 'height': vDialogHeight + 'px', 'zIndex': vZIndex
			    });

                if (vIsScroll) {
                    var schdl = function () {
                        var rel = tool.getScrollPos(twin);
                        tool.setStyle(dfrm, { 'top': rel.Y + config.it + 'px', 'left': rel.X + config.il + 'px' });
                    };
                    config.it = it - spos.Y;
                    config.il = il - spos.X;
                    tool.addEvent(twin, 'scroll', schdl);
                };

                if (vIsCover) {
                    this.dcover(vZIndex, vDialogHeight, it);
                } else {
                    if (cover) cover = null;
                }

                if (vIsHTML) {
                    tdoc.body.appendChild(dfrm);
                    dfrm._dlgargs = dinfo;
                } else {
                    dfrm._dlgargs = dinfo;
                    this.buildHTML(dfrm);
                }
            } catch (ex) {
                alert('Open Exception :' + ex.message);
            }
        },

        opendlg2: function (t, p, w, h, c, i, n, s, l) {
            if (c) this.dcover(); else { if (cover) cover = null; }
            var dinfo = { tit: t, page: p, win: window, topw: twin, link: i, sc: s };
            var clsize = tool.getClientSize(twin), spos = tool.getScrollPos(twin);

            var schdl = function () {
                var rel = tool.getScrollPos(twin);
                tool.setStyle(dfrm, { 'top': rel.Y + config.it + 'px', 'left': rel.X + config.il + 'px' });
            };

            var it = (l && l.top) ? spos.Y + l.top : Math.max(spos.Y + (clsize.h - h - 20) / 2, 0);
            var il = (l && l.left) ? spos.X + l.left : Math.max(spos.X + (clsize.w - w - 20) / 2, 0);

            var dfrm = tdoc.createElement('iframe');
            tool.reStyle(dfrm);
            if (n) dfrm.id = n;

            dfrm.frameBorder = 0;
            dfrm.src = tool.getPath() + 'div.dialog.html';

            tool.setStyle(dfrm,
			{
			    'position': 'absolute', 'top': it + 'px', 'left': il + 'px',
			    'width': w + 'px', 'height': h + 'px', 'zIndex': this.getZIndex()
			});

            if (s) {
                config.it = it - spos.Y; config.il = il - spos.X;
            };

            if (s) {
                tool.addEvent(twin, 'scroll', schdl);
            }
            tdoc.body.appendChild(dfrm);
            dfrm._dlgargs = dinfo;
        },

        opendlg3: function (t, p, w, h, c, i, n, s, l) {
            if (c) this.dcover(); else { if (cover) cover = null; }
            var dinfo = { tit: t, page: p, win: window, topw: twin, link: i, sc: s };
            var clsize = tool.getClientSize(twin), spos = tool.getScrollPos(twin);

            var schdl = function () {
                var rel = tool.getScrollPos(twin);
                tool.setStyle(dfrm, { 'top': rel.Y + config.it + 'px', 'left': rel.X + config.il + 'px' });
            };

            var it = (l && l.top) ? spos.Y + l.top : Math.max(spos.Y + (clsize.h - h - 20) / 2, 0);
            var il = (l && l.left) ? spos.X + l.left : Math.max(spos.X + (clsize.w - w - 20) / 2, 0);

            var dfrm = tdoc.createElement('iframe'); tool.reStyle(dfrm); if (n) dfrm.id = n;
            dfrm.frameBorder = 0; dfrm.src = tool.getPath() + 'div.dialog.html';
            tool.setStyle(dfrm,
			{
			    'position': 'absolute', 'top': it + 'px', 'left': il + 'px',
			    'width': w + 'px', 'height': h + 'px', 'zIndex': this.getZIndex()
			}); if (s) { config.it = it - spos.Y; config.il = il - spos.X; };
            if (s) tool.addEvent(twin, 'scroll', schdl); tdoc.body.appendChild(dfrm); dfrm._dlgargs = dinfo;
        },

        dcover: function (vZIndex, vDlgHeight, vDlgLocationY) {
            if (typeof (vZIndex) == 'undefined') {
                vZIndex = this.getZIndex('dcover');
            }

            cover = tdoc.createElement('div');
            tool.reStyle(cover);
            tool.setStyle(cover,
			{
			    'position': 'absolute', 'zIndex': vZIndex, 'top': '0px',
			    'left': '0px', 'backgroundColor': config.bgcolor
			});

            tool.setOpac(cover, config.opac);
            if (WebBrowser.msie && !binfo.i7) {
                var ifrm = tdoc.createElement('iframe');
                tool.reStyle(ifrm);
                ifrm.hideFocus = true;
                ifrm.frameBorder = 0;
                ifrm.src = tool.getVoid();

                tool.setStyle(ifrm,
				{
				    'width': '100%', 'height': '100%', 'position': 'absolute', 'left': '0px',
				    'top': '0px', 'filter': 'progid:DXImageTransform.Microsoft.Alpha(opacity=0)'
				});
                cover.appendChild(ifrm);
            }

            tool.addEvent(twin, 'resize', resizehdl);
            resizehdl(vDlgHeight, vDlgLocationY);
            tdoc.body.appendChild(cover);
        },

        gcover: function () {
            return cover;
        },

        hcover: function (o) {
            tool.removeNode(o);
            cover = null;
            o = null;
        }
    };
})();


