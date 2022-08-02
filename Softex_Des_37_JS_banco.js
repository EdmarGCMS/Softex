var Banco = new Object();
Banco.conta = "9195";
Banco.saldo = 1,000.98;
Banco.tipo = "ContaCorrente";
Banco.agencia = "026";
function saldo() {
console.log (" O saldo atual da conta " + conta + " eh: " + saldo);
}
function deposito(deposito) {
saldo += deposito;
console.log(" Foi feito um deposito de " + deposito + " e o saldo atual eh: " + saldo);
}
function saque(saque) {
saldo -= saque;
console.log(" Foi feito um saque de " + saque + " e o saldo atual eh: " + saldo);
}
function numeroconta() {
console.log (" O numero da " + tipo + " eh: " + conta);
}
var deposito = 500.00;
deposito(deposito);
var saque = 200.00;
saque(saque);
numeroconta();