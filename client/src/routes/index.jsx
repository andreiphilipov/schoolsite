import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import TableEdit from "../views/TableList/TableEdit.js";

const indexRoutes = [
    { path: "/", component: Dashboard },
    { path: "/edit/:id", component: TableEdit }
];

export default indexRoutes;
