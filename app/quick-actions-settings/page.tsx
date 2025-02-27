"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import Link from "next/link"
import content from "../../data/content.json"

export default function QuickActionsSettingsPage() {
  const [actions, setActions] = useState(content.quickActions.map((action) => ({ ...action, visible: true })))

  const onToggle = (index: number) => {
    const newActions = [...actions]
    newActions[index].visible = !newActions[index].visible
    setActions(newActions)
  }

  const onReorder = (result: any) => {
    if (!result.destination) return

    const newActions = Array.from(actions)
    const [reorderedItem] = newActions.splice(result.source.index, 1)
    newActions.splice(result.destination.index, 0, reorderedItem)

    setActions(newActions)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quick Actions Settings</h1>
      <DragDropContext onDragEnd={onReorder}>
        <Droppable droppableId="actions">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
              {actions.map((action, index) => (
                <Draggable key={action.title} draggableId={action.title} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="flex items-center justify-between bg-secondary p-2 rounded"
                    >
                      <Label htmlFor={`action-${index}`} className="flex items-center space-x-2">
                        <span className="text-lg">☰</span>
                        <span>{action.title}</span>
                      </Label>
                      <Switch id={`action-${index}`} checked={action.visible} onCheckedChange={() => onToggle(index)} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
}

