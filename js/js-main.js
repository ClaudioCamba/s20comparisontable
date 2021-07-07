// You need to add the javascript functionality for your test here so it will work live on the page 

$(document).ready(function() {
    //toggle the component with class accordion_body
    $(".accordion_head").on('click', function() {
        var pznSec = $(this).text();

        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").html('+').removeClass('btn-minus');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).children(".plusminus").html('−').addClass('btn-minus');
        }
    });
});

//  Confluence Page HTML/Styling Ends here 

//  Replace JavaScript code in script tag here with your test JavaScript code 

window.onload = function() {
    document.getElementById("devicehandle").value = "s9_compare";
    optionControl();
}

function optionControl() {
    // Hide Device
    jQuery(".test-code>div").css("display", "none");
    /* Get the right selection */
    if (jQuery("option:checked").val() == "s9_compare") {
        jQuery(".test-code .s9").css("display", "block");
    } else if (jQuery("option:checked").val() == "s9plus_compare") {
        jQuery(".test-code .s9plus").css("display", "block");
    } else if (jQuery("option:checked").val() == "s10e_compare") {
        jQuery(".test-code .s10e").css("display", "block");
    } else if (jQuery("option:checked").val() == "s10_compare") {
        jQuery(".test-code .s10").css("display", "block");
    } else if (jQuery("option:checked").val() == "s10plus_compare") {
        jQuery(".test-code .s10plus").css("display", "block");
    } else if (jQuery("option:checked").val() == "s105g_compare") {
        jQuery(".test-code .s105g").css("display", "block");
    } else if (jQuery("option:checked").val() == "note8_compare") {
        jQuery(".test-code .n8").css("display", "block");
    } else if (jQuery("option:checked").val() == "note9_compare") {
        jQuery(".test-code .n9").css("display", "block");
    } else if (jQuery("option:checked").val() == "note10_compare") {
        jQuery(".test-code .n10").css("display", "block");
    } else if (jQuery("option:checked").val() == "note10plus_compare") {
        jQuery(".test-code .n10plus").css("display", "block");
    } else if (jQuery("option:checked").val() == "note10plus5g_compare") {
        jQuery(".test-code .n10plus5g").css("display", "block");
    } else if (jQuery("option:checked").val() == "11promax_compare") {
        jQuery(".test-code .lo").css("display", "block");
    };
};

/* Add tracking and links overlay */
var toolTipPosition, copyPoz;
var getCTA, getAccordian;

function addTrackingLinks() {
    jQuery(".accordion_head").addClass("tooltip");
    jQuery(".upg-btn-wrap").addClass("addlinks");
    jQuery('<label class="tooltiptext addTrackingText">[Click Me] Update Text & Add Tracking</label>').appendTo(".tooltip");
    jQuery('<label class="tooltiptext addLinkText">[Click Me] Add Links & Tracking</label>').appendTo(".addlinks");

    /* Evenet Handler for tracking/links pop up */
    jQuery(".tooltiptext.addTrackingText").on("click", function() {
        getAccordian = jQuery(this).parent();
        jQuery('.tracking-container').show();
        toolTipPosition = $('.tooltiptext.addTrackingText').index(this);
        console.log('tooltip:' + toolTipPosition);
        copyPoz = $(this).parent().index() / 2;
        console.log(copyPoz);
    });

    jQuery(".tooltiptext.addLinkText").on("click", function() {
        getCTA = jQuery(this).parent();
        jQuery('.editLink-container').show();
        toolTipPosition = $('.tooltiptext.addLinkText').index(this);
        console.log(jQuery(".test-code .upg-btn-wrap a").eq(toolTipPosition));
    });
}
addTrackingLinks();

