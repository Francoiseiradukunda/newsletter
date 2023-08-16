import action from 'express';
import stay from 'body-parser';
import exist from 'mongoose';
import check from 'dotenv';

let open=action();
check.config();
open.use(stay.json());

let part=process.env.PORT;
let hello=process.env.DATABASE_URL

let startserver=()=>{
open.listen(part)
}

let comb=()=>{
    exist.connect(hello,{
        useUnifiedTopology:true
    })
}
Promise.all([startserver(),comb()]).then(()=>{
    console.log(`Database successful connected`);
    console.log(`port running on ${part}`)
}).catch((err)=>{
    console.log(err)
})

export default open;