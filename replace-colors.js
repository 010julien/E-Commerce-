const fs = require('fs');
const path = require('path');

const replacements = [
  // Boutons
  ['bg-purple-600', 'bg-[#1b9abe]'],
  ['hover:bg-purple-700', 'hover:bg-[#139cbc]'],
  ['bg-pink-600', 'bg-[#1b9abe]'],
  ['hover:bg-pink-700', 'hover:bg-[#139cbc]'],
  ['bg-purple-700', 'bg-[#1b9abe]'],
  ['bg-pink-700', 'bg-[#1b9abe]'],
  
  // Textes
  ['text-purple-600', 'text-[#1b9abe]'],
  ['text-pink-600', 'text-[#1b9abe]'],
  ['hover:text-purple-600', 'hover:text-[#1b9abe]'],
  ['hover:text-pink-600', 'hover:text-[#1b9abe]'],
  ['hover:text-purple-700', 'hover:text-[#139cbc]'],
  ['hover:text-purple-200', 'hover:text-[#9dd5e1]'],
  ['hover:text-pink-200', 'hover:text-[#9dd5e1]'],
  ['text-purple-700', 'text-[#139cbc]'],
  ['text-purple-800', 'text-[#283d4a]'],
  ['text-purple-300', 'text-[#9dd5e1]'],
  
  // Backgrounds
  ['bg-purple-900', 'bg-[#283d4a]'],
  ['bg-purple-100', 'bg-[#daf1f4]'],
  ['bg-pink-100', 'bg-[#daf1f4]'],
  ['bg-purple-50', 'bg-[#daf1f4]'],
  ['bg-pink-50', 'bg-[#daf1f4]'],
  ['bg-indigo-900', 'bg-[#283d4a]'],
  ['bg-indigo-600', 'bg-[#1b9abe]'],
  
  // Bordures
  ['border-purple-600', 'border-[#1b9abe]'],
  ['border-pink-600', 'border-[#1b9abe]'],
  ['border-purple-500', 'border-[#1b9abe]'],
  ['ring-purple-500', 'ring-[#1b9abe]'],
  ['ring-purple-600', 'ring-[#1b9abe]'],
  
  // Gradients (classes)
  ['from-purple-600', 'from-[#1b9abe]'],
  ['to-pink-600', 'to-[#139cbc]'],
  ['from-indigo-600', 'from-[#1b9abe]'],
  ['to-purple-600', 'to-[#139cbc]'],
  ['from-purple-900', 'from-[#283d4a]'],
  ['from-indigo-900', 'from-[#283d4a]'],
  ['to-purple-900', 'to-[#283d4a]'],
  ['from-pink-900', 'from-[#283d4a]'],
  ['to-pink-900', 'to-[#283d4a]'],
  
  // Dark mode variants
  ['dark:bg-purple-900', 'dark:bg-[#283d4a]'],
  ['dark:text-purple-300', 'dark:text-[#9dd5e1]'],
  ['dark:bg-purple-900/20', 'dark:bg-[#283d4a]/20'],
];

let totalFiles = 0;
let modifiedFiles = 0;

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  replacements.forEach(([search, replace]) => {
    const regex = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (content.includes(search)) {
      content = content.replace(regex, replace);
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated: ${path.relative(process.cwd(), filePath)}`);
    modifiedFiles++;
  }
  
  totalFiles++;
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`❌ Directory not found: ${dir}`);
    return;
  }
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      replaceInFile(filePath);
    }
  });
}

// Lancer le script
console.log('🎨 Début du remplacement des couleurs vers la palette bleue...\n');
console.log('Palette: #1b9abe, #283d4a, #9dd5e1, #daf1f4, #139cbc\n');

const directories = [
  './src/components/marketplace',
  './src/components'
];

directories.forEach(dir => {
  console.log(`\n📂 Processing: ${dir}`);
  processDirectory(dir);
});

console.log('\n' + '='.repeat(60));
console.log(`✨ Remplacement terminé !`);
console.log(`📊 ${modifiedFiles} fichiers modifiés sur ${totalFiles} fichiers traités`);
console.log('='.repeat(60));
console.log('\n💡 Lancez "npm start" pour voir les changements');
