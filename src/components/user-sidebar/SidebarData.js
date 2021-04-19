import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Profile',
        path: '/profile',
        icon: <MdIcons.MdAccountCircle />
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <RiIcons.RiSettings3Fill />
    },
    {
        title: 'Wish Boards',
        path: '/',
        icon: <RiIcons.RiArtboardLine />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Gardening',
                path: '/boards/gardening',
                icon: <RiIcons.RiArtboard2Line />
            },
            {
                title: 'Home',
                path: '/boards/home',
                icon: <RiIcons.RiArtboard2Line />
            },
            {
                title: 'Clothing',
                path: '/boards/clothing',
                icon: <RiIcons.RiArtboard2Line />
            },
        ]
    },

]
