// Builds TICKETS-INDEX.md from the ticket files and validates the format.
import fs from 'node:fs';
import path from 'node:path';

const root = process.argv[2];
const ticketsDir = path.join(root, 'tickets');
const folders = ['cross', 'api', 'spa', 'cd'];
const tickets = [];
const problems = [];

for (const folder of folders) {
  const dir = path.join(ticketsDir, folder);
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir).sort()) {
    if (!file.endsWith('.md')) continue;
    const text = fs.readFileSync(path.join(dir, file), 'utf8');
    const head = text.match(/^# ([A-Z]+-\d+): (.+)$/m);
    if (!head) { problems.push(`${file}: no title`); continue; }
    const field = (k) => (text.match(new RegExp(`^\\| ${k} \\| (.+?) \\|$`, 'm')) || [])[1];
    const t = {
      id: head[1], title: head[2], file: `tickets/${folder}/${file}`,
      repo: field('Repo'), type: field('Type'), priority: field('Priority'),
      size: field('Size'), phase: field('Phase'), deps: field('Depends on'),
    };
    for (const k of ['repo', 'type', 'priority', 'size', 'phase', 'deps']) {
      if (!t[k]) problems.push(`${file}: missing ${k}`);
    }
    if (!file.startsWith(t.id)) problems.push(`${file}: file name does not start with ${t.id}`);
    for (const s of ['## Problem', '## Tasks', '## Acceptance criteria']) {
      if (!text.includes(s)) problems.push(`${file}: missing section ${s}`);
    }
    tickets.push(t);
  }
}

const ids = new Set(tickets.map((t) => t.id));
for (const t of tickets) {
  const refs = (t.deps || '').match(/[A-Z]+-\d+/g) || [];
  for (const r of refs) if (!ids.has(r)) problems.push(`${t.id}: depends on unknown ${r}`);
}
// Also check ticket IDs mentioned in the text
for (const t of tickets) {
  const text = fs.readFileSync(path.join(root, t.file), 'utf8');
  const refs = new Set(text.match(/\b(?:API|SPA|CD|X)-\d{3}\b/g) || []);
  for (const r of refs) if (!ids.has(r)) problems.push(`${t.id}: text mentions unknown ${r}`);
}

const phases = [...new Set(tickets.map((t) => t.phase))].sort();
const order = { P0: 0, P1: 1, P2: 2, P3: 3 };
const link = (t) => `[${t.id}](${t.file})`;
let md = '# Tickets index\n\n';
md += `Total tickets: **${tickets.length}**\n\n`;
const count = (f) => tickets.filter(f).length;
md += '| Repo | P0 | P1 | P2 | P3 | Total |\n| --- | --- | --- | --- | --- | --- |\n';
for (const [label, f] of [['cross-repo (X)', 'cross'], ['api-leetcode (API)', 'api'], ['leetcode-spa (SPA)', 'spa'], ['leetcode-cd (CD)', 'cd']]) {
  const set = tickets.filter((t) => t.file.includes(`/${f}/`));
  md += `| ${label} | ${set.filter((t) => t.priority === 'P0').length} | ${set.filter((t) => t.priority === 'P1').length} | ${set.filter((t) => t.priority === 'P2').length} | ${set.filter((t) => t.priority === 'P3').length} | ${set.length} |\n`;
}
md += `| **All** | ${count((t) => t.priority === 'P0')} | ${count((t) => t.priority === 'P1')} | ${count((t) => t.priority === 'P2')} | ${count((t) => t.priority === 'P3')} | ${tickets.length} |\n\n`;
md += 'Priority: **P0** = fix now (security, crash, blocker). **P1** = needed for the MVP. **P2** = should do. **P3** = nice to have.  \n';
md += 'Size: **S** = under 1 day. **M** = 1 to 3 days. **L** = 3 to 5 days. (For one student.)\n\n';

for (const phase of phases) {
  const list = tickets.filter((t) => t.phase === phase).sort((a, b) => order[a.priority] - order[b.priority] || a.id.localeCompare(b.id, 'en', { numeric: true }));
  md += `## Phase ${phase}\n\n| ID | Title | Type | Priority | Size | Depends on |\n| --- | --- | --- | --- | --- | --- |\n`;
  for (const t of list) md += `| ${link(t)} | ${t.title} | ${t.type} | ${t.priority} | ${t.size} | ${t.deps} |\n`;
  md += '\n';
}
fs.writeFileSync(path.join(root, 'TICKETS-INDEX.md'), md, 'utf8');
console.log(`tickets: ${tickets.length}`);
if (problems.length) { console.log('PROBLEMS:\n' + problems.join('\n')); process.exitCode = 1; } else console.log('format OK');
