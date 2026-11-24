import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";

import { ThemeShowcase } from "./theme-showcase";

const meta = {
  component: ThemeShowcase,
  tags: ["autodocs", "ai-generated"],
  parameters: {
    backgrounds: { disable: true },
  },
} satisfies Meta<typeof ThemeShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  globals: { theme: "dark" },
};

export const Light: Story = {
  globals: { theme: "light" },
};

export const SideBySide: Story = {
  render: () => (
    <div className="grid min-h-screen xl:grid-cols-2">
      <div data-theme="dark">
        <ThemeShowcase compact />
      </div>
      <div data-theme="light">
        <ThemeShowcase compact />
      </div>
    </div>
  ),
};

export const CssCheck: Story = {
  render: () => (
    <div data-theme="dark">
      <ThemeShowcase compact />
    </div>
  ),
  play: async ({ canvas }) => {
    const showcase = canvas.getByTestId("theme-showcase");
    await expect(getComputedStyle(showcase).backgroundColor).toBe("rgb(23, 23, 23)");
  },
};
