import CATALOG from './catalog.data';

export default ( state = CATALOG, { type } ) => {
    switch(type) {
        default:
            return state;
    }
};