type MyCapitalize<S extends string> = S extends `${infer s}${infer R}` ? `${Uppercase<s>}${R}` : S

// 但是不能通过这个测试 Expect<Equal<MyCapitalize<''>, ''>>
// 还是需要有一个26个字母对照大小写的map才行
