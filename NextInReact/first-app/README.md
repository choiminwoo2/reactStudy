## Next.js
-----------------

## React FC란
```typescript
type FC<P = {}> = FunctionComponent<P>;

interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P> | undefined;
  contextTypes?: ValidationMap<any> | undefined;
  defaultProps?: Partial<P> | undefined;
  displayName?: string | undefined;
}
```
FunctionCompnent와 동일하게 사용하는 것을 볼 수 있다.  
필수로 받는 인자는 PropsWithChildren



## React.FC를 사용을 줄여야 하는 이유
----------------

