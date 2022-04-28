import reduce from 'lodash/reduce';
import translation from '@constants/translation';

const DEFAULT_FORMATTER = (value) => value;

const translate = (key, params = {}, formatters = {}) => {
  const translatedText = translation[key];
  const result = reduce(
    Object.entries(params),
    (prev, [objKey, rawText]) => {
      const replaceRegex = new RegExp(`{${objKey}}`, 'g');
      const formatter = formatters[objKey] || DEFAULT_FORMATTER;
      const replaceingText = formatter(rawText);
      return String(prev).replace(replaceRegex, replaceingText);
    },
    translatedText,
  );
  return result;
};

export default translate;
