# home-page

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## 问题

1. **padding，margin，font-size 等属性的单位怎么取？px？rem？考虑大屏小屏的 px 取值不一样**
2. **怎样自定义 class? 尝试@apply 无效**
3. 某元素的 class 写的太多太长是否会影响阅读，有无代码规范 (自定义类可解决)
4. 像 color，background-color 等属性是否使用 tailwind 的功能类 (自定义类可解决)
5. 各个断点的阈值 phone 竖屏, phone 横屏, ipad 竖屏, ipad 横屏, pc 等宽度范围是否给定
6. component 的文件位置问题, 能否手动 import component
