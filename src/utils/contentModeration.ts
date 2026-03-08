// Content moderation utilities for comments

// List of blocked words (Portuguese profanity and common insults)
const blockedWords = [
  // Common Portuguese profanity
  'porra', 'caralho', 'merda', 'foda', 'fodase', 'puta', 'putaria', 'buceta', 'cu', 'cacete',
  'viado', 'viada', 'bicha', 'bichona', 'cuzao', 'cuzão', 'arrombado', 'arrombada',
  'filho da puta', 'filha da puta', 'fdp', 'pqp', 'vsf', 'tnc', 'vtnc', 'kct', 'pnc',
  'desgraça', 'desgraçado', 'desgraçada', 'corno', 'corna', 'otario', 'otário', 'otaria',
  'idiota', 'imbecil', 'retardado', 'retardada', 'burro', 'burra', 'vagabundo', 'vagabunda',
  'babaca', 'trouxa', 'bosta', 'lixo', 'escoria', 'escória', 'nojento', 'nojenta',
  'piranha', 'vadia', 'galinha', 'cachorra', 'cachorro', 'safado', 'safada',
  // Racial and discriminatory slurs
  'nigger', 'negro', 'macaco', 'preto', 'pretinho', 'crioulo',
  'nazista', 'nazi', 'fascista', 'racista',
  // Common insults in English
  'fuck', 'shit', 'bitch', 'asshole', 'bastard', 'dick', 'cock', 'pussy',
  'whore', 'slut', 'cunt', 'damn', 'faggot', 'fag', 'nigga',
  // Spam related
  'spam', 'scam', 'golpe', 'fraude'
];

// Regex patterns for detecting links, images, and files
// NOTE: These patterns must NOT use the global flag (g) to avoid stateful lastIndex bugs
// when called multiple times. We create fresh regex in each function call instead.
const createLinkPattern = () => /https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+[^\s]*/i;
const createEmailPattern = () => /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i;
const createFileExtensionPattern = () => /\.(exe|bat|cmd|msi|dll|zip|rar|7z|tar|gz|pdf|doc|docx|xls|xlsx|ppt|pptx|mp3|mp4|avi|mkv|jpg|jpeg|png|gif|bmp|svg|webp)\b/i;
const createHtmlTagPattern = () => /<[^>]*>/i;
const createImageEmbedPattern = () => /!\[.*?\]\(.*?\)|<img[^>]*>/i;

export interface ModerationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Check if text contains blocked words
 */
export const containsBlockedWords = (text: string): boolean => {
  const lowerText = text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-zA-Z0-9\s]/g, ''); // Remove special characters
  
  return blockedWords.some(word => {
    const normalizedWord = word.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9\s]/g, '');
    
    // Check for whole word match
    const regex = new RegExp(`\\b${normalizedWord}\\b`, 'i');
    return regex.test(lowerText);
  });
};

/**
 * Check if text contains links
 */
export const containsLinks = (text: string): boolean => {
  return createLinkPattern().test(text) || createEmailPattern().test(text);
};

/**
 * Check if text contains file references
 */
export const containsFiles = (text: string): boolean => {
  return createFileExtensionPattern().test(text);
};

/**
 * Check if text contains HTML tags or image embeds
 */
export const containsHtmlOrImages = (text: string): boolean => {
  return htmlTagPattern.test(text) || imageEmbedPattern.test(text);
};

/**
 * Check if name is valid
 */
export const validateName = (name: string): ModerationResult => {
  const errors: string[] = [];
  
  const trimmedName = name.trim();
  
  if (trimmedName.length < 2) {
    errors.push('O nome deve ter pelo menos 2 caracteres.');
  }
  
  if (trimmedName.length > 50) {
    errors.push('O nome deve ter no máximo 50 caracteres.');
  }
  
  if (containsBlockedWords(trimmedName)) {
    errors.push('O nome contém palavras não permitidas.');
  }
  
  if (containsLinks(trimmedName)) {
    errors.push('O nome não pode conter links.');
  }
  
  // Only allow letters, numbers, spaces, and basic punctuation
  const validNamePattern = /^[a-zA-ZÀ-ÿ0-9\s._-]+$/;
  if (!validNamePattern.test(trimmedName)) {
    errors.push('O nome contém caracteres não permitidos.');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Check if comment content is valid
 */
export const validateComment = (content: string): ModerationResult => {
  const errors: string[] = [];
  
  const trimmedContent = content.trim();
  
  if (trimmedContent.length < 3) {
    errors.push('O comentário deve ter pelo menos 3 caracteres.');
  }
  
  if (trimmedContent.length > 1000) {
    errors.push('O comentário deve ter no máximo 1000 caracteres.');
  }
  
  if (containsBlockedWords(trimmedContent)) {
    errors.push('O comentário contém palavras não permitidas.');
  }
  
  if (containsLinks(trimmedContent)) {
    errors.push('Links não são permitidos nos comentários.');
  }
  
  if (containsFiles(trimmedContent)) {
    errors.push('Referências a arquivos não são permitidas.');
  }
  
  if (containsHtmlOrImages(trimmedContent)) {
    errors.push('HTML e imagens não são permitidos.');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Generate a simple math captcha
 */
export const generateCaptcha = (): { question: string; answer: number } => {
  const operations = ['+', '-', '×'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  
  let num1: number, num2: number, answer: number;
  
  switch (operation) {
    case '+':
      num1 = Math.floor(Math.random() * 20) + 1;
      num2 = Math.floor(Math.random() * 20) + 1;
      answer = num1 + num2;
      break;
    case '-':
      num1 = Math.floor(Math.random() * 20) + 10;
      num2 = Math.floor(Math.random() * num1);
      answer = num1 - num2;
      break;
    case '×':
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = num1 * num2;
      break;
    default:
      num1 = 1;
      num2 = 1;
      answer = 2;
  }
  
  return {
    question: `${num1} ${operation} ${num2} = ?`,
    answer
  };
};
