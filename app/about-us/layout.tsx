import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'About Non Coders | People First Technology Builders Hub UX',
    description: 'Non Coders is built on care, curiosity, and honesty, creating technology that feels human, solves real problems, and supports growth.',
  }


export default function AboutLayout({
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