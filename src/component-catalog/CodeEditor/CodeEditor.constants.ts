import type { Language } from './CodeEditor.types';

/**
 * Available programming languages displayed in the language selector.
 * Each option maps the user-facing label to the editor language value.
 */
export const SUPPORTED_LANGUAGES: { label: string; value: Language }[] = [
  { label: 'Python', value: 'python' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Java', value: 'java' },
  { label: 'C++', value: 'cpp' },
];

/**
 * Default starter code loaded when a language is selected
 * or when the editor is reset.
 */
export const DEFAULT_CODE_TEMPLATES: Record<Language, string> = {
  python: `def solution():\n    return "Hello World"\n`,
  javascript: `function solution() {\n  return "Hello World";\n}\n`,
  typescript: `function solution(): string {\n  return "Hello World";\n}\n`,
  java: `class Solution {\n    public String solution() {\n        return "Hello World";\n    }\n}\n`,
  cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello World";\n    return 0;\n}\n`,
};
