import React, { useEffect, useState } from "react"
// import React, { useEffect, useState } from "react"
import AutoCompleteLoading from "./components/AutoCompleteLoading";
import AutoCompleteOption, { AutoCompleteOptionType } from "./components/AutoCompleteOption";
import { autocompleteOption, autocompleteValues, onSearchCallback } from "./types";

import style from "./AutoComplete.module.css"

type AutoCompleteComponent = React.FC<{
  initialValue?:string,
  onSearch: onSearchCallback,
  optionComponent? : AutoCompleteOptionType,
  debounceTime? : number,
  searchOnEmpty? : false,
  onSelect? : (a:autocompleteValues) => void
}>;
const AutoComplete : AutoCompleteComponent = (props) => {

  const [search,setSearch] = useState<string>(props.initialValue || '')
  const [loading, setLoading] = useState<boolean>(false)
  const [options, setOptions] = useState<autocompleteOption[]>([])
  const [resultsOpen, setResultsOpen] = useState<boolean>(false)
  const [currentNavigatorOption, setCurrentNavigatorOption] = useState<number>(0)
  // first attempts for the third demo. I will live it this here as a shame.
  // I end id up implementing it in a much simpler way
  // const [SingleOptionComponent, setSingleOptionComponent] = useState<AutoCompleteOptionType>(props.optionComponent || AutoCompleteOption)
  
  // useEffect(() => {
  //   setSingleOptionComponent(props.optionComponent || AutoCompleteOption)
  // },[props.optionComponent])

  // i will use UseEffect on search, in this way I can debounce 
  const {onSearch, searchOnEmpty,debounceTime}  = props
  useEffect(() => {
    const getOptions = async () => {
      if (searchOnEmpty || search){
        setLoading(true)
        setOptions(await onSearch(search))
        setLoading(false)          
      }
    }
    const a = setTimeout(getOptions, debounceTime || 300)
    return () => clearTimeout(a)
  },[onSearch, debounceTime, searchOnEmpty, search])

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setResultsOpen(true)
    setSearch(e.target.value)
  }

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "ArrowUp" && currentNavigatorOption > 0){
      e.preventDefault();
      setCurrentNavigatorOption(currentNavigatorOption -1)

      return false;
    }

    if (e.code === "ArrowDown" && currentNavigatorOption < options.length -1){
      e.preventDefault();
      setCurrentNavigatorOption(currentNavigatorOption + 1)
      return false;
    }

    if (e.code === "Enter" && props.onSelect){
      e.preventDefault();
      const selected = options[currentNavigatorOption]
      handleSelection(selected.value)
      return false;
    }
  }

  const handleBlur = () => {
    setTimeout(() => {
      if (resultsOpen){
        setResultsOpen(false)
      }
    },100)
    setCurrentNavigatorOption(0)
  }

  const handleFocus = () => {
    setResultsOpen(true)
  }

  const handleSelection = (optionValue: autocompleteValues ) => {
    !props.onSelect || props.onSelect(optionValue) 
    setResultsOpen(false)
  }

  return (
    <div className={style.autoCompleteContainer}>
      <div className={style.inputContainer}>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          onFocus={handleFocus} />
        {!loading  || <AutoCompleteLoading></AutoCompleteLoading>}
      </div>
      { resultsOpen  ?  
        <div className={style.resultContainer}>
          { options.length === 0 ? 
          (
            <>No Results Found</>
          )
          :
            options.map((option:autocompleteOption,i:number) => (
              <AutoCompleteOption
              option={option}
              search={search}
              key={i}
              onSelected={handleSelection}
              isCurrentNavigationOption={currentNavigatorOption === i}
              ></AutoCompleteOption>
            ))
          }
        </div> : null }
    </div>
  )
}

export default AutoComplete