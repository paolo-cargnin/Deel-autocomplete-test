import { useEffect, useState } from "react";
import { autocompleteOption, autocompleteValues } from "../types";
import style from "./AutoCompleteOption.module.css"

export type AutoCompleteOptionType = React.FC<{
  option: autocompleteOption,
  search: string,
  isCurrentNavigationOption?:boolean,
  onSelected: (a:autocompleteValues) => void
}>;

const AutoCompleteOption : AutoCompleteOptionType = (props) => {
  const {option, search} = props
  const {label} = option

  const handleClick = () => {
    props.onSelected(props.option.value)
  }

  const [labelHighlighted ,setLabelHighlighted] = useState<string>('')
  useEffect(() => {
    // improvable
    if (typeof label === 'string' ){
      //fastest way to do it in my mind (for sure  not performance wise)
      const lowerLabel = label.toLowerCase()
      const lowerSearch = search.toLowerCase()
      let lastCount = 0
      const splitted = lowerLabel.split(lowerSearch)
      const output = splitted.reduce((acc,strSimplified,i)=> {
        // take portion of string
        let str = label.substring(lastCount, lastCount + strSimplified.length)
        lastCount = lastCount + strSimplified.length
        let searchNextToStr = label.substring(lastCount,lastCount + search.length)
        lastCount = lastCount + search.length
        // on the last i don't execute the hightligh...
        if (i !== splitted.length - 1){
          str = str + `<b>${searchNextToStr}</b>`
        }
        return acc + str
      },'')
      setLabelHighlighted(output)
    }
  },[search,label])

  return (
    <div
      className={`${style.option} ${props.isCurrentNavigationOption ? style.currentNavigation : null} `}
      onClick={handleClick}
      dangerouslySetInnerHTML={{__html: labelHighlighted }}>
    </div>
  )


}

export default AutoCompleteOption;