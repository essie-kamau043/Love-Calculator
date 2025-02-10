function calculateLoveScore() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
  
    if (name1 === "" || name2 === "") {
      alert("Please enter both names.");
      return;
    }
    else{
        const lovePercentage = Math.floor(Math.random() * 101) 
        const result = document.getElementById("result");
        result.innerHTML = `${name1} and ${name2} 's Love percentage is ${lovePercentage} %`;


        if (lovePercentage <= 30) {
            result.innerHTML += "<br> Not a great match.Keep Looking!";
            result.style.color = "green";
          } 
          
          else if (lovePercentage >= 30 && lovePercentage <= 70) {
            result.innerHTML += "<br> You are a good match.Keep your love going!";
            result.style.color = "yellow";
          } else {
            result.style.color = "green";
          }
    }
  
}