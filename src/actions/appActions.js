import {
  TOGGLE_BUTTON
} from './types';

//import future types into object above from types file


//below is where the logic of your action would happen before passing to the reducer

export const toggleButtonAction = () => {
  return {
    type: TOGGLE_BUTTON
  }
};