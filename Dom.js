window.onload=function(){
	var i=0;
	var j=0;
	var box2=document.getElementById("box2");
	var box3=document.getElementById("box3");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
btn1.addEventListener("click",function(){
	i++;
	box2.innerHTML="<p>i am added by innerHtml for "+i+" times </p>";	
},false);	

btn2.addEventListener("click",function(){
	j++;	
	var para=document.createElement("p");
	box3.appendChild(para);
	console.log(para.valueOf);
	var txt = document.createTextNode("i am added by createTextNode");
	console.log(txt.toString());
	para.appendChild(txt);
	alert("by txt");
	console.log(para.firstChild.valueOf);
	para.firstChild.nodeValue="i am added by nodeValue";
//var p2box3=box3.childNodes;
	/*for(var k=0;k<p2box3.length;k++){
		if(p2box3[k].nodeName="P"){
			//console.log(p2box3[k].firstChild.nodeValue);
			p2box3[k].nodeValue="i am added by Dom for "+j+" times";
			console.log(p2box3[k].nodeValue);
			console.log(p2box3[k].nodeType);
			return;
		}
	}*/
},false);




}