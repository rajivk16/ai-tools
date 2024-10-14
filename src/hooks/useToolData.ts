import { useState, useEffect } from 'react'
import { Tool } from '@/types'
import toolsData from '@/data/tools1.json'

export function useAllTools() {
  const [tools, setTools] = useState<Tool[]>([])

  useEffect(() => {
    setTools(toolsData)
  }, [])

  return tools
}

export function useToolBySlug(slug: string) {
  const [tool, setTool] = useState<Tool | undefined>(undefined)

  useEffect(() => {
    const foundTool = toolsData.find(t => t.slug === slug)
    setTool(foundTool)
  }, [slug])

  return tool
}