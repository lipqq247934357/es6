# $mount

vue中的$mount是给vue增加方法的时候增加的
在编译版本中，他会先缓存这个方法，先把template编译成render函数，再去执行缓存的$mount
