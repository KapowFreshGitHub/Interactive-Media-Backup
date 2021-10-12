<div align="center">
  <img src="https://www.qmul.ac.uk/blizard/media/blizard/images/logos/QMUL_White.png" />

# School of Electronic Engineering and Computer  Science

## ECS521U - INTERACTIVE MEDIA DESIGN AND PRODUCTION</br>Lab 2
</div>

### About this Lab
This lab is about styling a canvas and simulating depth.

Make sure to disable the browser cache to avoid issues with caching the JavaScript and CSS files. (e.g. In Google Chrome, open the development tools using  `Ctrl + Shift + i`, then click settings and tick "Disable cache (while DevTools is open)").

## A. Setup
1. Open [html/index.html](https://github.com/giussepi/ECS521-Interactive-Media-Design-and-Production-Labs-Work-2021/blob/master/lab-2/html/index.html) file in browser (chrome/firefox/ie).
2. Open [html/index.html](https://github.com/giussepi/ECS521-Interactive-Media-Design-and-Production-Labs-Work-2021/blob/master/lab-2/html/index.html) and [js/sky.js](https://github.com/giussepi/ECS521-Interactive-Media-Design-and-Production-Labs-Work-2021/blob/master/lab-2/js/sky.js) files in a text editor.
3. Create a new folder `css` in the same directory as this `README.md` file.
4. Create a new file `layout.css` using text editor inside the folder `css`.

### Adapt canvas to windows size
1. Notice there is a space between the beginning of the web page and where the canvas is displayed.
2. Eliminate this space by adding the following rule to `layout.css` file:
   ```css
   html, body {
     width: 100%;
     height: 100%;
     margin: 0;
     border: 0;
     overflow: hidden; /* Disable scrollbars */
     display: block; /* No floating content on sides */
   }
   ```

3. Make the canvas fit 100% of the page by adding the following rule to `layout.css` file:
   ```css
   canvas {
     width: 100%;
     height: 100%;
     position: absolute;
   }
   ```

## B. Scale canvas when window is resized
Here we will use the window property devicePixelRatio that “returns the ratio of the resolution in physical pixels to the resolution in CSS pixels for the current display device. This value could also be interpreted as the ratio of pixel sizes: the size of one CSS pixel to the size of one physical pixel. In simpler terms, this tells the browser how many of the screen’s actual pixels should be used to draw a single CSS pixel.” [[1]](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio).

1. Add the following line at beginning of `js/sky.js`:
   ```js
   var scale = window.devicePixelRatio;
   ```

2. Go to the definition of `redraw` function. Add the following lines to get the CSS width and height of the canvas and scale it using the variable defined in the previous step [[2]](https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da).
   ```js
   let style_width = +getComputedStyle(bg_canvas).getPropertyValue("width").slice(0, -2) * scale;
   let style_height = +getComputedStyle(bg_canvas).getPropertyValue("height").slice(0, -2) * scale;
   ```

3. Change the calls to `drawBackground` and `drawForeground` so they read:
   ```js
   drawBackground(style_width, style_height);
   drawForeground(style_width, style_height);
   ```

4. Go to the definition of `drawBackground` function and set the size of the canvas at the beginning:
   ```js
   bg_canvas.setAttribute('width', width);
   bg_canvas.setAttribute('height', height);
   ```

5. Go to the definition of `drawForeground` function and set the size of the canvas at the beginning:
   ```js
   fg_canvas.setAttribute('width', width);
   fg_canvas.setAttribute('height', height);
   ```

## C. Add more Objects
1. Go to the definition of `drawForeground` function.
2. Add an [albatross image](https://github.com/giussepi/ECS521-Interactive-Media-Design-and-Production-Labs-Work-2021/blob/master/lab-2/37586.png) as follows:
   ```js
   albatross_img = new Image();
   albatross_img.src = '../imgs/37586.png';
   albatross_img.onload = () => {fg_ctx.drawImage(albatross_img, 200, 200);};
   ```

3. Draw a couple of clouds by invoking the function drawCloud(startX, startY, alpha) as follows:
   ```js
	let numClouds = 10;

	for (let i = 1; i < numClouds; i++) {
	    drawCloud(100 * i , 50 * i + 120 , i / numClouds);
	}
   ```
## D. To do Questions

1. Notice the alpha argument sets the transparency of the cloud. Modify function `drawCloud()`: ([Help](https://www.w3schools.com/tags/ref_canvas.asp))
    1. Tune this function for transparency (Try to make the clouds look real).
    2. Change starting point of clouds.
    3. Change colour of clouds.
2. Creat your own different shape cloud:
    1. Using [HTML canvas bezierCurveTo()](https://www.w3schools.com/tags/canvas_beziercurveto.asp) Method
		**(Help: You can also use [bezierCurveTo command generator](http://www.victoriakirst.com/beziertool/), if you are more familiar with JavaScript and Canvas)**.
    2. Using [HTML canvas quadraticCurveTo()](https://www.w3schools.com/tags/canvas_quadraticcurveto.asp) Method.


## Submission Instructions:
### Deadline: 12/10/21 17:00
The Submission Link is available under ASSESMENT INFORMATION/RESOURCES Section of Module Page.
### General Instruction:
- Assignments must be submitted in a .zip package or alike ( .7z .bdoc .cdoc .ddoc .gtar .tgz .gz .gzip .hqx .rar .sit .tar .zip). Code submitted in other formats will not be accepted. Corrupt or otherwise unreadable files will not be accepted.
- Make sure to compress/zip the whole folder `ECS521-Interactive-Media-Design-and-Production-Labs-Work-2021-Lab-2-main` so all your work is included in the submission.

### Submission Checklist
- [x] Has your file been saved in a zip package?
- [x] Have you clicked [Submit] after uploading?
- [x] Have you checked that the file you uploaded is the correct version?
- [x] The first time you submit, you will be required to accept the Turnitin End User Licence Agreement.
- [x] After uploading, it is your responsibility to check that your file is in the correct format and that it is readable.

Late submissions will receive late penalties in line with the late penalty policy, see EECS handbook and QMUL assessment handbook.

### Specific Instructions:
1. To get half of the marks, your code should be fully functional with atleast Question No. 1 solved completely.

## Good Luck!
