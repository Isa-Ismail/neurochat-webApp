import React from 'react'
import Header from '../header'
import SideNav from '../sidenav'

const Layout = ({children}) => {
  return (
      <div className="flex flex-row w-full h-fit">
            <SideNav />
            <div className="flex flex-col justify-center items-center w-full min-h-screen">
                <Header />
                <main className="flex flex-col justify-center items-center w-full h-full relative">{children}</main>
            </div>
        </div>
  )
}

export default Layout