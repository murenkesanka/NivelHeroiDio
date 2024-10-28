//Criação de Variáveis e valores das variáveis
var nomeAventureiro = ["Juninho", "Tiaguinho","Pedrinho"] 
var xp = [2367, 6897, 9789]
let rankAventureiro = ""
//Criação de if e loop
for ( i = 0; i<=2; i++){
    if (xp[i]  < 1000){
       rankAventureiro = "Ferro"
      }else if (xp[i] >= 1001 && xp[i] <= 2000){
        rankAventureiro = "Bronze"
      }else if (xp[i] >= 2001 && xp[i] <= 5000){
        rankAventureiro = "Prata"
      }else if (xp[i] >= 5001 && xp[i] <= 7000){
        rankAventureiro = "Ouro"
      }else if (xp[i] >= 7001 && xp[i] <= 8000){
        rankAventureiro = "Platina"
      }else if (xp[i] >= 8001 && xp[i] <= 9000){
        rankAventureiro = "Ascendente"
      }else if (xp[i] >= 9001 && xp[i] <= 10000){
        rankAventureiro = "Imortal"
      }else {
        rankAventureiro ="Radiante"
  }
  console.log
  ("O aventureiro: " + nomeAventureiro[i] + " está no ranque " + rankAventureiro + " possuindo " + xp[i] + " de experiência!")
}
