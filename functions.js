var GlobalTime = 0;
var noteTimes = [];
var notes = [];
var path = '';
function start() {
  GlobalTime = new Date();
}
function stop() {
  --request video slices
  --align them to the correct notes
  --add to the page
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
