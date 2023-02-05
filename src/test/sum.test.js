import sum from "../sum";
import {expect,describe,it} from 'vitest';

describe('#sum',()=>{
    it("return 0 with no number",()=>{
        expect(sum()).toBe(0);
    })
})