## 基本工具
* 安装[Node](https://nodejs.org/en/download) __推荐LTS版本__

## Android开发配置
* 安装[Android Studio](https://developer.android.com/studio/)
  - macOS: 添加`~/Library/Android/sdk/platform-tools`到`$PTAH`环境变量
  - Windows: 添加`C:\Users\USERNAME\AppData\Local\Android\sdk\platform-tools`到`%PATH%`环境变量 __盘符和用户名根据实际情况__

* 安装[Amazon Corretto JDK 17](https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/downloads-list.html)
  - macOS: 设置`JAVA_HOME`环境变量为`/Library/Java/JavaVirtualMachines/amazon-corretto-17.jdk/Contents/Home`
  - Windows: 设置`JAVA_HOME`环境变量为`C:\Program Files\Amazon Corretto\jdk17.0.14_7` __盘符和版本号根据实际情况__

## iOS开发配置
* 安装[XCode](https://itunes.apple.com/cn/app/xcode/id497799835?l=en&mt=12)
* 安装[cocoapods](https://github.com/CocoaPods/CocoaPods)：`sudo gem install cocoapods`