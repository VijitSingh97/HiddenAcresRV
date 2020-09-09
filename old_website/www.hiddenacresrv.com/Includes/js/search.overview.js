function AdjustHeight(vDescMinHeight) {
    var vLocationY = 0;
    var vDescSitesHeight = 18;

    var vTempY = 0;
    var vOverviewObj = $('div.overview_desc');
    if (vOverviewObj.length > 0) {
        vTempY = vOverviewObj.position().top + vOverviewObj.height() + 10;
    }

    $('div.overview_desc_sites').each(function(index) {
        var vObj = $(this);
        var vTop = vObj.position().top;
        var vLeft = vObj.position().left;
        //if (index <= 3) {
        vDescSitesHeight = vObj.height();
        if (vLocationY < vTop) vLocationY = vTop;
        //}
    });

    if (vLocationY > 0) {
        vLocationY = vLocationY + vDescSitesHeight;
    }

    if (vDescMinHeight < vLocationY) {
        vDescMinHeight = vLocationY;
    }

    if (vTempY > vDescMinHeight) {
        vDescMinHeight = vDescMinHeight + 10;
        vDescMinHeight = vTempY;
    }

    var vIsAdjust = false;
    var vIsShowMore = false;
    if (vLocationY > 0 && vLocationY < 400) {

        var vLastY = 0;
        $('div.rates_row').each(function(index) {
            var vObj = $(this);
            var vTop = vObj.position().top;
            var vLeft = vObj.position().left;
            var vHeight = vObj.height();

            if (vTop < vDescMinHeight && (vTop + vHeight) >= vDescMinHeight) {
                vDescMinHeight = vTop + vHeight;
                vIsAdjust = true;
            } else
                if ((vTop + 20) >= vDescMinHeight) {
                vDescMinHeight = vTop + 20;
            }

            if (vLastY < (vTop + vHeight)) {
                vLastY = vTop + vHeight;
            }
        });
        if (vIsAdjust) {
            //vDescMinHeight = vDescMinHeight;
        }

        if (vLastY > vDescMinHeight) {
            vIsShowMore = true;
        }
    }
    return { Height: vDescMinHeight, IsShowMore: vIsShowMore };
}

