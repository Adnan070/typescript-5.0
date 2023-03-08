const routes = <T>(routes: T[]) => {
  const addRedirect = (from: T, to: T) => {
    // Implementation
  };

  return {
    addRedirect,
  };
};

const router = routes(["/user", "/post", "/admin/users"]);

router.addRedirect("/adminasdfa", "/users");
