export const getPlaceholderImage = (name) => {
    const encodedName = encodeURIComponent(name || 'Product');
    return `https://placehold.co/400x400/e2e8f0/1e293b/png?text=${encodedName}`;
};