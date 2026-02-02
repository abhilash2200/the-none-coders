import { Metadata } from "next"


export const metadata: Metadata = {
    title: ' Careers at Non Coders| Where Passion Meets Purpose Grow Now.',
    description: 'Build a meaningful career in a place that values learning, teamwork, and honesty, where your ideas matter, your growth is supported, and your work amazes.',
  }


export default function CareerLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          {children}
        </>
    )
  }