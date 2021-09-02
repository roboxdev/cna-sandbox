import type { AppProps } from 'next/app'

import { Scope, fork, serialize } from 'effector';
import { Provider } from 'effector-react/ssr';
import { root } from '../models/root';

import '../models/init';

let clientScope: Scope;

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  const scope = fork(root, {
    values: {
      ...(clientScope && serialize(clientScope)),
      ...pageProps.initialState,
    },
  });
  if (typeof window !== 'undefined') {
    clientScope = scope;
  }
  return (
      <Provider value={scope}>
          <Component {...pageProps} />
      </Provider>
  );
};

export default WrappedApp