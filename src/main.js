/* eslint-disable no-console */
import findTrack from './utils/deezer';
import * as pageFunctions from './utils/pageFunctions';

document
  .getElementById('searchTrackBtn')
  .addEventListener('click', findTrack.bind(this, 'nameMusic'));

document
  .getElementById('addFormBtn')
  .addEventListener('click', pageFunctions.addForm.bind(this, 'form'));

document
  .getElementById('loginBtn')
  .addEventListener('click', pageFunctions.onLoginClick);