/* Additional Input field functionality */
function addInputLightBox() {
    var pznSecTest1;
    var pznSecTest2;
    var pznBtnTest1;
    var pznBtnTest2;
    /* Event Handlers for Lightbox Edit Link */
    jQuery(".editLink-container .save-btn").on("click", function() {
        jQuery('.editLink-container').hide();

        for (var v = 0; v < jQuery(".test-code .upg-btn-wrap a").length; v++) {

            // Text
            if (jQuery(".editLink-container .get-text").val().length > 0) {
                jQuery(".test-code .upg-btn-wrap a").eq(v).find('span').text(jQuery(".editLink-container .get-text").val());
            };

            // Link
            if (jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-href-link") == undefined && jQuery(".editLink-container .get-link").val().length < 1) {
                jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-href-link", "https://www.samsung.com/uk/smartphones/galaxy-s20/buy/");
            } else if (jQuery(".editLink-container .get-link").val().length > 0) {
                jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-href-link", jQuery(".editLink-container .get-link").val());
            } else if (jQuery(".editLink-container .get-link").val().length < 1 && jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-href-link").length > 0) {
                // nothing
            } else {
                jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-href-link", "https://www.samsung.com/uk/smartphones/galaxy-s20/buy/");
            };

            // Event
            if (jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-event") == undefined && jQuery(".editLink-container .get-event").val().length < 1) {
                jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-event", 35);
            } else if (jQuery(".editLink-container .get-event").val().length > 0) {
                jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-event", jQuery(".editLink-container .get-event").val());
            } else if (jQuery(".editLink-container .get-event").val().length < 1 && jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-event").length > 0) {
                // nothing
            } else {
                jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-event", 35);
            };

            // Evar
            if (jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-evar") == undefined && jQuery(".editLink-container .get-evar").val().length < 1) {
                jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-evar", 35);
            } else if (jQuery(".editLink-container .get-evar").val().length > 0) {
                jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-evar", jQuery(".editLink-container .get-evar").val());
            } else if (jQuery(".editLink-container .get-evar").val().length < 1 && jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-evar").length > 0) {
                // nothing
            } else {
                jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-evar", 35);
            };

            // Desc
            if (jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-evar-desc") == undefined && jQuery(".editLink-container .get-evar-desc").val().length < 1) {
                jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-evar-desc", "galaxy-s20:highlights:comparison-grid:pre-order");
            } else if (jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-evar-desc") == 'galaxy-s20:highlights:comparison-grid:pre-order' && jQuery(".editLink-container .get-evar-desc").val().length > 0) {
                jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-evar-desc", jQuery(".editLink-container .get-evar-desc").val());
            } else if (jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-evar-desc") == undefined && jQuery(".editLink-container .get-evar-desc").val().length > 0) {
                jQuery(".test-code .upg-btn-wrap a").eq(v).attr("data-aa-evar-desc", jQuery(".editLink-container .get-evar-desc").val());
            };

        };

        if (jQuery(".test-code .upg-btn-wrap a").eq(toolTipPosition).attr("data-aa-evar-desc").length > 0 && jQuery(".editLink-container .get-evar-desc").val().length > 0) {
            jQuery(".test-code .upg-btn-wrap a").eq(toolTipPosition).attr("data-aa-evar-desc", jQuery(".editLink-container .get-evar-desc").val());
        };

    });
    jQuery(".editLink-container .cancel-btn").on("click", function() {
        jQuery('.editLink-container').hide();
    });

    /* Event Handlers for Lightbox Tracking */
    jQuery(".tracking-container .save-btn").on("click", function() {
        jQuery('.tracking-container').hide();

        for (var a = 0; a < jQuery(".accordion_container").length; a++) {

            // Text
            if (jQuery(".tracking-container .get-text").val().length > 0) {
                jQuery(".accordion_container").eq(a).find('.accordion_head').eq(copyPoz).find('.pzn-sec-title').text(jQuery(".tracking-container .get-text").val());
            };

            // Desc
            if (jQuery(".tracking-container .get-evar-desc").val().length < 1 && jQuery(".accordion_container").eq(a).find('.accordion_head').eq(copyPoz).attr('data-aa-evar-desc') == undefined) {
                jQuery(".accordion_container").eq(a).find('.accordion_head').eq(copyPoz).attr('data-aa-evar-desc', 'galaxy-s20:highlights:comparison-grid:section:' + jQuery(".accordion_container").eq(a).find('.accordion_head').eq(copyPoz).find('.pzn-sec-title').text().toLowerCase());
            } else if (jQuery(".tracking-container .get-evar-desc").val().length < 1 && jQuery(".accordion_container").eq(a).find('.accordion_head').eq(copyPoz).attr('data-aa-evar-desc').length > 0) {
                // nothing
            } else {
                jQuery(".accordion_container").eq(a).find('.accordion_head').eq(copyPoz).attr('data-aa-evar-desc', jQuery(".tracking-container .get-evar-desc").val() + ':' + jQuery(".accordion_container").eq(a).find('.accordion_head').eq(copyPoz).find('.pzn-sec-title').text().toLowerCase());
            };

        };

        // Event
        if (jQuery(".tracking-container .get-event").val().length > 0) {
            jQuery('.accordion_container .accordion_head').attr("data-aa-event", jQuery(".tracking-container .get-event").val());
        } else {
            jQuery('.accordion_container .accordion_head').attr("data-aa-event", 26);
        };

        // eVar
        if (jQuery(".tracking-container .get-evar").val().length > 0) {
            jQuery('.accordion_container .accordion_head').attr("data-aa-evar", jQuery(".tracking-container .get-evar").val());
        } else {
            jQuery('.accordion_container .accordion_head').attr("data-aa-evar", 26);
        };
    });

    jQuery(".tracking-container .cancel-btn").on("click", function() {
        jQuery('.tracking-container').hide();
    });
};
addInputLightBox();

