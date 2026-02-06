import {shortcuts, shortcutsSearch, shortcutsService, shortcutsVersions} from "@/shared/consts/enums/shortcuts.enum";

export type ShortcutsType = typeof shortcuts[keyof typeof shortcuts];

export type ShortcutsServiceType = typeof shortcutsService[keyof typeof shortcutsService];

export type ShortcutsSearchType = typeof shortcutsSearch[keyof typeof shortcutsSearch];

export type ShortcutsVersionsType = typeof shortcutsVersions[keyof typeof shortcutsVersions];

type AllShortcuts =
    | ShortcutsType
    | ShortcutsServiceType
    | ShortcutsSearchType
    | ShortcutsVersionsType;

type Combine<A extends string, B extends string> =
    `${A}/${B}` | `/${A}/${B}` | `${A}+${B}`;

type RecursiveCombine<
    T extends string,
    Acc extends string = never
> =
    | Acc
    | T
    | (T extends infer U extends string
    ? RecursiveCombine<
        Exclude<T, U>,
        Acc extends never ? U : Combine<Acc, U>
    >
    : never);

export type CascadeShortcutsType =
    | `${RecursiveCombine<AllShortcuts>}`
    | (string & {});