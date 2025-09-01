import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['img.clerk.com'],
  },
  /* config options here */
};

export default withSentryConfig(nextConfig, {
  org: "gaveen-amarasinghe",
  project: "saas-app",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  disableLogger: true,
  automaticVercelMonitors: true
});