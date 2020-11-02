var noteTimes = [];
var notes = [];
var path = '';

function stop() {
  spliceVideo(noteTimes, path)
}
function logNotes() {
  var date = new Date();
  var note = document.getElementById('note-box').value;
  var string = "<li>" + "On " + date.toString() + ": " + note + "</li>";
  document.getElementById('log-list').insertAdjacentHTML('afterbegin', string);
  document.getElementById('note-box').value = "";
  notes.push(note);
  noteTimes.push(["note", date.toString()]);
  document.getElementById('buttons').innerHTML =  "<button type='button' id='end-button' onclick='endNote()'> End Note </button> <button type='button' id='note-button' onclick='logNotes()'> New Note Text </button>";
}

function endNote() {
  var date = new Date();
  noteTimes.push(["end", date.toString()]);
  document.getElementById('buttons').innerHTML = "<button type='button' id='start-button' onclick='logNotes()'> Start Note </button>"
  document.getElementById('log-list').insertAdjacentHTML('afterbegin', "Clip ended: " + date.toString());
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
