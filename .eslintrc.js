module.exports = {
  root: true, // 意思是到头啦，不要再向上找了
  env: {
    // 代码将会在哪些环境中运行。每个环境都附带了一组特定的预定义全局变量，如 browser 中有 window，document等，添加后可以直接在代码中使用，而不报错。
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-typescript/base', // 使用airbnb风格
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['import'],
  parserOptions: {
    project: './tsconfig.json', // 要在tsconfig中设置编译的版本
  },
  rules: {
    'max-len': ['error', { code: 160 }], // 单行最大160个字符
  },
};
