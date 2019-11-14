import { SET_CATALOG } from './catalog.types';

const INITIAL_STATE = {};

export default ( state = INITIAL_STATE, { type, payload } = {} ) => {
    switch(type) {
        case SET_CATALOG:
            return payload;
        default:
            return state;
    }
};