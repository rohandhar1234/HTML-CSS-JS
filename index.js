//challenge 1 age in days
function ageindays(){
    var birthyear=prompt("What year were you born?")
    var ageindayss= (2021-birthyear)*365 
    console.log(ageindayss);
    var h1=document.createElement("h2");
    var answer=document.createTextNode("You are "+ ageindayss + " days old");
    h1.setAttribute("id", "arako");
    h1.append(answer);
    document.getElementById("flex-box-result").appendChild(h1)
}

function reset(){
    document.getElementById("arako").remove();
}

function image(){
    var image=document.createElement("img");
    var saika=document.getElementById("beti");
    image.src="data:image/jpeg;base64,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"
    saika.append(image);
}

function img_reset(){
    window.location.reload()
}
