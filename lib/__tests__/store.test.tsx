import { render } from '@testing-library/react';
import { StoreContext } from '../store';

describe('store utilities', () => {
  describe('StoreContext', () => {
    it('should render without errors', () => {
      const store = {} as any;
      const { container } = render(
        <StoreContext.Provider value={store}></StoreContext.Provider>
      );

      expect(container).toBeInTheDocument();
    });
  });
});
