import { ASCII_SYMBOLS } from './ascii_symbols.js';

// const ASCII_SYMBOLS = [
//   {
//     name: 'Dice ⚅',
//     symbols: ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'],
//   },
//   {
//     name: 'Geometry ▤',
//     symbols: ['□', '▤', '▥', '▦', '▩', '■'],
//   },
//   {
//     name: 'Color Square 🟥',
//     symbols: ['⬜', '🟨', '🟧', '🟥', '🟫', '⬛'],
//   },
//   {
//     name: 'Color Square 🟩',
//     symbols: ['🟨','🟩','🟦', '🟪', '🟥', '🟧'],
//   },
//   {
//     name: 'Color Polka Dot 🟠',
//     symbols: ['⚪', '🟡', '🟠', '🔴', '🟤', '⚫'],
//   },
//   {
//     name: 'RaNdoM 💠',
//     symbols: ['🔲', '🔶', '🔺', '💠', '🔷', '🔳'],
//   },
//   {
//     name: 'Smiley 🙃',
//     symbols: ['🥶', '🤢','🙃', '🥵', '😡', '😈'],
//   },
//   {
//     name: 'Heart 💜',
//     symbols: ['💛', '💚', '💙', '💜', '💓', '🖤'],
//   },
//   {
//     name: 'Fractional Circle ◔',
//     symbols: ['●', '◕', '◑', '◔', '○', '◌'],
//   },
//   {
//     name: 'Monospace Alphabet',
//     symbols: ['A', 'B', 'C', 'D', 'E', 'F'],
//   },
//   {
//     name: 'Digital Digit 🯵',
//     symbols: ['🯰', '🯱', '🯲', '🯳', '🯴', '🯵'],
//   },
//   {
//     name: 'Snow Flakes ❄',
//     symbols: ['❄', '❅', '❆','✾', '❃', '✽'],
//   },
//   {
//     name: 'Horizontal Bar 𝄘',
//     symbols: ['𝄖', '𝄗', '𝄘','𝄙', '𝄚', '𝄛'],
//   },
//   {
//     name: 'Skin Tone 🏻',
//     symbols: ['🏿', '🏾', '🏽', '🏼', '🏻', '🏻'],
//   },
//   {
//     name: 'Tally Rod 𝍫',
//     symbols: ['𝍩', '𝍪', '𝍫', '𝍬', '𝍭', '𝍱'],
//   },
//   {
//     name: 'Kaeriten ㆗',
//     symbols: ['㆒', '㆓', '㆔', '㆖', '㆗', '㆙'],
//   },
//   {
//     name: 'Operator',
//     symbols: ['🞡', '🞢', '🞤', '🞫', '🞧', '🞮'],
//   },
//   {
//     name: 'Plus',
//     symbols: ['🞡', '🞨', '🞤', '🞥', '🞦', '🞧'],
//   },
//   {
//     name: 'Astrik',
//     symbols: ['🞵', '🞶', '🞷', '🞸', '🞹', '🞺'],
//   },
//   {
//     name: 'Diamond',
//     symbols: ['🮠', '🮢', '🮤', '🮨', '🮫', '🮮'],
//   },
//   {
//     name: 'Weighted Square',
//     symbols: ['🞎', '🞏', '🞐', '🞑', '🞒', '🞓'],
//   },
//   {
//     name: 'Weighted Circle',
//     symbols: ['🞅', '🞊', '🞆', '🞇', '🞈', '🞉'],
//   },
//   {
//     name: 'Uni Shade',
//     symbols: ['░', '░', '▒', '▒', '▓', '▓'],
//   },
//   {
//     name: 'Double Shade',
//     symbols: ['░░', '░▒', '▒▒', '▒▓', '▓▓', '▓░'],
//   },
//   {
//     name: 'Partial Shade',
//     symbols: ['┊', '║', '░', '▒', '▓','█'],
//   },
//   {
//     name: 'Vertical Block',
//     symbols: ['▁', '▂', '▄', '▅', '▆', '▇'],
//   },
//   {
//     name: 'Flag',
//     symbols: ['🇯🇵', '🇻🇨', '🇺🇬', '🇳🇵', '🇱🇰', '🇬🇵'],
//   },
// ];

// Initialization of image for generating ASCII

