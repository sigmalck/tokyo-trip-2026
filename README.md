# Tokyo 2026 Trip Plan

这个目录现在包含一个 GitHub Pages 友好的静态展示页：

- `index.html`：页面结构和行程内容
- `assets/styles.css`：视觉样式、地铁/铁路路线条和响应式布局
- `assets/app.js`：日期筛选和打印按钮
- `.nojekyll`：让 GitHub Pages 按静态文件直接发布

页面刻意没有展示手机号、邮箱、预约号和酒店联系电话，适合公开链接分享。

## 本地预览

```bash
python3 -m http.server 4173
```

然后打开：

```text
http://localhost:4173
```

## GitHub Pages 发布

1. 新建一个 GitHub repository。
2. 把本目录内容 push 到仓库默认分支。
3. 在 GitHub 仓库进入 `Settings -> Pages`。
4. `Build and deployment` 选择 `Deploy from a branch`。
5. Branch 选择默认分支，目录选择 `/root`。

发布后，GitHub 会给出一个 `https://<user>.github.io/<repo>/` 链接。
