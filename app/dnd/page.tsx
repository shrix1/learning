"use client"
import React, { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const Page = () => {
  const content = [
    {
      id: 1,
      name: "one",
    },
    {
      id: 2,
      name: "two",
    },
    {
      id: 3,
      name: "three",
    },
    {
      id: 4,
      name: "four",
    },
  ]

  const [items, setItems] = useState(content)

  const handleOnDragEnd = (result: any) => {
    //user dragged the item outside the droppable area
    if (!result.destination) return

    //if the item is dropped in the same place it was before
    if (
      result.source.index === result.destination.index &&
      result.source.draggableId === result.destination.draggableId
    )
      return

    //duplicating the array
    const newItems = [...items]

    //removing the item from the array using splice method
    const [reorderedItem] = newItems.splice(result.source.index, 1)

    //adding the item to the array in the destination index
    // (adding index , removing count, item)
    newItems.splice(result.destination.index, 0, reorderedItem)

    //update the state
    setItems(newItems)
  }

  return (
    <header className="flex justify-center items-center min-h-screen">
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
              {items.map(({ id, name }, index) => (
                <Draggable key={id} draggableId={id.toString()} index={index}>
                  {(provided, snapshot) => (
                    <div
                      key={id}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className={`p-3 bg-lime-200 rounded-lg border-2 border-lime-200 mb-3 transition-colors duration-200 
                      ${
                        snapshot.isDragging
                          ? "bg-lime-500 border-dashed border-black"
                          : ""
                      }`}
                    >
                      {name} {" | "}
                      id: {id}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </main>
          )}
        </Droppable>
      </DragDropContext>
    </header>
  )
}

export default Page
