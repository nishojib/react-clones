import {
  AiOutlineContainer as RulesIcon,
  AiOutlineInfoCircle as InfoIcon,
  AiOutlineLogin as LoginIcon,
  AiOutlineQuestionCircle as QuestionIcon,
} from 'react-icons/ai';

export const dropdownOptions = [
  { Icon: QuestionIcon, label: 'Help Center', link: '' },
  {
    Icon: InfoIcon,
    label: 'More',
    children: [
      {
        label: 'Reddit iOS',
        link: '',
      },
      {
        label: 'Reddit Android',
        link: '',
      },
      {
        label: 'Rereddit',
        link: '',
      },
      {
        label: 'Best Communities',
        link: '',
      },
      {
        label: 'Communities',
        link: '',
      },
      {
        label: 'About Reddit',
        link: '',
      },
      {
        label: 'Blog',
        link: '',
      },
      {
        label: 'Careers',
        link: '',
      },
      {
        label: 'Press',
        link: '',
      },
    ],
  },
  {
    Icon: RulesIcon,
    label: 'Terms & Policies',
    children: [
      {
        label: 'User Agreement',
        link: '',
      },
      {
        label: 'Privacy Policy',
        link: '',
      },
      {
        label: 'Content Policy',
        link: '',
      },
      {
        label: 'Moderator Code of Conduct',
        link: '',
      },
    ],
  },
  {
    Icon: LoginIcon,
    label: 'Log In / Sign Up',
  },
];
