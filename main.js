var db_email = ["pippo@ex.it", "franco@msn.com", "checco@mail.es"];

var user_mail = prompt("inserisci la tua mail");
document.getElementById('user_mail').innerHTML = user_mail;

for (var i = 0; i < db_email.length; i++ ) {
  if (user_mail == db_email[i]) {
    document.writeln ('Sei nella lista');
  }
  else {
    document.writeln ('non sei nella lista');
  }
}
