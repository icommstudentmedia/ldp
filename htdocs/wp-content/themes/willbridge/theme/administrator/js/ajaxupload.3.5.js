/**
 * @package WordPress
 * @subpackage Willbridge
 * @since Willbridge 1.0
 */

/**
 * Ajax upload
 * Project page - http://valums.com/ajax-upload/
 * Copyright (c) 2008 Andris Valums, http://valums.com
 * Licensed under the MIT license (http://valums.com/mit-license/)
 * Version 3.5 (23.06.2009)
 */


(function(){function n(a){return/[.]/.exec(a)?/[^.]+$/.exec(a.toLowerCase()):""}function m(a){return a.replace(/.*(\/|\\)/,"")}function k(b){if(!b.pageX&&b.clientX){var c=1;var d=document.body;if(d.getBoundingClientRect){var e=d.getBoundingClientRect();c=(e.right-e.left)/d.clientWidth}return{x:b.clientX/c+a.body.scrollLeft+a.documentElement.scrollLeft,y:b.clientY/c+a.body.scrollTop+a.documentElement.scrollTop}}return{x:b.pageX,y:b.pageY}}function j(a){var b,c,d,e;var f=i(a);b=f.left;d=f.top;c=b+a.offsetWidth;e=d+a.offsetHeight;return{left:b,right:c,top:d,bottom:e}}function h(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ")}function g(a,b){if(!f(a,b))a.className+=" "+b}function f(a,b){return a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))}function d(a,c,d){if(b.addEventListener){a.addEventListener(c,d,false)}else if(b.attachEvent){var e=function(){d.call(a,b.event)};a.attachEvent("on"+c,e)}}function c(b){if(typeof b=="string")b=a.getElementById(b);return b}var a=document,b=window;var e=function(){var b=a.createElement("div");return function(a){b.innerHTML=a;var c=b.childNodes[0];b.removeChild(c);return c}}();if(document.documentElement["getBoundingClientRect"]){var i=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=1;if(d.getBoundingClientRect){var i=d.getBoundingClientRect();h=(i.right-i.left)/d.clientWidth}if(h>1){f=0;g=0}var j=b.top/h+(window.pageYOffset||e&&e.scrollTop/h||d.scrollTop/h)-f,k=b.left/h+(window.pageXOffset||e&&e.scrollLeft/h||d.scrollLeft/h)-g;return{top:j,left:k}}}else{var i=function(a){if(b.jQuery){return jQuery(a).offset()}var c=0,d=0;do{c+=a.offsetTop||0;d+=a.offsetLeft||0}while(a=a.offsetParent);return{left:d,top:c}}}var l=function(){var a=0;return function(){return"ValumsAjaxUpload"+a++}}();Ajax_upload=AjaxUpload=function(b,d){if(b.jquery){b=b[0]}else if(typeof b=="string"&&/^#.*/.test(b)){b=b.slice(1)}b=c(b);this._input=null;this._button=b;this._disabled=false;this._submitting=false;this._justClicked=false;this._parentDialog=a.body;if(window.jQuery&&jQuery.ui&&jQuery.ui.dialog){var e=jQuery(this._button).parents(".ui-dialog");if(e.length){this._parentDialog=e[0]}}this._settings={action:"upload.php",name:"userfile",data:{},autoSubmit:true,responseType:false,onChange:function(a,b){},onSubmit:function(a,b){},onComplete:function(a,b){}};for(var f in d){this._settings[f]=d[f]}this._createInput();this._rerouteClicks()};AjaxUpload.prototype={setData:function(a){this._settings.data=a},disable:function(){this._disabled=true},enable:function(){this._disabled=false},destroy:function(){if(this._input){if(this._input.parentNode){this._input.parentNode.removeChild(this._input)}this._input=null}},_createInput:function(){var b=this;var c=a.createElement("input");c.setAttribute("type","file");c.setAttribute("name",this._settings.name);var e={position:"absolute",margin:"-5px 0 0 -175px",padding:0,width:"220px",height:"30px",fontSize:"14px",opacity:0,cursor:"pointer",display:"none",zIndex:2147483583};for(var f in e){c.style[f]=e[f]}if(!(c.style.opacity==="0")){c.style.filter="alpha(opacity=0)"}this._parentDialog.appendChild(c);d(c,"change",function(){var a=m(this.value);if(b._settings.onChange.call(b,a,n(a))==false){return}if(b._settings.autoSubmit){b.submit()}});d(c,"click",function(){b.justClicked=true;setTimeout(function(){b.justClicked=false},3e3)});this._input=c},_rerouteClicks:function(){var b=this;var c,e={top:0,left:0},f=false;d(b._button,"mouseover",function(d){if(!b._input||f)return;f=true;c=j(b._button);if(b._parentDialog!=a.body){e=i(b._parentDialog)}});d(document,"mousemove",function(a){var d=b._input;if(!d||!f)return;if(b._disabled){h(b._button,"hover");d.style.display="none";return}var i=k(a);if(i.x>=c.left&&i.x<=c.right&&i.y>=c.top&&i.y<=c.bottom){d.style.top=i.y-e.top+"px";d.style.left=i.x-e.left+"px";d.style.display="block";g(b._button,"hover")}else{f=false;if(!b.justClicked){d.style.display="none"}h(b._button,"hover")}})},_createIframe:function(){var b=l();var c=e('<iframe src="javascript:false;" name="'+b+'" />');c.id=b;c.style.display="none";a.body.appendChild(c);return c},submit:function(){var b=this,c=this._settings;if(this._input.value===""){return}var e=m(this._input.value);if(!(c.onSubmit.call(this,e,n(e))==false)){var f=this._createIframe();var g=this._createForm(f);g.appendChild(this._input);g.submit();a.body.removeChild(g);g=null;this._input=null;this._createInput();var h=false;d(f,"load",function(d){if(f.src=="javascript:'%3Chtml%3E%3C/html%3E';"||f.src=="javascript:'<html></html>';"){if(h){setTimeout(function(){a.body.removeChild(f)},0)}return}var g=f.contentDocument?f.contentDocument:frames[f.id].document;if(g.readyState&&g.readyState!="complete"){return}if(g.body&&g.body.innerHTML=="false"){return}var i;if(g.XMLDocument){i=g.XMLDocument}else if(g.body){i=g.body.innerHTML;if(c.responseType&&c.responseType.toLowerCase()=="json"){if(g.body.firstChild&&g.body.firstChild.nodeName.toUpperCase()=="PRE"){i=g.body.firstChild.firstChild.nodeValue}if(i){i=window["eval"]("("+i+")")}else{i={}}}}else{var i=g}c.onComplete.call(b,e,i);h=true;f.src="javascript:'<html></html>';"})}else{a.body.removeChild(this._input);this._input=null;this._createInput()}},_createForm:function(b){var c=this._settings;var d=e('<form method="post" enctype="multipart/form-data"></form>');d.style.display="none";d.action=c.action;d.target=b.name;a.body.appendChild(d);for(var f in c.data){var g=a.createElement("input");g.type="hidden";g.name=f;g.value=c.data[f];d.appendChild(g)}return d}}})()