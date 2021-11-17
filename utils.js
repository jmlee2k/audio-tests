/**
 * @param {string} url 
 * @param {AudioContext} ctx 
 */
function loadSound(url,ctx)
{
	return new Promise((resolve,reject)=>{
		const xhr = new XMLHttpRequest();
		xhr.responseType = "arraybuffer";
		xhr.onload = ()=>{ctx.decodeAudioData(xhr.response,resolve,reject)};
		xhr.open("GET",url,true);
		xhr.send();
	});
}

const output = document.getElementById("output");
const log = (...str)=>{
	output.appendChild(document.createElement("div")).textContent = str;
	console.log(...str);
};
const logError = (...str)=>{
	output.appendChild(document.createElement("div")).textContent = str;
	console.error(...str);
};