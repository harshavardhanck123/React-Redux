import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            quantity: 1,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYicSpb7XXIv-X9WwZI5dpGX32o82CkyUawvWQerG-Fw&s",
        },
        {
            id: 2,
            title: "iPhone X",
            description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display...",
            price: 899,
            quantity: 1,
            thumbnail: "https://upload.wikimedia.org/wikipedia/commons/4/43/IPhone_X%2C_back_and_front%2C_Silver.png",
        },
        {
            id: 3,
            title: "Samsung Universe 9",
            description: "Samsung's new variant which goes beyond Galaxy to the Universe",
            price: 1249,
            quantity: 1,
            thumbnail: "https://www.dealsplant.com/cdn/shop/products/mi-mobile-phones-redmi-note-9-pro-4gb-ram-128gb-storage-16350729273419.jpg?v=1634397323&width=1500",
        },
        {
            id: 4,
            title: "OPPO F19",
            description: "OPPO F19 is officially announced on April 2021.",
            price: 280,
            quantity: 1,
            thumbnail: "https://5.imimg.com/data5/SELLER/Default/2023/6/316894377/HW/EM/ZV/157629195/oppo-f19-pro-plus-5g-8-128gb--250x250.jpg",
        },
        {
            id: 5,
            title: "Huawei P30",
            description: "Huawei’s re-badged P30 Pro New Edition...",
            price: 499,
            quantity: 1,
            thumbnail: "https://i.gadgets360cdn.com/products/large/1553612275_635_huawei_p30.jpg?downsize=*:360",
        }
    ]
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            const { itemId } = action.payload;
            const item = state.items.find(item => item.id === itemId);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const { itemId } = action.payload;
            const item = state.items.find(item => item.id === itemId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeItem: (state, action) => {
            const { itemId } = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                const item = state.items[itemIndex];
                if (item.quantity > 1) {
                    // If the quantity is greater than 1, decrease it by 1
                    item.quantity -= 1;
                } else {
                    // If the quantity is 1, remove the item from the cart
                    state.items.splice(itemIndex, 1);
                }
            }
        }
        
        
    }
});

export const { increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
