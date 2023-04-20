import { forwardRef, PropsWithChildren } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  AccordionContentProps,
  AccordionItemProps,
  AccordionTriggerProps,
} from '@radix-ui/react-accordion';
import clsx from 'clsx';
import { BiChevronDown } from 'react-icons/bi';

export const AccordionItem = forwardRef<
  HTMLDivElement,
  PropsWithChildren<AccordionItemProps>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={clsx('mt-px overflow-hidden first:mt-0', className)}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<AccordionTriggerProps>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header>
    <Accordion.Trigger
      className={clsx(
        'group flex items-center justify-between outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <BiChevronDown
        className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

export const AccordionContent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<AccordionContentProps>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={clsx(
      'overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Content>
));
