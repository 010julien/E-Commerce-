// Campus Market - Palette de Couleurs Bleues
// Utiliser ces couleurs dans tout le site

export const colors = {
  // Couleurs principales
  primary: '#1b9abe',      // Bleu principal - Boutons, CTA, liens
  primaryDark: '#139cbc',  // Bleu moyen - Hover states
  dark: '#283d4a',         // Bleu foncé - Backgrounds dark, textes
  light: '#9dd5e1',        // Bleu clair - Textes clairs, bordures
  lightest: '#daf1f4',     // Bleu très clair - Backgrounds légers
  
  // Variantes pour différents usages
  accent: '#1b9abe',
  hover: '#139cbc',
  background: {
    light: '#daf1f4',
    dark: '#283d4a'
  },
  text: {
    light: '#9dd5e1',
    dark: '#283d4a'
  },
  border: {
    light: '#9dd5e1',
    dark: '#139cbc'
  }
};

// Classes Tailwind personnalisées
export const colorClasses = {
  // Boutons primaires
  btnPrimary: 'bg-[#1b9abe] hover:bg-[#139cbc] text-white',
  btnSecondary: 'border-2 border-[#1b9abe] text-[#1b9abe] hover:bg-[#daf1f4]',
  
  // Backgrounds
  bgLight: 'bg-[#daf1f4]',
  bgDark: 'bg-[#283d4a]',
  
  // Textes
  textPrimary: 'text-[#1b9abe]',
  textLight: 'text-[#9dd5e1]',
  textDark: 'text-[#283d4a]',
  
  // Bordures
  borderLight: 'border-[#9dd5e1]',
  borderDark: 'border-[#139cbc]',
  
  // Cards
  cardLight: 'bg-white border border-[#9dd5e1]/30',
  cardDark: 'bg-[#283d4a] border border-[#139cbc]/20',
  
  // Badges
  badge: 'bg-[#1b9abe] text-white',
  badgeOutline: 'border border-[#1b9abe] text-[#1b9abe]'
};

// Fonction helper pour obtenir les couleurs selon le mode
export const getColor = (colorName, isDark = false) => {
  const colorMap = {
    primary: colors.primary,
    primaryDark: colors.primaryDark,
    background: isDark ? colors.background.dark : colors.background.light,
    text: isDark ? colors.text.light : colors.text.dark,
    border: isDark ? colors.border.dark : colors.border.light
  };
  
  return colorMap[colorName] || colors.primary;
};

export default colors;
