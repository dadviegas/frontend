import state from 'asgard-state-management';
import theme from '../logic/ThemeHandler';

const storeElements = [
  theme,
];

const store = state(storeElements);

export default store;

if (module.hot) {
  window.moduleApp = window.moduleApp || {};
  window.moduleApp.store = store;
}
