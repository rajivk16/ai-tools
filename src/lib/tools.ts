import toolsData from '@/data/tools1.json'
import { Tool } from '@/types'

// Type assertion for the entire toolsData
const typedToolsData = toolsData as Tool[];

export function getAllTools(): Tool[] {
  return typedToolsData
}

export function getToolBySlug(slug: string): Tool | undefined {
  return typedToolsData.find(tool => tool.slug === slug)
}

export function getToolsByCategory(category: string): Tool[] {
  return typedToolsData.filter(tool => tool.category === category)
}