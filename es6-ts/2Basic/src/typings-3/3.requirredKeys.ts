import { OptionalKeys } from "./1.OptionalKeys";

export type RequiredKeys<T extends object> = Exclude<keyof T, OptionalKeys<T>>;
type a1 = RequiredKeys<{
  foo: number | undefined;
  bar?: string;
  flag: boolean;
}>; // foo|flag
type a2 = RequiredKeys<{ foo: number; bar?: string }>; // foo
type a3 = RequiredKeys<{ foo: number; flag: boolean }>; // foo|flag
type a4 = RequiredKeys<{ foo?: number; flag?: boolean }>; // never
type a5 = RequiredKeys<{}>; // never

export {};
