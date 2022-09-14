# ui-lib-template
react storybook rollup ui lib template

## Tutorial

### Init Package

```bash
npm init -y
```


### Setup dependencies

```bash
npm install --save-dev react react-dom typescript @types/react postcss
```

### Add peer dependencies

```json
"peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

### Init typescript

```bash
npx tsc --init
```

and change the `tsconfig.json` to

```json
{
   "compilerOptions": {
      "jsx": "react",
      "target": "es2016",
      "outDir": "dist",
      "allowJs": true,
      "skipLibCheck": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "module": "ES2020",
      "allowSyntheticDefaultImports": true,
      "moduleResolution": "Node",
      "declaration": true,
      "declarationDir": "dist"
   },
   "include": [
      "stories"
   ]
}
```

### Init storybook

```bash
npx sb init
```

### Bundling

```bash
npm i --save-dev rollup 
```

and all the plugin you need to install

```json
{
    "@rollup/plugin-babel": "^5.3.1",
    "@rollup/plugin-commonjs": "^22.0.2",
    "@rollup/plugin-node-resolve": "^14.1.0",
    "@rollup/plugin-replace": "^4.0.0",
    "rollup-plugin-analyzer": "^4.0.0",
    "rollup-plugin-peer-deps-external": "^2.2.4",
    "rollup-plugin-postcss": "^4.0.2",
    "rollup-plugin-typescript2": "^0.34.0",
    "rollup-plugin-uglify": "^6.0.4",
    "rollup-plugin-visualizer": "^5.8.1",
}
```

copy the `rollup.config.js`

### Export you lib

create entry point file `index.ts`

```
// Export all your components below
import { Button } from './stories/Button'
export { Button }
```

### Bundle

Add new command to your `package.json` file

```json
{
"buildLib": "rollup -c"
}
```

### Publish

At this moment, you're good to publish your package to npm.

Please remember to change you package public by `npm publish --access=public`

Then add a namespace to your package `@yourname/ui-lib`
