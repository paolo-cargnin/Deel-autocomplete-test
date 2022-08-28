// for the moment, I think it is best to set up any. Since the component will be re-usable.
// I don't want to force people to select a specific type of value because this it often bothers me in 

import { AutoCompleteOptionType } from "../components/AutoCompleteOption";

// other autocomplete components
export type autocompleteValues = any

export interface autocompleteOption {
  label: (string | AutoCompleteOptionType ),
  value: autocompleteValues
}

export type onSearchCallback = (query: string) => Promise<autocompleteOption[]>;
