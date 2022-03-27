import ShowBlogs from '../view/showblogs/ShowBlogs.vue'
import AddBlog from '../view/addblog/AddBlog.vue'
import SingleBlog from '../view/singleblog/SingleBlog.vue'
import EditBlog from '../view/editblog/EditBlog.vue'
import HomePage from '../view/homepage/HomePage.vue'
export default[
    {
        path: "/",
        component:ShowBlogs,
    },
    {
        path: "/add",
        meta:{requireAuth:true},
        component:AddBlog
    },
    {
        path: "/blog/:id",
        component:SingleBlog
    },
    {
        path: "/edit/:id",
        meta:{requireAuth:true},
        component:EditBlog
    },
    {
        path: "/Home",
        meta:{requireAuth:true},
        component:HomePage
    }
]