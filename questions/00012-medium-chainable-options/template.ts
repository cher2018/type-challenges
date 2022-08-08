type Chainable<T = {}> = {
  option: <K extends string, V>(key: K extends keyof T
    ? V extends T[K] ? never : K
    : K,
    value: V) => Chainable<Omit<T, K> & Record<K, V>>
  get: () => T
}

// 详细解析看这里 https://github.com/type-challenges/type-challenges/issues/13951
// 知识点：
// 1. 使用 T = {} 作为默认值
// 2. 通过递归传递Chainable<T>可实现递归全局记录
// 3. 注意第三个例子，相同key值的时候需要替换value值
