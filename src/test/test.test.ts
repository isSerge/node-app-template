import * as tap from 'tap';
import { main } from '../index';

tap.test('dummy test', (t) => {
  t.doesNotThrow(main);

  t.end();
});
