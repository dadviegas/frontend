import state from 'asgard-state-management';
import theme from '../logic/ThemeHandler';

const storeElements = [
  theme,
];

const config = state(storeElements);

export default config;

if (module.hot) {
  window.moduleApp = window.moduleApp || {};
  window.moduleApp.config = config;
}
