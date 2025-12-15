import { TCartedProduct } from '@/types/Types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type TInitialState = {
  items: TCartedProduct[],
  totalQuantity: number,
  totalAmount: number
}


const initialState: TInitialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};





const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existedItem = state.items.find(p => p.id === product.id)
      
      if(existedItem){
          console.log("Item Already Carted")
      } else {
        state.items.push(product)
        state.totalAmount = state.totalAmount + product.price
        console.log("Item carted", state.items)
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload.id)
      console.log("Item removed", state.items)
    },
    increaseQuantity: (state, action: PayloadAction<TCartedProduct>) =>{
      const product = action.payload
      const cartedProduct = state.items.find(p => p.id === product.id)
      
      if(cartedProduct && cartedProduct.cartedQuantity < cartedProduct.quantity ){
        cartedProduct.cartedQuantity = cartedProduct.cartedQuantity + 1
        
        state.totalAmount = state.totalAmount + cartedProduct.price

        console.log("increased", cartedProduct.cartedQuantity)
      } else{
        console.log("Not Enough Item")
      }
    },
    decreaseQuantity: (state, action) =>{
      const product = action.payload
      const cartedProduct = state.items.find(p => p.id === product.id)
      
      if(cartedProduct && cartedProduct.cartedQuantity > 0){
        cartedProduct.cartedQuantity = cartedProduct.cartedQuantity - 1
        state.totalAmount = state.totalAmount - cartedProduct.price
        console.log("decreased", cartedProduct.cartedQuantity)
      }else{
        state.items = state.items.filter(p => p.id !== product.id)
        console.log("Item removed")
      }
    },
    clearCart: (state) => {
      state.items = []
      console.log("Items Cleared")
    }
  },
});

export const { addToCart , removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer




















/* addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
        });
      }

      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },

    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);

      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },

    decreaseQuantity: (state, action) => {
      const idToDecrease = action.payload;
      const existingItem = state.items.find(item => item.id === idToDecrease);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      } else if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== idToDecrease);
      }

      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    }, */