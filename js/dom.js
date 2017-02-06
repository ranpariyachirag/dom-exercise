var tag_line = document.getElementById("tag-line");
console.log(tag_line.innerHTML);

var heading = document.querySelector(".bg-main-content");
console.log(heading);

var h2element = heading.querySelectorAll("h2");
console.log(h2element);



var collect = tag_line.innerHTML+ "\n\n";


for(var i=0; i < h2element.length; i += 1)
    {
        collect += h2element[i].innerHTML + "\n";
    
    }

alert(collect);


var when_to_launch = heading.children[12];
console.log(when_to_launch);

var collect = when_to_launch.children[0].innerHTML + "\n\n";
console.log(collect);



for(var i=1; i < when_to_launch.children.length; i += 1)
    {
        collect += when_to_launch.children[i].innerHTML + "\n\n";
    
    }

alert(collect);


