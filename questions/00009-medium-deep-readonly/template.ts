// never 是一个特殊的联合类型，非对象T如果用keyof T extends never 就相当于一个空的联合类型是否能继承never
type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [K in keyof T]: DeepReadonly<T[K]> }

// type DeepReadonly<T> = T extends object ? { readonly [K in keyof T]: DeepReadonly<T[K]> } : T
