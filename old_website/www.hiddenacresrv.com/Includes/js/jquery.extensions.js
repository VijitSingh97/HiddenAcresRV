/* ****************************************************************************
* Get the aspx component object by aspx mehtod or 
* 1. var vAddress = $(":asp('zd_tbDestinationAddress')")
* 2. var vAddress = aspxObj('zd_tbDestinationAddress')
**************************************************************************** */
String.prototype.endsWith = function(str) {
    return (this.match(str + '$') == str)
}

jQuery.extend(
    jQuery.expr[":"].asp = function(a, i, m) {
        
        // JQuery 1.4
        // return jQuery(a).attr('id') && jQuery(a).attr('id').endsWith(m[3]);
        
        // JQuery 1.6
        return !!(id = jQuery(a).attr('id')) && id.endsWith(m[3]);
    }
);

function aspxObj(vAspId)
{
    return $("*[id$='" + vAspId  +"']");
}


function MessageBox(vMessage)
{
    alert('MessageBox\r\n' + vMessage);
}