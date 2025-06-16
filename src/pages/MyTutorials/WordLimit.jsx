export function truncateWords(text, limit) {
  return text.split(' ').slice(0, limit).join(' ') + (text.split(' ').length > limit ? '...' : '');
}