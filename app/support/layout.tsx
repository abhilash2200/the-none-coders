import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Support at Non Coders| Help That Truly Cares Always For You',
    description: 'When questions arise, our support team stays close, listens, and responds with care, clarity, and speed to keep your work moving without worry or delay.',
  }


export default function SupportLayout({
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