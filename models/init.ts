import { forward } from 'effector';
import { spread } from 'patronum/spread';

import {
  dummyFx,
  setCart,
  setPhoneNumber,
  setAddress,
  setApartment,
} from './root';

setPhoneNumber.watch((v) => console.log('setPhoneNumber:', v));
setAddress.watch((v) => console.log('setAddress:', v));
setApartment.watch((v) => console.log('setApartment:', v));
setCart.watch((v) => console.log('setCart:', v));

spread({
  source: dummyFx.doneData,
  targets: {
    phoneNumber: setPhoneNumber,
    cart: setCart,
    address: setAddress,
    apartment: setApartment,
  },
});

export {};


export {};
