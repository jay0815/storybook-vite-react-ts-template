import { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
  framework: '@storybook/react',
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return config;
  },
};

export default config;