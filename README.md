# Vue 3 + TypeScript + Vite + Pinia + router + axios + Element Plus

国际化时如果安装了^2.3.8上的高版本或找不到包，解决方法：
需要在vite-env.d.ts加入
declare module "element-plus/dist/locale/zh-cn.mjs"
main.ts 中
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
若仍然有问题，修改为如下引用
import zhCn from "element-plus/es/locale/lang/zh-cn"

参考：
https://blog.csdn.net/qq_44423029/article/details/126378199
