import { render } from '@testing-library/react';

import Uicomponents from './uicomponents';

describe('Uicomponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Uicomponents />);
    expect(baseElement).toBeTruthy();
  });
});
