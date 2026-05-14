import { ComponentLoader } from 'adminjs';
const componentLoader = new ComponentLoader();
componentLoader.override("Login", './components/CustomLogin');
export const Components = {
    Dashboard: componentLoader.add('Dashboard', './components/Dashboard'),
    AvatarRenderer: componentLoader.add('AvatarRenderer', './components/AvatarRenderer'),
    EmailLinkRenderer: componentLoader.add('EmailLinkRenderer', './components/EmailLinkRenderer'),
    StatusBadgeRenderer: componentLoader.add('StatusBadgeRenderer', './components/StatusBadgeRenderer'),
    RoleBadgeRenderer: componentLoader.add('RoleBadgeRenderer', './components/RoleBadgeRenderer'),
    UserShow: componentLoader.add('UserShow', './components/UserShow'),
    UserEdit: componentLoader.add('UserEdit', './components/UserEdit'),
    ConfirmUserAction: componentLoader.add('ConfirmUserAction', './components/ConfirmUserAction'),
    CourseShow: componentLoader.add('CourseShow', './components/CourseShow'),
    PostShow: componentLoader.add('PostShow', './components/PostShow'),
    UniversityShowChildren: componentLoader.add('UniversityShowChildren', './components/UniversityShowChildren'),
    FacultyShowChildren: componentLoader.add('FacultyShowChildren', './components/FacultyShowChildren'),
    DepartmentShowChildren: componentLoader.add('DepartmentShowChildren', './components/DepartmentShowChildren'),
    FieldShowChildren: componentLoader.add('FieldShowChildren', './components/FieldShowChildren'),
    GroupedLevelsSelect: componentLoader.add("GroupedLevelsSelect", "./components/GroupedLevelsSelect"),
    CustomFieldOptionSelect: componentLoader.add("CustomFieldOptionSelect", "./components/CustomFieldOptionSelect"),
    ModuleShow: componentLoader.add("ModuleShow", "./components/ModuleShow")
};
export default componentLoader;
