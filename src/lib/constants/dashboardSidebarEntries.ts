import {Routes} from "./routes";

export const DashboardSidebarEntries = [
    {
        title: 'Home',
        path: Routes.Home,
    },
    {
        title: 'Dashboard',
        path: Routes.Dashboard.Home,
    },
    {
        title: 'Trackers',
        path: Routes.Dashboard.Trackers.Home,
    },
    {
        title: 'Health',
        path: Routes.Dashboard.Health.Home,
    },
    {
        title: 'Training',
        path: Routes.Dashboard.Health.Training.Home,
    }
]