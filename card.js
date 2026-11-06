function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewstr
    if (views<1000) {
        viewstr=Math.ceil(views);
    }
    else if (views<1000000) {
        viewstr=Math.ceil(views/1000)+"k" ;  
    }
    else{
        viewstr=Math.ceil(views/1000000)+"M";
    }
    
    let html=`<div class="container">
        <div class="card">
            <div class="image">
                <div class="imgs">
                    <img src="${thumbnail}" alt="Image">
                    <div class="cap">${duration}</div>
                </div>
                <div class="text">
                    <h1>&nbsp${title}</h1>
                    <p>&nbsp&nbsp${cName} • ${viewstr} • ${monthsOld} months ago
            </div>
        </div>
    </div>`
        document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+ html;
}


createCard("Introduction to frontend | Sigma Web Dev video #3", "CodeWithTushar", 534200, 9, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

