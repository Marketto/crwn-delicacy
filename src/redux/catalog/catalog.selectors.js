import { createSelector } from 'reselect';

export const selectCatalog = state => (state.catalog || {}).docs || [];

const mapDocument = docSnapshot => ({ ...docSnapshot.data(), id: docSnapshot.id });
const selectCategory = slug => state => {
    const catalog = selectCatalog(state);
    for (let categoryRef of catalog) {
        const category = mapDocument(categoryRef);
        if (category.slug === slug) {
            return category;
        }
    }
    return null;
};

const mapCategory = ({ id, title, subtitle, slug, imageUrl } = {}) => ({ id, title, subtitle, slug, imageUrl });
const mapProduct = ({ name, price, imageUrl } = {}, id) => ({ id, name, price, imageUrl });
const mapCatalogProducts = itemLimit => ({ id, title, slug, items }) => ({
    id,
    title,
    slug, 
    items: items
        .slice(0, itemLimit)
        .map(mapProduct)
});

export const selectAllProducts = state => selectCatalog(state)
    .reduce((products, category) => [...products, ...mapDocument(category).items], [])
    .map((product, id) => ({ ...product, id }));

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
        .map(mapDocument)
        .map(mapCategory)
);

export const selectCatalogProducts = ( itemLimit = 4 ) => createSelector(
    [selectCatalog],
    catalog => catalog
        .map(mapDocument)
        .map(mapCatalogProducts(itemLimit))
);