import React from 'react'
import * as FcIcons from 'react-icons/fc'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as SiIcons from 'react-icons/si'

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
    icon: <SiIcons.SiApplemusic />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Dominic Fike',
        path: '/musicians/dominicfike',
      },
      {
        title: 'Benee',
        path: '/musicians/benee',
      },
      {
        title: 'Frank Ocean',
        path: '/musicians/frankocean',
      },
    ]
  },
  {
    title: 'Artists',
    path: '/artists',
    icon: <GiIcons.GiPaintBrush />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Pablo Picasso',
        path: '/artists/pablopicasso',
      },
      {
        title: 'Alex Lafollette',
        path: '/artists/alexlafollette',
      },
    ]
  },
  {
    title: 'Designers',
    path: '/designers',
    icon: <GiIcons.GiClothes />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Calvin Klein',
        path: '/designers/calvinklein',
      },
      {
        title: 'Versace',
        path: '/designers/versace',
      },
      {
        title: 'Louis Vuitton',
        path: '/designers/louisvuitton',
      },
    ]
  },
  {
    title: 'About',
    path: '/about',
    icon: <FcIcons.FcAbout />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Our Plan',
        path: '/about/ourplan',
      },
      {
        title: 'Contact Us',
        path: '/about/contactus',
      },
    ]
  },
]
