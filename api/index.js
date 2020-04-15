import * as User from './users';
import * as AsideMenu from './aside-menu';
import * as ToolbarMenu from './toolbar-menu';
import * as ToolbarMessage from './toolbar-message';
import * as ToolbarNotification from './toolbar-notification';
import * as ContentBreadcrumbs from './content-breadcrumbs';
import * as Project from './projects';
import * as TenagaAhli from './tenaga-ahli';

export default {
    getUsers: User.getUsers,
    getProjectsHeader: Project.getHeader,
    getProjects: Project.getProjects,
    getUserById: User.getUserById,
    getMenuItems: AsideMenu.getMenuItems,
    getToolbarMenuItems: ToolbarMenu.getToolbarMenuItems,
    getToolbarMessageItems: ToolbarMessage.getToolbarMessageItems,
    getToolbarNotification: ToolbarNotification.getToolbarNotification,
    getBreadcrumbsList: ContentBreadcrumbs.getBreadcumbsList,
    getTaHeader: TenagaAhli.getHeader,
    getTenagaAhli: TenagaAhli.getItems,
}
