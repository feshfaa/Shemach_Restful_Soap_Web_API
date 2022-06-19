const request = require('supertest')
const app = require('../Server/app')

describe('Jest', ()=>{
    test(
        'It should run our test with npm', function(){
        expect(true).toBe(true);
    })
});

describe('Product', ()=>{
        describe('getProduct', ()=>{
            test(
                'Get /products -> statuscode == 200', async () => {
                    
                    const { statusCode } = await request(app).get('/product');

                    expect(statusCode).toBe(200)
            }),
            test(
                'Get /products -> message == Get products', async () => {
                    
                    const { body} = await request(app).get('/product');

                    expect(body).toEqual({
                        message: 'Get products'
                    });
            })
        })    
});

describe('Shemach', ()=>{
    describe('getShemach', ()=>{
        test(
            'Get /shemach -> statuscode == 200', async () => {
                
                const { statusCode } = await request(app).get('/shemach');
        
                expect(statusCode).toBe(200)
        }),
        test(
            'Get /shemach -> message == Get shemach', async () => {
                
                const { body} = await request(app).get('/shemach');
        
                expect(body).toEqual({
                    message: 'Get shemachs'
                });
        })
    })    
});

describe('given not known route should respond with 404', ()=>{
    
        test(
            'Get /api -> statuscode == 404', async () => {
                
                const { statusCode } = await request(app).get('/api');
        
                expect(statusCode).toBe(404)
        })
    
});

