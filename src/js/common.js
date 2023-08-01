import './imports/pictures.js';
import './imports/audio.js';

import './functions/counter.js';
import './functions/switcher.js';
import './functions/pageloader.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('[index.js] Looks like we are in development mode!');
}