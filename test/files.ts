// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols

const a55 = 5;
export const arr_01 = (s1:number = a55, ...s11:Array<number>) => {}
export const arr_asn_02 = async (a1 = false) => {}
export const arr_asn_02_val = arr_asn_02();


export function fun_03(s2, ...s22) {
    this.yelmer = true;
    this.value = s2;
    this.items = s22;
    return this;
}
export const fun_03_val = fun_03('Foo bar')
export async function fun_asn_04(a2 = (a44 = 6) => 3) {}
export function* fun_gen_05(i) {
    yield i;
    yield i + 10;
}
export async function* fun_asn_gen_06(i) {
    yield i;
    yield i + 10;
}
export const fun_gen_05_val = fun_gen_05(1);
export const fun_asn_gen_06_val = fun_asn_gen_06(1);

export function annotation1(name: string): ParameterDecorator {
    return (target, propertyKey, parameterIndex) => {

    };
}
export class cls_root {
    constructor() {
        this.mtd_07.bind(this);
        console.log(this.mtd_07.name);
    }
    mtd_07(@annotation1('aa') s3, ...s33) {}
    async mtd_asn_08(/* abc */a3) {}
    *mtd_gen_09( // aaa
        s3, ...s33) {}
    async *mtd_asn_gen_10(a3) {}

    static mtd_11(s4, ...s44) {}
    static async mtd_asn_12(a4) {}
    static *mtd_gen_13(s4, ...s44) {}
    static async *mtd_asn_gen_14(a4) {}
}
export const cls_root_val = new cls_root();

export const cls_ano = class {
    constructor() {}
};
export const cls_ano_val = new cls_ano();

export class cls_child_r extends cls_root {}
export const cls_child_r_val = new cls_child_r();

export class cls_child_a extends cls_ano {}
export const cls_child_a_val = new cls_child_a();

export const cls_child_ar = class extends cls_root {};
export const cls_child_ar_val = new cls_child_ar();

export const anonymous_val = new class {
    constructor() { }
}();

export const mdl = {
    prop_arr_s15: () => {},
    prop_arr_a16: async () => {},
    prop_fun_17: function () {},
    prop_fun_asn_18: async function () {},
    prop_fun_gen_19: function* () {},
    prop_fun_gen_asn_20: async function* () {},
};
// endregion definitions