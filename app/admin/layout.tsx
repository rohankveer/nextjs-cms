import Authenticated from "../../components/common/Authenticated";
import BrandLogo from "../../components/common/BrandLogo";
import SideMenu from "../../components/common/SideMenu";
import SideMenuItem from "../../components/common/SideMenuItem";
import LogoPic from '../../public/logo.webp';
import { HomeIcon, NewspaperIcon, UsersIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import AppBar from "../../components/common/AppBar";
import { AppBarContextProvider } from "../../components/common/AppBar/AppBarContext";

export default function AdminLayout({ children }: {
  children: React.ReactNode;
}) {
  // Get current route name
  const routeName = '/admin';
  return (
    <Authenticated redirectTo="/error">
      <SideMenu>
        <BrandLogo title="NextJs CMS" src={LogoPic} />
        <SideMenuItem title="Dashboard" linkTo={`${routeName}/dashboard`} icon={<HomeIcon className="h-6 w-6" />} />
        <SideMenuItem title="Posts" linkTo={`${routeName}/posts`} icon={<NewspaperIcon className="h-6 w-6" />} />
        <SideMenuItem title="Users" linkTo={`${routeName}/users`} icon={<UsersIcon className="h-6 w-6" />} />
        <SideMenuItem title="Settings" linkTo={`${routeName}/settings`} icon={<WrenchScrewdriverIcon className="h-6 w-6" />} />
      </SideMenu>
      <div className="cms-right-section w-5/6" data-test={routeName}>
        <AppBarContextProvider>
          <AppBar />
        </AppBarContextProvider>
        <div>
          {children}
        </div>
      </div>
    </Authenticated>
  );
}