let img = new Image();
img.src = './default.png';
img.crossOrigin = 'anonymous';
img.onload = () => {
  width = Math.floor(img.naturalWidth * resizeScale);
  height = Math.floor(img.naturalHeight * resizeScale);
  drawImage();
};

// Set initial image for displaying
var image = document.getElementById('output');
image.src = img.src;

let imgData;
let width = 0;
let height = 0;
let ascii = '';
let rgbaArray = [];
let resizeScale = 0.1;
let selectedFillIndex = 0;
let reverseShade = false;
let selectedAlgorithm = 1;

// Set canvas
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

const generator = document.querySelector('#ascii-generator');
const dropdownOptions = document.querySelector('[dropdown-content]');

const resizeSlider = document.querySelector('#resize-slider');
// Set the listener to read the scale change
resizeSlider.addEventListener('input', () => {
  const resizeValue = document.querySelector('#resize-value');
  resizeValue.innerHTML = resizeSlider.value + '×';
  resizeScale = resizeSlider.value;
  width = Math.floor(img.naturalWidth * resizeScale);
  height = Math.floor(img.naturalHeight * resizeScale);
  drawImage();
});

const reShade = document.querySelector('#reverse-shade');
// Reverse the fillable ASCII array
reShade.addEventListener('click', () => {
  reverseShade = !reverseShade;
  if (reverseShade) {
    reShade.innerText = '✅';
  } else {
    reShade.innerText = '❎';
  }
  generateAsciiSymbols();
});

// Generate the content for the drop down of fill style
ASCII_SYMBOLS.forEach((element, index) => {
  const fillStyleOptions = document.querySelector('[fill-style-option]').content.cloneNode(true).children[0];
  fillStyleOptions.id = index;
  fillStyleOptions.innerText = element.name;
  dropdownOptions.appendChild(fillStyleOptions);
});

// Read the local image file
function loadFile(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
  img.crossOrigin = 'anonymous';
  img.src = image.src;
  img.onload = () => {
    width = Math.floor(img.naturalWidth * resizeScale);
    height = Math.floor(img.naturalHeight * resizeScale);
    drawImage();
  }
};

/**
 * Convert rgb into grayscale
 * Three types of algorithm: Average based, Weight Based and Lightness Based
 * @param {Array} parsedArray color value array from image data
 * @param {String} mode grayscale mapping algorithm type
 * @returns {Array}
 */
function grayScaleMapping(parsedArray, mode) {
  let resultArray = [];
  while(parsedArray.length > 0) {
    const redValue = parsedArray.shift();
    const greenValue = parsedArray.shift();
    const blueValue = parsedArray.shift();
    let grayScaleValue = 0;
    if (mode === 'average') {
      // Average grayscale mapping
      grayScaleValue = parseInt((redValue + greenValue + blueValue)/3, 10);
    } else if (mode === 'weighted') {
      // Weighted grayscale mapping or luminosity
      grayScaleValue = parseInt((0.299 * redValue + 0.587 * greenValue + 0.114 * blueValue), 10);
    } else {
      // Lightness grayscale mapping
      grayScaleValue = parseInt((Math.max(redValue, greenValue, blueValue) + Math.min(redValue, greenValue, blueValue)) / 2, 10);
    }
    // remove alpha value
    parsedArray.shift();
    resultArray.push(
      grayScaleValue
    );
  }

  return resultArray;
}

/**
 * Custom grayscale mapping
 * avaearge maxima: consider the average max for mapping
 * collective maxima: consider the individual r g b max 
 * @param {Array} parsedArray color value array from image data
 * @param {Boolean} collectiveMaxima 
 * @returns {Array}
 */
function maximaBasedMapping(parsedArray, collectiveMaxima = false) {
  // selective method
  let maxR = 0;
  let maxG = 0;
  let maxB = 0;
  let filteredArray = [];
  let resultArray = [];
  while(parsedArray.length > 0) {
    const redValue = parsedArray.shift();
    const greenValue = parsedArray.shift();
    const blueValue = parsedArray.shift();
    if (redValue > maxR) maxR = redValue;
    if (greenValue > maxG) maxG = greenValue;
    if (blueValue > maxB) maxB = blueValue;
    parsedArray.shift();
    // remove alpha value
    filteredArray.push( redValue );
    filteredArray.push( greenValue );
    filteredArray.push( blueValue );
  }

  maxAvg = parseInt((maxR + maxG + maxB) / 3, 10);
  while (filteredArray.length > 0) {
    if (collectiveMaxima) {
      resultArray.push(parseInt((filteredArray.shift()+ filteredArray.shift()+ filteredArray.shift())/(3 * maxAvg) * 255));
    } else {
      resultArray.push(parseInt((filteredArray.shift() / maxR + filteredArray.shift() / maxG + filteredArray.shift() / maxB)/3 * 255));
    }
  }

  return resultArray;
}