function addEditableClass() {
    jQuery(".test-code").find("h5, h4, h3, h2, h1, p, a span, .accordion_body span, .pzn-models td span").addClass("").attr("contenteditable", "true");
    jQuery(".test-code").find(".upg-btn-wrap span, .accordion_head, .accordion_head span").removeClass("").removeAttr("contenteditable");

    jQuery(".test-code a").removeAttr("href");
}
addEditableClass();

// Variables
var accorIndx, txtIndx, copyMov;
// Store edited element
$('.accordion_container .sm-txt, .accordion_container .tab-headr, .accordion_container .tab-parag, .accordion_container .pzn-dis-p').on('input', function() {

    if ($(this).hasClass('sm-txt')) {
        txtIndx = $('.test-code>div[style*="display: block;"] .accordion_container .sm-txt').index(this);
        //accorIndx = $('.test-code>div[style*="display: block;"] .accordion_container .sm-txt').parent().parent().index('.accordion_container');
        copyMov = $(this).html();
    };

    if ($(this).hasClass('tab-headr')) {
        txtIndx = $('.test-code>div[style*="display: block;"] .accordion_container .tab-headr').index(this);
        copyMov = $(this).html();
    };

    if ($(this).hasClass('tab-parag')) {
        txtIndx = $('.test-code>div[style*="display: block;"] .accordion_container .tab-parag').index(this);
        copyMov = $(this).html();
    };

    if ($(this).hasClass('pzn-dis-p')) {
        txtIndx = $('.test-code>div[style*="display: block;"] .accordion_container .pzn-dis-p').index(this);
        copyMov = $(this).html();
    };

});

// Apply updates
$('.accordion_container .sm-txt, .accordion_container .tab-headr, .accordion_container .tab-parag, .accordion_container .pzn-dis-p').on('blur', function() {

    if ($(this).hasClass('sm-txt')) {
        for (var o = 0; o < $('.test-code>div').length; o++) {
            $('.accordion_container').eq(o).find('.sm-txt').eq(txtIndx).html(copyMov);
        };
    };

    if ($(this).hasClass('tab-headr')) {
        for (var o = 0; o < $('.test-code>div').length; o++) {
            $('.accordion_container').eq(o).find('.tab-headr').eq(txtIndx).html(copyMov);
        };
    };

    if ($(this).hasClass('tab-parag')) {
        for (var o = 0; o < $('.test-code>div').length; o++) {
            $('.accordion_container').eq(o).find('.tab-parag').eq(txtIndx).html(copyMov);
        };
    };

    if ($(this).hasClass('pzn-dis-p')) {
        for (var o = 0; o < $('.test-code>div').length; o++) {
            $('.accordion_container').eq(o).find('.pzn-dis-p').eq(txtIndx).html(copyMov);
        };
    };

});

