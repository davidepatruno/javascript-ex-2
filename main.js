var db_email = ["pippo@ex.it", "franco@msn.com", "checco@mail.es"];

var user_mail = prompt("inserisci la tua mail");
document.getElementById('user_mail').innerHTML = user_mail;

if (db_email = user_mail) {
  document.writeln ('la tua mail è corretta');
}
