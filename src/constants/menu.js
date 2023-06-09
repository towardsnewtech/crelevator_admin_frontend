import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    AlignLeft,
    UserPlus,
    Users,
    Chrome,
    BarChart,Settings,Archive, LogIn
} from 'react-feather';

export const MENUITEMS = [
    {
        path: '/dashboard', title: 'Dashboard', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Users', icon: UserPlus, type: 'sub', active: false, children: [
            { path: '/users/list-user', title: 'User List', type: 'link' },
            { path: '/users/create-user', title: 'Create User', type: 'link' },
            { path: '/users/emailjs-smtp', title: 'EmailJs Or SMTP', type: 'link'}
        ]
    },
    {
        title: 'Products', icon: Box, type: 'sub', active: false, children: [
            { path: '/products/category', title: 'Category', type: 'link' },
            { path: '/products/sub-category', title: 'Sub Category', type: 'link' },
            { path: '/products/product-list', title: 'Product List', type: 'link' },
            { path: '/products/add-product', title: 'Add Product', type: 'link' },
        ]
    },
    {
        title: 'Extras', icon: Tag, type: 'sub', active: false, children: [
            { path: '/extras/training-video', title: 'Training Videos', type: 'link'},
            { path: '/extras/pdfs-material', title: 'PDFs Material', type: 'link'},
            { path: '/extras/faq', title: 'FAQ', type: 'link'},
            { path: '/extras/news', title: 'News', type: 'link'}
        ]
    }
    // {
    //     title: 'Sales', icon: DollarSign, type: 'sub', active: false, children: [
    //         { path: '/sales/orders', title: 'Orders', type: 'link' },
    //         { path: '/sales/transactions', title: 'Transactions', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Coupons', icon: Tag, type: 'sub', active: false, children: [
    //         { path: '/coupons/list-coupons', title: 'List Coupons', type: 'link' },
    //         { path: '/coupons/create-coupons', title: 'Create Coupons', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Pages', icon: Clipboard , type: 'sub', active: false, children: [
    //         { path: '/pages/list-page', title: 'List Page', type: 'link' },
    //         { path: '/pages/create-page', title: 'Create Page', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Media', path: '/media', icon: Camera, type: 'link', active: false
    // },
    // {
    //     title: 'Menus', icon: AlignLeft, type: 'sub', active: false, children: [
    //         { path: '/menus/list-menu', title: 'List Menu', type: 'link' },
    //         { path: '/menus/create-menu', title: 'Create Menu', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Vendors', icon: Users, type: 'sub', active: false, children: [
    //         { path: '/vendors/list_vendors', title: 'Vendor List', type: 'link' },
    //         { path: '/vendors/create-vendors', title: 'Create Vendor', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Localization', icon: Chrome, type: 'sub', children: [
    //         { path: '/localization/transactions', title: 'Translations', type: 'link' },
    //         { path: '/localization/currency-rates', title: 'Currency Rates', type: 'link' },
    //         { path: '/localization/taxes', title: 'Taxes', type: 'link' }
    //     ]
    // },
    // {
    //     title: 'Reports',path:'/reports/report', icon: BarChart, type: 'link', active: false
    // },
    // {
    //     title: 'Settings', icon: Settings, type: 'sub', children: [
    //         { path: '/settings/profile', title: 'Profile', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Invoice',path:'/invoice', icon: Archive, type: 'link', active: false
    // },
]