/* Your test styling if in style tags needs to be added here within the brackets */
var s = `<style type="text/css">

            *[contenteditable="true"]{
              display: inline-block!important;
            }
            .at-compare-table small {
              color: #000!important;
            }
            .at-compare-table>article {
              max-width: 768px;
              margin: 0 auto;
            }
            .at-compare-table .pzn-disclaim p,
            .at-compare-table .pzn-disclaim-ios p {
              display: block;
              font-size: 9px;
              line-height: 1.5!important;
              font-family: "SamsungOne",arial;
              font-weight: 500;
            }
            .at-compare-table{
                font-family: "SamsungSharpSans",arial;
                background: #fff;
                margin-bottom: 0!important;
            }
            .cld-intro-txt, .cld-intro-img, .accordion_container{
                max-width: 1440px;
                color: #000; /* background: #000; */
            }
            .at-compare-table > article {
              padding-top: 86px!important;
              padding-bottom: 43px!important;
              /*padding-right: 20px;
              padding-left: 20px;*/
            }
            .at-compare-table {
                margin-bottom: 0;
            }
            .at-compare-table article.m_feature-spec.show.ani-fade.hello {
                  padding-top: 86px;
              }
            /* Intro */
            .at-compare-table .cld-intro-txt{
                margin-bottom: 30px;
                text-align: center;
                color: #000;
            }
            .at-compare-table .sm-txt, .at-compare-table .sm-txt, .at-compare-table td span{
              font-family: "SamsungOne",arial;
              font-size: 12px;
              line-height: 1.5;
            }
            .at-compare-table .x-sm-txt{
                font-family: "SamsungOne",arial;
                font-size: 14px;
            }
            .at-compare-table .cld-intro-txt h5{
                font-size: 27px;
                line-height: 1.4;
                margin-bottom: 10px;
                font-family: "SamsungSharpSans",arial;
                font-weight: bold !important;
                text-align: left;
                padding-left: 20px;
                padding-right: 20px;
                text-align: left;
            }
            /* Intro Img */
            .at-compare-table .cld-intro-img img{
                width: 100%;
                height: auto;
                display: block;
                margin: 0 auto;

            }
            /* Accordion */
            .accordion_head span:first-child {
              font-size: 23px;
              border: 1px solid #000;
              padding: 0 7px;
              padding-bottom: 1px;
              border-radius: 50%;
              font-family: Ariel!important;
              font-weight: 100;
              margin-right: 10px;
            }
            .accordion_head{
                color: #000;
                cursor: pointer;
                font-size: 24px;
                line-height: 24px;
                padding: 17px 0;
                border-top: 1px solid rgba(0,0,0,0.5);
                font-family: "SamsungSharpSans",arial;
                font-weight: bold !important;
            }
            .accordion_container .accordion_head:first-child{
                border: none;
            }
            .accordion_body p {
                padding: 18px 0;
                margin: 0px;
                color: #000;
            }
            /* Table CSS */
            .btn-minus{
                padding: 0.3vw 1.5vw;
                font-weight: bold;
            }
            .accordion_container .col-white-txt{
                color: #fff!important;
            }
            .accordion_container table{
                border-collapse: collapse;
                border-spacing: 0;
                width: 100%;
                background:#fff;
                color: #000;
            }
            .accordion_container th, .accordion_container td{
                text-align: center;
                padding: 10px 0;
            }
            .accordion_container th{
                text-align: left;
                width: 40%;
                max-width: 7.55vw;
            }
            tr td span {
                display: block;
            }
            span.tab-headr {
                display: block;
            }
            .accordion_container .tab-headr {
              font-size: 13px;
              line-height: 1.3;
              padding-bottom: 5px;
            }
            .accordion_body tbody tr:first-of-type {
              font-size: 10px;
              vertical-align: text-top;
            }
            .accordion_container .tab-parag{
              display: block;
              font-size: 9px;
              line-height: 1.5!important;
              font-family: "SamsungOne",arial;
              font-weight: 500;
            }
            .accordion_container td img{
                width:24px;
            }.accordion_container td:nth-of-type(2), .accordion_container td:nth-of-type(3){
                border-left: 1px solid rgba(0,0,0,0.15);
                padding-left: 0;
                width: 20%;
            }
            .accordion_container td:nth-of-type(1){
                text-align: center;
                width: 20%;
                /* padding-right: 2.5vw; */

            }
            .red {
                color: #FF6D5B;
            }
            .white {
                color: #fff;
            }
            .accordion_container .upg-btn-wrap span{
              font-size: 14px;
                  letter-spacing: 2px;
                  font-weight: 100;
                  border: 2px solid #000;
                  padding: 15px 20px;
                  color: #000;
                  border-radius: 5px;
                  font-family: "SamsungOne",arial;
                  text-transform: uppercase;
                  font-family: 'sssM',"SamsungOne",arial;
                  font-size: 12px;
                  text-transform: uppercase;
            }
            .accordion_container .upg-btn-wrap{
                text-align: right;
                margin-top: 25px;
                margin-bottom: 25px;
                padding: 10px 0;
            }
            .accordion_container .upg-btn-wrap a {
                cursor: pointer;
            }
            .accordion_container {
              padding: 20px 20px 0;
            }
            .at-compare-table .pzn-screen-size {
              position: relative;
              text-align: center;
            }
            .at-compare-table .pzn-width-one img {
              width: 30px;
            }
            .at-compare-table .pzn-width-two img {
              width: 35px;
            }
            .at-compare-table .pzn-width-three img {
              width: 40px;
            }
            .at-compare-table .pzn-screen-size span {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 12px;
              background: #fff;
              border: 2px solid #fff;
              line-height: 1.1;
            }
            .at-compare-table .pzn-v-btm {
              vertical-align: bottom;
            }
            .at-compare-table .pzn-models td {
              font-family: "SamsungSharpSans",arial;
              font-weight: bold !important;
              line-height: 1.5;
            }
            .accordion_body td {
              padding-left: 3px!important;
              padding-right: 3px!important;
              max-width: 3vw;
            }
            span.tab-parag, span.tab-headr {
              padding-right: 5px;
            }


        </style>`;
