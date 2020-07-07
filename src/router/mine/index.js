export default {
    path : '/mine',
    component : () => import('../../views/Mine'),
    children : [
        {
            path: 'collect',
            component : () => import('../../components/Collect'),
        },
        {
            path: 'order',
            component : () => import('../../components/MineOrder'),
        },
        {
            path: 'setting',
            component : () => import('../../components/Setting'),
        },
    ]
}