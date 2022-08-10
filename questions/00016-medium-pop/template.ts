type Pop<T extends any[]> = T extends [...infer F, any] ? F : never
