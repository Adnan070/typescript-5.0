function routes<T>(routes: T[]) {
  const addRedirect = (from: T, to: T) => {
    // Implementation
  };

  return {
    addRedirect,
  };
}

const router = routes<string>(["/user", "/post", "/admin/users"]);

router.addRedirect("/adminasdfa", "/users");
