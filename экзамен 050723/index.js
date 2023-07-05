let container = document.querySelector('#image-container')

 let ch1 = document.createElement('img')
 ch1.src = "paper.jpg";
 container.appendChild(ch1);
ch1.classList.add('gm')
 ch1.setAttribute("data-item", "paper")

 let ch2 = document.createElement('img')
 ch2.src = "scissors.jpg";
 container.appendChild(ch2);
ch2.classList.add('gm2')
 ch2.setAttribute("data-item", "scissors")

 let ch3 = document.createElement('img')
 ch3.src = "stone.jpg";
 container.appendChild(ch3);
ch3.classList.add('gm')
 ch3.setAttribute("data-item", "stone") 

let con = document.querySelector(".con")
let again = document.createElement('button')
again.innerText = "again";
con.appendChild(again);
again.classList.add('knopka')
again.onclick = function(){
   location.reload()
   }

container.onclick = function(event){

let res = document.querySelector(".res")
let answ = document.createElement('p')
res.appendChild(answ)
answ.innerText = ""

  let select = event.target.getAttribute("data-item")
  const items = ['paper', 'scissors', 'stone']
        
        let selectComputer = items[Math.floor(Math.random()*items.length)];
   
        const compare = (choice1,choice2) => {
            if (choice1 === choice2) {
                return "no winner, try again!";
            }
            if (choice1 === "stone") {
                if (choice2 === "scissors") {
                    return "you won!";
                } else {
                    return "you lose :(";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "stone") {
                    return "you won!";
                } else {
                    return "you lose :(";
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "stone") {
                    return "you lose :(";
                } else {
                    return "you won!";
                }
            }
        };
       const result = compare(select, selectComputer);
    
answ.innerText = "your choice:  " + select+'\n' 
answ.innerText += "choice of opponent:  " + selectComputer+'\n'
answ.innerText += result+'\n'
}

       
 