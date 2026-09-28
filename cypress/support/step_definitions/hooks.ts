import { Before } from "@badeball/cypress-cucumber-preprocessor";
import { cookieBanner } from "../pages/components/CookieBanner";

// Precondition "cookie banner is closed" for every scenario except the cookie banner test itself
Before({ tags: "not @TC-2" }, () => {
  cookieBanner.acceptOnce();
});
