import { forwardRef, PropsWithChildren, useState } from 'react';
import { BsSearch as SearchIcon } from 'react-icons/bs';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { BiChevronDown, BiUser as UserIcon } from 'react-icons/bi';
import * as Accordion from '@radix-ui/react-accordion';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@reddit-clone/ui/accordion';
import { RedditLogo } from '@reddit-clone/components/reddit-logo';

import { dropdownOptions } from './dropdown-options';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-40 h-12 w-full border-b border-gray-200 bg-white">
      <div className="flex h-full w-full items-center justify-between px-5">
        <div className="flex items-center justify-start">
          <a
            aria-label="Home"
            className="inline-flex items-center"
            href="/?feed=home"
          >
            <RedditLogo />
          </a>
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 xl:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="w-full max-w-xl self-center">
          <SearchInput />
        </div>
        <div className="group ml-3 flex items-center gap-4">
          <button className="rounded-full border border-blue-600 bg-blue-600 py-1 px-4 font-semibold capitalize text-white hover:border-blue-500 hover:bg-blue-500 focus:border-blue-500 focus:bg-blue-500 active:border-blue-400 active:bg-blue-400">
            Log in
          </button>
          <NavbarDropdown />
        </div>
      </div>
    </nav>
  );
};

const SearchInput = () => {
  return (
    <form className="relative w-full">
      <label htmlFor="search">
        <SearchIcon
          size={20}
          className="absolute top-1/2 left-7 -mt-2.5 -ml-2.5 text-gray-400"
        />
      </label>
      <input
        id="search"
        placeholder="Search Reddit"
        className="h-10 w-full rounded-[1.25rem] bg-gray-100 pl-12 text-sm outline-none hover:ring-1 focus:rounded-t-[1.25rem] focus:rounded-b-sm focus:ring-1"
      />
    </form>
  );
};

const NavbarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className={clsx(
            'flex items-center border py-1 px-2 outline-none hover:border-gray-200',
            { 'border-b-0 border-gray-200 shadow': isOpen },
            { 'border-white': !isOpen }
          )}
        >
          <UserIcon size={24} className="text-gray-500" />
          <BiChevronDown size={20} className="text-gray-500" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={-16}
          className="z-50 my-4 mr-5 w-52 rounded border border-gray-200 bg-white shadow"
          id="dropdown-user"
        >
          {dropdownOptions.map(({ Icon, label, children }) => {
            if (children) {
              return (
                <Accordion.Root type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex w-full items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-600 hover:text-white">
                      <div className="flex items-center gap-3">
                        <span>
                          <Icon size={20} />
                        </span>
                        <span>{label}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      {children.map(({ label }) => (
                        <DropdownMenuItem asSub>{label}</DropdownMenuItem>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion.Root>
              );
            }

            return (
              <DropdownMenuItem>
                <span>
                  <Icon size={20} />
                </span>
                <span>{label}</span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const DropdownMenuItem = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ href?: string; asSub?: boolean } & DropdownMenuItemProps>
>(({ children, className, asSub = false, href, ...props }, forwardedRef) => {
  return (
    <DropdownMenu.Item
      ref={forwardedRef}
      className={clsx(
        'flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold text-gray-700',
        { 'pl-12 hover:bg-gray-200': asSub },
        { 'gap-3 hover:bg-blue-600 hover:text-white': !asSub }
      )}
      role="menuitem"
    >
      {children}
    </DropdownMenu.Item>
  );
});
