class Teacher {
  private name = "something";

  private name2 = "name2";

  // 只能在此Class内部使用
  private get privateGet() {
    return this.name;
  }
  // 只能在此Class内部使用
  private set privateSet(value) {
    this.name = value;
  }

  get publicGet() {
    return this.name2;
  }
  set publicSet(value) {
    this.name2 = value;
  }

  // 实例公有字段声明
  instanceFieldPublicName = "实例公有字段声明:网名-隔壁老王";

  // 实例私有字段声明-只能在此Class内部使用
  private instanceFieldPrivateName = "实例私有字段声明:昵称-小王";

  // 静态私有字段声明-只能在此Class内部使用
  private static staticFieldPrivateName = "静态私有字段声明:真名-王撕葱";

  // 静态公有字段声明
  static staticFieldPublicName = "静态公有字段声明:名-撕葱";

  // 静态公有方法-ES6已支持
  static staticPublicMethod() {
    console.log("静态公有方法");
  }

  // 静态私有方法-只能在此Class内部使用
  private static staticPrivateMethod() {
    console.log("#staticPrivateMethod:", "静态私有方法");
  }

  // 实例公有方法-ES6已支持
  instancePublicMethod() {
    console.log("实例公有方法");
  }

  // 实例私有方法-只能在此Class内部使用
  private instancePrivateMethod() {
    console.log("实例私有方法");

    // console.log(teacher.privateGet());
    // console.log(teacher.privateSet('66'));

    console.log("#instanceFieldPrivateName:", this.instanceFieldPrivateName);
    console.log("#staticFieldPrivateName:", Teacher.staticFieldPrivateName);
    Teacher.staticPrivateMethod();
    console.log("-------结束");
  }

  render() {
    this.instancePrivateMethod();
  }
}

const teacher = new Teacher();

teacher.render();

console.log(teacher.publicGet);
console.log((teacher.publicSet = "77"));

// 公有字段/方法可以  被自由的访问
console.log(teacher.instanceFieldPublicName);
console.log(teacher.instancePublicMethod());

// 私有字段、方法，不能在声明它的类的外部访问

// 私有成员是实例无法访问的，当然会报错
//   console.log(teacher.instanceFieldPrivateName);
//   console.log(teacher.instancePrivateMethod());

/*
    静态成员
    属性存在于类本身上面而不是类的实例上如同在实例属性上使用 this.

    前缀来访问属性一样 只能使用 类名. 来访问静态属性
    */
console.log(Teacher.staticFieldPublicName);
