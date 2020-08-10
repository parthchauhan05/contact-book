const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/contact/:id', name: 'Contact', component: contact, props: true},
    {path: '/contact/edit/:id', name: 'Edit', component: edit, props: true},
    {path: '/add', name: 'Add', component: add},
    {path: '/contact/delete/:id', name: 'Delete', component: deleteContact, props: true}
]

const router = new VueRouter({
    routes: routes
})