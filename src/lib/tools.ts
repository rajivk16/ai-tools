import toolsData from '@/data/tools.json'
import { Tool } from '@/types'

export function getAllTools(): Tool[] {
  return toolsData
}

export function getToolBySlug(slug: string): Tool | undefined {
  return toolsData.find(tool => tool.slug === slug)
}

export function getToolsByCategory(category: string): Tool[] {
  return toolsData.filter(tool => tool.category === category)
}