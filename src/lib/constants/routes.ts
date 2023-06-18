export const Routes = {
    Home: '/',
    Login: '/login',
    Dashboard: {
        Home: '/dashboard',
        Trackers: {
            Home: '/dashboard/trackers',
        },
        Health: {
            Home: '/dashboard/health',
            Weight: {
                Home: '/dashboard/health/weight',
            },
            Training: {
                Home: '/dashboard/health/training',
            }
        },
        Weather: {
            Home: '/dashboard/weather',
        },
        Settings: {
            Home: '/dashboard/settings',
            Accounts: {
                Home: '/dashboard/settings/accounts',
            }
        },
        Calendar: {
            Home: '/dashboard/calendar',
        }
    },
}