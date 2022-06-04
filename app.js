const express = require('express');
const Queue = require('bull');
// Bull-Board Queue Dashboard
const { createBullBoard }  = require("@bull-board/api");
const { BullAdapter } =  require("@bull-board/api/bullAdapter.js");
const { ExpressAdapter } = require("@bull-board/express");
const sleep = require('./functions');

// Setup Queue
const queue = new Queue('manager', 'redis://redis_db:6379');
// Queue Process
queue.process(async function(job, done) {
    try {
        console.log(`Received Job! with id ${job?.id}`);
        await sleep(10000);
        done(null, 'success');
    } catch (error) {
        done(null, error);
    }
});

// Bull Dashboard
const serverAdapter = new ExpressAdapter();
createBullBoard({
    queues: [new BullAdapter(queue)],
    serverAdapter: serverAdapter
});

// Express
const app = express();
// Set Base path for the queue dashboard
serverAdapter.setBasePath('/admin/queues');

// Middlewares
app.use('/admin/queues', serverAdapter.getRouter());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.get('/jobs', async function(req, res) {

    // Bulk jobs data
    const bulkJobs = [
        {
            data: {
                name: 'Job A'
            }
        },
        {
            data: {
                name: 'Job B'
            }
        },
        {
            data: {
                name: 'Job C'
            }
        },
        {
            data: {
                name: 'Job D'
            }
        }
    ];

    // Queue jobs in bulk
    const jobs = await queue.addBulk(bulkJobs);
    return res.json({message: 'Jobs are in the queue', jobs});
});


// Listen
app.listen('3000', function() {
    console.log('Server is running on port 3000');
});
