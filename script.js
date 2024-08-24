let currentMoleTile = 0;
let currentPlantTile = 0;
let score = 0;
let GameOver = false
    //Step1

    window.onload =function(){
        setGame()
    }
//step2
    function setGame (){
       
        for( let i = 0 ; i < 9 ;i++){
            let tile = document.createElement("div")
            tile.id = i.toString()
        tile.addEventListener("click", selectTile);
          
            document.getElementById("board").appendChild(tile)
        }
        
    setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
    

        setInterval(setplant,2000)

    }

    //step 4
    function getRandomTile (){
        let num = Math.floor(Math.random()*9)
        return num.toString()
    }

    //step 3 
    function setMole  (){
        if(GameOver){
            return
        }
        if(currentMoleTile){
             currentMoleTile.innerHTML=''
        }
        let mole = document.createElement('img')
        mole.src = "./monty-mole.png"
        let num = getRandomTile()
        if(currentMoleTile && currentMoleTile.id == num){
            return
        }
        currentMoleTile =document.getElementById(num)
        currentMoleTile.appendChild(mole)
        
    }

    function setplant(){
        if(GameOver){
            return
        }
        if(currentPlantTile){
            currentPlantTile.innerHTML=""
        }

        const plant = document.createElement("img")
        plant.src = './piranha-plant.png'
        let num = getRandomTile()
        if(currentPlantTile && currentPlantTile.id == num){
            return
        }
            currentPlantTile = document.getElementById(num)
            currentPlantTile.appendChild(plant)
        
    }

    function selectTile (){
        if(GameOver){
            return
        }
        if(this == currentMoleTile){
            score += 10
            document.getElementById('score').innerHTML=score.toString()
        }else if (this == currentPlantTile){
             document.getElementById('score').innerHTML= "Game OVER!" + score.toString()
            GameOver = true

        }
    }