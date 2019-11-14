import { SET_CATALOG } from './catalog.types';

export const setCatalog = catalog => ({
    type: SET_CATALOG,
    payload: catalog
});