//   神兽护体
//   ┏┓       ┏┓
//  ┏┛┻━━━━━━━┛┻┓
//  ┃           ┃
//  ┃     ━     ┃
//  ┃  ┳┛   ┗┳  ┃
//  ┃           ┃
//  ┃```  ┻  ```┃
//  ┃           ┃
//  ┗━┓      ┏━━┛
//    ┃      ┃   Code is far away from bug with the animal protecting.
//    ┃      ┃   神兽护佑,代码无bug.
//    ┃      ┗━━━┓
//    ┃          ┣┓
//    ┃          ┏┛
//    ┗┓┓┏━━┳┓┏━━┛
//     ┃┫┫  ┃┫┫
//     ┗┻┛  ┗┻┛

import * as Router from 'koa-router';
const router = new Router();
// import { initController } from '../api/Admin';
// import render from '../serverRender';
// const router = initController();

// export default async (ctx, next) => {
// //   if (ctx.path.match(/^\/admin/)) {
// //     return await router.routes()(ctx, next);
// //   }
// //   console.log('访问链接', ctx);
//   return await render(ctx, next);
// };
router.get('/', (ctx, next)=>{
    ctx.body = 'test!';
})
export default router;