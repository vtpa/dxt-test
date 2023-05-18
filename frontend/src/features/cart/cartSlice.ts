import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IProduct } from '../../domain/entities/products';

export interface CartState {
  length: number;
  products: IProduct[];
}

const initialState: CartState = {
  length: 0,
  products: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, payload: PayloadAction<IProduct>) => {
      const itemExists = state.products.some(item => item.id === payload.payload.id)
      if (!itemExists){
        state.length += 1;
        state.products.push(payload.payload)
      }
    },
    delProduct: (state, payload: PayloadAction<string>) => {
      state.length -= 1;
      state.products = state.products.filter(product => product.id !== payload.payload)
    },
    clearCart: (state, payload: PayloadAction<[]>) => {
      state.length = 0;
      state.products = payload.payload;
    }
  },
});

export const { addProduct, delProduct, clearCart } = cartSlice.actions;

export const selectCartLength = (state: RootState) => state.cart.length;
export const selectCartProducts = (state: RootState) => state.cart.products;

export default cartSlice.reducer;
