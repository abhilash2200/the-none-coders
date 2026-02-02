import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Products by Non Coders| Built for Everyday Business Use Now.',
    description: 'Simple, reliable products designed to support daily operations, improve efficiency, and bring calm to complex work while growing alongside your business.',
  }


export default function ProductsLayout({
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