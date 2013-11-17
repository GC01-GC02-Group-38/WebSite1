// array width links
var home_menuLinks = new Array("./track_1.html", "./settings_assign_behaviours_1.html", "./analyse_1.html", "./settings.html", "./about.html", "./help.html", "./home.php?logout");
// array with labels
var home_menuNames = new Array("Monitor", "Assign", "Analyse", "Settings", "About", "Help", "Logout");
// array with path of low resolution icons
var home_menuLowResIcons = new Array("Images/Icons/Note-128.png", "Images/Icons/ID-Add-128.png", "Images/Icons/Bar-Chart-128.png", "Images/Icons/Settings-128.png", "Images/Icons/News-128.png", "Images/Icons/Help-128.png", "Images/Icons/Logout-128.png");
// array with path if high resolution icons
var home_menuHighResIcons = new Array("Images/Icons/Note-256.png", "Images/Icons/ID-Add-256.png", "Images/Icons/Bar-Chart-256.png", "Images/Icons/Settings-256.png", "Images/Icons/News-256.png", "Images/Icons/Help-256.png", "Images/Icons/Logout-256.png");

// function to initialise creation of home menu
function initHome(){
	// check if screen is in portait or landscape orientation
	if ($(window).height() > $(window).width()) {
		// if portrait orientation than make two columns
		var columns = 2;
		// calculate number of rows
		var rows = Math.round(home_menuLinks.length/columns);
		// round the height of screen divided by rows and subtract 87px for header, footer and margins
		var height = Math.round(($(window).height()/rows)-87);
		// round the width of screen divided by columns and multiplied by 0.8 for margins
		var width = width = Math.round(($(window).width()/columns)*0.8);
		// get the smaller value
		if (height<width) width=height;
		// call generateMenu function an pass parameters columns, rows and width
		generateMenu(columns, rows, width);
	} else{
		// if landscape orientation than make four columns
		var columns = 4;
		// calculate number of rows
		var rows = Math.round(home_menuLinks.length/columns);
		// round the height of screen divided by rows and subtract 87px for header, footer and margins
		var height = Math.round(($(window).height()/rows)-120);
		// round the width of screen divided by columns and multiplied by 0.8 for margins
		var width = Math.round(($(window).width()/columns)*0.8);
		// get the smaller value
		if (height<width) width=height;
		// call generateMenu function an pass parameters columns, rows and width
		generateMenu(columns, rows, width);
	}
}


function generateMenu(columns, rows, width) {
	// array wo which the array with right resolution images will be assigned
	var iconArray = new Array();
	// array with jQuery mobile ui-grid tags
	var uiGridArray = new Array("", "<div class='ui-grid-a'>", "<div class='ui-grid-b'>", "<div class='ui-grid-c'>")
	// array with jQuery mobile ui-block tags
	var gridTags = new Array("<div class='ui-block-a'>", "<div class='ui-block-b'>", "<div class='ui-block-c'>", "<div class='ui-block-d'>");
	// home menu html string, give it the right ui-grid tag, depending on number of columns
	var htmlString = uiGridArray[columns-1];

	// if width is smaller or equal to 128px, use small set of icons
	if (width <= 128) {
		// if resolution is to small do not show any icons (width=0)
		if (width<30) width = 0;
		// assign low res icons array to iconArray
		iconArray = home_menuLowResIcons;
	}
	// if width is bigger than 128px use big set of icons
	else {
		// assign high res icons array to iconArray
		iconArray = home_menuHighResIcons;
		// do not allow width to be higher than 256px (is the resolution of big icons)
		if (width>256) width=256;
	}
	// counter for number menu items
	var itemNumber = 0;
	// for loop for rosw
	for (var i = 0; i<rows; i++){
		// for loop for columns
		for (var j =0; j<columns; j++){
			// append html code for next menu item
			htmlString = htmlString +  '\n' + '\t' + gridTags[j] +  '\n' + '\t' + '\t' +"<a data-role='button' style='outline:0; background: transparent; border:none; box-shadow:none;' href='"+home_menuLinks[itemNumber]+"'><img src='"+iconArray[itemNumber]+"' width='"+width+"'></img><br />"+home_menuNames[itemNumber]+"<br /></a>" +  '\n' + '\t' + "</div>";
			// increase itemNumber counter
			itemNumber = itemNumber + 1;
			// if there is an uneaven number of menu items break loop so there won't be an undefined menu item
			if (home_menuNames[itemNumber]==null) break;
		}
	}
	// add closing div tag to html string
	htmlString = htmlString + '\n' + "</div>"

	// delete existing menu (important if menu is redrawn because of orientation change)
	$("#home_menu").empty();
	// append html code to div with menu id
	$('#home_menu').append(htmlString);
	// call jQuery create function on menu
	$("#home_menu").trigger("create");
}