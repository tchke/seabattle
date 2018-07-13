import { createAction } from 'redux-actions';

import { REVEAL_SQUARE } from './actionTypes';

export const revealSquare = createAction(REVEAL_SQUARE, (i,j) => ({i,j}));