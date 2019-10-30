import { createSelector } from 'reselect';

const selectCatalog = state => Object.entries(state.catalog).map(( [ slug, item ], id ) => ({ slug, id, ...item }));
const selectCategory = slug => state => state.catalog[slug];

const mapCategory = ({ id, title, subtitle, slug, imageUrl } = {}) => ({ id, title, subtitle, slug, imageUrl });
const mapProduct = ({ id, name, price, imageUrl } = {}) => ({ id, name, price, imageUrl });

export const selectCatalogCategory = ( slug ) => createSelector(
    [selectCategory(slug)],
    category => ({
        ...mapCategory(category),
        items: category.items
    })
);

export const selectCatalogCategories = createSelector(
    [selectCatalog],
    catalog => catalog
        .map(mapCategory)
);

export const selectCatalogProducts = ( itemLimit = 4 ) => createSelector(
    [selectCatalog],
    catalog => catalog.map(({ id, title, slug, items }) => ({
        id,
        title,
        slug, 
        items: items
            .slice(0, itemLimit)
            .map(mapProduct)
    }))
);