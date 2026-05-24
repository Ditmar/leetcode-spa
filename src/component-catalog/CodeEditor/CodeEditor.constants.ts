import type { Language } from './CodeEditor.types';

export const SUPPORTED_LANGUAGES: { label: string; value: Language }[] = [
  { label: 'Python', value: 'python' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Java', value: 'java' },
  { label: 'C++', value: 'cpp' },
];

export const DEFAULT_CODE_TEMPLATES: Record<Language, string> = {
  python: `def solution():\n    return "Hello World"\n`,
  javascript: `function solution() {\n  return "Hello World";\n}\n`,
  typescript: `function solution(): string {\n  return "Hello World";\n}\n`,
  java: `class Solution {\n    public String solution() {\n        return "Hello World";\n    }\n}\n`,
  cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello World";\n    return 0;\n}\n`,
};

export const DEFAULT_FONT_SIZE = 14;
export const MIN_FONT_SIZE = 12;
export const MAX_FONT_SIZE = 22;
