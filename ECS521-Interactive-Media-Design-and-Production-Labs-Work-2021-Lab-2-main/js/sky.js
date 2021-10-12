var scale = window.devicePixelRatio;
window.addEventListener('load', function() {
    /* Add the scale below */

    var bg_canvas = document.getElementById('background');
    var bg_ctx = bg_canvas.getContext('2d');

    var fg_canvas = document.getElementById('foreground');
    var fg_ctx = fg_canvas.getContext('2d');


    function drawCloud(startX, startY, alpha) {
		
	// IMPORTANT NOTE /////////////////////////////////////////////////////
	// Once you finish working on task ToDo 1, comment your code and start working on
	// task ToDo 2.i; in the same way, when you finish it, comment the code and start
	// on the last task ToDo 2.ii.
	// In the end, verify that each ToDo section (1, 2.i and 2.ii) works properly
	// by uncommenting the section you want to test and commenting the sections
	// you want to disable. This is how each ToDo question will be evaluated.

	///////////////////////////////////////////////////////////////////////
	//    ToDo 1: Modify these lines to answer the points i, ii and iii   //
	// You can also modify the function signature (parameters), if needed //
	///////////////////////////////////////////////////////////////////////
	fg_ctx.globalAlpha = alpha;
	fg_ctx.globalCompositeOperation = 'lighter';

	fg_ctx.beginPath();
	fg_ctx.moveTo(startX, startY);
	fg_ctx.bezierCurveTo(startX - 40, startY + 20, startX -40, startY + 70, startX + 60, startY + 70);
	fg_ctx.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
	fg_ctx.bezierCurveTo(startX + 250, startY + 70, startX+ 250, startY + 40, startX + 220, startY + 20);
	fg_ctx.bezierCurveTo(startX + 260, startY -40, startX + 200, startY -50, startX + 170, startY - 30);
	fg_ctx.bezierCurveTo(startX + 150, startY -75, startX + 80, startY -60, startX + 80, startY - 30);
	fg_ctx.bezierCurveTo(startX + 30, startY -75, startX -20, startY -60, startX, startY);

	fg_ctx.fillStyle = '#ffffff';

	///////////////////////////////////////////////////////////////////////
	//             ToDo 2.i: Custom cloud using bezierCurveTo            //
	///////////////////////////////////////////////////////////////////////
	// Add your code here


	///////////////////////////////////////////////////////////////////////
	//           ToDo 2.ii: Custom could using quadraticCurveTo           //
	///////////////////////////////////////////////////////////////////////
	// Add your code here


	fg_ctx.fill();
    }

    function drawBackground(width, height) {

		/* Set canvas size below */
		bg_canvas.setAttribute('width', width);
		bg_canvas.setAttribute('height', height);
		

		bg_ctx.fillStyle = '#3ba1d4';
		bg_ctx.fillRect(0, 0, bg_canvas.width, bg_canvas.height);
		}

		function drawForeground(width, height) {
		/* Set canvas size below */
		fg_canvas.setAttribute('width', width);
		fg_canvas.setAttribute('height', height);

		/* Add the albatross image below */
		albatross_img = new Image();
		albatross_img.src = '../imgs/37586.png';
		albatross_img.onload = () => {fg_ctx.drawImage(albatross_img, 200, 200);};

		/* Add the clouds below */
		let numClouds = 10;

		for (let i = 1; i < numClouds; i++) {
			drawCloud(100 * i , 50 * i + 120 , i / numClouds);
		}

    }


    function redraw() {
		let style_width = +getComputedStyle(bg_canvas).getPropertyValue("width").slice(0, -2) * scale;
		let style_height = +getComputedStyle(bg_canvas).getPropertyValue("height").slice(0, -2) * scale;
	
		/* Add style width and height below */

	/* Change these definitions */
	drawBackground(style_width, style_height);
	drawForeground(style_width, style_height);
    }


    redraw();
});
