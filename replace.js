const fs = require('fs');
let text = fs.readFileSync('/Users/sahilkumar/Desktop/ieg/components/sections/HeroSection.tsx', 'utf8');

const sTicksPattern = /\/\* ─── stator tick positions.*?\[188, 198, 208, 218\]; \/\/ 4 pins top\/bottom\n/s;
text = text.replace(sTicksPattern, '');

const svgPattern = /<div\n\s*className="hero-loop-container flex items-center justify-center relative w-full max-w-\[800px\]"\n\s*style={{ opacity: 0, margin: '0 auto' }}\n\s*>\n\s*<style>{(?:.|\n)*?<\/svg>\n\s*<\/div>/s;

if (text.match(svgPattern)) {
    text = text.replace(svgPattern, `<div
            className=\"hero-loop-container flex items-center justify-center relative w-full max-w-[800px]\"
            style={{ opacity: 0, margin: '0 auto' }}
          >
            <IEGFlowDiagram />
          </div>`);
} else {
    console.error('svgPattern did not match');
}

if (!text.includes('import IEGFlowDiagram')) {
  text = text.replace("import MarqueeTicker from '@/components/sections/MarqueeTicker';", "import MarqueeTicker from '@/components/sections/MarqueeTicker';\nimport IEGFlowDiagram from '@/components/ui/IEGFlowDiagram';");
}

fs.writeFileSync('/Users/sahilkumar/Desktop/ieg/components/sections/HeroSection.tsx', text);
