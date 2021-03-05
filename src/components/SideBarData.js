import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SideBarData = [
  {
    title: 'About',
    path: '/about',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Artists',
    path: '/overview1',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'test2',
        path: '/overview/test2',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'Musicians',
    path: '/overview2',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Users2',
        path: '/overview/users2',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'test3',
        path: '/overview/test3',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'Designers',
    path: '/overview3',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Users3',
        path: '/overview/users3',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'test3',
        path: '/overview/test3',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
]
