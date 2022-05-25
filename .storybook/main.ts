import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite'; 
import viteConfig from '../vite.config';

const config: StorybookViteConfig = {
  framework: '@storybook/react',
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    const nextConfig = mergeConfig(config, viteConfig);
    return nextConfig;
  },
};

export default config;