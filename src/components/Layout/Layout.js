import { Suspense } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import s from 'components/Layout/Layout.module.css';
import Loader from 'components/Loader';

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <header className={s.header}>
        <p>Tweets App</p>
        {pathname === '/tweets' ? (
          ''
        ) : (
          <NavLink className={s.link} to={'/tweets'}>
            To tweets!
          </NavLink>
        )}
      </header>

      {/* <header className={s.header}>
        <p>Tweets</p>
        <NavLink className={s.link} to={'/tweets'}>
          To tweets!
        </NavLink>
      </header> */}
      <main>
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};
