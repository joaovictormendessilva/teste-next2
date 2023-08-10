import { Box } from '@mui/material'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { SideMenu } from '../components/SideMenu/SideMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box>
      <SideMenu>
        <Box marginTop="65px">
          {children}
        </Box>
      </SideMenu>
    </Box>
  )
}
