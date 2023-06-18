import {Routes} from "./routes";

export const DashboardSidebarEntries = [
    // {
    //     title: 'Home',
    //     path: Routes.Home,
    // },
    {
        title: 'Dashboard',
        path: Routes.Dashboard.Home,
    },
    // {
    //     title: 'Trackers',
    //     path: Routes.Dashboard.Trackers.Home,
    // },
    {
        title: 'Health',
        path: Routes.Dashboard.Health.Home,
    },
    // {
    //     title: 'Training',
    //     path: Routes.Dashboard.Health.Training.Home,
    // },
    {
        title: 'Weather',
        path: Routes.Dashboard.Weather.Home,
    },
    {
        title: 'Settings',
        path: Routes.Dashboard.Settings.Home,
        children: [
            {
                title: 'Accounts',
                path: Routes.Dashboard.Settings.Accounts.Home,
            }
        ]
    },
    {
        title: 'Calendar',
        path: Routes.Dashboard.Calendar.Home,
    }
]