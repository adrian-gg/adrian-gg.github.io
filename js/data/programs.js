const programas = {
  illustrator: '<div class="CONT-programas__illustrator"><div class="programas__icono-illustrator"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" fill="none"/><path d="M34.053,42.02q-.711-2.077-1.472-4.1t-1.472-4.153H16.281q-.711,2.127-1.447,4.179T13.386,42.02H6.749Q8.723,36.4,10.494,31.636t3.467-9.016q1.7-4.255,3.366-8.1t3.442-7.6h6.093q1.773,3.748,3.444,7.6t3.369,8.1q1.7,4.255,3.5,9.016T40.943,42.02ZM23.694,13.705q-1.165,2.685-2.659,6.534T17.92,28.6H29.469q-1.621-4.508-3.14-8.408T23.694,13.705ZM49.958,42.02H43.829V15.529h6.129Zm.658-34.241A3.514,3.514,0,0,1,49.5,10.514a3.786,3.786,0,0,1-2.634,1.013,3.851,3.851,0,0,1-2.685-1.013,3.514,3.514,0,0,1-1.114-2.735,3.576,3.576,0,0,1,1.114-2.786A3.851,3.851,0,0,1,46.868,3.98,3.786,3.786,0,0,1,49.5,4.993,3.576,3.576,0,0,1,50.616,7.779Z" transform="translate(2.137 9.98)"/></svg></div><p class="programa__titulo-illustrator">Illustrator</p></div>',
  photoshop: '<div class="CONT-programas__photoshop"><div class="programas__icono-photoshop"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" fill="none"/><path d="M17.183,5q7.76,0,11.9,2.827t4.137,8.839a12.013,12.013,0,0,1-1.1,5.37A9.282,9.282,0,0,1,28.9,25.685a14.9,14.9,0,0,1-5.139,2.081,32.426,32.426,0,0,1-6.938.668H13.585V40.974H7.11V5.874a32.149,32.149,0,0,1,5.011-.694Q14.87,5,17.183,5Zm.463,5.6q-2.467,0-4.06.154V22.884H16.72a15.905,15.905,0,0,0,7.195-1.31q2.518-1.31,2.518-4.959a5.88,5.88,0,0,0-.668-2.929,4.8,4.8,0,0,0-1.85-1.85,8.7,8.7,0,0,0-2.8-.951A20.175,20.175,0,0,0,17.645,10.6ZM44.266,36.5a8.181,8.181,0,0,0,3.6-.591,2.1,2.1,0,0,0,1.131-2.03,2.632,2.632,0,0,0-1.208-2.21,17.724,17.724,0,0,0-3.983-1.9,31.465,31.465,0,0,1-3.109-1.31,10.611,10.611,0,0,1-2.441-1.619,6.641,6.641,0,0,1-1.619-2.236,7.8,7.8,0,0,1-.591-3.212,7.007,7.007,0,0,1,2.724-5.833,11.7,11.7,0,0,1,7.4-2.133,22.756,22.756,0,0,1,4.522.437,22.009,22.009,0,0,1,3.238.848L52.8,19.749a15.237,15.237,0,0,0-2.621-.848,15.841,15.841,0,0,0-3.7-.385,6.441,6.441,0,0,0-3.083.642,2.109,2.109,0,0,0-1.182,1.979,2.854,2.854,0,0,0,.231,1.182,2.546,2.546,0,0,0,.8.951,8.159,8.159,0,0,0,1.49.874,22.989,22.989,0,0,0,2.261.9,34.451,34.451,0,0,1,3.752,1.619,10.157,10.157,0,0,1,2.544,1.8,6.152,6.152,0,0,1,1.465,2.287,9.131,9.131,0,0,1,.463,3.083,6.642,6.642,0,0,1-2.852,5.833q-2.852,1.979-8.146,1.979a22.3,22.3,0,0,1-5.7-.591,29.577,29.577,0,0,1-3.032-.951l1.079-5.191a28.022,28.022,0,0,0,3.315,1.079A17.1,17.1,0,0,0,44.266,36.5Z" transform="translate(1.779 11.032)"/></svg></div><p class="programa__titulo-photoshop">Photoshop</p></div>',
  after_efects: '<div class="CONT-programas__after_efects"><div class="programas__icono-after_efects"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" fill="none"/><path d="M31.221,40.215q-.71-2.075-1.471-4.1t-1.471-4.15H13.463q-.71,2.126-1.446,4.176t-1.446,4.074H3.939Q5.912,34.6,7.682,29.839t3.464-9.009q1.694-4.252,3.363-8.1T17.947,5.14h6.088q1.771,3.745,3.442,7.592t3.366,8.1q1.7,4.252,3.493,9.009t3.771,10.376ZM20.871,11.922q-1.164,2.682-2.657,6.529T15.1,26.8h11.54q-1.62-4.5-3.138-8.4T20.871,11.922ZM38.763,27.106A16.632,16.632,0,0,1,39.8,20.982,12.861,12.861,0,0,1,42.559,16.6a11.418,11.418,0,0,1,3.948-2.632,12.225,12.225,0,0,1,4.555-.886q5.466,0,8.528,3.391T62.652,26.6q0,.506-.025,1.139t-.076,1.139H45.09a6.981,6.981,0,0,0,2.252,4.935,8.558,8.558,0,0,0,5.8,1.746,19.053,19.053,0,0,0,4.074-.4,16.779,16.779,0,0,0,2.91-.86l.81,5.011a9.8,9.8,0,0,1-1.392.531,19.663,19.663,0,0,1-2.025.506q-1.139.228-2.455.38a23.387,23.387,0,0,1-2.682.152A16.232,16.232,0,0,1,46.3,39.835a11.309,11.309,0,0,1-4.252-2.885,11.823,11.823,0,0,1-2.48-4.353A17.773,17.773,0,0,1,38.763,27.106Zm17.765-2.733a8.047,8.047,0,0,0-.354-2.4,5.8,5.8,0,0,0-1.038-1.974,4.907,4.907,0,0,0-1.67-1.316,5.325,5.325,0,0,0-2.354-.481,5.479,5.479,0,0,0-2.48.531,5.653,5.653,0,0,0-1.8,1.392A6.362,6.362,0,0,0,45.7,22.1a10.692,10.692,0,0,0-.557,2.278Z" transform="translate(-2.216 11.769)"/></svg></div><p class="programa__titulo-after_efects">After Effects</p></div>',
  premiere_pro: '<div class="CONT-programas__premiere_pro"><div class="programas__icono-premiere_pro"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" fill="none"/><path d="M17.73,5Q25.5,5,29.636,7.829t4.14,8.846a12.021,12.021,0,0,1-1.106,5.374A9.288,9.288,0,0,1,29.456,25.7a14.911,14.911,0,0,1-5.143,2.083,32.45,32.45,0,0,1-6.943.669H14.13V41H7.65V5.874a32.172,32.172,0,0,1,5.014-.694Q15.416,5,17.73,5Zm.463,5.606q-2.469,0-4.063.154V22.9h3.137a15.917,15.917,0,0,0,7.2-1.311q2.52-1.311,2.52-4.963a5.885,5.885,0,0,0-.669-2.931,4.8,4.8,0,0,0-1.851-1.851,8.7,8.7,0,0,0-2.8-.951A20.19,20.19,0,0,0,18.193,10.606Zm35.229,9.1a19.838,19.838,0,0,0-2.134-.54,15.7,15.7,0,0,0-3.163-.283,12.512,12.512,0,0,0-2.186.206,13.138,13.138,0,0,0-1.62.36V41H38.1V15.389a34.208,34.208,0,0,1,4.5-1.26,28.053,28.053,0,0,1,5.991-.591q.617,0,1.44.077t1.646.206q.823.129,1.594.309t1.234.334Z" transform="translate(2.444 11)"/></svg></div><p class="programa__titulo-premiere_pro">Premiere Pro</p></div>',
  indesign: '<div class="CONT-programas__indesign"><div class="programas__icono-indesign"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" fill="none"/><path d="M9.03,7.665h6.354V42.611H9.03ZM26.982,29.349A9.58,9.58,0,0,0,28.9,35.677a6.525,6.525,0,0,0,5.295,2.294,21.039,21.039,0,0,0,2.5-.126,16.822,16.822,0,0,0,1.689-.277V22.44a9.45,9.45,0,0,0-2.143-1.034,8.379,8.379,0,0,0-2.849-.479A5.459,5.459,0,0,0,28.52,23.2,10.821,10.821,0,0,0,26.982,29.349ZM44.48,41.8a36.142,36.142,0,0,1-4.564,1.009,35.414,35.414,0,0,1-5.774.454,15.388,15.388,0,0,1-5.6-.958,11.664,11.664,0,0,1-4.211-2.748,12.1,12.1,0,0,1-2.673-4.337,16.551,16.551,0,0,1-.933-5.723,19.288,19.288,0,0,1,.782-5.673,12.41,12.41,0,0,1,2.294-4.362,10.227,10.227,0,0,1,3.681-2.8,11.973,11.973,0,0,1,4.992-.983,11.415,11.415,0,0,1,3.379.454,15.117,15.117,0,0,1,2.521,1.009V4.489l6.1-1.009Z" transform="translate(5.365 9.367)"/></svg></div><p class="programa__titulo-indesign">InDesign</p></div>',
  xd: '<div class="CONT-programas__xd"><div class="programas__icono-xd"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" fill="none"/><path d="M28.177,42.569a70.187,70.187,0,0,0-3.683-6.049q-2.22-3.3-4.642-6.374-1,1.2-2.179,2.87t-2.354,3.4q-1.177,1.736-2.179,3.356t-1.606,2.8H4.28q2.316-4.188,5.354-8.6t6.589-9.239L4.784,7.661H12.34l7.64,11.46,7.673-11.46h7.254L23.6,24.55q3.918,5.113,6.934,9.68t5.079,8.339ZM42.966,29.321a9.57,9.57,0,0,0,1.914,6.322,6.518,6.518,0,0,0,5.289,2.292,21.016,21.016,0,0,0,2.493-.126,16.8,16.8,0,0,0,1.687-.277V22.42a9.439,9.439,0,0,0-2.141-1.033,8.37,8.37,0,0,0-2.846-.479A5.453,5.453,0,0,0,44.5,23.176,10.809,10.809,0,0,0,42.966,29.321ZM60.445,41.763a36.1,36.1,0,0,1-4.559,1.007,35.376,35.376,0,0,1-5.768.453,15.372,15.372,0,0,1-5.591-.957,11.651,11.651,0,0,1-4.206-2.745,12.09,12.09,0,0,1-2.67-4.332,16.533,16.533,0,0,1-.932-5.717,19.267,19.267,0,0,1,.781-5.667,12.4,12.4,0,0,1,2.292-4.357,10.216,10.216,0,0,1,3.677-2.8,11.96,11.96,0,0,1,4.987-.982,11.4,11.4,0,0,1,3.375.453,15.1,15.1,0,0,1,2.519,1.007V4.487l6.1-1.007Z" transform="translate(-1.503 9.388)"/></svg></div><p class="programa__titulo-xd">Adobe Xd</p></div>',
  html: '<div class="CONT-programas__html"><div class="programas__icono-html"><svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 64 64"><rect fill="none" width="64" height="64"/><path d="M7.965,5.728l4.376,49.09l19.645,5.455l19.665-5.452l4.383-49.093H7.965z M46.538,21.784H23.5l0.549,6.166h21.943  L44.34,46.434l-12.341,3.422l-0.01,0.003l-12.331-3.425h-0.001l-0.862-9.667h6.045l0.446,5.015l6.705,1.812l0.009-0.003l6.712-1.812  l0.699-7.809H18.544l-1.625-18.207h30.158L46.538,21.784z"/></svg></div><p class="programa__titulo-html">HTML</p></div>',
  css: '<div class="CONT-programas__css"><div class="programas__icono-css"><svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 64 64"><rect fill="none" width="64" height="64"/><path d="M26.439,55.77l23.902-7.933l7.932-39.607H13.5l-1.703,8.837h35.882l-1.118,5.643H10.626l-1.759,8.837h35.884L42.78,41.662  L28.3,46.399l-12.512-4.737l0.854-4.418H7.805L5.728,47.837L26.439,55.77"/></svg></div><p class="programa__titulo-css">CSS</p></div>',
  js: '<div class="CONT-programas__js"><div class="programas__icono-js"><svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 64 64"><rect fill="none" width="64" height="64"/><path d="M5.728,5.728v52.546h52.543V5.728H5.728z M33.878,46.541c0,5.117-3.023,7.607-7.396,7.607c-3.951,0-6.244-2.042-7.405-4.51  l0,0l4.018-2.436c0.777,1.377,1.365,2.537,3.058,2.537c1.406,0,2.563-0.635,2.563-3.103V30.122h5.162V46.541z M45.527,54.031  c-4.583,0-7.545-2.064-8.991-4.926l0,0l4.026-2.326c1.054,1.725,2.434,2.878,4.866,2.878c2.047,0,3.234-0.905,3.234-2.313  c0-1.693-1.223-2.296-3.48-3.285l-1.233-0.531c-3.564-1.516-5.927-3.419-5.927-7.439c0-3.706,2.821-6.409,7.23-6.409  c3.14,0,5.395,0.975,7.018,3.833l-3.851,2.478c-0.847-1.516-1.76-2.113-3.175-2.113c-1.445,0-2.362,0.919-2.362,2.113  c0,1.479,0.917,2.079,3.033,2.994l1.232,0.532c4.198,1.796,6.561,3.634,6.561,7.757C53.712,51.718,50.221,54.031,45.527,54.031z"/></svg></div><p class="programa__titulo-js">JavaScript</p></div>',
  react: '<div class="CONT-programas__react"><div class="programas__icono-react"><svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 64 64"><rect fill="none" width="64" height="64"/><path d="M50.633,22.951c-0.6-0.207-1.223-0.403-1.862-0.587c0.106-0.43,0.202-0.853,0.288-1.269  c1.409-6.841,0.488-12.352-2.657-14.166c-3.018-1.739-7.953,0.075-12.934,4.411c-0.48,0.417-0.962,0.858-1.44,1.32  c-0.321-0.306-0.639-0.602-0.959-0.884C25.846,7.14,20.612,5.185,17.47,7.005c-3.016,1.745-3.907,6.926-2.639,13.408  c0.123,0.626,0.265,1.265,0.428,1.916c-0.741,0.21-1.458,0.435-2.141,0.673c-6.123,2.134-10.032,5.48-10.032,8.95  c0,3.585,4.198,7.178,10.574,9.357c0.505,0.173,1.025,0.334,1.563,0.489c-0.173,0.703-0.326,1.392-0.453,2.064  c-1.209,6.371-0.265,11.428,2.74,13.16c3.104,1.792,8.317-0.046,13.391-4.485c0.4-0.348,0.803-0.72,1.205-1.109  c0.523,0.503,1.046,0.978,1.565,1.427c4.913,4.229,9.768,5.934,12.771,4.197c3.104-1.796,4.111-7.229,2.802-13.842  c-0.1-0.503-0.216-1.021-0.348-1.546c0.366-0.105,0.727-0.218,1.077-0.334c6.627-2.196,10.941-5.747,10.941-9.379  C60.914,28.469,56.879,25.101,50.633,22.951L50.633,22.951z M49.195,38.987c-0.316,0.104-0.642,0.205-0.973,0.302  c-0.73-2.316-1.72-4.779-2.927-7.325c1.151-2.485,2.104-4.917,2.813-7.219c0.592,0.17,1.165,0.352,1.719,0.542  c5.351,1.841,8.617,4.566,8.617,6.665C58.445,34.188,54.919,37.088,49.195,38.987L49.195,38.987z M46.819,43.692  c0.58,2.925,0.662,5.567,0.279,7.635c-0.346,1.855-1.039,3.092-1.894,3.587c-1.823,1.055-5.721-0.317-9.925-3.935  c-0.479-0.411-0.966-0.855-1.452-1.326c1.628-1.778,3.256-3.852,4.848-6.154c2.795-0.245,5.437-0.652,7.831-1.206  C46.624,42.771,46.729,43.237,46.819,43.692L46.819,43.692z M22.8,54.732c-1.781,0.631-3.198,0.647-4.056,0.153  c-1.823-1.051-2.582-5.113-1.548-10.56c0.118-0.628,0.26-1.267,0.421-1.922c2.37,0.523,4.992,0.9,7.793,1.129  c1.601,2.25,3.276,4.32,4.964,6.134c-0.368,0.355-0.737,0.694-1.101,1.011C27.032,52.64,24.783,54.033,22.8,54.732L22.8,54.732z   M14.458,38.972c-2.819-0.962-5.148-2.216-6.743-3.583c-1.436-1.229-2.16-2.448-2.16-3.437c0-2.106,3.141-4.792,8.376-6.617  c0.635-0.222,1.3-0.431,1.99-0.627c0.725,2.354,1.673,4.814,2.819,7.303c-1.161,2.526-2.124,5.027-2.854,7.41  C15.394,39.276,14.918,39.128,14.458,38.972L14.458,38.972z M17.256,19.939c-1.086-5.554-0.366-9.744,1.451-10.796  c1.935-1.12,6.213,0.477,10.722,4.48c0.288,0.256,0.576,0.524,0.867,0.802c-1.679,1.803-3.34,3.857-4.926,6.096  c-2.719,0.252-5.322,0.657-7.718,1.199C17.501,21.115,17.368,20.52,17.256,19.939L17.256,19.939z M42.199,26.098  c-0.572-0.989-1.158-1.953-1.758-2.893c1.845,0.234,3.613,0.543,5.273,0.922c-0.5,1.598-1.12,3.268-1.851,4.98  C43.339,28.111,42.784,27.107,42.199,26.098L42.199,26.098z M32.027,16.19c1.139,1.235,2.281,2.612,3.404,4.109  C34.3,20.245,33.154,20.217,32,20.217c-1.144,0-2.281,0.027-3.403,0.079C29.719,18.815,30.871,17.438,32.027,16.19L32.027,16.19z   M21.79,26.115c-0.571,0.991-1.116,1.99-1.632,2.99c-0.72-1.706-1.334-3.384-1.838-5.004c1.652-0.368,3.41-0.67,5.244-0.9  C22.955,24.149,22.363,25.121,21.79,26.115L21.79,26.115L21.79,26.115z M23.616,40.878c-1.894-0.212-3.681-0.498-5.331-0.856  c0.513-1.649,1.142-3.363,1.874-5.105c0.519,0.999,1.065,1.999,1.641,2.992l0,0C22.385,38.92,22.993,39.912,23.616,40.878  L23.616,40.878z M32.096,47.888c-1.171-1.262-2.339-2.66-3.479-4.164c1.107,0.042,2.236,0.065,3.384,0.065  c1.181,0,2.345-0.027,3.49-0.078C34.365,45.242,33.228,46.643,32.096,47.888L32.096,47.888z M43.887,34.826  c0.773,1.764,1.427,3.468,1.943,5.088c-1.679,0.384-3.489,0.69-5.396,0.919c0.601-0.951,1.192-1.934,1.775-2.941  C42.799,36.87,43.357,35.847,43.887,34.826L43.887,34.826z M40.07,36.656c-0.903,1.567-1.834,3.065-2.774,4.476  c-1.717,0.122-3.489,0.186-5.296,0.186c-1.8,0-3.549-0.055-5.235-0.165c-0.981-1.431-1.93-2.931-2.828-4.48l0,0  c-0.896-1.548-1.719-3.109-2.467-4.661c0.748-1.556,1.569-3.117,2.461-4.663l0,0c0.891-1.548,1.832-3.041,2.804-4.463  c1.719-0.131,3.482-0.198,5.265-0.198l0,0c1.789,0,3.556,0.067,5.275,0.199c0.957,1.411,1.889,2.9,2.786,4.45  c0.907,1.566,1.739,3.117,2.494,4.639C41.805,33.524,40.974,35.091,40.07,36.656L40.07,36.656z M45.167,9.07  c1.936,1.117,2.688,5.621,1.472,11.527c-0.076,0.376-0.166,0.76-0.259,1.15c-2.399-0.554-5.005-0.966-7.732-1.222  c-1.59-2.263-3.235-4.321-4.89-6.1c0.445-0.429,0.89-0.836,1.33-1.22C39.357,9.488,43.347,8.021,45.167,9.07L45.167,9.07z   M32,26.788c2.854,0,5.164,2.312,5.164,5.164c0,2.852-2.311,5.164-5.164,5.164c-2.853,0-5.163-2.313-5.163-5.164  C26.837,29.1,29.147,26.788,32,26.788L32,26.788z"/></svg></div><p class="programa__titulo-react">React</p></div>',
  php: '<div class="CONT-programas__php"><div class="programas__icono-php"><svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 64 64"><rect fill="none" width="64" height="64"/><path d="M19.316,27.442h-2.397l-1.311,6.731h2.129c1.415,0,2.467-0.268,3.157-0.799c0.69-0.534,1.157-1.42,1.4-2.666  c0.233-1.196,0.124-2.041-0.318-2.529C21.533,27.689,20.649,27.442,19.316,27.442z M32,15.957C15.156,15.957,1.5,23.14,1.5,32  c0,8.861,13.656,16.044,30.5,16.044S62.5,40.86,62.5,32C62.5,23.14,48.844,15.957,32,15.957z M23.715,34.894  c-0.666,0.636-1.462,1.114-2.333,1.4c-0.854,0.275-1.941,0.417-3.264,0.417h-3.001l-0.834,4.273h-3.5l3.125-16.079h6.736  c2.025,0,3.502,0.531,4.43,1.596c0.934,1.062,1.211,2.546,0.839,4.453c-0.139,0.754-0.402,1.482-0.774,2.152  C24.777,33.757,24.3,34.353,23.715,34.894z M33.941,36.711l1.38-7.114c0.161-0.81,0.099-1.36-0.174-1.654  c-0.271-0.294-0.854-0.442-1.742-0.442h-2.778l-1.79,9.215h-3.475l3.125-16.083h3.473l-0.829,4.275h3.095  c1.948,0,3.291,0.34,4.031,1.019c0.739,0.679,0.96,1.78,0.667,3.302l-1.454,7.481H33.941z M53.252,30.955  c-0.14,0.757-0.402,1.482-0.774,2.152c-0.365,0.65-0.839,1.246-1.428,1.787c-0.662,0.636-1.462,1.112-2.33,1.4  c-0.854,0.275-1.946,0.417-3.27,0.417h-3.001l-0.829,4.276h-3.502l3.125-16.079h6.734c2.025,0,3.502,0.531,4.431,1.596  C53.341,27.564,53.621,29.048,53.252,30.955z M46.654,27.442h-2.397l-1.311,6.731h2.129c1.418,0,2.47-0.268,3.157-0.799  c0.693-0.534,1.157-1.42,1.4-2.666c0.233-1.196,0.124-2.041-0.317-2.529C48.873,27.689,47.984,27.442,46.654,27.442L46.654,27.442z"/></svg></div><p class="programa__titulo-php">PHP</p></div>',
  mysql: '<div class="CONT-programas__mysql"><div class="programas__icono-mysql"><svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 64 64"><rect fill="none" width="64" height="64"/><path d="M55.442,46.939c-3.028-0.075-5.376,0.229-7.347,1.061c-0.567,0.229-1.477,0.229-1.552,0.947  c0.304,0.304,0.342,0.795,0.606,1.211c0.455,0.758,1.249,1.78,1.968,2.31c0.796,0.605,1.591,1.212,2.423,1.741  c1.477,0.909,3.144,1.438,4.582,2.348c0.833,0.529,1.665,1.212,2.498,1.78c0.418,0.303,0.683,0.794,1.212,0.983v-0.112  c-0.265-0.342-0.342-0.833-0.606-1.213c-0.378-0.378-0.756-0.719-1.135-1.097c-1.098-1.478-2.461-2.765-3.938-3.825  c-1.21-0.832-3.861-1.968-4.353-3.368c0,0-0.038-0.038-0.076-0.076c0.832-0.075,1.816-0.378,2.612-0.606  c1.287-0.342,2.461-0.265,3.786-0.606c0.606-0.149,1.213-0.339,1.816-0.529v-0.339c-0.681-0.684-1.174-1.593-1.893-2.235  c-1.93-1.666-4.051-3.293-6.246-4.657c-1.174-0.757-2.688-1.248-3.938-1.893c-0.454-0.227-1.212-0.34-1.477-0.72  c-0.682-0.832-1.061-1.93-1.552-2.915c-1.1-2.081-2.158-4.391-3.105-6.587c-0.681-1.477-1.098-2.954-1.93-4.316  c-3.899-6.437-8.141-10.336-14.652-14.159c-1.4-0.795-3.067-1.137-4.845-1.553c-0.948-0.038-1.893-0.113-2.841-0.152  c-0.604-0.265-1.21-0.984-1.742-1.324C11.564,5.673,5.996,2.72,4.407,6.62c-1.022,2.461,1.514,4.884,2.384,6.133  c0.645,0.871,1.477,1.855,1.932,2.841c0.265,0.643,0.339,1.324,0.606,2.006c0.606,1.665,1.172,3.52,1.968,5.073  c0.416,0.794,0.871,1.627,1.402,2.346c0.301,0.416,0.833,0.606,0.946,1.287c-0.529,0.757-0.57,1.893-0.873,2.84  c-1.362,4.278-0.833,9.579,1.099,12.721c0.606,0.945,2.044,3.028,3.976,2.232c1.703-0.681,1.324-2.839,1.816-4.731  c0.113-0.455,0.039-0.758,0.265-1.062c0,0.039,0,0.077,0,0.077c0.531,1.061,1.061,2.083,1.552,3.142  c1.174,1.855,3.219,3.786,4.922,5.073c0.909,0.682,1.628,1.855,2.764,2.271v-0.113h-0.075c-0.228-0.342-0.567-0.493-0.871-0.758  c-0.681-0.681-1.438-1.514-1.968-2.271c-1.59-2.12-2.992-4.468-4.241-6.891c-0.606-1.174-1.135-2.461-1.628-3.635  c-0.227-0.454-0.227-1.135-0.606-1.363c-0.568,0.834-1.4,1.554-1.816,2.576c-0.719,1.626-0.796,3.633-1.061,5.716  c-0.151,0.038-0.075,0-0.151,0.074c-1.212-0.303-1.628-1.552-2.081-2.612c-1.136-2.687-1.326-7.003-0.341-10.106  c0.265-0.796,1.4-3.295,0.947-4.051c-0.228-0.721-0.986-1.137-1.402-1.705c-0.493-0.719-1.022-1.627-1.362-2.423  c-0.909-2.12-1.363-4.467-2.348-6.587c-0.455-0.985-1.249-2.008-1.893-2.915c-0.719-1.022-1.513-1.742-2.083-2.954  c-0.188-0.416-0.453-1.097-0.15-1.552c0.075-0.303,0.227-0.416,0.53-0.492C7.058,6.393,8.457,6.923,8.95,7.15  c1.402,0.567,2.574,1.098,3.75,1.893c0.53,0.378,1.096,1.098,1.778,1.287h0.796c1.21,0.265,2.574,0.076,3.709,0.416  c2.006,0.645,3.823,1.59,5.452,2.613c4.96,3.142,9.048,7.609,11.812,12.947c0.454,0.871,0.645,1.667,1.061,2.576  c0.796,1.855,1.78,3.748,2.574,5.565c0.796,1.779,1.552,3.596,2.689,5.073c0.567,0.794,2.839,1.212,3.861,1.628  c0.757,0.34,1.93,0.643,2.612,1.059c1.287,0.797,2.574,1.706,3.786,2.576c0.604,0.453,2.497,1.4,2.612,2.158V46.939L55.442,46.939z   M16.825,14.04c-0.645,0-1.099,0.077-1.552,0.19c0,0,0,0.039,0,0.075h0.075c0.303,0.606,0.833,1.022,1.21,1.554  c0.303,0.604,0.568,1.21,0.871,1.816c0.038-0.038,0.077-0.075,0.077-0.075c0.529-0.38,0.794-0.986,0.794-1.893  c-0.227-0.265-0.265-0.531-0.453-0.796C17.619,14.533,17.126,14.343,16.825,14.04L16.825,14.04L16.825,14.04z"/></svg></div><p class="programa__titulo-mysql">MySQL</p></div>',
  blender: '<div class="CONT-programas__blender"><div class="programas__icono-blender"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect fill="none" width="64" height="64"/><path d="M61.287,34.726c-0.347-2.432-1.188-4.738-2.507-6.855c-1.146-1.847-2.621-3.489-4.378-4.885l0.005-0.005L35.938,8.794  c-0.015-0.011-0.027-0.022-0.044-0.032c-0.613-0.471-1.444-0.729-2.34-0.729c-0.895,0-1.76,0.26-2.43,0.73  c-0.723,0.505-1.136,1.174-1.164,1.886c-0.027,0.665,0.291,1.305,0.895,1.803c1.188,0.937,2.375,1.897,3.564,2.856  c1.152,0.932,2.34,1.891,3.519,2.824l-22.621-0.015c-2.586,0-4.349,1.215-4.71,3.249c-0.162,0.892,0.12,1.872,0.75,2.622  c0.665,0.795,1.634,1.234,2.723,1.234h1.724c2.384,0,4.776-0.006,7.168-0.011l2.277-0.005L4.717,40.396l-0.082,0.061  c-1.147,0.878-1.897,2.112-2.061,3.38c-0.123,0.96,0.102,1.842,0.651,2.542c0.651,0.837,1.669,1.297,2.868,1.297  c1.177,0,2.378-0.442,3.382-1.256l11.086-9.075c-0.046,0.443-0.104,1.093-0.098,1.565c0.014,0.747,0.251,2.247,0.632,3.463  c0.786,2.5,2.107,4.788,3.927,6.797c1.896,2.091,4.204,3.75,6.861,4.927c2.808,1.242,5.829,1.871,8.973,1.871h0.031  c3.155-0.005,6.184-0.646,9.004-1.904c2.659-1.19,4.967-2.854,6.854-4.943c1.82-2.02,3.139-4.313,3.922-6.811  c0.389-1.237,0.635-2.515,0.739-3.808C61.507,37.253,61.463,35.984,61.287,34.726L61.287,34.726z M41.088,46.711  c-6.935,0-12.556-5.029-12.556-11.233c0-6.206,5.624-11.236,12.556-11.236c6.936,0,12.556,5.03,12.556,11.236  C53.646,41.682,48.023,46.711,41.088,46.711z M48.33,34.489c0.104,1.854-0.639,3.571-1.936,4.845  c-1.322,1.296-3.208,2.112-5.317,2.112c-2.107,0-3.993-0.816-5.315-2.112c-1.297-1.273-2.036-2.991-1.935-4.845  c0.099-1.797,0.978-3.385,2.299-4.51c1.3-1.105,3.046-1.779,4.951-1.779c1.907,0,3.653,0.675,4.953,1.779  C47.352,31.104,48.23,32.691,48.33,34.489L48.33,34.489z"/></svg></div><p class="programa__titulo-blender">Blender</p></div>'
};