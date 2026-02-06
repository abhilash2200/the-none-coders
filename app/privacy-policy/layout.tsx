import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Privacy Policy | The Non-Coders',
  description: 'Privacy Policy and data protection practices of The Non-Coders.',
}


export default function PrivacyPolicyLayout({
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