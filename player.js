function main()
{
	toolTipDiv = document.querySelector("#hplogo");
	x = document.createElement("div");
	x.innerHTML = `<div role="region" tabindex="999" aria-label="Hover Tip" class="ir-hoverTip">
		<div class="sttip">
			<div class="tooltip showPrevBt" >
			
				<div data-iridize-role="title" class="popover-title">
					<button aria-label="Close" data-iridize-role="closeBt">&#10005;</button>
				</div>
				
				<div class="popover-content"><div data-iridize-id="content">This is the content</div></div>
				<div class="showLaterBt">
					<div class="stFooter" data-iridize-id="footer">
						<div>
							<span class="steps-count">Step <span data-iridize-role="stepCount"></span>/<span data-iridize-role="stepsCount"></span></span>
							<button tabindex="999" class="prev-btn default-later-btn" data-iridize-role="laterBt">Remind me later</button>
							<span class="powered-by">Powered by </span>
						</div>
						<div data-iridize-role="nextBtPane">
							<button tabindex="999" class="prev-btn default-prev-btn" data-iridize-role="prevBt">Back</button>
							<a tabindex="999" role="button" aria-label="Next" class="next-btn" data-iridize-role="nextBt" href="javascript:void(0);">Next</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>`;
	
	
	var styles = `
    /*START DYNAMIC*/@import url(https://guidedlearning.oracle.com/player/edge/static/fonts/ir-lato.css);/*END DYNAMIC*/
    
    
    
        /*BASE IRIDIZE THEME CSS*/

    div.sttip div.tooltip div.popover-inner {
        background: #fff;
        padding: 0px;
        border-radius: 4px;
    border: 1px solid #C8C8C8;
    border: 1px solid rgba(150, 150, 150, .5);
        -webkit-background-clip: padding-box;
        /* for Safari */
        background-clip: padding-box;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        /* for IE9+, Firefox 4+, Opera, Chrome */
        /*-webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;*/
    }

    div.sttip div.tooltip.in.top div.tooltip-arrow {
        bottom: -3px;
        border-top: 27px solid;
        border-left: 16px inset transparent;
        border-right: 16px inset transparent;
        z-index: -1;
        width: 2px;
        margin-left: -19px;
        margin-bottom: 0px;
    }

    div.sttip div.tooltip.in.top div.tooltip-arrow.second-arrow {
        bottom: -3px;
        border-top: 22px solid;
        border-left: 13px inset transparent;
        border-right: 13px inset transparent;
        margin-left: -15px;
        z-index: 1;
    }

    div.sttip div.tooltip.in.right div.tooltip-arrow {
        border-right: 27px solid;
        left: -3px;
        border-bottom: 16px inset transparent;
        border-top: 16px inset transparent;
        z-index: -1;
        height: 2px;
        margin-top: -17px;
    }

    div.sttip div.tooltip.in.right div.tooltip-arrow.second-arrow {
        border-right: 22px solid;
        left: -3px;
        border-bottom: 13px inset transparent;
        border-top: 13px inset transparent;
        margin-top: -13px;
        z-index: 1;
    }

    div.sttip div.tooltip.in.bottom div.tooltip-arrow {
        border-bottom: 27px solid;
        border-left: 16px inset transparent;
        border-right: 16px inset transparent;
        top: -3px;
        margin-left: -19px;
        z-index: -1;
        width: 2px;
    }

    div.sttip div.tooltip.in.bottom div.tooltip-arrow.second-arrow {
        border-bottom: 22px solid;
        border-left: 13px inset transparent;
        border-right: 13px inset transparent;
        top: -3px;
        margin-left: -15px;
        z-index: 1;
    }

    div.sttip div.tooltip.in.left div.tooltip-arrow {
        border-left: 27px solid;
        border-bottom: 16px inset transparent;
        border-top: 16px inset transparent;
        right: -3px;
        height: 2px;
        z-index: -1;
        margin-top: -17px;
    }

    div.sttip div.tooltip.in.left div.tooltip-arrow.second-arrow {
        border-left: 22px solid;
        border-bottom: 13px inset transparent;
        border-top: 13px inset transparent;
        right: -3px;
        margin-top: -13px;
        z-index: 1;
    }

    div.sttip div.tooltip.in.bottom-left div.tooltip-arrow {
       margin-top:0;
    }

    div.sttip div.tooltip.in.top-right div.tooltip-arrow {
        left: 11%
    }

    div.sttip div.tooltip.in.bottom-right div.tooltip-arrow {
        left: 11%;
        margin-top:0;
    }

    div.sttip div.tooltip div.popover-title {
        overflow: visible;
        background: none;
    }
      div.sttip .panel-container .guide-content .guide-search-textbox{
          padding:0px 0px 5px 0px;
}


      div.sttip .panel-container .guide-content .guide-search-results{
overflow-y:auto;
max-height: 232px;
width:235px;
}



div.sttip .panel-container .guide-content .iridize-start-panel { background: url('//d2p93rcsj9dwm5.cloudfront.net/static/tipcms/img/startpanelicons.png') no-repeat top left; width: 20px; height: 20px;  display: inline-block; vertical-align:top; margin-top:2px; margin-right:5px; }
div.sttip .panel-container .guide-content .iridize-start-panel.knowledge-base { background-position: 0 0; }
div.sttip .panel-container .guide-content .iridize-start-panel.link { background-position: 0 -20px; }
div.sttip .panel-container .guide-content .iridize-start-panel.video { background-position:0 -60px; }
div.sttip .panel-container .guide-content .iridize-start-panel.walkthrough { background-position: 0 -40px; }


    div.sttip .panel-container .guide-content {
        font-family: ir-lato,sans-serif;
        color: #222222;
        font-size: 14px;
        line-height: 1.6;
        min-height: 120px;
        padding-bottom: 25px;
       padding-left:25px
    }
    div.sttip .panel-container .guide-content-header-text{
        padding: 0px 0px;
        font-size: 12px;
    }

    div.sttip .panel-container .guide-content .search-textbox{
        width:180px;
        padding:0px 10px 0px 0px;
        margin-top:12px;
        background: url(\"//d2p93rcsj9dwm5.cloudfront.net/static/tipcms/img/search_icon.png\") top right no-repeat;
        padding-right:30px;
        border-bottom:solid 1px #D8D8D8;
        outline:none;
        height:24px;
        border-radius:0px;
    }
   .search-textbox:focus{
             outline:none;
    }

    div.sttip .panel-container .guide-content .no-results{
        width:160px;

        padding:15px 10px 0px 0px;
    }
    div.sttip .panel-container .guide-content ul {
        list-style-type: none;
        padding: 0px;    }

    div.sttip .panel-container .guide-content li {
        padding: 10px 10px 0px 0px;
        position: relative;
        cursor: pointer;
    }

    div.sttip .panel-container .guide-content li .item-line {
        display: block;
        margin-top: 5px;
        border-bottom: 1px solid #F0F0F0;
    }

    div.sttip .panel-container .guide-content li:last-child .item-line {
      /*  visibility: hidden */
    }

    div.sttip .guide-list .item-text {
        display: inline-block;
        width: auto;
        cursor: pointer;
        border-radius: 4px;
        line-height: 25px;
        padding: 5px 2px;
          }

    div.sttip .guide-list .item-icon,
    .icon-remove {
        display: none;
        opacity: .7;
        transition: opacity .2s;
        top: 50%;
        position: absolute;
        margin-top: -9px;
    }

    div.sttip button{
        outline: none;
        outline-style: none;
    }

    div.sttip div.tooltip div.popover-title a[data-iridize-role=closeBt],
    div.sttip div.tooltip div.popover-title [data-iridize-role=closeBt] {
        margin-right: 0px;
        margin-top: 15px;
        font-weight: 400;
        transition: font-weight .3s;
        text-decoration:none;
        font-size: 10px;
        float: right;
        opacity: .7;
    }

    div.sttip div.tooltip div.popover-title a[data-iridize-role=closeBt]:hover,
    div.sttip div.tooltip div.popover-title [data-iridize-role=closeBt]:hover,
    div.sttip div.tooltip div.popover-title [data-iridize-role=closeBt]:focus {
        opacity: 1;
        font-weight:700;
    }

    div.sttip .panel-container .guide-content li:hover > .item-icon {
        opacity: .8
    }

    div.sttip .guide-list .item-icon i {
        cursor: pointer
    }

    div.sttip .panel-container .guide-content li:last-child {
        border-bottom: none
    }

    div.sttip .panel-container .guide-content li {
        transition: background .2s, color .2s
    }

    div.sttip .panel-container .guide-content li:hover {
        background: #FFFFFF;
        color: #222222;
    }

    div.sttip .panel-container .guide-footer {
        font-family: ir-lato,sans-serif;
        background: #1b3b3f;
        padding: 5px 0px;
    }

    div.sttip .panel-container .guide-footer p {
        line-height: 35px;
        height: 35px;
        text-align: center;
        font-size: 12px;
        color: #666666;
    }
    div.sttip .panel-container .guide-footer p:hover {
        color: #222222;
    }

    div.sttip .panel-container .guide-header {
        font-family: ir-lato,sans-serif;
        color: #222222;
        font-weight: bold;
        /*text-transform: uppercase;*/
        font-size: 16px;
        padding: 25px 15px 15px 25px;
        /*letter-spacing: 1px;*/
    }

    div.sttip.panel {
        overflow: hidden;
        top: 350px;
        position: fixed;
    }

    div.sttip.panel.rightPanel {
        right: 0px;
        width: 300px;
    }

    div.sttip.panel.leftPanel {
        width: 300px
    }

    div.sttip.rightPanel .panel-container {
        padding-left: 4px
    }

    div.sttip.leftPanel .panel-container {
        padding-right: 4px
    }

    div.sttip.rightPanel .panel-container .guide-list {
        float: left;
        border-radius: 0px 0px 0px 4px;
    }

    div.sttip.leftPanel .panel-container .guide-list {
        float: left;
        border-radius: 0px 0px 4px 0px;
        border-right: 1px solid;
    }

    div.sttip .panel-container .guide-list {
        display: inline-block;
        color: #222222;
        background: #FFFFFF;
        width: 258px;
        position: relative;
        z-index: 1;
    }

    div.sttip .panel-container {
        position: relative;
        overflow: hidden;
        display: inline-block;
        padding-bottom: 6px;
    }

    div.sttip .panel-container,
    div.sttip.rightPanel.panel-opened {
        width: 380px
    }

    div.sttip.rightPanel.panel-closed {
        width: 48px
    }

    div.sttip.leftPanel.panel-opened {
        left: -1px
    }

    div.sttip.leftPanel.panel-closed {
        left: -260px
    }

    div.sttip.rightPanel.panel-close {
        -webkit-transition: width 400ms cubic-bezier(0.175, 0.885, 0.320, 1);
        /* older webkit */

        -webkit-transition: width 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
        -moz-transition: width 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
        -ms-transition: width 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
        -o-transition: width 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
        transition: width 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
        /* easeOutBack */
    }

    div.sttip.rightPanel.panel-open {
        -webkit-transition: width 400ms cubic-bezier(0.600, 0, 0.735, 0.045);
        /* older webkit */

        -webkit-transition: width 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
        -moz-transition: width 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
        -ms-transition: width 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
        -o-transition: width 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
        transition: width 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
        /* easeInBack */
    }

    div.sttip.leftPanel.panel-close {
        -webkit-transition: left 400ms cubic-bezier(0.175, 0.885, 0.320, 1);
        /* older webkit */

        -webkit-transition: left 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
        -moz-transition: left 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
        -ms-transition: left 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
        -o-transition: left 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
        transition: left 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
        /* easeOutBack */
    }

    div.sttip.leftPanel.panel-open {
        -webkit-transition: left 400ms cubic-bezier(0.600, 0, 0.735, 0.045);
        /* older webkit */

        -webkit-transition: left 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
        -moz-transition: left 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
        -ms-transition: left 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
        -o-transition: left 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
        transition: left 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
        /* easeInBack */
    }

    div.sttip .panel-container .flap {
        cursor: pointer;
        padding: 10px 10px 10px 10px;
        display: inline-block;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        box-shadow: none !important;
        width: 20px;
        position: relative;
        z-index: 2;
        margin-top: 0px;
        transition: background .2s;
    }

    div.sttip .panel-container .flap:hover,
    div.sttip .panel-container .flap:focus {
        background: #477b82
    }

    div.sttip .panel-container .flap > .flap-text {
        font-family: Ariel,sans-serif;
        font-size: 12px;
        font-weight: 700;
        line-height: 1.1;
        color: #FFFFFF;
        width: 1em;
        text-align: center;
        cursor: pointer;
    }

    div.sttip.rightPanel .panel-container .flap {
        border-right: none;
        float: left;
        border-width: 0px;
        border-radius: 4px 0px 0px 4px;
        color: #FFF;
        left: 1px;
    }

    div.sttip.leftPanel .panel-container .flap {
        border-left: none;
        border-width: 0px;
        border-radius: 0px 4px 4px 0px;
        color: #FFF;
        right: 1px;
    }

    div.sttip div.tooltip.in.right {
        margin-left: 8px;
        padding-left: 18px;
    }

    div.sttip div.tooltip.in.left {
        margin-left: -16px;
        padding-right: 18px;
    }

    div.sttip div.tooltip.in.top {
        margin-top: -16px;
        padding-bottom: 18px;
    }

    div.sttip div.tooltip.in.bottom {
        margin-top: 8px;
        padding-top: 18px;
    }
    /* CUSTOM THEME */

    div.sttip div.tooltip a,
    div.sttip div.tooltip div.popover-content,
    div.sttip div.tooltip div.popover-inner,
    div.sttip div.tooltip div.stFooter,
    div.sttip .panel-container .guide-content,
    div.sttip .panel-container .guide-footer {
        font-family: ir-lato,sans-serif;
        color: #222222;
        font-size: 14px;
    }

    div.sttip div.tooltip a{
         text-decoration: underline;
    }

    div.sttip div.tooltip div.popover-content,
    div.sttip div.tooltip div.popover-inner,
    div.sttip div.tooltip div.stFooter,
    div.sttip .panel-container .guide-content,
    div.sttip .panel-container .guide-footer {
        font-weight: normal;
    }

    div.sttip div.tooltip div.popover-content {
        background: #fff;
        padding: 0px 25px 0px 25px;
    }

    div.sttip div.tooltip div.popover-content [data-iridize-id=\"content\"] {
        padding-bottom: 25px;
        display: block;
    }
    /* arrow colors*/

    div.sttip div.tooltip.in.right div.tooltip-arrow {
        border-right-color: #C8C8C8;
        border-right-color: rgba(150, 150, 150, .5);
        /*opacity:0.3;*/
    }

    div.sttip div.tooltip.in.bottom div.tooltip-arrow {
        border-bottom-color: #C8C8C8;
        border-bottom-color: rgba(150, 150, 150, .5);
        /*opacity:0.3;*/
    }

    div.sttip div.tooltip.in.left div.tooltip-arrow {
        border-left-color: #C8C8C8;
        border-left-color: rgba(150, 150, 150, .5);
        /*opacity:0.3;*/
    }

    div.sttip div.tooltip.in.top div.tooltip-arrow {
        border-top-color: #C8C8C8;
        border-top-color: rgba(150, 150, 150, .5);
        /*opacity:0.3;*/
    }

    div.sttip div.tooltip.in.right div.tooltip-arrow.second-arrow {
        display: block;
        border-right-color: #fff;
        width: 0px;
        height: 0px;
        opacity: 1;
    }

    div.sttip div.tooltip.in.bottom div.tooltip-arrow.second-arrow {
        display: block;
        border-bottom-color: #fff;
        width: 0px;
        height: 0px;
        opacity: 1;
    }

    div.sttip div.tooltip.in.left div.tooltip-arrow.second-arrow {
        display: block;
        border-left-color: #fff;
        width: 0px;
        height: 0px;
        opacity: 1;
    }

    div.sttip div.tooltip.in.top div.tooltip-arrow.second-arrow {
        display: block;
        border-top-color: #1b3b3f;
        width: 0px;
        height: 0px;
        opacity: 1;
    }
    /* top-left with Next btn the background is different*/

    div.sttip div.tooltip.in.top.top-left div.tooltip-arrow.second-arrow {
        display: block;
        border-top-color: #477b82;
        width: 0px;
        height: 0px;
        opacity: 1;
    }
    /* top-left without next btn is the same as default*/

    div.sttip div.tooltip.in.top.top-left.hideNextBt div.tooltip-arrow.second-arrow {
        display: block;
        border-top-color: #1b3b3f;
        width: 0px;
        height: 0px;
        opacity: 1;
    }

    div.stBorderDiv {
        background-color: #1b3b3f !important;
        -webkit-box-shadow: 0 0 7px #477b82 !important;
        -moz-box-shadow: 0 0 7px #477b82 !important;
        box-shadow: 0 0 7px #477b82 !important;
    }

    div div.sttip .panel-container .guide-list {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        border: 1px solid #C8C8C8;
        border: 1px solid rgba(150, 150, 150, .5);
        color: #222222;
        background: #fff;
        /*-webkit-box-shadow: 0 1px 3px #CCC;
    -moz-box-shadow: 0 1px 3px #CCC;
    box-shadow: 0 1px 3px #CCC;*/
    }

    div.sttip .panel-container .flap {
        background: #1b3b3f;
        border: 0px solid #222222;
    }

    div.sttip div.tooltip div.stFooter div,
    div.sttip div.tooltip div.stFooter a,
    div.sttip div.tooltip div.stFooter p {
        font-size: 12px;
        color: #FFFFFF;
        text-decoration: none;
        border:none;
    }
    div.sttip div.tooltip div.stFooter .default-later-btn:hover,
    div.sttip div.tooltip div.stFooter .default-later-btn:focus {
        text-decoration: underline;
    }
    div.sttip div.tooltip div.stFooter div {
        display: inline-block;
    }

    div.sttip div.tooltip div.stFooter .powered-by {
        display: none;
    }

    div.sttip div.tooltip div.stFooter {
        height: 35px;
        padding: 0px 0px 0px 15px;
        margin-top: 0px;
        text-align: left;
        line-height: 35px;
        background: #1b3b3f;
    }

    div.sttip div.tooltip div.stFooter .next-btn {
        min-width: 26px;
        padding-right: 14px;
        padding-left: 14px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        background: #477b82;
        font-weight: bold;
        position:relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 42px;
    }
    div.sttip div.tooltip .next-btn--choice,    div.sttip div.tooltip div.popover-content .next-btn {
        min-width: 26px;
        line-height: 24px;
        padding-right: 4px;
        padding-left: 4px;
        border-radius: 4px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        background: #477b82;
        font-weight: bold;
        font-size: 12px;
        color: #FFFFFF;
        text-decoration: none;
        border:none;
        margin-bottom: 2px;
        margin-top: 2px;
    }


    div.sttip div.tooltip.hideNextBt .stFooter .next-btn {
        display: none;
    }

    div.sttip div.tooltip div.stFooter .next-btn:after {
        position: absolute;
        content:\"\\bb\";
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
        right: 10px;
        font-size:14px;
        opacity: 0;
        visibility:hidden;
    }
	
    div.sttip div.tooltip div.stFooter .next-btn:hover:after,
    div.sttip div.tooltip div.stFooter .next-btn:focus:after {
        right: 7px;
        opacity: 1;
        visibility:visible;
    }

    div.sttip div.tooltip.showPrevBt .stFooter .default-prev-btn {
        min-width: 26px;
        padding-right: 14px;
        padding-left: 14px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        position:relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 42px;
    }

    div.sttip div.tooltip div.stFooter .default-prev-btn:before {
        content:\"\\ab\";
        position: absolute;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
        left: 7px;
        font-size:14px;
        opacity: 0;
        visibility:hidden;
    }

    div.sttip div.tooltip div.stFooter .default-prev-btn:hover:before,
    div.sttip div.tooltip div.stFooter .default-prev-btn:focus:before {
        left: 4px;
        opacity: 1;
        visibility:visible;
    }

    div.sttip div.tooltip div.popover-title {
        overflow: visible;
        height: 25px;
        padding: 0px 15px 0px 25px;
    }


    div.sttip div.tooltip div.stFooter div[data-iridize-role=\"nextBtPane\"] {
        float: right;
        display: inline-flex;
    }

    div.sttip .showLaterBt .stFooter .steps-count {
        display: none;
    }
div.sttip .hideStepsCount .stFooter .steps-count{
\tdisplay:none;
}

    /* Visibility hidden for closed guide list fix*/
    div.sttip.panel-closed .panel-container .guide-list {
        visibility: hidden;
        max-height:0px;
    }
    /* effectively infinite max-height, so it won't limit anything*/
    div.sttip .panel-container .guide-list{
        max-height:1000px;
    }
    div.sttip.panel-close .panel-container .guide-list {
          -webkit-transition: visibility 0ms step-end 600ms, max-height 0ms step-end 600ms;
        -mox-transition: visibility 0ms step-end 600ms, max-height 0ms step-end 600ms;
        -ms-transition: visibility 0ms step-end 600ms, max-height 0ms step-end 600ms;
        -o-transition: visibility 0ms step-end 600ms, max-height 0ms step-end 600ms;
        transition: visibility 0ms step-end 600ms, max-height 0ms step-end 600ms;
    }

    div.sttip.rightPanel.panel-closed {
        width: 44px;
    }

/* end visibility hidden fix*/




/* hide disabled back button*/
div.sttip div.tooltip.showPrevBt .stFooter .default-prev-btn.disabled {
    display:none;
}

/* resets needed trying to work on a site with bootstrap */
div.sttip .tooltip.top:before,
div.sttip .tooltip.right:before,
div.sttip .tooltip.top:before,
div.sttip .tooltip.top-right:before,
div.sttip .tooltip.top-left:before,
div.sttip .tooltip.left:before,
div.sttip .tooltip:before,
div.sttip .tooltip.bottom-right:before,
div.sttip .tooltip.bottom-left:before
 {
border:none;
}
/* end of bootstrap resets */

/* start panel border*/
div.sttip.panel .panel-container .guide-list,
div.sttip.panel .panel-container .flap {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border-left: 1px solid;
  border-bottom: 1px solid;
  border-top: 1px solid;
  border-color:#C8C8C8;
  border-color:rgba(150, 150, 150, 0.5);
}
/* end panel border*/

div.sttip table, div.sttip tr, div.sttip td {
  border: 1px solid black;
  padding: 6px 9px;
}

@media (max-width: 1024px) { .ir-survey .ir-credit { font-size:9px; } .ir-survey .ir-survey-question { font-size:1.14em; } .ir-survey .ir-survey-answer.ir-survey-sad, .ir-survey-answer.ir-survey-sad:hover { width: 30px; height: 30px; background-size: 30px; } .ir-survey .ir-survey-answer.ir-survey-happy, .ir-survey-answer.ir-survey-happy:hover { width: 30px; height: 30px; background-size: 30px; } .ir-survey .ir-survey-answer { width:30px; height:30px; font-size:1em; background-size:30px;} body > .ir-survey{ width:428px; } .ir-survey.ir-survey__center { padding: 35px 53px 35px 53px; margin-left:-267px; } }

@media (max-width: 610px) {.ir-survey .ir-credit { font-size:9px; } .ir-survey .ir-survey-question { font-size:1em; line-height: 9px; } .ir-survey .ir-survey-answer.ir-survey-sad, .ir-survey-answer.ir-survey-sad:hover { width: 30px; height: 30px; background-size: 30px; } .ir-survey .ir-survey-answer.ir-survey-happy, .ir-survey-answer.ir-survey-happy:hover { width: 30px; height: 30px; background-size: 30px; } .ir-survey .ir-survey-answer { font-size:1em; width:30px; height:30px; background-size:30px;} body > .ir-survey{ width:293px;} .ir-survey.ir-survey__center { padding: 9px 10px 9px 10px;  margin-left:-156px; } }

/** handle guide names with multiple lines **/
/* make guide name appear to the right of the icon and not below it */
.guide-list span.guide-list__guide-name {
    display: inline-block;
    line-height: 18px;
    width: 185px;
    cursor: inherit;
}

/************ start feedback widget styles  *************/
    .ir-survey {
        z-index: 122828282882;
        width: 610px;
        font-family: \"ir-lato\", sans-serif;
        text-align: center;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        padding: 50px 75px 50px 75px;
    }

    .ir-survey-layout {}

    .ir-pushRight {
        float: right;
    }

    .ir-survey a {
        text-decoration: none;
    }

    .ir-color-inherit {
        color: inherit;
    }

    .ir-survey-close {
        overflow: hidden;
    }

    .ir-survey-content {
        background-color: #F2F2F2;
        padding: 9px 9px 16px 9px;
        border-radius: 10px 10px 0 0;
        font-family: \"ir-lato\", sans-serif;
        font-size: 16px;
    }

    .ir-credit {
        background-color: #1b3b3f;
        font-weight: 900;
        border-radius: 0 0 10px 10px;
        font-size: 12px;
        color: white;
        text-align: center;
        padding: 1px;
    }

    .ir-credit a {
        color: #fff;
    }

    .ir-credit a:hover {
        color: #fff;
    }

    .ir-survey-answer {
        font-size: 14pt;
        font-weight: bold;
        width: 36px;
        margin: 2px;
        height: 36px;
        border-width: 1px;
        border-style: solid;
        border-color: #A4A4A4;
        border-radius: 36px;
        text-decoration: none;
        display: inline-block;
        color: #505050;
        line-height: 1.95em;
        text-align: center;
    }

    .ir-survey-answer:hover {
        color: #fff;
        background-color: #1b3b3f;
        border-color: #1b3b3f
    }

    .ir-survey-question {
        color: #000;
        font-weight: 500;
        font-size: 1em;
        text-align: center;
        margin-top: 0px;
        margin-bottom: 10px;
        line-height: 33px;
    }

    .ir-float-container {
        overflow: hidden
    }

    body>.ir-survey__top {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
    }

    body>.ir-survey__bottom {
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }

    body>.ir-survey__center {
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -9em;
        margin-left: -380px;
    }
/************ end feedback widget styles  *************/

/****** modal panel and onboarding widget defaults. *************/
.ir-todoList.in {
    z-index: 99;
}

.ir-todoList-launcher ,
.ir-helpWidget-launcher{
    position: fixed;
    bottom: 20px;
width:60px;
height:60px;
    z-index: 99;
border-radius:50%;
background-color: #477b82;
cursor:pointer;
}

.ir-todoList-launcher {
    left: 20px;
}

.ir-helpWidget-launcher {
    right: 20px;
}

/*with a button it is more accessible to keyboard users. */
.ir-todoList-launcher-button,
.ir-helpWidget-launcher-button{
    width: 100%;
    height: auto;
    background-size: 50px 50px;
    background-position: center center;
    border: none;
    top: 0;
    bottom: 0;
    position: absolute;
    background-repeat: no-repeat;
    padding: 0;
    background-color: transparent;
}

.ir-todoList-launcher-button{
      background-image: url(https://d2p93rcsj9dwm5.cloudfront.net/static/tipcms/img/todo.png);
}

.ir-helpWidget-launcher-button {
      background-image: url(https://d2p93rcsj9dwm5.cloudfront.net/static/tipcms/img/todo.png);
}

.ir-todoList-launcher-button:focus, .ir-helpWidget-launcher-button:focus{
outline:none;
}

.ir-helpWidget-launcher:hover,
.ir-helpWidget-launcher:focus,
.ir-todoList-launcher:hover,
.ir-todoList-launcher:focus{
opacity:0.9;
outline:none;
}

div.sttip.panel.modalPanel{
    left: -999px;
}

div.sttip.modalPanel .panel-container {
    width: auto;
}

div.sttip.panel.modalPanel .panel-container .guide-list {
    border: 1px solid rgba(150, 150, 150, 0.5);
}

.sttip.panel.modalPanel.panel-open.panel-opened.bind-results {
    left: 50%;
    margin-left: -150px;
    top: 100px;
}

div.sttip  .ir-helpWidget-close {
    position: absolute;
    right: 5px;
    top: 5px;
    text-decoration: none;
}

    div.sttip.modalPanel.panel-open {
        -webkit-transition: left 400ms ease-out;
        /* older webkit */

        -webkit-transition: left 400ms ease-out;
        -moz-transition: left 400ms ease-out;
        -ms-transition: left 400ms ease-out;
        -o-transition: left 400ms ease-out;
        transition: left 400ms ease-out;
        /* easeInBack */
    }


    div.ir-marker {
        /*changing this will affect the color of the help icon*/
        background-color: #ff0000;
    }



    div.ir-beacon:before {
        box-shadow: 0px 0px 2px 2px #ff0000;
    }



/**** TODO WIDGET ******/
.ir-todoList {
display: inline-block;
    position: absolute;
    top: 0;
    left: -9999px;
    bottom: 20px;
    height: 0px;
    border-radius: 5px;
    direction: ltr;
    background: white;
    border: 1px solid rgba(150, 150, 150, 0.5);
    font-family: ir-lato,sans-serif;
    color: #222222;
    width: 0;
}

.ir-todoList.in{
    width: 280px;
    padding: 24px 24px 6px 24px;
    transition: 500ms;
    height: auto;
    left: 65px;
    bottom: 65px;
    top: auto;
}

.ir-todoList-header {
    font-size: 21px;
    margin-bottom: 15px;
    text-align: center;
}

.ir-todoList-footer {
    color: gray;
    margin-top: 18px;
    direction: rtl;
    font-size: 10px;
}

.ir-todoList-guideName{
    font-size: 16px;
    cursor: pointer;
color:#222222;
   width: 85%;
   margin-left: 9px;
}

.ir-completedGuide .ir-icon-todo {
    background: black;
}

.ir-todoList-item.engaged .ir-todoList-guideName {
    text-decoration: line-through;
}

.ir-todoList-progress {
    border: 1px solid #1b3b3f;
    height: 9px;
    line-height: 0;
}

.ir-todoList-progress-complete {
    height: 100%;
    width:0;
    display: inline-block;
    background-color: #1b3b3f;
    transition: width 2s;
    float:left;
}

.ir-todoList-motivation {
    font-size: 14px;
    line-height: 18px;
    border-radius: 5px;
    padding: 6px;
    color: white;
    background: #1b3b3f;
}

.ir-todoList-list {
    list-style: none;
    padding: 0;
    margin-left:0;
}

.ir-todoList-item {
    border-radius: 5px;
    padding: 6px;
    margin: 0;
}

.ir-todoList-item:hover {
    background: #f5f5f5;
}

.ir-icon-todo {
    border: 2px solid black;
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 6px;
    vertical-align: middle;
    border-radius: 10px;
}

.ir-todoList-item.engaged .ir-icon-todo{
    background: black;
}

.ir-todoList .ir-close {
    float: right;
    text-decoration: none;
    cursor: pointer;
}
.ir-todoList-items {
    margin-top:10px;
    margin-bottom:10px;
}

.ir-reset-tasklist-button {
    margin-top: 9px;
    display: block;
    font-size: 11px;
    text-align: right;
    color: #1b3b3f;
}

.guide-footer p,
.ir-todoList-footer,
.ir-credit span {
    visibility: hidden;
}

.ir-todoList-launcher-button:focus {
    outline: none;
}

/* fusion uses crazy z-indexes */
div.stBorderDiv {
\tz-index: 2147483649;
}

div.sttip .tooltip {
    z-index: 2147483650;
}

div.ir-beacon,
div.ir-marker,
div.sttip.panel {
    z-index: 2147483646;
}

div.sttip .panel-container .guide-header.ir-items-header {
    padding: 10px 0px 0px 0px;
}

div.sttip .panel-container .guide-content .guide-search-results {
    width: 250px;
}

div.sttip .panel-container .guide-list {
    width: 275px;
}

div.sttip .panel-container, div.sttip.rightPanel.panel-opened {
    width: 322px;
}

textarea.ir-fieldInput {
    line-height: 1.5em;
    padding: 2%;
    max-width: 95%;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

div.sttip .panel-container .guide-footer .ir__guide-footer__help-link {
    font-size: 14px;
    line-height: 21px;
    height: auto;
visibility: visible;
color:white;
}

div.sttip .panel-container .guide-footer .ir__guide-footer__help-link:hover {
    color: white;
}

button.ir-button-no-styling {
   background: none;
   color: inherit;
   border: none;
   padding: 0;
   cursor: pointer;
   outline: inherit;
   display: inline-block;
   text-align: left;
}

.ir-todoList-listItem {
    margin-bottom: 9px;
}

/**** START new_css.css appended to theme ****/
/**** TODO WIDGET ******/
div.sttip.ir-todoList {
display: inline-block;
    position: absolute;
    top: 0;
    left: -9999px;
    bottom: 20px;
    height: 0px;
    border-radius: 5px;
    direction: ltr;
    background: white;
    border: 1px solid rgba(150, 150, 150, 0.5);
    font-family: ir-lato,sans-serif;
    color: #222222;
    width: 0;
}

div.sttip.ir-todoList.in{
    width: 280px;
    padding: 24px 24px 6px 24px;
    transition: 500ms;
    height: auto;
    left: 65px;
    bottom: 65px;
    top: auto;
}

div.sttip .ir-todoList-header {
    font-size: 21px;
    margin-bottom: 15px;
    text-align: center;
}

div.sttip .ir-todoList-footer {
    color: gray;
    margin-top: 18px;
    direction: rtl;
    font-size: 10px;
}

div.sttip .ir-todoList-guideName{
    font-size: 16px;
    cursor: pointer;
color:#222222;
}

div.sttip .ir-completedGuide .ir-icon-todo {
    background: black;
}

div.sttip .ir-todoList-item.engaged .ir-todoList-guideName {
    text-decoration: line-through;
}

div.sttip .ir-todoList-progress {
    border: 1px solid #477b82;
    height: 9px;
    line-height: 0;
}

div.sttip .ir-todoList-progress-complete {
    height: 100%;
    width:0;
    display: inline-block;
    background-color: #477b82;
    transition: width 2s;
    float:left;
}

div.sttip .ir-todoList-motivation {
    font-size: 14px;
    line-height: 18px;
    border-radius: 5px;
    padding: 6px;
    color: white;
    background: #477b82;
}

div.sttip .ir-todoList-list {
    list-style: none;
    padding: 0;
    margin-left:0;
}

div.sttip .ir-todoList-item {
    border-radius: 5px;
    padding: 6px;
    margin: 0;
}

div.sttip .ir-todoList-item:hover {
    background: #f5f5f5;
}

div.sttip .ir-icon-todo {
    border: 2px solid black;
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 6px;
    vertical-align: middle;
    border-radius: 10px;
}

div.sttip .ir-todoList-item.engaged .ir-icon-todo{
    background: black;    
}

div.sttip a.ir-close {
    float: right;
    text-decoration: none;
    cursor: pointer;
    color:#222222;
}
div.sttip .ir-todoList-items {
    margin-top:10px;
    margin-bottom:10px;
}

div.sttip button.ir-reset-tasklist-button {
    margin-top: 9px;
    color: #12bc8d;
    cursor:pointer;
}
div.sttip button.ir-reset-tasklist-button:hover {
    margin-top: 9px;
    color: #222222;
}

/**** END new_css.css appended to theme ****/

div.sttip .guide-list .ir-todoList-guideName.item-text {
    width: 100%;
    display: block;
}

/**** START tasklist_css_fixes_030718_2.css appended to theme ****/
div.sttip .panel-container .guide-content .iridize-start-panel.tasklist { 
\tbackground-position: 0 -80px; 
} 

.ir-todoList-launcher-button:focus {
    outline: none;
}

.ir-todoList-launcher-button {
    cursor: pointer;
}

div.sttip .guide-list .item-text.ir-todoList-guideName {
    width: 100%;
}

div.sttip .guide-list .ir-reset-tasklist-button:hover {
    background: none;
    text-decoration: underline;
}


/**** END tasklist_css_fixes_030718_2.css appended to theme ****/

/** top/bottom help widget location ***/
div.sttip.panel.bottomPanel{
    position:fixed;
    bottom:0px;
    right: 140px;
    top: auto;
}

div.sttip.panel.topPanel {
    position:fixed;
    right: 60px;
    bottom:auto;
    top: 0px;
}

div.sttip.panel.topPanel .panel-container .guide-list {
 border-right: 1px solid rgba(150, 150, 150, 0.5);
}


div.sttip.panel.bottomPanel .panel-container .flap,
div.sttip.panel.topPanel .panel-container .flap{
    width:auto;
    display: block;
}

div.sttip.panel.bottomPanel .panel-container .flap > .flap-text,
div.sttip.panel.topPanel .panel-container .flap > .flap-text{
    width:auto;
}

div.sttip.bottomPanel.panel-closed,
div.sttip.topPanel.panel-closed{
    height: 35px;
}

div.sttip.bottomPanel.panel-closed,
div.sttip.topPanel.panel-closed{
    height: 35px;
}

div.sttip.bottomPanel.panel-opened,
div.sttip.topPanel.panel-opened{
    height: 422px;
}

div.sttip.bottomPanel.panel-close,
div.sttip.topPanel.panel-close {
    -webkit-transition: height 400ms cubic-bezier(0.175, 0.885, 0.320, 1);
    -webkit-transition: height 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
    -moz-transition: height 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
    -ms-transition: height 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
    -o-transition: height 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
    transition: height 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
}

div.sttip.bottomPanel.panel-open,
div.sttip.topPanel.panel-open {
    -webkit-transition: height 400ms cubic-bezier(0.600, 0, 0.735, 0.045);
    -webkit-transition: height 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
    -moz-transition: height 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
    -ms-transition: height 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
    -o-transition: height 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
    transition: height 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
}

div.sttip.bottomPanel .panel-container,
div.sttip.topPanel .panel-container{
    width: auto;
}

/** END top/bottom help widget location ***/


div.sttip.leftPanel.panel-closed { left:-277px; }

div.sttip.panel.leftPanel {     width:320px; } 

div.sttip.leftPanel .panel-container .flap {     width:15px;  }

div.sttip.panel.bottomPanel .panel-container .guide-list {
    border-right: 1px solid rgba(150, 150, 150, 0.5);
}

.iridize-step-guide-frame {
\tborder-right: solid 5px #1b3b3f;
}

.iridizeStepGuideCloserButton a {
    background-color: #1b3b3f; 
}
`;
	toolTipDiv.appendChild(x);
	
	var styleSheet = document.createElement("style");
	styleSheet.type = "text/css";
	styleSheet.innerText = styles;
	document.head.appendChild(styleSheet);
}

main()