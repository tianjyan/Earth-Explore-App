# Earth Explore App

这是一个基于 **Expo** 和 **React Native** 开发的移动应用，通过 WebView 加载展示 [Earth Explore](https://zhang-fulin.github.io/Earth-Explore) 网站。

## 技术栈

- Expo
- React Native
- EAS (Expo Application Services)

## 安装与运行

1. 克隆项目：

   ```bash
   git clone https://your-repo-url.git
   cd your-project-folder
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

3. 启动项目（开发调试）：

   ```bash
   npx expo start
   ```

4. 构建应用（使用 EAS）：

   ```bash
   npm install -g eas-cli

   # Sign up for an Expo account.
   # Run the following command in your terminal to log in to the EAS CLI:
   eas login

   eas build --platform android --profile development | preview
   ```

使用 Expo Go 扫码预览，或者使用 EAS 构建正式安装包