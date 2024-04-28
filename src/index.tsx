import React, {FC} from 'react';
import {Provider as ReduxProvider} from 'react-redux';

import {Navigation} from './View/navigation';
import {store} from './init';

export const Root: FC = () => {
  return (
    <ReduxProvider store={store}>
      <Navigation />
    </ReduxProvider>
  );
};
