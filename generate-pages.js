const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "pages");
const routerFile = path.join(__dirname, "src", "router.jsx");

const routes = [

  // Public & Marketing
  "/", "about", "contact", "faq", "careers", "press", "investors", "affiliate", "how-it-works", "mobile-app",
  "blog", "blog/[slug]", "destinations", "destinations/[city]",
  "top-cities", "top-hotels", "top-restaurants", "luxury-stays", "budget-stays", "family-stays",
  "business-travel", "romantic-getaways", "deals", "seasonal-offers", "gift-cards", "refer-earn",
  "terms", "privacy", "cookies", "refund-policy", "sitemap", "404", "500", "maintenance", "coming-soon",

  // Authentication
  "login", "register", "vendor-register", "admin-login",
  "forgot-password", "reset-password", "verify-email", "2fa",
  "resend-verification", "change-password", "update-email",
  "delete-account", "account-locked", "reactivate-account",
  "social-login", "otp-login", "success", "error", "logout",
  "security-alert",

  // Hotels
  "hotels", "hotels/search", "hotels/filter", "hotels/map",
  "hotels/compare", "hotels/wishlist", "hotels/trending",
  "hotels/new", "hotels/popular", "hotels/top-rated",
  "hotels/deals", "hotels/luxury", "hotels/budget",
  "hotels/family", "hotels/business", "hotels/[id]",
  "hotels/[id]/rooms", "hotels/[id]/gallery",
  "hotels/[id]/reviews", "hotels/[id]/amenities",
  "hotels/[id]/policies", "hotels/[id]/location",
  "hotels/[id]/availability", "hotels/[id]/faq",
  "hotels/[id]/nearby", "hotels/[id]/similar",
  "hotels/[id]/offers", "hotels/[id]/host",
  "hotels/[id]/contact", "hotels/[id]/report",

  "hotels/filter/price", "hotels/filter/rating", "hotels/filter/location",
  "hotels/filter/amenities", "hotels/filter/type", "hotels/filter/deals",
  "hotels/filter/popular", "hotels/filter/trending", "hotels/filter/new",

  // Restaurants
  "restaurants", "restaurants/search", "restaurants/filter",
  "restaurants/map", "restaurants/top-rated", "restaurants/trending",
  "restaurants/deals", "restaurants/luxury", "restaurants/family",
  "restaurants/[id]", "restaurants/[id]/menu", "restaurants/[id]/gallery",
  "restaurants/[id]/reviews", "restaurants/[id]/booking",
  "restaurants/[id]/location", "restaurants/[id]/offers",
  "restaurants/[id]/similar", "restaurants/[id]/faq",
  "restaurants/[id]/contact", "restaurants/[id]/report",

  "restaurants/filter/cuisine", "restaurants/filter/price",
  "restaurants/filter/rating", "restaurants/filter/location",
  "restaurants/filter/deals", "restaurants/filter/popular",
  "restaurants/filter/new", "restaurants/filter/trending",
  "restaurants/filter/open-now", "restaurants/filter/family",

  // Booking Flow
  "booking/select-room", "booking/guest-details", "booking/add-ons",
  "booking/payment", "booking/review", "booking/confirmation",
  "booking/success", "booking/failed", "booking/cancel",
  "booking/modify", "booking/invoice", "booking/history",
  "booking/apply-coupon", "booking/select-insurance",
  "booking/upgrade-room", "booking/special-request",
  "booking/payment-method", "booking/summary", "booking/refund-status",

  "table/select-date", "table/select-time", "table/guest-info",
  "table/confirmation",

  // User Dashboard
  "user/dashboard", "user/profile", "user/edit-profile",
  "user/bookings", "user/past-bookings", "user/upcoming-bookings",
  "user/cancelled-bookings", "user/wishlist", "user/payments",
  "user/invoices", "user/reviews", "user/messages",
  "user/notifications", "user/security", "user/2fa",
  "user/delete-account", "user/settings", "user/preferences",
  "user/rewards", "user/referrals", "user/support-tickets",
  "user/report-issue", "user/travel-history", "user/saved-cards",
  "user/activity-log",

  // Vendor Dashboard
  "vendor/dashboard", "vendor/properties", "vendor/add-property",
  "vendor/edit-property", "vendor/rooms", "vendor/bookings",
  "vendor/revenue", "vendor/analytics", "vendor/reviews",
  "vendor/messages", "vendor/offers", "vendor/payouts",
  "vendor/settings", "vendor/profile", "vendor/support",

  // Admin Panel
  "admin/dashboard", "admin/users", "admin/vendors", "admin/hotels",
  "admin/restaurants", "admin/bookings", "admin/payments",
  "admin/reviews", "admin/reports", "admin/analytics",
  "admin/coupons", "admin/cms", "admin/blog", "admin/support",
  "admin/settings", "admin/roles", "admin/permissions",
  "admin/activity-logs", "admin/notifications", "admin/system-health",

  // Support & CMS
  "support", "support/ticket", "support/chat", "support/faq",
  "support/guides", "cms/pages", "cms/edit-page", "cms/media",
  "cms/blog-editor", "cms/categories", "cms/tags",
  "cms/comments", "cms/seo", "cms/banners", "cms/announcements"
];

const imports = [];
const routeElements = [];

function toComponentName(route) {
  if (route === "/") return "Home";

  return route
    .replace(/\[|\]/g, "")
    .split("/")
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

function toRouterPath(route) {
  if (route === "/") return "/";
  return "/" + route.replace(/\[(.*?)\]/g, ":$1");
}

function createPage(route) {

  const parts = route === "/" ? ["home"] : route.split("/");
  const cleanParts = parts.map(p => p.replace(/\[|\]/g, ""));

  const dirPath = path.join(baseDir, ...cleanParts);
  fs.mkdirSync(dirPath, { recursive: true });

  const filePath = path.join(dirPath, "Page.jsx");

  const componentName = toComponentName(route);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(
      filePath,
`const ${componentName} = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>${route === "/" ? "Home Page" : route}</h1>
    </div>
  )
}

export default ${componentName};
`
    );
  }

  const importPath =
    "./pages/" + (route === "/" ? "home" : cleanParts.join("/")) + "/Page";

  imports.push(`import ${componentName} from "${importPath}";`);

  routeElements.push(
    `<Route path="${toRouterPath(route)}" element={<${componentName} />} />`
  );
}

routes.forEach(createPage);

const routerContent = `
import { BrowserRouter, Routes, Route } from "react-router-dom";
${imports.join("\n")}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        ${routeElements.join("\n        ")}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
`;

fs.writeFileSync(routerFile, routerContent);

console.log("✅ 200+ JSX Pages + Router Generated Successfully!");
