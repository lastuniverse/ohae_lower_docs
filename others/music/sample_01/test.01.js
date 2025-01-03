const MidiWriter = require('midi-writer-js');

// Create a track
const track = new MidiWriter.Track();

// Set tempo
track.setTempo(100);

// Add some melody (Japanese pentatonic scale)
const melody = new MidiWriter.NoteEvent({
    pitch: ['D4', 'E4', 'F4', 'A4', 'B4', 'A4', 'D4'],
    duration: ['4', '4', '4', '4', '2', '8', '1'], // Duration of notes
});
track.addEvent(melody);

// Add some bass line
const bass = new MidiWriter.NoteEvent({
    pitch: ['D3', 'C3', 'B2', 'A2'],
    duration: ['2', '2', '2', '2'], // Bass notes with longer duration
});
track.addEvent(bass, (event, index) => ({
    sequential: true, // Ensure bass plays in sequence after melody
}));

// Write to file
const writer = new MidiWriter.Writer(track);
require('fs').writeFileSync('fuji_logo_intro.mid', writer.buildFile());

// Output success
console.log('MIDI file "fuji_logo_intro.mid" created!');
