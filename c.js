var c =
[
    [ "C语言的预处理器", "c_preprocessor.html", [
      [ "宏定义中的#", "c_preprocessor.html#sharp_in_macro", null ],
      [ "宏定义中的##", "c_preprocessor.html#double_sharp", null ],
      [ "检测当前操作系统", "c_preprocessor.html#检测当前操作系统", null ],
      [ "宏在c文件中的作用域", "c_preprocessor.html#宏在c文件中的作用域", null ]
    ] ],
    [ "C语言中的类型", "c_types.html", [
      [ "类型表示范围速查", "c_types.html#类型表示范围速查", [
        [ "连续插值导致发散问题", "interpolation.html#连续插值导致发散问题", null ],
        [ "()函数", "cali_intrinsic.html#calibrateCamera", null ],
        [ "注意开发平台的类型精确定义", "c_types.html#注意开发平台的类型精确定义", null ],
        [ "浮点转定点中的四舍五入", "c_types.html#浮点转定点中的四舍五入", null ],
        [ "另一个float不够用的例子", "c_types.html#另一个float不够用的例子", null ]
      ] ],
      [ "intptr_t类型", "c_types.html#intptr_t", null ],
      [ "枚举（enumeration）", "c_types.html#枚举（enumeration）", [
        [ "使用enum代替整数的好处", "c_types.html#使用enum代替整数的好处", null ]
      ] ],
      [ "字面常量整型表达式溢出", "c_types.html#字面常量整型表达式溢出", null ],
      [ "一个uint64_t无法满足需求的实际例子。", "c_types.html#uin64_overflow", null ]
    ] ],
    [ "C语言中的运算符", "c_operators.html", [
      [ "运算符优先级表格", "c_operators.html#运算符优先级表格", [
        [ "运算符优先级cheatsheet", "c_operators.html#运算符优先级cheatsheet", null ]
      ] ]
    ] ],
    [ "C语言中的修饰符（qualifier）", "c_qualifier.html", [
      [ "const修饰符", "c_qualifier.html#const修饰符", [
        [ "const的常见用法", "c_qualifier.html#const的常见用法", null ],
        [ "const函数不能返回引用", "c_qualifier.html#const_member_fucntion_return_ref", null ],
        [ "const常量和字面常量（Literal）的区别", "c_qualifier.html#const常量和字面常量（Literal）的区别", null ]
      ] ],
      [ "extern修饰符", "c_qualifier.html#extern修饰符", [
        [ "引用另外一个文件的变量", "c_qualifier.html#c_extern_var", null ]
      ] ]
    ] ],
    [ "C语言中的pointer", "c_pointer.html", [
      [ "+”和“-”号", "c_pointer.html#指针中的“", null ]
    ] ],
    [ "C语言中的函数", "c_function.html", [
      [ "可变长参数函数", "c_function.html#可变长参数函数", [
        [ "可变长参数函数的转发", "c_function.html#可变长参数函数的转发", null ],
        [ "函数指针常量怎么定义？", "c_function.html#函数指针常量怎么定义？", null ],
        [ "函数指针作为函数传参", "c_function.html#函数指针作为函数传参", null ],
        [ "二维数组的传参和“引用”", "c_function.html#二维数组的传参和“引用”", null ]
      ] ],
      [ "函数的返回值", "c_function.html#函数的返回值", [
        [ "返回数组", "c_function.html#c_return_array", null ]
      ] ]
    ] ],
    [ "C语言构建常见问题", "c_compile_faq.html", [
      [ "编译常见问题", "c_compile_faq.html#编译常见问题", [
        [ "重复声明", "c_compile_faq.html#c_redeclaration", null ],
        [ "gcc不识别_Bool以及bool类型", "c_compile_faq.html#gcc不识别_Bool以及bool类型", null ],
        [ "加入static修饰符才能提示“unused”", "c_compile_faq.html#加入static修饰符才能提示“unused”", null ],
        [ "No rules to make target", "c_compile_faq.html#no_rule_make_target", null ],
        [ "core.hpp header must be compiled as c++", "c_compile_faq.html#c_include_opencv", null ]
      ] ],
      [ "常见链接问题", "c_compile_faq.html#常见链接问题", [
        [ "multiple definition?", "c_compile_faq.html#c_mul_def", null ],
        [ "unresolved external symbol？", "c_compile_faq.html#unresolved_external_symbol", null ],
        [ "动态库链接静态库报错", "c_compile_faq.html#动态库链接静态库报错", null ],
        [ "undefined reference to symbol 'pthread_create@GLIBC_2.2.5'", "c_compile_faq.html#cpp_issue_pthread", null ],
        [ "DSO missing from command line", "c_compile_faq.html#cpp_issue_dso_missing", null ]
      ] ]
    ] ],
    [ "C语言标准库", "c_std.html", [
      [ "标准库的实现版本", "c_std.html#标准库的实现版本", null ],
      [ "stdio.h", "c_std.html#stdio", [
        [ "中的uint64整数", "c_std.html#printf", null ],
        [ "size_t类型才不会报warning", "c_std.html#怎样printf", null ],
        [ "彩色规范打印", "c_std.html#彩色规范打印", null ]
      ] ],
      [ "float.h", "c_std.html#c_float", [
        [ "FLT_EPSILON宏和DBL_EPSILON", "c_std.html#FLT_EPSILON宏和DBL_EPSILON", null ]
      ] ],
      [ "判断数字是否是nan", "c_std.html#判断数字是否是nan", null ]
    ] ],
    [ "C语言调试问题", "c_debug_lesson.html", [
      [ "printf打印64位整型", "c_debug_lesson.html#printf打印64位整型", null ],
      [ "float或者double类型打印", "c_debug_lesson.html#float或者double类型打印", null ],
      [ "函数对象（指针）作为实参的的时候一定要其形参是否正确。", "c_debug_lesson.html#函数对象（指针）作为实参的的时候一定要其形参是否正确。", null ],
      [ "头文件循环引用", "c_debug_lesson.html#头文件循环引用", null ],
      [ "操作符优先级导致的bug", "c_debug_lesson.html#操作符优先级导致的bug", null ]
    ] ],
    [ "C语言标准99", "c99.html", [
      [ "_Bool类型", "c99.html#c99_bool", null ],
      [ "Designated Initializers", "c99.html#designated_initializers", null ]
    ] ],
    [ "C语言中的宏", "c_macro.html", [
      [ "获取宏的参数个数", "c_macro.html#获取宏的参数个数", null ]
    ] ],
    [ "标准库time.h", "c_time.html", [
      [ "几个概念", "c_time.html#几个概念", null ],
      [ "tm类型与make_time()函数", "c_time.html#tm_make_time", null ],
      [ "日期加上秒数得到新的日期", "c_time.html#日期加上秒数得到新的日期", null ],
      [ "计算两个日期之间的秒数", "c_time.html#计算两个日期之间的秒数", null ]
    ] ],
    [ "Coredump分析", "coredump.html", [
      [ "方法", "coredump.html#方法", null ],
      [ "问题定位到库文件中", "coredump.html#问题定位到库文件中", null ],
      [ "coredump的几大主要原因", "coredump.html#coredump的几大主要原因", null ]
    ] ],
    [ "C语言性能相关topic", "c_performance.html", [
      [ "Debug版本对performance影响很大", "c_performance.html#Debug版本对performance影响很大", null ],
      [ "下采样拷贝时间", "c_performance.html#下采样拷贝时间", null ]
    ] ],
    [ "C语言的习惯和技巧（idiom）", "c_idioms.html", [
      [ "C语言算法中的数学参数放在哪里？", "c_idioms.html#c_store_param", null ],
      [ "全局变量用处", "c_idioms.html#全局变量用处", null ],
      [ "万不得已修改第三方代码怎么注释？", "c_idioms.html#万不得已修改第三方代码怎么注释？", null ]
    ] ],
    [ "关于C语言的一些提问", "c_questions.html", [
      [ "多个c文件共享一个头文件，这与头文件只展开一次是否矛盾？", "c_questions.html#多个c文件共享一个头文件，这与头文件只展开一次是否矛盾？", null ]
    ] ]
];