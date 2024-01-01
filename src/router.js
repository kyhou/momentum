import { createWebHistory, createRouter } from "vue-router";
const Login = () => import("./views/LoginPage.vue");
const Home = () => import("./views/Home.vue");
const UsersAdminPage = () => import("./views/UsersAdminPage.vue");
const AportesAdminPage = () => import("./views/AportesAdminPage.vue");
const TransactionsAdminPage = () => import("./views/TransactionsAdminPage.vue");
const ProfitsAdminPage = () => import("./views/ProfitsAdminPage.vue");
const UserDashboard = () => import("./views/UserDashboard.vue");
const UserStatement = () => import("./views/UserStatement.vue");
const Institutional = () => import("./views/Institutional.vue");
const Policies = () => import("./views/Policies.vue");
const ForgotPassword = () => import("./views/ForgotPassword.vue");
const NewPassword = () => import("./views/NewPassword.vue");
const AporteDetails = () => import("./views/UserAporteDetails.vue");
const WithdrawsDetails = () => import("./views/WithdrawsAdminPage.vue");
const AdminUserDashboard = () => import("./views/AdminUserDashboard.vue");

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/institutional",
        component: Institutional,
    },
    {
        path: "/policies",
        component: Policies,
    },
    {
        path: "/dashboard",
        alias: "/dashboard",
        name: "dashboard",
        component: UserDashboard,
    },
    {
        path: "/admin/users",
        component: UsersAdminPage,
    },
    {
        path: "/admin/aportes",
        component: AportesAdminPage,
    },
    {
        path: "/admin/transactions",
        component: TransactionsAdminPage,
    },
    {
        path: "/user/statement/",
        component: UserStatement,
    },
    {
        path: "/user/statement/:userId",
        component: UserStatement,
    },
    {
        path: "/forgot-password",
        component: ForgotPassword,
    },
    {
        path: "/new-password",
        component: NewPassword,
    },
    {
        path: "/dashboard/aporteDetails/:aporteId",
        component: AporteDetails,
    },
    {
        path: "/admin/withdraws",
        component: WithdrawsDetails,
    },
    {
        path: "/admin/profits",
        component: ProfitsAdminPage,
    },
    {
        path: "/admin/adminUserDashboard/:userId",
        component: AdminUserDashboard,
    },
    {
        path: "/admin/userStatement/:userId",
        component: UserStatement,
    },
];

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        }
        return { top: 0 };
    },
    routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = [
        "/login",
        "/",
        "/forgot-password",
        "/new-password",
        "/policies",
        "/institutional",
    ];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem("user");
    const isAdminPage = to.matched.some((record) =>
        record.path.includes("/admin")
    );
    const isColaboratorPage = to.matched.some((record) =>
        record.path.includes("/colaborator")
    );

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired) {
        if (!loggedIn) {
            next("/login");
        } else {
            const user = JSON.parse(loggedIn);

            if (
                to.path === "/login" ||
                (isAdminPage && !user.roles.includes("ROLE_ADMIN")) ||
                (isColaboratorPage && !user.roles.includes("ROLE_COLABORATOR"))
            ) {
                next("/dashboard");
            } else {
                next();
            }
        }
    } else {
        next();
    }
});

export default router;
