import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

function Layout(props) {
  return (
    <div>
      <ToastContainer />
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
