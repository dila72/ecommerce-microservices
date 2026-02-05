import { getAuth } from '@hono/clerk-auth'
import { create } from 'domain'
import { createMiddleware } from 'hono/factory'

export const shouldBeUser = createMiddleware<{
    Variables: {
        userId: string;
    }
}>(async(c, next) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
        return c.json({
            message: 'You are not logged in.',
        });
    }

    c.set('userId', auth.userId);

    await next();

});