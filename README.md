# 感想

前端项目的开发一般可采用 model->view->control->view的流程开发
+ model, dva的model可以很方便的构建成数据库的表结构，定义3类reducer实现增删改，利用filter实现查询，利用effect 加载server端的数据
+ view 先实现一个最小可行view，不考虑美观程度，方便对之后的调试
+ control 定义一些实现实现数据的更改，view的变化
+ view 