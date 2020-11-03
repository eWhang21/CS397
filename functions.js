var noteTimes_array = [];
var notes_array = [];
var path = '';

function stop() {
  spliceVideo(noteTimes_array, path)
}

function enterTitle() {
  var notes_title = document.getElementById('title_input').value;
  document.getElementById('Title').insertAdjacentHTML('afterbegin', notes_title);
  document.getElementById('buttons').innerHTML =  "<button type='button' id='end-button' onclick='endNote()'> End Note </button> <button type='button' id='note-button' onclick='logNotes()'> New Note Text </button>";
  document.getElementById('timestamps').insertAdjacentHTML('afterbegin',  "<li>" + ("START CLIP: ").bold() + date.toString()) + "<li>";
}


function startNotes() {
  var date = new Date();
  var note_input = document.getElementById('note-box').value;
  document.getElementById('timestamps').insertAdjacentHTML('afterbegin', note_input);
  document.getElementById('note-box').value = "";
  notes_array.push(note_input);
  noteTimes_array.push(["timestamps", date.toString()]);
  document.getElementById('buttons').innerHTML =  "<button type='button' id='end-button' onclick='endNote()'> End Note </button> <button type='button' id='note-button' onclick='logNotes()'> New Note Text </button>";
  document.getElementById('timestamps').insertAdjacentHTML('afterbegin',  "<li>" + ("START CLIP: ").bold() + date.toString()) + "<li>";

}

function logNotes() {
  var date = new Date();
  var note_input = document.getElementById('note-box').value;
  document.getElementById('timestamps').insertAdjacentHTML('afterbegin', note_input);
  document.getElementById('note-box').value = "";
  notes_array.push(note_input);
  noteTimes_array.push(["timestamps", date.toString()]);
  document.getElementById('timestamps').insertAdjacentHTML('afterbegin', "<li>" + "On " + date.toString() + ": <br>" + note_input + "</li>");
}

function endNote() {
  var date = new Date();
  noteTimes_array.push(["end", date.toString()]);
  document.getElementById('buttons').innerHTML = "<button type='button' id='start-button' onclick='startNotes()'> Start Note </button>"
  document.getElementById('timestamps').insertAdjacentHTML('afterbegin',  "<li>" + ("END CLIP: ").bold() + date.toString()) + "<li>";
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