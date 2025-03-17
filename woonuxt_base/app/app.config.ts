/**
 * App configuration.
 * This file is used to configure the app settings.
 * Below are the default values.
 */
export default defineAppConfig({
  siteName: 'LEVEL',
  shortDescription: 'La marque LEVEL incarne l’élégance, la modestie et le style moderne. Notre objectif est de créer une marque qui respecte les traditions, célèbre le pouvoir de la femme, et valorise la qualité et la durabilité.',
  description: `Bienvenue chez LEVEL, où la mode rencontre l'élégance et la modestie. Notre boutique en ligne vous propose une sélection soignée de vêtements modernes pour femmes voilées, conçus pour sublimer votre style tout en respectant vos valeurs. Que vous cherchiez des pièces intemporelles ou des tendances actuelles, LEVEL vous offre une expérience de shopping inégalée. Explorez notre collection et laissez-vous inspirer par des créations uniques qui reflètent votre personnalité et votre modernité.`,
  baseUrl: 'https://www.levelstore.com', // Remplacez par l'URL réelle de votre boutique
  siteImage: 'https://user-images.githubusercontent.com/5116925/218879668-f4c1f9fd-bef4-44b0-bc7f-e87d994aa3a1.png',
  storeSettings: {
    autoOpenCart: false,
    showReviews: true,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: true,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: true,
    showMoveToWishlist: true,
    hideBillingAddressForVirtualProducts: false,
    initStoreOnUserActionToReduceServerLoad: true,
    saleBadge: 'percent', // 'percent', 'onSale' or 'hidden'
    socialLoginsDisplay: 'buttons', // 'buttons' or 'icons'
  },
});
