import React from 'react'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

import { Home, Reports, Products, Team, Messages, Support } from '../pages'

const SidebarData = [
  { title: 'Home', comp: Home, path: '/', icon: <AiIcons.AiFillHome />, cName: 'nav-text' },
  {
    title: 'Reports',
    comp: Reports,
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Products',
    comp: Products,
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  { title: 'Team', comp: Team, path: '/team', icon: <IoIcons.IoMdPeople />, cName: 'nav-text' },
  {
    title: 'Messages',
    comp: Messages,
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    comp: Support,
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
]

export default SidebarData
