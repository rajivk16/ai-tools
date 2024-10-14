import { useState, useEffect } from 'react'
import { Tool } from '@/types'
import toolsData from '@/data/tools1.json'

// Add this line after the import
const typedToolsData = toolsData as Tool[];

export function useAllTools() {
  const [tools, setTools] = useState<Tool[]>([])

  useEffect(() => {
    setTools(typedToolsData)
  }, [])

  return tools
}

export function useToolBySlug(slug: string) {
  const [tool, setTool] = useState<Tool | undefined>(undefined)

  useEffect(() => {
    const foundTool = typedToolsData.find(t => t.slug === slug)
    setTool(foundTool)
  }, [slug])

  return tool
}