import { forwardRef, PropsWithChildren, useState } from 'react';
import { BsSearch as SearchIcon } from 'react-icons/bs';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { BiChevronDown, BiUser as UserIcon } from 'react-icons/bi';
import {
  AiOutlineContainer as RulesIcon,
  AiOutlineInfoCircle as InfoIcon,
  AiOutlineLogin as LoginIcon,
  AiOutlineQuestionCircle as QuestionIcon,
} from 'react-icons/ai';
import * as Accordion from '@radix-ui/react-accordion';
import {
  AccordionContentProps,
  AccordionItemProps,
  AccordionTriggerProps,
} from '@radix-ui/react-accordion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        </div>
        <div className="group ml-3 flex items-center gap-4">
          <button className="rounded-full border border-blue-600 bg-blue-600 py-1 px-4 font-semibold capitalize text-white hover:border-blue-500 hover:bg-blue-500 focus:border-blue-500 focus:bg-blue-500 active:border-blue-400 active:bg-blue-400">
            Log in
          </button>
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
                <DropdownMenu.Item>
                  <a
                    href="#"
                    className="flex w-full items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-600 hover:text-white"
                    role="menuitem"
                  >
                    <span>
                      <QuestionIcon size={20} />
                    </span>
                    <span>Help Center</span>
                  </a>
                </DropdownMenu.Item>
                <Accordion.Root type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex  w-full items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-600 hover:text-white">
                      <div className="flex items-center gap-3">
                        <span>
                          <InfoIcon size={20} />
                        </span>
                        <span>More</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <DropdownMenu.Item>
                        <a
                          href="#"
                          className="flex px-4 py-2 pl-12 text-sm font-semibold text-gray-700 hover:bg-gray-200"
                          role="menuitem"
                        >
                          <span>Reddit iOS</span>
                        </a>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <a
                          href="#"
                          className="flex px-4 py-2 pl-12 text-sm font-semibold text-gray-700 hover:bg-gray-200"
                          role="menuitem"
                        >
                          <span>Reddit Android</span>
                        </a>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <a
                          href="#"
                          className="flex px-4 py-2 pl-12 text-sm font-semibold text-gray-700 hover:bg-gray-200"
                          role="menuitem"
                        >
                          <span>Rereddit</span>
                        </a>
                      </DropdownMenu.Item>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion.Root>
                <DropdownMenu.Item>
                  <a
                    href="#"
                    className="flex w-full items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-600 hover:text-white"
                    role="menuitem"
                  >
                    <span>
                      <RulesIcon size={20} />
                    </span>
                    <span>Terms & Policies</span>
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <a
                    href="#"
                    className="flex w-full items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-600 hover:text-white"
                    role="menuitem"
                  >
                    <span>
                      <LoginIcon size={20} />
                    </span>
                    <span>Log In / Sign Up</span>
                  </a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </nav>
  );
};

const AccordionItem = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ className?: string } & AccordionItemProps>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={clsx('mt-px overflow-hidden first:mt-0', className)}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<{ className?: string } & AccordionTriggerProps>
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

const AccordionContent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ className?: string } & AccordionContentProps>
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

const RedditLogo = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="mr-2 h-8 w-8"
    >
      <g>
        <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
        <path
          fill="#FFF"
          d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
        ></path>
      </g>
    </svg>
    <svg
      className="mr-5 hidden h-[18px] w-auto lg:block"
      viewBox="0 0 57 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#1c1c1c">
        <path d="M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"></path>
        <circle fill="#FF4500" cx="47.26" cy="3.44" r="2.12"></circle>
        <path d="M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"></path>
        <path d="M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"></path>
        <path d="M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"></path>
        <path d="M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"></path>
        <path d="M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"></path>
      </g>
    </svg>
  </>
);
