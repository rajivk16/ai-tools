// app/catalog/[slug]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ToolDetails from '@/components/ToolDetails'
import { getToolBySlug, getAllTools } from '@/lib/tools'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = getToolBySlug(params.slug)
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
    }
  }

  return {
    title: `${tool.name}`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} - Toolzzy`,
      description: tool.tagline,
      images: [{ url: tool.imageUrl[0] }],
    },
  }
}

export async function generateStaticParams() {
  const tools = getAllTools()
  return tools.map((tool) => ({
    slug: tool.slug,
  }))
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug)

  if (!tool) {
    notFound()
  }

  return <ToolDetails tool={tool} />
}