jQuery(s).appendTo("head");

/* Keep this function for copying the code block */
function copied() {
    const el = jQuery(".code-block");
    el.select();
    document.execCommand('copy');
}
/* Keep this function for generating the code but change the values to suit your test */
function submission() {
    var cleanHTML;

    /* Add Tracking & HREF for CTA's */
    var getURL, getEvent, getEVar, getEVarDesc, getTxt;
    var getSecEvent, getSecEVar, getSecEVarDesc, getSecTxt;

    for (var t = 0; t < jQuery(".test-code .upg-btn-wrap a").length; t++) {
        // Button
        if ($(".test-code .upg-btn-wrap a").eq(t).attr("data-aa-event") != null) {
            getEvent = jQuery(".test-code .upg-btn-wrap a").eq(t).attr("data-aa-event");
        } else {
            //getEvent = "35";
            jQuery(".test-code .upg-btn-wrap a").eq(t).attr("data-aa-event", "35");
            getEvent = jQuery(".test-code .upg-btn-wrap a").attr("data-aa-event");
        };

        if ($(".test-code .upg-btn-wrap a").eq(t).attr("data-aa-evar") != null) {
            getEVar = jQuery(".test-code .upg-btn-wrap a").eq(t).attr("data-aa-evar");
        } else {
            //getEVar = "35";
            jQuery(".test-code .upg-btn-wrap a").eq(t).attr("data-aa-evar", "35");
            getEVar = jQuery(".test-code .upg-btn-wrap a").attr("data-aa-evar");
        };

        if ($(".test-code .upg-btn-wrap a").eq(t).attr("data-aa-evar-desc") != null) {
            getEVarDesc = jQuery(".test-code .upg-btn-wrap a").eq(t).attr("data-aa-evar-desc");
        } else {
            //  getEVarDesc = "galaxy-s20:highlights:comparison-grid:pre-order";
            jQuery(".test-code .upg-btn-wrap a").eq(t).attr("data-aa-evar-desc", "galaxy-s20:highlights:comparison-grid:pre-order");
            getEVarDesc = jQuery(".test-code .upg-btn-wrap a").attr("data-aa-evar-desc");
        };

        if ($(".test-code .upg-btn-wrap a").eq(t).attr("data-href-link") != null) {
            getURL = jQuery(".test-code .upg-btn-wrap a").eq(t).attr("data-href-link");
            jQuery(".test-code .upg-btn-wrap a").eq(t).attr("href", getURL);
        } else {
            getURL = "https://www.samsung.com/uk/smartphones/galaxy-s20/buy/";
            jQuery(".test-code .upg-btn-wrap a").eq(t).attr("href", getURL);
        };

        // Section
        if ($(".accordion_head").eq(t).attr("data-aa-event") != null) {
            getSecEvent = jQuery(".accordion_head").eq(t).attr("data-aa-event");
        } else {
            //getEvent = "26";
            jQuery(".accordion_head").eq(t).attr("data-aa-event", "26");
            getSecEvent = jQuery(".accordion_head").eq(t).attr("data-aa-event");
        };

        if ($(".accordion_head").eq(t).attr("data-aa-evar") != null) {
            getSecEVar = jQuery(".accordion_head").eq(t).attr("data-aa-evar");
        } else {
            //getEVar = "26";
            jQuery(".accordion_head").eq(t).attr("data-aa-evar", "26");
            getSecEVar = jQuery(".accordion_head").eq(t).attr("data-aa-evar");
        };

        if ($(".accordion_head").eq(t).attr("data-aa-evar-desc") != null) {
            getSecEVarDesc = jQuery(".accordion_head").eq(t).attr("data-aa-evar-desc");
        } else {
            //  getEVarDesc = "galaxy-s20:highlights:comparison-grid:pre-order";
            jQuery(".accordion_head").eq(t).attr("data-aa-evar-desc", "galaxy-s20:highlights:comparison-grid:section");
            getSecEVarDesc = jQuery(".accordion_head").eq(t).attr("data-aa-evar-desc");
        };

        // Add sections title to evar descriptions
        pznBtnTest1 = $('.accordion_head').eq(t).find('.pzn-sec-title').text().toLowerCase();
        pznBtnTest2 = $(".test-code .upg-btn-wrap a").eq(t).attr("data-aa-evar-desc");
        if (pznBtnTest2.includes(pznBtnTest1) == false) {
            $(".test-code .upg-btn-wrap a").eq(t).attr("data-aa-evar-desc", pznBtnTest2 + ':' + pznBtnTest1);
        };

        pznSecTest1 = $('.accordion_head').eq(t).find('.pzn-sec-title').text().toLowerCase();
        pznSecTest2 = $('.accordion_head').eq(t).attr("data-aa-evar-desc");
        if (pznSecTest2.includes(pznSecTest1) == false) {
            $('.accordion_head').eq(t).attr("data-aa-evar-desc", pznSecTest2 + ':' + pznSecTest1);
        };

    };

    /* Clean up the entire HTML before getting ready to push it into Code Block */
    jQuery(".test-code").find("h5, h4, h3, h2, h1, p, span, .pzn-models td, .accordion_head").removeClass("").removeAttr("contenteditable");
    jQuery('.tooltiptext.addTrackingText, .tooltiptext.addLinkText').remove();
    jQuery(".accordion_head").removeClass("tooltip");
    jQuery(".upg-btn-wrap").removeClass("addlinks");

    $('.accordion_body').css('display', 'none');
    $('.accordion_head').children(".plusminus").html('+').removeClass('btn-minus');

    var changeAllThis = "h2, a, p, span, strong, h1, h3";
    for (var a = 0; a < jQuery(changeAllThis).length; a++) {
        if (jQuery(changeAllThis).eq(a).text().indexOf("'") > -1) {
            jQuery(changeAllThis).eq(a).text(jQuery(changeAllThis).eq(a).text().replace(/[']/g, "’"));
        }
        if (jQuery(changeAllThis).eq(a).text().indexOf('"') > -1) {
            jQuery(changeAllThis).eq(a).text(jQuery(changeAllThis).eq(a).text().replace(/["]/g, "“"));
        };
    };

    /* Get the right selection */
    if (jQuery("option:checked").val() == "s9_compare") {
        cleanHTML = jQuery(".test-code .s9").html();
    } else if (jQuery("option:checked").val() == "s9plus_compare") {
        cleanHTML = jQuery(".test-code .s9plus").html();
    } else if (jQuery("option:checked").val() == "s10e_compare") {
        cleanHTML = jQuery(".test-code .s10e").html();
    } else if (jQuery("option:checked").val() == "s10_compare") {
        cleanHTML = jQuery(".test-code .s10").html();
    } else if (jQuery("option:checked").val() == "s10plus_compare") {
        cleanHTML = jQuery(".test-code .s10plus").html();
    } else if (jQuery("option:checked").val() == "s105g_compare") {
        cleanHTML = jQuery(".test-code .s105g").html();
    } else if (jQuery("option:checked").val() == "note9_compare") {
        cleanHTML = jQuery(".test-code .n9").html();
    } else if (jQuery("option:checked").val() == "note10_compare") {
        cleanHTML = jQuery(".test-code .n10").html();
    } else if (jQuery("option:checked").val() == "note10plus_compare") {
        cleanHTML = jQuery(".test-code .n10plus").html();
    } else if (jQuery("option:checked").val() == "note10plus5g_compare") {
        cleanHTML = jQuery(".test-code .n10plus5g").html();
    } else if (jQuery("option:checked").val() == "11promax_compare") {
        cleanHTML = jQuery(".test-code .lo").html();
    };

    addEditableClass(); //turn content editable back on
    addTrackingLinks(); //turn tracking/links pop up back on

    cleanHTML = cleanHTML.replace(/\s\s+/g, ' ');

    /* Your test javascript code if any needs to be added here within the brackets */
    var c = `<script type="text/javascript">
                function sendBuyData(data) {
                    s.linkTrackVars="eVar` + getEVar + `,events";
                    s.events="event` + getEvent + `";
                    s.eVar` + getEVar + ` = data;
                    s.tl(this,'o');
                }

                function sendSecData(data) {
                    s.linkTrackVars="eVar` + getSecEVar + `,events";
                    s.events="event` + getSecEvent + `";
                    s.eVar` + getSecEVar + ` = data;
                    s.tl(this,'o');
                }


                holdComparison();
                function holdComparison(){
                    function allForComparison(){
                        jQuery('` + cleanHTML.trim() + `').insertBefore('.m_content-case1.mc_design');

                        $(document).ready(function(){
                            //toggle the component with class accordion_body
                            $(".accordion_head").on('click',function(){
                                if( $(this).next(".accordion_body").is(':visible')){
                                    $(this).next(".accordion_body").slideUp(300);
                                    $(this).children(".plusminus").html('+').removeClass('btn-minus');
                                }else {
                                    $(this).next(".accordion_body").slideDown(300);
                                    $(this).children(".plusminus").html('−').addClass('btn-minus');
                                }
                            });

                            $(".upg-btn-wrap a").on('click',function(){
                                sendBuyData($(this).attr('data-aa-evar-desc'));
                            });
                            $(".at-compare-table .accordion_head").on('click',function(){
                                sendSecData($(this).attr('data-aa-evar-desc'));
                            });
                        });
                    };

                    var jquerycheck = setInterval(function() {
                        if (window.$){
                            clearInterval(jquerycheck);
                            allForComparison();
                        }
                    }, 100);
                }
                <` + `/script>`;
    jQuery(".code-block").val(s + '\n' + c);
}
/* Find all content editable fields and change the way test is pasted into them */
for (var i = 0; i < jQuery('[contenteditable]').length; i++) {
    jQuery('[contenteditable]')[i].addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertHTML", false, text);
    });
};