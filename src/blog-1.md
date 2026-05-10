In typeScript both   "any" and "unknown" are used to handle values with uncertain types.  they work very differently. 

The  "any" type disables TypeScript type checking. which is why it is often called a “type safety hole.”

But "unknown" forces you to perform type checks before using the value, which makes it safer than  "any".

Type narrowing is the process of changing a broad type into a more specific type using checks like typeof or conditions, so TypeScript can safely use the value.