"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, unknown> }
    ) => void;
  }
}

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (pathname) {
      // Track page views for both analytics platforms
      trackPageView(pathname);
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Vercel Analytics */}
      <VercelAnalytics />

      {/* Google Analytics */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `}
          </Script>
        </>
      )}

      {/* Plausible Analytics with custom events */}
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}

// Analytics tracking helpers
function trackPageView(url: string) {
  // Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
      page_path: url,
    });
  }

  // Plausible
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible("pageview");
  }
}

// Custom event tracking
export function trackEvent(
  eventName: string,
  properties?: Record<string, unknown>
) {
  // Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, properties);
  }

  // Plausible
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(eventName, { props: properties });
  }
}

// Predefined tracking functions for common actions
export const track = {
  // Form submissions
  formSubmit: (formName: string, success: boolean) => {
    trackEvent("form_submit", { form_name: formName, success });
  },

  // CTA clicks
  ctaClick: (ctaName: string, location: string) => {
    trackEvent("cta_click", { cta_name: ctaName, location });
  },

  // Downloads
  download: (fileName: string, fileType: string) => {
    trackEvent("download", { file_name: fileName, file_type: fileType });
  },

  // External links
  externalLink: (url: string, linkText: string) => {
    trackEvent("external_link", { url, link_text: linkText });
  },

  // Video interactions
  videoPlay: (videoName: string) => {
    trackEvent("video_play", { video_name: videoName });
  },

  videoPause: (videoName: string) => {
    trackEvent("video_pause", { video_name: videoName });
  },

  // Navigation
  navClick: (destination: string) => {
    trackEvent("nav_click", { destination });
  },

  // Social shares
  socialShare: (platform: string, url: string) => {
    trackEvent("social_share", { platform, url });
  },

  // Email signups
  emailSignup: (location: string) => {
    trackEvent("email_signup", { location });
  },

  // Resource views
  resourceView: (resourceName: string, category: string) => {
    trackEvent("resource_view", { resource_name: resourceName, category });
  },

  // Chapter interactions
  chapterView: (chapterName: string) => {
    trackEvent("chapter_view", { chapter_name: chapterName });
  },

  chapterApply: () => {
    trackEvent("chapter_apply");
  },
};


