function oi(){
	console.log("OLA EDMAR !!!");
}
function par(mes){
	var mensagem = "";
	var resto = mes % 2;
	if (resto == 0) 
		mensagem = "O seu mes de nascimento EH PAR";
	else 
		mensagem = "O seu mesde nascimento EH IMPAR";
	console.log(mensagem);
}
oi();
mes = 2;
par(mes);
const frase = nome => "Parabens ${nome} !!!";
frase("Edmar_Brasil");