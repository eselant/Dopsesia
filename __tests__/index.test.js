// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';
import * as funcs from '../index.js';

test('step1', () => {
  assert.strictEqual(funcs.calculatePower(50, 5), 10);
  assert.strictEqual(funcs.calculatePower(72, 8), 9);
  assert.strictEqual(funcs.calculatePower(36, 6), 6);
});

test('step2', () => {
  assert.strictEqual(funcs.swapCase('TeSt'), 'tEsT');
  assert.strictEqual(funcs.swapCase('cAPs'), 'CapS');
  assert.strictEqual(funcs.swapCase('tOGGLE'), 'Toggle');
});

test('step3', () => {
  assert.strictEqual(funcs.formatAddress('Baker Street', 'London', 'UK', 'NW16XE'), 'Baker Street, London, NW16XE, UK');
  assert.strictEqual(funcs.formatAddress('Wall Street', 'New York', 'USA', '10005'), 'Wall Street, New York, 10005, USA');
  assert.strictEqual(funcs.formatAddress('Avenue des Champs-Élysées', 'Paris', 'France', '75008'), 'Avenue des Champs-Élysées, Paris, 75008, France');
});

test('step4', () => {
  assert.strictEqual(funcs.getTimeOfDay(1), 'Ночь');
  assert.strictEqual(funcs.getTimeOfDay(8), 'Утро');
  assert.strictEqual(funcs.getTimeOfDay(14), 'День');
  assert.strictEqual(funcs.getTimeOfDay(19), 'Вечер');
  assert.strictEqual(funcs.getTimeOfDay(25), 0);
});

test('step5', () => {
  assert.strictEqual(funcs.countLetter('programming', 'm'), 2);
  assert.strictEqual(funcs.countLetter('coffee', 'f'), 2);
  assert.strictEqual(funcs.countLetter('javascript', 'z'), 0);
});
