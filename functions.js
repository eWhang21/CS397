var GlobalTime = 0;
var noteTimes = [];
var notes = [];
var path = '';

function start() {
  GlobalTime = new Date();
}
function stop() {
}
function logNotes() {
  var date = new Date();
  var note = document.getElementById('note-box').value;
  var string = "<li>" + "On " + date.toString() + ": " + note + "</li>";
  document.getElementById('log-list').insertAdjacentHTML('afterbegin', string);
  document.getElementById('note-box').value = "";
  notes.push(note)
  noteTimes.push(date.toString())
}

function configure() {
  path = document.getElementById('config-box').value;
}

function moveTo(location) {
  if (location == "home") {
    window.location.href = 'index.html'
  } else if (location == "config") {
    window.location.href = 'configure.html'
  }

}
