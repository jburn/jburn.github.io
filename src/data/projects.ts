import type { Localized } from '../i18n';

export interface Project {
  title: string;
  description: Localized;
  href: string;
  tags: string[];
}

// Add your projects here. See README.md for an example.
export const projects: Project[] = [];
