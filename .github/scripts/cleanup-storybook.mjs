import { execFileSync } from 'node:child_process';
import { log } from 'node:console';
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, rmSync } from 'node:fs';
import { resolve, sep } from 'node:path';

const previews = resolve('previews');
if (existsSync(previews)) {
  // A failed remote lookup must abort cleanup, never look like an empty branch list.
  const refs = execFileSync('git', ['ls-remote', '--heads', 'origin'], { encoding: 'utf8' });
  const active = new Set(
    refs
      .trim()
      .split('\n')
      .filter(Boolean)
      .map((line) => line.slice(line.indexOf('refs/heads/') + 'refs/heads/'.length))
      .map((branch) => createHash('sha256').update(branch).digest('hex'))
  );
  for (const entry of readdirSync(previews, { withFileTypes: true })) {
    if (!entry.isDirectory() || !/^[a-f0-9]{64}$/.test(entry.name) || active.has(entry.name)) {
      continue;
    }
    const target = resolve(previews, entry.name);
    if (!target.startsWith(previews + sep)) throw new Error('Preview outside expected directory');
    rmSync(target, { recursive: true });
    log(`Removed stale preview: ${entry.name}`);
  }
}
