# ModernJS Mastery Exercise

## Project Description
[Project Specifications](https://github.com/nss-evening-cohort-05/modernjs-mastery-exercise-Sanyyouisf/blob/master/instructions.md)

## Instructions
1. On Page load
	- There should be a bootstrap navbar .
	- Should have marvel logo for brand .
	- Should be a button for each team in the teams.
	- There should be a large Marvel logo on the middle of the page.
2. On click of a button in the navbar
	- The large Marvel logo should go away (use a jQuery method for this).
    - The click event should call a function called dataGetter that has a Promise.all.
	- The Promise.all should resolve 3 functions that get the data from the json files.
	- dataGetter should pass a SINGLE array to the writeDom function.
	- The writeDom function should write everything to the DOM.
3. Data requirements
	- You can't change ANY of the JSON files
	- If there is no description for a character (ie description is "") your code should change the description as follows:
		-  A female character with no description should get a description of "abcde fghij klmno pqrst uvwxy z"
		- A male character with no description should get a description of "1234567890"
4. Style requirements
	- Each character should be displayed in a bootstrap panel
	- Each character's image should be a circle and have a border color of:
	- Blue if the character is Male
	- Pink if the character is Female
	- There should be 4 panels in each row
	- Each row should have a bootstrap row class

![Blog Screengrab](https://github.com/nss-evening-cohort-05/modernjs-mastery-exercise-Sanyyouisf/blob/readme-image/Quizimage.png)

## Technologies

- HTML5
- scss
- JavaScript
- Bootstrap
- jquery
- bootstrap
- grunt stuff