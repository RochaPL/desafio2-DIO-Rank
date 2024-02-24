let nome = "Apolo, The cat";
let nivel;
let wins = 80;
let loses = 40;
let winRate;


winRate = calculator (wins, loses);
nivel = setRank(winRate);

console.log (`O Herói tem de saldo de ${winRate} está no nível de ${nivel}`);




function calculator(totalWins, totalLoses){

let calculate = totalWins - totalLoses;
return calculate;

}



function setRank(resultCalculate){
let contadorLinha = 0;
let rank = [
    ["Ferro", 0, 10],
    ["Bronze", 11, 20],
    ["Prata", 21, 50],
    ["Ouro", 51, 80],
    ["Diamante", 81, 90],
    ["Lendário", 91, 100],
    ["Radiante", 101, "máx"]
]

while (contadorLinha < 7){
    if (resultCalculate >= rank[contadorLinha][1]){
        if(contadorLinha === 6){

        return rank[contadorLinha][0];

        }

        if (resultCalculate <= rank[contadorLinha][2]){ 

        return rank[contadorLinha][0];


        }
    
    }
    contadorLinha++;
}
}
