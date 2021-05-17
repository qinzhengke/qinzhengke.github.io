var cpp =
[
    [ "C++构建报错合集", "cpp_build_errors.html", [
      [ "编译篇", "cpp_build_errors.html#编译篇", [
        [ "No rule to make xxx.cpp 或者 xxx.so", "cpp_build_errors.html#no_rule_to_make", null ],
        [ "passing ‘const xxx’ as ‘this’ argument discards qualifiers", "cpp_build_errors.html#discards_qualifiers", null ]
      ] ],
      [ "will always overflow destination buffer.", "cpp_build_errors.html#memcpy_overflow", null ],
      [ "Attempting to refer a deleted function", "cpp_build_errors.html#ref_deleted_func", [
        [ "Template with C linkage", "cpp_build_errors.html#template_c_linkage", null ]
      ] ],
      [ "request for member xxx in something not a structure or union", "cpp_build_errors.html#request_for_member", [
        [ "extra qualification", "cpp_build_errors.html#extra_qualification", null ],
        [ "Error: Jump to case label.", "cpp_build_errors.html#error_jump_to_case_label", null ],
        [ "error: new types may not be defined in a return type", "cpp_build_errors.html#cpp_comp_issue_01", null ],
        [ "undefined reference to `vtable for xxx'", "cpp_build_errors.html#undefined_vtable", null ],
        [ "'xxx' does not name a type", "cpp_build_errors.html#does_not_name_type", null ],
        [ "error: expected class-name before ‘{’ token", "cpp_build_errors.html#expect_class_name", null ],
        [ "error: invalid new-expression of abstract class type ‘xxx’", "cpp_build_errors.html#invalid_new_abstract", null ],
        [ "error: invalid operands of types ‘<unresolved overloaded function type>’ and ‘int’ to binary ‘operator<’", "cpp_build_errors.html#invalid_operand", null ],
        [ "error: request for member ‘x’ in ‘yyy’, which is of non-class type ‘zzz’", "cpp_build_errors.html#non_class_type", null ],
        [ "error: lvalue required as left operand of assignment", "cpp_build_errors.html#lvalue_operand", null ],
        [ "cannot bind non-const lvalue reference of type ‘int&’ to an rvalue of type ‘int’", "cpp_build_errors.html#lvalue_bind", null ],
        [ "error: ‘setX’ was not declared in this scope, and no declarations were found by argument-dependent lookup at the point of instantiation [-fpermissive]", "cpp_build_errors.html#no_declar", null ],
        [ "capture of non-variable <name>", "cpp_build_errors.html#cap_non_var", null ]
      ] ],
      [ "链接篇", "cpp_build_errors.html#链接篇", [
        [ "undefined reference to `xxx'", "cpp_build_errors.html#cpp_undefined_reference", null ],
        [ "error LNK2019: unresolved external symbol \"xxx\"", "cpp_build_errors.html#unresolved_symbol", null ],
        [ "multiple definition of `xxx'", "cpp_build_errors.html#cpp_multiple_def", null ],
        [ "libpthread.so.0: error adding symbols: DSO missing from command line", "cpp_build_errors.html#pthread_dso_missing", null ],
        [ "error 'thread' is not a member of 'boost'", "cpp_build_errors.html#thread_not_member_boost", null ],
        [ "undefined reference to `类名::count'", "cpp_build_errors.html#undefined_static", null ],
        [ "libboost_system.so.1.xx.0: error adding symbols: DSO missing from command line", "cpp_build_errors.html#boost_fs_dso_missing", null ]
      ] ],
      [ "运行篇", "cpp_build_errors.html#运行篇", [
        [ "terminate called after throwing an instance of 'std::bad_alloc'", "cpp_build_errors.html#bad_alloc", null ]
      ] ]
    ] ],
    [ "C++中的修饰符(qualifier)", "cpp_qualifier.html", [
      [ "关键字", "cpp_qualifier.html#extern", [
        [ "引用另外一个文件的变量或者函数", "cpp_qualifier.html#引用另外一个文件的变量或者函数", null ],
        [ "导出C语言模式的函数名", "cpp_qualifier.html#导出C语言模式的函数名", null ]
      ] ]
    ] ],
    [ "面向对象编程（OOP）", "cpp_oop.html", "cpp_oop" ],
    [ "C++的标准库", "cpp_std.html", "cpp_std" ],
    [ "C++模板", "cpp_template.html", "cpp_template" ],
    [ "C++中的STL库", "cpp_stl.html", "cpp_stl" ],
    [ "C++11", "cpp11.html", "cpp11" ],
    [ "设计模式（Design Pattern）", "cpp_design_pattern.html", "cpp_design_pattern" ],
    [ "C++的一些技巧（Idioms）", "cpp_idioms.html", "cpp_idioms" ],
    [ "C++构建常见问题", "cpp_compile_faq.html", [
      [ "系统limit文件报错？", "cpp_compile_faq.html#系统limit文件报错？", null ],
      [ "添加标准头文件就会报错？", "cpp_compile_faq.html#添加标准头文件就会报错？", null ],
      [ "namespace语法错误？", "cpp_compile_faq.html#namespace语法错误？", null ],
      [ "枚举变量++操作不支持？", "cpp_compile_faq.html#enum_plusplus", null ],
      [ "_Bool类型不能用？", "cpp_compile_faq.html#_Bool类型不能用？", null ],
      [ "C语言和C++混用的常见问题？", "cpp_compile_faq.html#c_with_cpp", null ],
      [ "TCHAR问题？", "cpp_compile_faq.html#cpp_TCHAR", null ],
      [ "symbol！", "cpp_compile_faq.html#函数明明存在却报unresolved", null ],
      [ "头文件不要定义变量！", "cpp_compile_faq.html#头文件不要定义变量！", null ],
      [ "在头文件中定义函数一定要使用inline！", "cpp_compile_faq.html#在头文件中定义函数一定要使用inline！", null ],
      [ "临时变量无法引用", "cpp_compile_faq.html#临时变量无法引用", null ],
      [ "passing ... as 'this' argument ...  discards qualifiers", "cpp_compile_faq.html#const_issue", null ],
      [ "类成员函数声明和定义处同时使用static修饰", "cpp_compile_faq.html#类成员函数声明和定义处同时使用static修饰", null ],
      [ "类成员函数声明和定义同时使用默认参数", "cpp_compile_faq.html#类成员函数声明和定义同时使用默认参数", null ]
    ] ],
    [ "C++与C语言混合编程", "cpp_mix_with_c.html", null ],
    [ "C++运行常见问题", "cpp_run_faq.html", [
      [ "::push_back函数中会执行析构函数", "cpp_run_faq.html#vector", null ],
      [ "system()函数工作路径？", "cpp_run_faq.html#system_work_dir", null ],
      [ "设置工作路径", "cpp_run_faq.html#设置工作路径", null ],
      [ "初级错误：sizeof()的用法", "cpp_run_faq.html#typo_sizeof", null ],
      [ "初级错误：移位操作符", "cpp_run_faq.html#初级错误：移位操作符", null ],
      [ "隐藏致命：函数内部malloc或者new", "cpp_run_faq.html#隐藏致命：函数内部malloc或者new", null ],
      [ "隐藏致命：直方图计算出现越界", "cpp_run_faq.html#隐藏致命：直方图计算出现越界", null ],
      [ "debug和release的不要混用！", "cpp_run_faq.html#cpp_debug_release", null ],
      [ "处理三通道图像出错？", "cpp_run_faq.html#处理三通道图像出错？", null ],
      [ "定点化的程序反而更慢？", "cpp_run_faq.html#定点化的程序反而更慢？", null ],
      [ "数据读取出错？", "cpp_run_faq.html#数据读取出错？", null ],
      [ "fabs出错？", "cpp_run_faq.html#fabs出错？", null ],
      [ "加了新功能，然后其他“不相关”模块崩溃？", "cpp_run_faq.html#加了新功能，然后其他“不相关”模块崩溃？", null ],
      [ "ifstream读取数据总是在特定长度出错？", "cpp_run_faq.html#ifstream读取数据总是在特定长度出错？", null ],
      [ "文件总是读写有问题？", "cpp_run_faq.html#文件总是读写有问题？", null ],
      [ "根本无错的地方crash？", "cpp_run_faq.html#根本无错的地方crash？", null ],
      [ "根本无错的地方crash（2）？", "cpp_run_faq.html#根本无错的地方crash（2）？", null ],
      [ "非4整数倍尺寸图像存成bmp文件出错？", "cpp_run_faq.html#非4整数倍尺寸图像存成bmp文件出错？", null ],
      [ "多线程启动函数注意局部变量的使用", "cpp_run_faq.html#多线程启动函数注意局部变量的使用", null ],
      [ "eof函数", "cpp_run_faq.html#ifstream", null ],
      [ "引用不能重新改变对象。", "cpp_run_faq.html#引用不能重新改变对象。", null ],
      [ "运行时出现链接错误？", "cpp_run_faq.html#运行时出现链接错误？", null ]
    ] ],
    [ "C++一些建议", "cpp_suggestion.html", [
      [ "少用全局变量。", "cpp_suggestion.html#少用全局变量。", null ],
      [ "传参的时候变量名不要频繁换马甲", "cpp_suggestion.html#传参的时候变量名不要频繁换马甲", null ],
      [ "如何用驼峰命名法命名大写缩写？", "cpp_suggestion.html#如何用驼峰命名法命名大写缩写？", null ],
      [ "header only模式开发效率低！", "cpp_suggestion.html#header_only", null ]
    ] ],
    [ "C++ debug教训", "cpp_debug.html", [
      [ "企图通过memcpy对象进行拷贝操作。", "cpp_debug.html#企图通过memcpy对象进行拷贝操作。", null ],
      [ "模板定义中的typename和int不要搞混", "cpp_debug.html#模板定义中的typename和int不要搞混", null ],
      [ "cannot bind non-const lvalue reference of type xxx to an rvalue of type xxx.", "cpp_debug.html#lvalue_bind_rvalue", null ],
      [ "dynamic_pointer_cast模板类要正确", "cpp_debug.html#dynamic_poiner_cast_debug", null ],
      [ "　初始化的重要性", "cpp_debug.html#　初始化的重要性", null ],
      [ "定义函数时命名空间使用", "cpp_debug.html#定义函数时命名空间使用", null ]
    ] ],
    [ "Symbol（符号）", "cpp_symbol.html", [
      [ "什么是符号？", "cpp_symbol.html#什么是符号？", null ],
      [ "为什么要了解符号？", "cpp_symbol.html#为什么要了解符号？", null ],
      [ "用什么工具查看符号？", "cpp_symbol.html#用什么工具查看符号？", null ],
      [ "一个空的cc文件对应的symbol", "cpp_symbol.html#一个空的cc文件对应的symbol", null ],
      [ "类成员函数的实现和声明放到一起", "cpp_symbol.html#类成员函数的实现和声明放到一起", null ]
    ] ],
    [ "基于unordered_map的稀疏矩阵的实现", "sparse_matrix.html", [
      [ "unordered_map", "sparse_matrix.html#unordered_map", null ]
    ] ],
    [ "C++面试题", "cpp_questions.html", [
      [ "综合篇", "cpp_questions.html#综合篇", [
        [ "++模块", "cpp_mix_with_c.html#C语言调用C", null ],
        [ "static的用处", "cpp_questions.html#static的用处", null ],
        [ "左值和右值是什么？", "cpp_questions.html#左值和右值是什么？", null ],
        [ "右值引用(&&)是什么？", "cpp_questions.html#cpp_right_ref", null ],
        [ "lambda表达式是什么，怎么使用？", "cpp_questions.html#lambda表达式是什么，怎么使用？", null ]
      ] ],
      [ "模板篇", "cpp_questions.html#模板篇", [
        [ "模板函数是什么，什么时候用？", "cpp_questions.html#模板函数是什么，什么时候用？", null ],
        [ "模板函数能否在cpp文件中定义，为什么？", "cpp_questions.html#模板函数能否在cpp文件中定义，为什么？", null ],
        [ "内存碎片如何生成，怎么处理？", "cpp_questions.html#内存碎片如何生成，怎么处理？", null ]
      ] ],
      [ "多态篇", "cpp_questions.html#多态篇", [
        [ "多态如何实现？", "cpp_questions.html#多态如何实现？", null ],
        [ "虚函数表有多少张？", "cpp_questions.html#虚函数表有多少张？", null ],
        [ "多态模式中子类的析构函数有什么要注意的，为什么？", "cpp_questions.html#多态模式中子类的析构函数有什么要注意的，为什么？", null ]
      ] ],
      [ "STL篇", "cpp_questions.html#STL篇", [
        [ "map和unordered_map如何实现？", "cpp_questions.html#map和unordered_map如何实现？", null ],
        [ "hashmap一种实现结构？", "cpp_questions.html#hashmap一种实现结构？", null ],
        [ "多线程要注意什么，要怎么做？", "cpp_questions.html#多线程要注意什么，要怎么做？", null ],
        [ "为什么会出现死锁问题，如何避免？", "cpp_questions.html#为什么会出现死锁问题，如何避免？", null ],
        [ "有那些智能指针，有何作用？", "cpp_questions.html#有那些智能指针，有何作用？", null ],
        [ "智能指针如何实现？", "cpp_questions.html#智能指针如何实现？", null ],
        [ "进程和线程的区别？", "cpp_questions.html#进程和线程的区别？", null ]
      ] ]
    ] ],
    [ "C++可执行文件在Linux的发布", "cpp_linux_deploy.html", [
      [ "方法一：笨办法", "cpp_linux_deploy.html#方法一：笨办法", null ],
      [ "方法二：聪明一点的方法", "cpp_linux_deploy.html#方法二：聪明一点的方法", null ],
      [ "方法三：更聪明的办法", "cpp_linux_deploy.html#方法三：更聪明的办法", null ]
    ] ],
    [ "一些关于C++的优秀文章", "cpp_articles.html", null ]
];