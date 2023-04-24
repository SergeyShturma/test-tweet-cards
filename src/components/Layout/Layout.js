import { Suspense } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

import Loader from 'components/Loader';
import { ReturnBtn } from 'components/ReturnBtn/ReturnBtn';
import s from 'components/Layout/Layout.module.css';

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <header className={s.header}>
        <p>Tweets App</p>
        {pathname === '/tweets' ? (
          <div className={s.wrapper}>
            <iframe
              title="Fun"
              className={s.gif}
              src="https://giphy.com/embed/XGhTPVMgzLv7s2TOE6"
              alt="gif"
            ></iframe>
            <ReturnBtn to={'/'} />
          </div>
        ) : (
          <NavLink className={s.link} to={'/tweets'}>
            To tweets!
          </NavLink>
        )}
      </header>
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
