import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Terms & Conditions | The Non-Coders',
  description: 'Terms and Conditions for using the website and services of The Non-Coders.',
}


export default function termsConditionLayout({
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