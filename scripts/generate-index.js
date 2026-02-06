import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const projectDir = path.resolve('.');

// Ensure dist exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Find markdown files
const files = fs.readdirSync(projectDir).filter(f => f.endsWith('.md'));

// Filter out README and the default template slides.md
// (Unless user explicitly renamed slides.md, we assume it's the template)
const presentations = files.filter(f => f !== 'README.md' && f !== 'slides.md');

const listItems = presentations.map(p => {
    const name = path.basename(p, '.md');
    let title = name; // Default to filename

    // Attempt to extract title from Frontmatter
    try {
        const content = fs.readFileSync(p, 'utf-8');
        // Simple regex to find "title: ..." in the first 500 characters
        const match = content.slice(0, 500).match(/^title:\s*(.*)$/m);
        // Remove quotes if present
        if (match) title = match[1].trim().replace(/^['"](.*)['"]$/, '$1');
    } catch (e) {
        console.warn(`Could not read title from ${p}`, e);
    }

    return `<li>
      <a href="/${name}/" class="block p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition duration-200 group">
        <div class="flex items-center justify-between">
            <span class="text-xl font-semibold text-slate-800 group-hover:text-blue-700 transition">${title}</span>
            <span class="text-slate-400">→</span>
        </div>
        <span class="text-sm text-slate-500 font-mono mt-2 block">/${name}/</span>
      </a>
    </li>`;
}).join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presentations</title>
    <!-- Simple styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Hanken Grotesk', sans-serif; background-color: #F8FAFC; color: #0F172A; }
    </style>
</head>
<body class="min-h-screen py-20 px-4">
    <main class="max-w-2xl mx-auto">
        <header class="mb-12 text-center">
            <h1 class="text-4xl font-bold mb-2">Presentations</h1>
            <p class="text-slate-500">Eurosystem / Institutional Governance</p>
        </header>
        
        <ul class="space-y-4">
            ${listItems}
        </ul>
        
        <footer class="mt-16 text-center text-sm text-slate-400">
            Generated automatically by Build Pipeline
        </footer>
    </main>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), html);
console.log(`Generated dist/index.html with ${presentations.length} presentations.`);