function saturationBasedMapping(parsedArray) {
  let resultArray = [];
  while(parsedArray.length > 0) {
    const redValue = parsedArray.shift();
    const greenValue = parsedArray.shift();
    const blueValue = parsedArray.shift();
    parsedArray.shift();
    var hsv = RGBtoHSV ([redValue, greenValue, blueValue]);
    hsv[1] *= 1.5;
    var rgb = HSVtoRGB(hsv);
    const grayScaleValue = (rgb[0] + rgb [1] + rgb[2]) / 3;
    resultArray.push(grayScaleValue);
  }

  return resultArray;
}

/**
 * draw canvas image and generate relative ascii
 * function is costy, so don't use it indiscrimnately
 */
function drawImage() {
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);
  imgData = ctx.getImageData(0, 0, width, height).data;
  let parsedArray = Array.from(imgData);

  rgbaArray = mapSelectedAlgorithm(parsedArray);
  generateAsciiSymbols();
}

/**
 * Map the array into selected fill algorithm
 */
function mapSelectedAlgorithm(parsedArray) {
  switch(selectedAlgorithm) {
    case 1:
      return grayScaleMapping(parsedArray, 'average');
    case 2:
      return grayScaleMapping(parsedArray, 'weighted');
    case 3:
      return grayScaleMapping(parsedArray, 'lightness');
    case 4:
      return maximaBasedMapping(parsedArray);
    case 5:
      return maximaBasedMapping(parsedArray, true);
    default:
      return saturationBasedMapping(parsedArray);
  }
}

/**
 * Export the content into text format
 */
function exportAscii() {
  var blob = new Blob([ascii],
    { type: "text/plain;charset=utf-8"
  });
  saveAs(blob, `ASCII-${new Date().getTime()}.txt`);
}

/**
 * Copy the content to clipboard
 */
function copyToClipBoard() {
  navigator.clipboard.writeText(ascii);
}

/**
 * Set the fill style
 * @param {Observer} event dom event
 */
function setFillStyle(event) {
  selectedFillIndex = event.id;
  generateAsciiSymbols();
}

/**
 * Generate the ascii art from an rgb array
 */
function generateAsciiSymbols() {
  ascii = '';
  let currentAsciiSymbol;
  if (selectedFillIndex === 'custom') {
    currentAsciiSymbol = getCustomChars();
  } else {
    currentAsciiSymbol = Array.from(ASCII_SYMBOLS[selectedFillIndex].symbols);
  }
  if (reverseShade) {
    currentAsciiSymbol.reverse();
  }
  for (let index = 0; index < rgbaArray.length; index += 1) {
    if (rgbaArray[index] <= 42) {
      ascii = ascii + currentAsciiSymbol[0];
    } else if (rgbaArray[index] <= 84) {
      ascii = ascii + currentAsciiSymbol[1];
    } else if (rgbaArray[index] <= 126) {
      ascii = ascii + currentAsciiSymbol[2];
    } else if (rgbaArray[index] <= 168) {
      ascii = ascii + currentAsciiSymbol[3];
    } else if (rgbaArray[index] <= 210) {
      ascii = ascii + currentAsciiSymbol[4];
    } else {
      ascii = ascii + currentAsciiSymbol[5];
    }
    if((index+1) % width === 0) {
      ascii = ascii+'\n';
    }
  }
  generator.innerText = ascii;
}

/**
 * Reverse the selected ascii style array
 */
function toggleShade() {
  let radioReShade = document.querySelector('#reverse-shade');
  reverseShade = radioReShade.ariaChecked;
  generateAsciiSymbols();
}

/**
 * Set the fill style algorithm
 * @param {Observer} event dom event
 */
function setFillAlgorithm(event) {
  selectedAlgorithm = parseInt(event.id, 10);
  drawImage();
}

