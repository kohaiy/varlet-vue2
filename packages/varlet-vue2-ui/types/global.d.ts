declare module 'vue' {
  export interface GlobalComponents {
    VarButton: typeof import('@varlet-vue2/ui')['_ButtonComponent']
    VarLazy: typeof import('@varlet-vue2/ui')['_LazyComponent']
    VarLocale: typeof import('@varlet-vue2/ui')['_LocaleComponent']
    VarSkeleton: typeof import('@varlet-vue2/ui')['_SkeletonComponent']
  }
}

export {}
