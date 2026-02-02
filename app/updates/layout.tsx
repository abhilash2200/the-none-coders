import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Updates from Non Coders| Stories, Progress, and Care Today.',
    description: 'Stay connected with fresh updates, insights, and moments from our journey as we learn, build, and grow with honesty, effort, and care every step forward!',
  }


export default function UpdatesLayout({
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