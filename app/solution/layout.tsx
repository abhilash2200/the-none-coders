import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Smart Solutions by Non Coders for Real Challenges Zone Pro',
    description: 'We design thoughtful digital solutions that simplify work, reduce confusion, and help businesses solve real challenges with clarity, speed, and confidence.',
  }


export default function SolutionLayout({
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