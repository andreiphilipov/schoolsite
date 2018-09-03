// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import addschool from "views/addschool/addschool.jsx";
import inputschoolPage from "views/inputschool/inputschool.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/addschool",
    sidebarName: "AddSchool",
    navbarName: "Add School",
    icon: LibraryBooks,
    component: addschool
  },
  {
    path: "/inputschool",
    sidebarName: "Input Data",
    navbarName: "Input Data",
    icon: LibraryBooks,
    component: inputschoolPage
  },  

  { redirect: true, path: "/dashboard", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