function RGBtoHSV(color) {
  var r,g,b,h,s,v;
  r= color[0];
  g= color[1];
  b= color[2];
  min = Math.min( r, g, b );
  max = Math.max( r, g, b );

  v = max;
  delta = max - min;
  if( max != 0 )
      s = delta / max;        // s
  else {
      // r = g = b = 0        // s = 0, v is undefined
      s = 0;
      h = -1;
      return [h, s, undefined];
  }
  if( r === max )
      h = ( g - b ) / delta;      // between yellow & magenta
  else if( g === max )
      h = 2 + ( b - r ) / delta;  // between cyan & yellow
  else
      h = 4 + ( r - g ) / delta;  // between magenta & cyan
  h *= 60;                // degrees
  if( h < 0 )
      h += 360;
  if ( isNaN(h) )
      h = 0;
  return [h,s,v];
};

function HSVtoRGB(color) {
  var i;
  var h,s,v,r,g,b;
  h= color[0];
  s= color[1];
  v= color[2];
  if(s === 0 ) {
      // achromatic (grey)
      r = g = b = v;
      return [r,g,b];
  }
  h /= 60;            // sector 0 to 5
  i = Math.floor( h );
  f = h - i;          // factorial part of h
  p = v * ( 1 - s );
  q = v * ( 1 - s * f );
  t = v * ( 1 - s * ( 1 - f ) );
  switch( i ) {
      case 0:
          r = v;
          g = t;
          b = p;
          break;
      case 1:
          r = q;
          g = v;
          b = p;
          break;
      case 2:
          r = p;
          g = v;
          b = t;
          break;
      case 3:
          r = p;
          g = q;
          b = v;
          break;
      case 4:
          r = t;
          g = p;
          b = v;
          break;
      default:        // case 5:
          r = v;
          g = p;
          b = q;
          break;
  }
  return [r,g,b];
}

function setResizeSize(maxLength) {
  height = Math.floor(height * maxLength / width);
  width = Math.floor(maxLength);
  drawImage();
}

const inputElements = [...document.querySelectorAll('input.code-input')]

inputElements.forEach((ele,index)=>{
  ele.addEventListener('keydown',(e)=>{
    if(e.keyCode === 8 && e.target.value==='') inputElements[Math.max(0,index-1)].focus()
  });

  ele.addEventListener('input',(e)=>{
    const input = e.target.value;
    const regex = /\p{Extended_Pictographic}/ug
    let first;
    let rest;

    if (regex.test(input)) {
      first = input;
      rest = [];
    } else {
      [first,...rest] = e.target.value
    }

    e.target.value = first ?? '' // first will be undefined when backspace was entered, so set the input to ""
    const lastInputBox = index===inputElements.length-1
    const insertedContent = first!==undefined
    if (insertedContent && !lastInputBox) {
      // continue to input the rest of the string
      inputElements[index+1].focus()
      inputElements[index+1].value = rest.join('')
      inputElements[index+1].dispatchEvent(new Event('input'))
    }
  });
});


/**
 * Retrieve the current custom characters
 * @returns { Array }
 */
function getCustomChars(){
  const code = [...document.querySelectorAll('.code-input')]
    .filter(({name})=>name)
    .map(({value})=>value)
  return code;
}

/**
 * Clears the custom characters
 * @returns { Array }
 */
function clearCustomCharacters() {
  const code = [...document.querySelectorAll('.code-input')];
  code.forEach(char => {
    char.value = '';
  })
}

/**
 * Redraw ascii with custom symbols
 * @returns { Array }
 */
function redrawCustom() {
  if (getCustomChars().length != 6) return;
  selectedFillIndex = 'custom';
  drawImage();
}

function exportAsPng() {
  html2canvas(document.querySelector("#ascii-generator")).then(canvas => {
    canvas.toBlob(function(blob) {
      saveAs(blob, `PIXEL-${new Date().getTime()}.png`);
      }, "image/png");
  });
}

window.redrawCustom = redrawCustom;
window.clearCustomCharacters = clearCustomCharacters;
window.setResizeSize = setResizeSize;
window.setFillAlgorithm = setFillAlgorithm;
window.setFillStyle = setFillStyle;
window.exportAscii = exportAscii;
window.exportAsPng = exportAsPng;
window.copyToClipBoard = copyToClipBoard;
window.toggleShade = toggleShade;
window.loadFile = loadFile;