'use strict';

test(t => {
  assert_throws_js(RangeError, () => {
    new PressureObserver(
        t.unreached_func('oops should not end up here'), {sampleRate: 0});
  });
}, 'PressureObserver constructor requires a non null sampleRate');

test(t => {
  assert_throws_js(RangeError, () => {
    new PressureObserver(
        t.unreached_func('oops should not end up here'), {sampleRate: -2});
  });
}, 'PressureObserver constructor requires a positive sampleRate');

test(t => {
  const observer = new PressureObserver(
      t.unreached_func('oops should not end up here'), {sampleRate: 0.5});
  assert_equals(typeof observer, 'object');
}, 'PressureObserver constructor doesnt throw error on positive sampleRate');

test(t => {
  const observer =
      new PressureObserver(t.unreached_func('oops should not end up here'), {});
  assert_equals(typeof observer, 'object');
}, 'PressureObserver constructor succeeds on empty sampleRate');
