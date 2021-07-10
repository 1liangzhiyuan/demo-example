// 封装校验规则
export function username(fields, value, cb) {
    // 4-8位字母数字下划线
    if (!/^\w{4,8}$/.test(value)) {
        return cb(new Error('用户名是4-8位字母数字下划线'))
    }
    // 成功
    cb();
}
// 校验密码
export function password(fields, value, cb) {
    // 包含字母和数字
    if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)) {
        return cb(new Error('密码要包含字母和数字'))
    }
    // 成功
    cb();
}
// 重复性校验
export function repeat(repeatValue, name, fields, value, cb) {
    // console.log(arguments);
    // 不能为空
    if (!value) {
        return cb(new Error(`重复${name}不能为空`))
    }
    // 是否一致
    if (repeatValue !== value) {
        return cb(new Error(`重复${name}与${name}不一致`))
    }
    // 成功
    cb();
}