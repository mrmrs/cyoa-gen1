import next from 'eslint-config-next';

const config = [
  ...next,
  {
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/purity': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/static-components': 'off',
      'react-hooks/use-memo': 'off',
      'react/no-unescaped-entities': 'off',
      quotes: 'off',
    },
  },
];

export default config;
