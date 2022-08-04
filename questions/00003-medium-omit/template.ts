type MyOmit<T, K extends keyof T> = { [U in Exclude<keyof T, K>]: T[U] }
