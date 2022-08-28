import { useState } from "react"
import AutoComplete from "../components/AutoComplete/AutoComplete"
import { autocompleteOption, autocompleteValues } from "../components/AutoComplete/types"

const ApiDemo  = () => {

  const [value,setValue] = useState(null)

  const handleSearch= ((query:string) => {
    return new Promise<autocompleteOption[]>(async (resolve,reject) => {
      try{
        fetch('https://digimoncard.io/api-public/search.php?n='+query)
        .then((response) => response.json())
        .then((data) => {
          resolve(
            data.map((d:any) => ({
              label: `${d.name} - ${d.digi_type}`,
              value: d
            })))
        });        
      }catch(e){
        console.error(e)
        reject(e)
      }
    })
  })
  const handleSelect = (selected:autocompleteValues) => {
    setValue(selected)
  }

  return (
    <div>
      <h3>Use case #2 - Usage of api:</h3>
      <p>Search your digimon! (If you don't know any digimon try "Agumon", or "Caprimon" or go <a href="https://wikimon.net/Visual_List_of_Digimon" target="_blank" rel="noreferrer">here</a>)</p>

      <AutoComplete
        onSearch={handleSearch}
        onSelect={handleSelect}
      ></AutoComplete>

      <div>
        <h5>Selected value: </h5>

        <pre  className="preResults">{JSON.stringify(value)}</pre>
      </div>
    </div>

  )
}

export default ApiDemo