import Link from 'next/link'
import React from 'react'

function MenuItem({ item }: { item: any }) {
  return (
    <Link href={item.link}>{item.name}</Link>
  )
}

export default MenuItem