$(document).ready(function() {
    var vIsIE = jQuery.browser.msie;
    var vDescriptHeight;
    var vAmenOnSiteHeight;
    var vAmenNearbyHeight;
    var vRecOnSiteHeight;
    var vRecNearbyHeight;
    var vOnsiteHeight = 200;
    var vAddHeight = 10;
    var vIsMaxDescript = false;
    var vIsMaxAmenities = false;
    var vIsMaxRecreation = false;
    var vTempAddHeight = 6;
    if (vIsIE) vTempAddHeight = 0;
    var vUpImage = LinkPath("/images/up.png");
    var vDownImage = LinkPath("/images/down.png");

    var vDivDescHeight = 385;
    var vDescMinHeight = 375;
    var vNearbyMoreHeight = 148;
    var vAmenitesHeight = 350;

    if ($('#zd_dReviewList').html() != "") {
        vDivDescHeight = 256;
        vDescMinHeight = 175;
        vNearbyMoreHeight = 28;
        vAmenitesHeight = 240;
        vOnsiteHeight = 165;
        $("div.descript").css('height', (vDivDescHeight - 77) + 'px');
        $('div.amen-col').css('height', vDivDescHeight + 'px');
        $('div.rec-col').css('height', vDivDescHeight + 'px');
    } else {
        var vAdjustObj = AdjustHeight(vDescMinHeight);
        vDescMinHeight = vAdjustObj.Height;
    }

    $('html').addClass('js');

    function AddDescriptMore() {
        $('div.descript-text').wrapInner('<div class="overview_desc_inner"></div>').each(function(index) {

            var $container = $(this);
            var $inner = $container.find('div.overview_desc_inner');

            var vObj = $("div.descript");
            var vHeight = GetHeight($inner);

            if (typeof (vDescriptHeight) == 'undefined')
                vDescriptHeight = vHeight;
            else
                vHeight = vDescriptHeight;

            // alert($inner.height() + " > " + vObj.height());
            if (vObj != null && $inner.height() + 10 > vObj.height()) {

                $("a.description-arrows").css('visibility', 'visible');

                vObj.css('height', vDescMinHeight);
                $container.css('height', vObj.height() + 'px');
                vReadMore = '<div class="tag"><p>&hellip; <a href="#">more</a></p></div>';

                $(vReadMore).appendTo($container).find('a').click(function() {
                    vIsMaxDescript = true;
                    $("a.description-arrows").find('img')[0].src = vUpImage;

                    if (vObj != null) {
                        vObj.animate({ height: vHeight + 33 }, 'med');
                        $(this).parents('div.tag').remove();
                    }
                    return false;
                });
            }
        });
    }

    function AddAmenitiesMore() {
        $('div.amen-onsite-items, div.amen-nearby-items').wrapInner('<div class="container-inner"></div>').each(function(index) {
            var $container = $(this);
            var $classname = $container.attr('class'); //$container.attr('className');
            var $inner = $container.find('div.container-inner');
            var $height = GetHeight($container);

            if ($classname == 'amen-nearby-items') {
                if (typeof (vRecNearbyHeight) == 'undefined')
                    vAmenNearbyHeight = $height;
                else
                    $height = vAmenNearbyHeight;
            }

            var vIsContinue = false;
            if ($height > vOnsiteHeight && ($classname == 'amen-onsite-items')) {
                vIsContinue = true;
                $container.css('height', (vOnsiteHeight - vTempAddHeight) + 'px');

            } else
                if ($height > vNearbyMoreHeight && $classname == 'amen-nearby-items') {
                var vRecColheight = GetHeight($('div.amen-col')); //parseInt($('div.amen-col').css('height'), 10);

                var vRecOnsiteItemsHeight = GetHeight($('div.amen-onsite-items')); //parseInt($('div.amen-onsite-items').attr('clientHeight'), 10);
                var vTempHeight = vRecColheight - vRecOnsiteItemsHeight - 30;

                if ($height > vTempHeight) {
                    vIsContinue = true;
                    $container.css('height', (vTempHeight - vTempAddHeight) + 'px');
                }
            } else {
                $container.css('height', $height + 'px');
            }

            if (vIsContinue && $container != null) {

                var vHeight = $inner.height();
                $('<div class="tag"><p>&hellip; <a href="#">more</a></p></div>').appendTo($container).find('a').click(function() {
                    vIsMaxAmenities = true;
                    $("a.amenities-double-down-arrows").find('img')[0].src = vUpImage;

                    if ($container != null) {
                        if ($classname == 'amen-onsite-items') {
                            var vAmenColObj = $("div.amen-col");
                            var vTempHeight = GetHeight(vAmenColObj) + vHeight - vOnsiteHeight + vAddHeight; //parseInt(vAmenColObj.css('height'), 10) + vHeight - vOnsiteHeight + vAddHeight;
                            vAmenColObj.css('height', vTempHeight + 'px');

                            //$container.animate({height: vHeight + 3}, 'med'); // Safari Min error.
                            $container.css('height', vHeight + 'px');
                            $(this).parents('div.tag').remove();
                        } else
                            if ($classname == 'amen-nearby-items') {
                            var vAmenOnSiteItemsHeight = GetHeight($('div.amen-onsite-items'))//parseInt($('div.amen-onsite-items').css('height'), 10);

                            var vTempHeight = 30 + vAmenOnSiteItemsHeight + $height;
                            $("div.amen-col").css('height', vTempHeight + 'px');

                            $container.css('height', vTempHeight + 'px');
                            //$container.animate({height: vTempHeight + 3}, 'med');                   
                            $(this).parents('div.tag').remove();
                        }
                    }
                    return false;
                });
            }
        });
    }

    function AddRecreationMore() {
        $('div.rec-onsite-items,div.rec-nearby-items').wrapInner('<div class="container-inner"></div>').each(function(index) {
            var $container = $(this);
            var $classname = $container.attr('class'); //$container.attr('className');
            var $inner = $container.find('div.container-inner');
            var $height = GetHeight($container);

            if ($classname == 'rec-nearby-items') {
                if (typeof (vRecNearbyHeight) == 'undefined')
                    vRecNearbyHeight = $height;
                else
                    $height = vRecNearbyHeight;
            }
            //alert("$height:" + $height);
            var vIsContinue = false;
            if ($height > vOnsiteHeight && ($classname == 'rec-onsite-items')) {
                vIsContinue = true;
                $container.css('height', (vOnsiteHeight - vTempAddHeight) + 'px');
            } else
                if ($height > vNearbyMoreHeight && $classname == 'rec-nearby-items') {
                var vRecColheight = GetHeight($('div.rec-col')); //parseInt($('div.rec-col').css('height'), 10);
                var vRecOnsiteItemsHeight = GetHeight($('div.rec-onsite-items')); //parseInt($('div.rec-onsite-items').attr('clientHeight'), 10);
                var vTempHeight = vRecColheight - vRecOnsiteItemsHeight - 30;

                if ($height > vTempHeight) {
                    vIsContinue = true;
                    $container.css('height', (vTempHeight - vTempAddHeight) + 'px');
                }
            } else {
                $container.css('height', $height + 'px');
            }

            if (vIsContinue && $container != null) {
                var vHeight = $inner.height();
                $('<div class="tag"><p>&hellip; <a href="#">more</a></p></div>').appendTo($container).find('a').click(function() {
                    vIsMaxRecreation = true;
                    $("a.recreation-double-down-arrows").find('img')[0].src = vUpImage;

                    if ($container != null) {
                        if ($classname == 'rec-onsite-items') {
                            var vRecColObj = $("div.rec-col");
                            var vTempHeight = GetHeight(vRecColObj) + vHeight - vOnsiteHeight + vAddHeight; ;  //parseInt(vRecColObj.css('height'), 10) + vHeight - vOnsiteHeight + vAddHeight;

                            vRecColObj.css('height', vTempHeight + 'px');

                            //$container.animate({height: vHeight + 3}, 'med');
                            $container.css('height', vHeight + 'px');
                            $(this).parents('div.tag').remove();
                        } else
                            if ($classname == 'rec-nearby-items') {
                            var vRecOnSiteItemsHeight = GetHeight($('div.rec-onsite-items')); //parseInt($('div.rec-onsite-items').css('height'), 10);

                            var vTempHeight = 30 + vRecOnSiteItemsHeight + $height;
                            $("div.rec-col").css('height', vTempHeight + 'px');

                            // $container.animate({height: vTempHeight + 3}, 'med');
                            $container.css('height', vTempHeight + 'px');
                            $(this).parents('div.tag').remove();
                        }
                    }
                    return false;
                });
            }
        });
    }

    function MaxAmenities() {
        $('div.amen-onsite-items').css('height', vAmenOnSiteHeight + 'px');
        $('div.amen-nearby-items').css('height', vAmenNearbyHeight + 'px');
        $("div.amen-col").css('height', (vAmenOnSiteHeight + vAmenNearbyHeight + 30) + 'px');
        $("div.amen-col").find('div.tag').remove();
        vIsMaxAmenities = true;
        $("a.amenities-double-down-arrows").find('img')[0].src = vUpImage;
    }

    function MinAmenities() {
        $('div.amen-onsite-items').css('height', vAmenOnSiteHeight + 'px');
        $('div.amen-nearby-items').css('height', vAmenNearbyHeight + 'px');
        $("div.amen-col").find('div.tag').remove();
        $("div.amen-col").css('height', vDivDescHeight + 'px');
        AddAmenitiesMore();
        vIsMaxAmenities = false;
        $("a.amenities-double-down-arrows").find('img')[0].src = vDownImage;
    }

    function MaxRecreation() {
        $('div.rec-onsite-items').css('height', vRecOnSiteHeight + 'px');
        $('div.rec-nearby-items').css('height', vRecNearbyHeight + 'px');
        $("div.rec-col").css('height', (vRecOnSiteHeight + vRecNearbyHeight + 30) + 'px');
        $("div.rec-col").find('div.tag').remove();
        vIsMaxRecreation = true;
        $("a.recreation-double-down-arrows").find('img')[0].src = vUpImage;
    }

    function MinRecreation() {
        $('div.rec-onsite-items').css('height', vRecOnSiteHeight + 'px');
        $('div.rec-nearby-items').css('height', vRecNearbyHeight + 'px');
        $("div.rec-col").find('div.tag').remove();
        $("div.rec-col").css('height', vDivDescHeight + 'px');
        AddRecreationMore();
        vIsMaxRecreation = false;
        $("a.recreation-double-down-arrows").find('img')[0].src = vDownImage;
    }

    $("a.amenities-double-down-arrows").click(function() {
        if (vIsMaxAmenities == false)
            MaxAmenities();
        else
            MinAmenities();
    });

    $("a.recreation-double-down-arrows").click(function() {
        if (vIsMaxRecreation == false)
            MaxRecreation();
        else
            MinRecreation();
    });

    function LoadReview() {
        var obj = $('#zd_aReviews');
        if (obj != null && obj.length > 0) {
            $('a.write-a-review').each(function(index) {
                var $container = $(this);
                if ($container != null)
                    $container[0].href = obj[0].href;
            });

            $('a.view-reviews').each(function(index) {
                var $container = $(this);
                if ($container != null) {
                    $container[0].href = obj[0].href;
                }
            });
        }
    }

    function LoadAmenites(vOnsite, vNearBy, vIsAmen) {
        var OnsiteHeight = 0;
        var NearbyHeight = 0;
        var divOnsite = $(vOnsite);
        var divNearby = $(vNearBy);

        if (divOnsite != null)
            OnsiteHeight = GetHeight(divOnsite);
        if (divNearby != null)
            NearbyHeight = GetHeight(divNearby);

        //        if (vIsAmen) {
        //            alert(OnsiteHeight)
        //            alert(NearbyHeight)
        //            alert(vAmenitesHeight)
        //        }

        if (OnsiteHeight < 20)
            divOnsite.hide();

        if (NearbyHeight < 20)
            vNearBy.hide();              

        if ((OnsiteHeight + NearbyHeight) > vAmenitesHeight) {
            if (vIsAmen) {
                if (typeof (vAmenOnSiteHeight) == 'undefined')
                    vAmenOnSiteHeight = OnsiteHeight;
                if (typeof (vAmenNearbyHeight) == 'undefined')
                    vAmenNearbyHeight = NearbyHeight;
                //                alert("vAmenOnSiteHeight:" + vAmenOnSiteHeight)
                //                alert("vAmenNearbyHeight:" + vAmenNearbyHeight)
                AddAmenitiesMore();
                $("a.amenities-double-down-arrows").css('visibility', 'visible');
            }
            else {
                if (typeof (vRecOnSiteHeight) == 'undefined')
                    vRecOnSiteHeight = OnsiteHeight;
                if (typeof (vRecNearbyHeight) == 'undefined')
                    vRecNearbyHeight = NearbyHeight;

                AddRecreationMore();

                $("a.recreation-double-down-arrows").css('visibility', 'visible');
            }
        } else {
            
        }
    }

    function GetHeight(vObj) {
        var $Height = vObj.height(); ; //parseInt(vObj.attr('clientHeight'), 10);


        if ($Height <= 0) //IE6
            $Height = parseInt(vObj.attr('offsetHeight'), 10);
        return $Height;
    }

    function MaxDescription() {
        $('div.descript').css('height', (vDescriptHeight + 30) + 'px');
        $("div.descript").find('div.tag').remove();
        vIsMaxDescript = true;
        $("a.description-arrows").find('img')[0].src = vUpImage;
    }

    function MinDescription() {
        $("div.descript").find('div.tag').remove();
        //$("div.descript").css('height', '368px');
        $("div.descript").css('height', vDescMinHeight);
        AddDescriptMore();
        vIsMaxDescript = false;
        $("a.description-arrows").find('img')[0].src = vDownImage;
    }

    $("a.description-arrows").click(function() {
        if (vIsMaxDescript == false)
            MaxDescription();
        else
            MinDescription();
    });

    AddDescriptMore();

    LoadAmenites("div.amen-onsite-items", "div.amen-nearby-items", true);
    LoadAmenites("div.rec-onsite-items", "div.rec-nearby-items", false);
    LoadReview();
    LoadIFrameAD();
});	