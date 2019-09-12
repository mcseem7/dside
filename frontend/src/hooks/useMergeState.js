import React from 'react';
import { mergeDeepRight } from 'ramda';
export default (initialState) => {
    const [state, setState] = React.useState(initialState);
    const mergeState = (value) => setState(mergeDeepRight(state, value));
    return [state, mergeState];
};
