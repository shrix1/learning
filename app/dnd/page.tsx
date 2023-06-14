"use client"
import React, { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { RxDragHandleVertical } from "react-icons/rx"

const Page = () => {
  const content = [
    {
      id: 1,
      type: "text",
      placeholder: "Enter your name",
    },
    {
      id: 2,
      type: "para",
      placeholder: "Enter description",
    },
    {
      id: 3,
      type: "radio",
      placeholder: "edit",
    },
    {
      id: 4,
      type: "text",
      placeholder: "Email",
    },
  ]

  const [items, setItems] = useState(content)

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return
    if (
      result.source.index === result.destination.index &&
      result.source.draggableId === result.destination.draggableId
    )
      return
    const newItems = [...items]
    const [reorderedItem] = newItems.splice(result.source.index, 1)
    newItems.splice(result.destination.index, 0, reorderedItem)
    setItems(newItems)
  }

  const [formValues, setFormValues] = useState({})

  const handleType = (type: string, id: number, pl: string) => {
    switch (type) {
      case "text":
        return (
          <input
            type="text"
            className="border-2 border-black rounded-lg p-2"
            name={pl}
            onChange={(e) =>
              setFormValues((prevValues) => ({
                ...prevValues,
                [pl]: e.target.value,
              }))
            }
          />
        )

      case "para":
        return (
          <textarea
            className="border-2 border-black rounded-lg p-2"
            onChange={(e) =>
              setFormValues((prevValues) => ({
                ...prevValues,
                [pl]: e.target.value,
              }))
            }
          />
        )

      case "radio":
        return (
          <>
            <input
              type="radio"
              name={type}
              id={type}
              onChange={(e) =>
                setFormValues((prevValues) => ({
                  ...prevValues,
                  [type]: e.target.checked,
                }))
              }
            />
            <label htmlFor={type} className="mt-1 ml-4">
              something
            </label>
          </>
        )

      default:
        return (
          <input
            type="text"
            className="border-2 border-black rounded-lg p-2"
            onChange={(e) =>
              setFormValues((prevValues) => ({
                ...prevValues,
                [pl]: e.target.value,
              }))
            }
          />
        )
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.table(formValues)
  }

  return (
    <>
      <header className="flex justify-center items-center min-h-[90vh]">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="white-container">
            {(provided, snapshot) => (
              <main
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`bg-white/50 rounded-lg w-1/2 min-h-1/2 flex justify-center p-3 text-black flex-col 
              transition-colors duration-200 
              ${snapshot.isDraggingOver ? "bg-white/70" : ""}`}
              >
                <form onSubmit={handleSubmit}>
                  {items.map(({ id, type, placeholder }, index) => (
                    <Draggable
                      key={id}
                      draggableId={id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          key={id}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className={`flex justify-start items-center gap-10 p-3 bg-lime-200 rounded-lg border-2 border-lime-200 mb-3 transition-colors duration-200 
                      ${
                        snapshot.isDragging
                          ? "bg-lime-500 border-dashed border-black"
                          : ""
                      }`}
                        >
                          <RxDragHandleVertical />
                          <div className="flex items-center">
                            {placeholder} : {handleType(type, id, placeholder)}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  <button type="submit" className="p-3 rounded-md bg-lime-300">
                    Submit
                  </button>
                </form>
              </main>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </>
  )
}

export default Page
