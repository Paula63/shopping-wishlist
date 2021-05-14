import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import * as TiIcon from 'react-icons/ti';

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
        path: '/boards',
        icon: <RiIcons.RiArtboardLine />
    },
    {
        title: 'Items',
        icon: <TiIcon.TiTags />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Manage Items',
                path: '/boards/items/manage',
                icon: <TiIcon.TiPointOfInterest />
            },
            {
                title: 'View All Items',
                path: '/view-all-items',
                icon: <TiIcon.TiPointOfInterest />
            },
            {
                title: 'Filter Items',
                path: '/boards/items',
                icon: <TiIcon.TiPointOfInterest />
            },
        ]
    },

]
