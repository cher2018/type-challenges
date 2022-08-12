type space = '\n' | '\t' | ' '

type Trim<S extends string> = S extends `${infer R}${space}` | `${space}${infer R}` ? Trim<R> : S
