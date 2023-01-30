const Stack = require('backend/Stack.js');

describe('My Stack', () => {
    // in module global var and func
    let stack;

    beforeEach(() => {
        stack = new Stack();
    })
    
    it('is created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.peek).toBe(null);
        expect(stack.items).toEqual({});
    });

    it('can push item to the top', () => {
        stack.push('🥑');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🥑')
    });

    it('can pop item from the top', () => {
        stack.push('🍐');
        stack.push('🥑');
        expect(stack.pop).toBe('🥑');
        expect(stack.pop).toBe('🍐');
        expect(stack.top).toBe(-1);
    });

    it('can pop off', () => {
        let maxItemCount = 10;
        for (let i=0; i<maxItemCount; i++) {
            stack.push(i);
        }
        expect(stack.top).toBe(maxItemCount-1);
        expect(stack.peek).toBe(maxItemCount-1);
        while (stack.top > -1) {
            stack.pop;
        }
        expect(stack.top).toBe(-1);
        expect(stack.peek).toBe(null);
    })
})