// Types
import { DropdownMenuData } from '../types/DropdownMenuTypes';

// Conditionals
const shouldShowAllResults = (query: string) => query === ''

const doesQueryMatchAny = (textToMatch: string[], query: string) =>
  textToMatch.some((text) => text.toLowerCase().includes(query.toLowerCase()));

/**
 * @description filters the data set for text or codes that matches the query string
 *
 * @param dataToSearch
 * @param query
 *
 * @returns {DropdownMenuData[]} - filtered data set
 *
 * @todo make the data set more generic
 * @todo implement proper search algorithm
 */
export const searcher = (dataToSearch: DropdownMenuData[], query: string) => dataToSearch.filter(({ code, text }) => {
  if (shouldShowAllResults(query)) {
    return text;
  }
  if (doesQueryMatchAny([code, text], query)) {
    return text;
  }
  return '';
});
