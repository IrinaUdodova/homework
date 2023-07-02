let container = document.querySelector('#image-container')

 let ch1 = document.createElement('img')
 ch1.src = "paper.jpg";
 container.appendChild(ch1);
 ch1.style.width = '40%';
 ch1.style.height = 'auto'
 ch1.setAttribute("data-item", "paper")

 let ch2 = document.createElement('img')
 ch2.src = "scissors.jpg";
 container.appendChild(ch2);
 ch2.style.width = '20%';
 ch2.style.height = 'auto'
 ch2.setAttribute("data-item", "scissors")

 let ch3 = document.createElement('img')
 ch3.src = "stone.jpg";
 container.appendChild(ch3);
 ch3.style.width = '35%';
 ch3.style.height = 'auto'
 ch3.setAttribute("data-item", "stone") 

container.onclick = function(event){

  let select = event.target.getAttribute("data-item")
  const items = ['paper', 'scissors', 'stone']
    document.write(`<p>Вы: ${select}</p>`)
        
        let selectComputer = items[Math.floor(Math.random()*items.length)];
        document.write(`<p>Робот: ${selectComputer}</p>`);

        const compare = (choice1,choice2) => {
            if (choice1 === choice2) {
                return "Ничья";
            }
            if (choice1 === "stone") {
                if (choice2 === "scissors") {
                    return "Вы выиграли!";
                } else {
                    return "Вы проиграли!";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "stone") {
                    return "Вы выиграли!";
                } else {
                    return "Вы проиграли!";
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "stone") {
                    return "Вы проиграли!";
                } else {
                    return "Вы выиграли";
                }
            }
        };
       const result = compare(select, selectComputer);
       document.write(`<br><hr><br> ${result}`);
        
let con = document.querySelector("con")
let again = document.createElement('btn')
again.innerText = "again";
con.appendChild(again);
again.style.width = '100%';
again.onclick = function(){
   location.reload()
   }    
} 