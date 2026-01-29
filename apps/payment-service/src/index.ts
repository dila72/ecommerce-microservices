import { serve } from '@hono/node-server'
import { time } from 'console'
import { Hono } from 'hono'

const app = new Hono();

app.get('/health', (c) => {
  return c.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

const start = async () => {
  try{
    serve({
  fetch: app.fetch,
  port: 8002
}, (info) => {
  console.log(`Payment service is running on http://localhost:8002`)
})
  }catch(err){
    console.error('Error starting the server:', err);
    process.exit(1);
  }
};
start();