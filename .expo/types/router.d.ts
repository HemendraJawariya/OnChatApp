/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(add-friends)` | `/(add-friends)/add-friends` | `/(auth)` | `/(auth)/confirm-otp` | `/(auth)/reset` | `/(auth)/reset-password` | `/(auth)/signin` | `/(auth)/signup` | `/(tab)` | `/(tab)/chat` | `/(tab)/profile` | `/(tab)/request` | `/_sitemap` | `/add-friends` | `/chat` | `/confirm-otp` | `/profile` | `/request` | `/reset` | `/reset-password` | `/signin` | `/signup`;
      DynamicRoutes: `/message/${Router.SingleRoutePart<T>}` | `/profile/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/message/[chatId]` | `/profile/[userId]`;
    }
  }
}
