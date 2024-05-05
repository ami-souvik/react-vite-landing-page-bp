import React, { createContext, useContext, useEffect, useState } from 'react';

export const RouterContext = createContext({
  state: {
    href: '/',
  },
  navigate: () => {},
});

export const useRouter = () => {
  return useContext(RouterContext);
};

export const RouterProvider = ({ href = '/', children }) => {
  const [state, setState] = useState({ href });
  onpopstate = (e) => setState(e.state);
  window.addEventListener('popstate', onpopstate);
  const navigate = (href) => {
    window.history.pushState({ href }, '', window.location.protocol + '//' + window.location.host + href);
    setState({ href });
  };
  useEffect(() => {
    setState({ href: window.location.pathname });
  }, []);
  return <RouterContext.Provider value={{ state, navigate }}>{children}</RouterContext.Provider>;
};

export const Routes = ({ children }) => {
  const { state } = useRouter();
  let thisElement = null;
  const matchRoute = (path) => {
    return path === window.location.pathname;
  };
  React.Children.forEach(children, (element, index) => {
    if (element?.props?.path && matchRoute(element.props.path)) {
      thisElement = element;
    }
  });
  if (thisElement?.props?.href) {
    thisElement.props.href = state.href;
  }
  return thisElement;
};

export const Route = ({ path, element }) => {
  if (path === window.location.pathname) {
    return element;
  }
  return <></>;
};
