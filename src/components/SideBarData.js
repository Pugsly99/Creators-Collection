import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SideBarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Musicians',
    path: '/musicians',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Dominic Fike',
        path: '/musicians/dominicfike',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Benee',
        path: '/musicians/benee',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Frank Ocean',
        path: '/musicians/frankocean',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'Artists',
    path: '/artists',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Pablo Picasso',
        path: '/artists/pablopicasso',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Alex Lafollette',
        path: '/artists/alexlafollette',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'Designers',
    path: '/designers',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Calvin Klein',
        path: '/designers/calvinklein',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Versace',
        path: '/designers/versace',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Louis Vuitton',
        path: '/designers/louisvuitton',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'About',
    path: '/about',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Contact Us',
        path: '/about/contactus',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Our Plan',
        path: '/about/ourplan',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
]
