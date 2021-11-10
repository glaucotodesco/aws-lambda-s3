
const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });

/************ CHANGE TO YOUR BUCKET NAME ***************/
const s3BucketName = 'test-s3-lambda-glauco';

const save = {
    async write(data, fileName, bucket) {
        
        const params = {
            Bucket: bucket,
            Body: JSON.stringify(data),
            Key: fileName,
        };
        
        const newData = await s3.putObject(params).promise();
      
        if (!newData) {
            throw Error('there was an error writing the file');
        }
        
        return newData;
    },
};

exports.handler = async (event) => {

    var query = event["queryStringParameters"];
    var data;
    
    if(query)
    {
         var value = query['value'];
         if(value){
            const newData = await save.write(JSON.stringify(value),"file.txt",s3BucketName);
            data = JSON.stringify(newData);
         }
         else{
             data = JSON.stringify('Wrong name of the parameter. Type a query: ?value=XXXXXXXXX');
         }
    }
    else{
        data = JSON.stringify('Type a query: ?value=XXXXXXXXX');
    }
    
    const response = {
        statusCode: 200,
        body: data
    };
    

    return response;
};
