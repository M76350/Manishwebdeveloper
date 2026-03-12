import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { usePageSEO } from "@/hooks/use-page-seo";

const NotFound = () => {
  const location = useLocation();

  usePageSEO({
    title: "Page Not Found | Manish Kumar Web Developer (Bihar)",
    description:
      "The page you are looking for does not exist on Manish Kumar's web developer portfolio site. Browse projects, experience or contact from Bihar, India.",
    keywords: ["404 page", "Manish Kumar web developer", "Bihar web developer portfolio"]
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
