import { createDomain } from 'effector';
import { combine, createApi } from 'effector';

export const root = createDomain('root');

export const dummyFx = root.createEffect(() => ({
  cart: 'abc',
  phoneNumber: '123',
  address: '456',
  apartment: '789',
}));

export const $cart = root.createStore('');
export const { setCart } = createApi($cart, {
  setCart: (_, v: string) => v,
});

export const $phoneNumber = root.createStore('');
export const { setPhoneNumber } = createApi($phoneNumber, {
  setPhoneNumber: (_, v: string) => v,
});

export const $address = root.createStore('');
export const { setAddress } = createApi($address, {
  setAddress: (_, v: string) => v,
});

export const $apartment = root.createStore('');
export const { setApartment } = createApi($apartment, {
  setApartment: (_, v: string) => v,
});

export const $order = combine({
  cart: $cart,
  phoneNumber: $phoneNumber,
  address: $address,
  apartment: $apartment,
});

$order.watch(v => { console.log('order', v)})
