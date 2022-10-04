import {fact} from './fact';

describe ('fact', ()=>{
    it('should return 1 if n is 0', ()=>{
        const result = fact(0);
	    expect(result).toBe(1);	
    });
    it('should return 0 if n is negative', ()=>{
        const result = fact(-1);
	    expect(result).toBe(0);	
    });
    it('should return 6 if n is 3', ()=>{
        const result = fact(3);
	    expect(result).toBe(6);	
    });
    it(' should return 24 if n is 4', ()=>{
        const result = fact(4);
	    expect(result).toBe(24);	
    });
    it('should return 120 if n is 5', ()=>{
        const result = fact(5);
	    expect(result).toBe(120);	
    });
    it('should return 0 if n>16', ()=>{
        const result = fact(17);
	    expect(result).toBe(0);	
    });

})