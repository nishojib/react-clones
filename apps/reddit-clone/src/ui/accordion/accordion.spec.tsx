import { render } from '@testing-library/react';

import { AccordionItem } from './accordion';

describe('AccordionItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AccordionItem value="item-1"></AccordionItem>
    );
    expect(baseElement).toBeTruthy();
  });
});
