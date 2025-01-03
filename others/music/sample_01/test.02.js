const MidiWriter = require('midi-writer-js');

// Создаем трек для флейты
const fluteTrack = new MidiWriter.Track();
fluteTrack.setTempo(80); // Устанавливаем темп

// Добавляем мелодию флейты
fluteTrack.addEvent([
    new MidiWriter.NoteEvent({ pitch: ['G4'], duration: '4' }),
    new MidiWriter.NoteEvent({ pitch: ['A4'], duration: '4' }),
    new MidiWriter.NoteEvent({ pitch: ['B4'], duration: '4' }),
    new MidiWriter.NoteEvent({ pitch: ['A4'], duration: '8' }),
    new MidiWriter.NoteEvent({ pitch: ['G4'], duration: '8' }),
    new MidiWriter.NoteEvent({ pitch: ['F4'], duration: '4' }),
    new MidiWriter.NoteEvent({ pitch: ['G4'], duration: '2' }),
]);

// Создаем трек для басов виолончели
const celloTrack = new MidiWriter.Track();
celloTrack.addEvent([
    new MidiWriter.NoteEvent({ pitch: ['C3'], duration: '2', velocity: 50 }),
    new MidiWriter.NoteEvent({ pitch: ['D3'], duration: '2', velocity: 55 }),
    new MidiWriter.NoteEvent({ pitch: ['E3'], duration: '2', velocity: 60 }),
    new MidiWriter.NoteEvent({ pitch: ['F3'], duration: '2', velocity: 70 }),
]);

// Создаем трек для контрабаса
const bassTrack = new MidiWriter.Track();
bassTrack.addEvent([
    new MidiWriter.NoteEvent({ pitch: ['C2'], duration: '2', velocity: 40 }),
    new MidiWriter.NoteEvent({ pitch: ['D2'], duration: '2', velocity: 45 }),
    new MidiWriter.NoteEvent({ pitch: ['E2'], duration: '2', velocity: 50 }),
    new MidiWriter.NoteEvent({ pitch: ['F2'], duration: '2', velocity: 60 }),
]);

// Объединяем треки и создаем файл
const writer = new MidiWriter.Writer([fluteTrack, celloTrack, bassTrack]);
require('fs').writeFileSync('emotional_intro.mid', writer.buildFile());

// Вывод успеха
console.log('MIDI file "emotional_intro.mid" created!');