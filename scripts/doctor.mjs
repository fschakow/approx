import dns from 'node:dns/promises';
import process from 'node:process';

async function checkDns(hostname) {
  try {
    const records = await dns.lookup(hostname);
    return { ok: true, detail: `${hostname} -> ${records.address}` };
  } catch (error) {
    return { ok: false, detail: `${hostname} lookup failed: ${error.code || error.message}` };
  }
}

function checkVersion() {
  const major = Number(process.versions.node.split('.')[0]);
  if (Number.isNaN(major)) {
    return { ok: false, detail: `Unable to parse Node.js version: ${process.versions.node}` };
  }
  if (major !== 22) {
    return { ok: false, detail: `Node.js ${process.versions.node} detected; expected 22.x (see .nvmrc)` };
  }
  return { ok: true, detail: `Node.js ${process.versions.node}` };
}

async function main() {
  const results = [];
  results.push(checkVersion());
  results.push(await checkDns('registry.npmjs.org'));

  let hasFailure = false;
  for (const result of results) {
    const prefix = result.ok ? '[OK] ' : '[FAIL] ';
    process.stdout.write(`${prefix}${result.detail}\n`);
    if (!result.ok) {
      hasFailure = true;
    }
  }

  if (hasFailure) {
    process.stderr.write(
      '\nPreflight checks failed. Fix Node version/network before running npm install.\n'
    );
    process.exit(1);
  }
}

main();
