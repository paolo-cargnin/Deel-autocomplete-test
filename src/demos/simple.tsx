import { useState } from "react"
import AutoComplete from "../components/AutoComplete/AutoComplete"
import { autocompleteOption, autocompleteValues } from "../components/AutoComplete/types"

const mocks = [{
  label: 'VueJS',
  value: 'vuejs'
},{
  label: 'React',
  value: 'react'
},{
  label: 'Angular',
  value: 'Angular'
},{
  label: 'VueX',
  value: 'VueX'
},{
  label: 'ExpressJs',
  value: 'ExpressJs'
},{
  label: 'MongoDB',
  value: 'MongoDB'
},{
  label: 'TypeScript',
  value: 'TypeScript'
},{
  label: 'ECMASCRIPT',
  value: 'ECMASCRIPT'
},]

const SimpleDemo  = () => {

  const [value,setValue] = useState(null)

  const handleSearch= ((query:string) => {
    return new Promise<autocompleteOption[]>((resolve,reject) => {
      try{
        setTimeout(() => {
          const result = [...mocks].filter(({value}) => value.toLowerCase().includes(query.toLowerCase()) )
          console.log(mocks,result)
          resolve(result)
        },1000)
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
      <h3>Use case #1 - simple auto select:</h3>
      <p>This matches the simple request:</p>

      <AutoComplete
        onSearch={handleSearch}
        onSelect={handleSelect}
      ></AutoComplete>

      <div>
        <h5>Selected value: </h5>
        <pre>{JSON.stringify(value)}</pre>
      </div>
    </div>

  )
}

export default SimpleDemo