import { render } from '@testing-library/react';

import { RedditLogo } from './reddit-logo';

describe('RedditLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RedditLogo />);
    expect(baseElement).toBeTruthy();
  });
});
