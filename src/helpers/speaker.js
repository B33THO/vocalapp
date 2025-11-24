const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
let currentUtterance = null;

/**
 * Reproduce texto por TTS y cancela cualquier reproducción previa inmediatamente.
 * @param {string} text Texto a reproducir
 * @param {{lang?: string, rate?: number, pitch?: number}} opts Opciones opcionales
 */
export default function speak(text, opts = {}) {
  if (!synth) return;
  const { lang = 'en-US', rate = 1, pitch = 1 } = opts;

  // Cancelar cualquier reproducción en curso para permitir clics inmediatos
  synth.cancel();
  currentUtterance = new SpeechSynthesisUtterance(String(text));
  currentUtterance.lang = lang;
  currentUtterance.rate = rate;
  currentUtterance.pitch = pitch;

  currentUtterance.onend = () => { currentUtterance = null; };
  currentUtterance.onerror = () => { currentUtterance = null; };

  synth.speak(currentUtterance);
}