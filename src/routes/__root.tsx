import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWidgets } from "@/components/site/FloatingWidgets";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-2xl font-display text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-flex mt-6 btn-gradient rounded-full px-6 py-2.5 text-sm font-semibold">
          Return home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingWidgets />
    </ThemeProvider>
  );
}
