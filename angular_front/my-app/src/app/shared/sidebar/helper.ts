export const sideBarData  = (isAuthorized: boolean) => ([
    {
        src: 'assets/images/home_menu_icon.svg',
        if: isAuthorized,
        name: 'Home',
        class: "icons",
        alt: 'home',
        route: 'home',
        routerLink: 'poo/home'
    },
    {
        src: 'assets/images/explore_icon.svg',
        if: true,
        name: 'Explore',
        class: "icons",
        alt: 'Explore',
        route: 'explore',
        routerLink: 'poo/explore'
    },
    {
        src: 'assets/images/notification_icon.svg',
        if: isAuthorized,
        name: 'Notification',
        class: "icons",
        alt: 'Notification',
        route: 'notifications',
        routerLink: 'poo/notifications'
    },
    {
        src: 'assets/images/message_icon.svg',
        if: isAuthorized,
        name: 'Messages',
        class: "icons",
        alt: 'Messages',
        route: 'messages',
        routerLink: 'poo/messages'
    },
    {
        src: 'assets/images/list_icon.svg',
        if: isAuthorized,
        name: 'List',
        class: "icons",
        alt: 'List',
        route: 'list',
        routerLink: 'poo/list'
    },
    {
        src: 'assets/images/bookmark_icon.svg',
        if: isAuthorized,
        name: 'Bookmark',
        class: "icons",
        alt: 'Bookmark',
        route: 'bookmark',
        routerLink: 'poo/bookmark'
    },
    {
        src: 'assets/images/verified_icon.svg',
        if: isAuthorized,
        name: 'Verified',
        class: "icons",
        alt: 'Verified',
        route: 'verified',
        routerLink: 'poo/verified'
    },
    {
        src: 'assets/images/profile_icon.svg',
        if: isAuthorized,
        name: 'Profile',
        class: "icons",
        alt: 'Profile',
        route: 'profile',
        routerLink: 'poo/profile'
    },
    {
        src: 'assets/images/more_icon.svg',
        if: isAuthorized,
        name: 'More',
        class: "icons",
        alt: 'More',
        routerLink: 'poo/more'
    },
    {
        src: 'assets/images/settings_icon.svg',
        if: !isAuthorized,
        name: 'Settings',
        class: "icons",
        alt: 'settings',
        route: 'settings',
        routerLink: 'poo/settings'
    }
])
