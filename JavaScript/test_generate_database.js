var behaviours = [[1,"Banging head"],[2,"Running around in circles"],[3,"Throwing food onto floor"],[4,"Screaming and shouting"],[5,"Overly excited"],[6,"Blinking"]];

for (var i = 0; i<behaviours.length;i++){
	for (var j = 0;	 j<behaviours[i].length;j++){
		//alert(behaviours[i][i]);
	}
}


/* ************************************	CREATE DATABASE	********************************************* */
var db = window.openDatabase("myDB", "1.0", "behaviour App Data", 5*1024*1024);
 
if(!db) {
	// Test if your DB was created
	alert('Your DB could not be');
	return false
}

/* ***************************	POPULATE DATABASE WITH SAMPLE DATA 	********************************* */

