// src/utils.js
export function pointsForWord(word) {
    let points = 0;
    for (const char of word) {
      if (/[a-zA-Z]/.test(char)) { // Only consider alphabetic characters
        points += /[aeiou]/i.test(char) ? 1 : 2; // 1 point for vowels, 2 points for consonants
      }
    }
    return points;
  }
  