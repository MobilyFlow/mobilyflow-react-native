/**
 * Cleans up app-level generated files from ios/generated/ after bob build.
 *
 * Since RN 0.83+, bob's codegen target generates app-level files
 * (ReactAppDependencyProvider, RCTModuleProviders, etc.) alongside the
 * SDK's own spec files. These app-level files cause build conflicts when
 * the SDK is consumed via workspace symlink in a monorepo, because the
 * podspec glob (ios/**\/*.{h,m,mm,swift}) picks them up.
 *
 * Only the SDK's own codegen output (RNMobilyflowReactNativeSdkSpec*)
 * should be kept.
 */
const fs = require("fs");
const path = require("path");

const generatedDir = path.join(__dirname, "..", "ios", "generated");

if (!fs.existsSync(generatedDir)) {
  process.exit(0);
}

// Remove top-level non-ReactCodegen directories and files
for (const entry of fs.readdirSync(generatedDir)) {
  if (entry !== "ReactCodegen") {
    fs.rmSync(path.join(generatedDir, entry), { recursive: true });
  }
}

// Inside ReactCodegen, keep only SDK-specific files (RNMobilyflow*)
const reactCodegenDir = path.join(generatedDir, "ReactCodegen");
if (fs.existsSync(reactCodegenDir)) {
  for (const entry of fs.readdirSync(reactCodegenDir)) {
    if (!entry.startsWith("RNMobilyflow")) {
      fs.rmSync(path.join(reactCodegenDir, entry), { recursive: true });
    }
  }
}
