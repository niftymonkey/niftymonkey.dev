import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // The design handoff bundle. Reference material, never source: its
    // prototypes ship a review-only runtime that must not reach the app.
    "tmp/**",
    // Session scratch and git worktree checkouts: whole copies of the repo,
    // not source to lint. Their contents are linted in their own trees.
    ".claude/**",
  ]),
]);

export default eslintConfig;
