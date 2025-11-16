export const cartElement = {

    buyMenuButton: '#primary-menu i.icon-earphones-alt.icons',
    buyButton: '[class="single_add_to_cart_button button alt"]',
    completePurchaseButton: '.cart-contents',
    searchInput: 'header input[name="s"]' ,   
    removeItemCartButton: '[class="fa fa-trash-o"]',

}

export const buySizeOptionButton = (size: string) => `[data-title="${size}"]`;

export const buyColorOptionButton = (color: string) => `[data-title="${color}"]`;