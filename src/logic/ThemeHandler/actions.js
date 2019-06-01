import { actionCreator } from 'asgard-redux-helpers';

const SET_THEME = 'SET_THEME';
const setTheme = actionCreator('SET_THEME', name => { name });

export const actions = { setTheme };
export const constants = { SET_THEME };
