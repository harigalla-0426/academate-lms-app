'use client'
// ---------------is working------------------------------
import React from 'react'
import Image from 'next/image'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { styled } from '@mui/system'
import { useSession } from 'next-auth/react'

const Header = styled(ListItem)({
  pointerEvents: 'none',
  backgroundColor: '#f5f5f5',
})

const SideNavBar = () => {
  const { data: session } = useSession()

  const menuItems = [
    { name: 'Home', isHeader: true },
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Courses', link: '/courses' },
    { name: 'Announcements', link: '/announcelist' },
    { name: 'Submissions', isHeader: true },
    { name: 'Assignments', link: '/assignments' },
    { name: 'Grades', link: '/grades' },
    { name: 'Control Panel', isHeader: true },
  ]

  return (
    <List
      component="nav"
      sx={{
        width: '250px',
        height: '100%',
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundColor: '#fff',
        borderRight: '1px solid #ccc',
      }}
    >
      <div>
        <Image
          src="/Academate_Logo.png"
          alt="Academate Logo"
          width={150}
          height={80}
        />
      </div>
      {session?.user ? (
        menuItems.map((item, index) => {
          const { name, isHeader, link } = item

          return isHeader ? (
            <Header key={index}>
              <ListItemText primary={name} />
            </Header>
          ) : (
            <ListItem button key={index}>
              <ListItemText>
                <a href={link}>{name}</a>
              </ListItemText>
            </ListItem>
          )
        })
      ) : (
        <></>
      )}
      {session?.user ? (
        <>
          <Image
            className="w-10 h-10 rounded-full object-cover mx-5 mb-2"
            src={session?.user?.image ?? `/${session?.user?.userType}.png`}
            alt={session?.user?.name}
            width={50}
            height={50}
          />
          <ListItem button>
            <ExitToAppIcon />
            <ListItemText>
              <a href="/api/auth/signout">Sign Out</a>
            </ListItemText>
          </ListItem>
        </>
      ) : (
        <ListItem button>
          <ExitToAppIcon />
          <ListItemText>
            <a href="/api/auth/signin">Login</a>
          </ListItemText>
        </ListItem>
      )}
    </List>
  )
}

export default SideNavBar
// ------is working-------------------------------------------------
