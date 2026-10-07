// Replaces {{ID}} tokens in the given markdown files with links to the ticket files.
// Usage: node tools/link-ticket-ids.mjs <file.md> [...]
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const map = {};
for (const folder of ['cross', 'api', 'spa', 'cd']) {
  const dir = path.join(root, 'tickets', folder);
  for (const f of fs.readdirSync(dir)) {
    const id = f.match(/^([A-Z]+-\d+)/)?.[1];
    if (id) map[id] = `tickets/${folder}/${f}`;
  }
}
let bad = 0;
for (const file of process.argv.slice(2)) {
  const text = fs.readFileSync(file, 'utf8');
  const out = text.replace(/\{\{([A-Z]+-\d+)\}\}/g, (m, id) => {
    if (!map[id]) { console.log(`unknown id ${id} in ${file}`); bad++; return m; }
    return `[${id}](${map[id]})`;
  });
  fs.writeFileSync(file, out, 'utf8');
}
if (bad) process.exitCode = 1;
console.log(bad ? `${bad} unknown ids` : 'links ok');
