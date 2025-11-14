import React from 'react';

import WalletIcon from '@mui/icons-material/Wallet';
import HomeIcon from '@mui/icons-material/Home';
import SavingsIcon from '@mui/icons-material/Savings';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <HomeIcon />,
        link: ""
    },

    {
        title: "Transactions",
        icon: <FormatListBulletedIcon />,
        link: ""
    },

    {
        title: "My Savings",
        icon: <SavingsIcon />,
        link: ""
    },

    {
        title: "Investments",
        icon: <WalletIcon />,
        link: ""
    }
]