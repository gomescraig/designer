/*! Unveil  */
!function(t){t.fn.unveil=function(i,e){function n(){var i=a.filter(function(){var i=t(this);if(!i.is(":hidden")){var e=o.scrollTop(),n=e+o.height(),r=i.offset().top,s=r+i.height();return s>=e-u&&n+u>=r}});r=i.trigger("unveil"),a=a.not(r)}var r,o=t(window),u=i||0,s=window.devicePixelRatio>1,l=s?"data-src-retina":"data-src",a=this;return this.one("unveil",function(){var t=this.getAttribute(l);t=t||this.getAttribute("data-src"),t&&(this.setAttribute("src",t),"function"==typeof e&&e.call(this))}),o.on("scroll.unveil resize.unveil lookup.unveil",n),n(),this}}(window.jQuery||window.Zepto);
  