"use client"
import React, { useState } from "react"
import Select from "react-select"
import "./dropdown.css"

interface Option {
  value: string
  label: string
}

const MyComponent: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const options: Option[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ]

  const handleSelectChange = (selectedOption: any) => {
    setSelectedOptions(selectedOption as Option[])
  }

  return (
    <div>
      <Select
        options={options}
        onChange={handleSelectChange}
        isMulti
        isSearchable
        noOptionsMessage={() => "not found"}
        className="custom-select"
      />

      <div>
        <h3>Selected Options:</h3>
        {selectedOptions.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
    </div>
  )
}

export default MyComponent
