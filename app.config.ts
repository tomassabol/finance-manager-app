import type { ConfigContext, ExpoConfig } from "expo/config";
import { getPackageJson } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "finance-manager-app",
  slug: "finance-manager-app",
  version: getPackageJson(__dirname).version,
  orientation: "portrait",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      backgroundColor: "#ffffff",
    },
  },
  web: {
    bundler: "metro",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    "expo-font",
  ],
  experiments: {
    reactServerFunctions: true,
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    eas: {
      projectId: "",
    },
  },
});
