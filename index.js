/**
 * Created by du on 2017/8/19.
 */
// ^-^对，你没看错，就是不到十行代码～～
!function (t) {
    if (!t.Promise || t.Promise.prototype.always) return;
    t.Promise.prototype.always = function (callback) {
        return this.then(function (d) {
            return callback(d,undefined)
        }, function (e) {
            return callback(undefined,e)
        })
    }
}(typeof window==="undefined"?global:window);