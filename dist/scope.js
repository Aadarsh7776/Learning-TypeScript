var globalVar = 10; // Global Scope
class ScopeEx {
    assignNum() {
        var localVar = 12; // Local Scope
        console.log("Local:", localVar);
        console.log("Instance:", this.ex);
        console.log("Global:", globalVar);
    }
    constructor() {
        this.ex = 5; // Class/Instance Scope
        console.log("Object is created");
    }
}
const myExample = new ScopeEx();
myExample.assignNum();
