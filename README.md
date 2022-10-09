# eslint-plugin-goztrk

Install with npm >5
```bash
npx install-peerdeps --dev eslint-plugin-goztrk
```

Create `.eslintrc.js` in your root folder

```javascript
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  extends: [
    'plugin:goztrk/base'
  ],
};
```

## Configs
### `base`
Base plugin with `airbnb` rules

### `typescript`
Typescirpt support
