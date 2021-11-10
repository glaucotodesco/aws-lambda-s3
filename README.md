# How to test?

## 1 - Create your AWS S3 Bucket
Steps:
   1. Define only the name of the bucket
   2. Copy the name of the created bucket

## 2 - Create a new IAM Role
Steps:
  1. Roles ->
  2. Create role ->
  3. Lambda (Next) -> 
  4. Choose: AmazonS3FullAccess :-) just for test ->
  5. Next -> 
  6. Next -> 
  7. Role Name: lambda_s3_full_access  (Create Role)
 
 ## 3 - Create a Lambda 
   Functions ->
   Button: Create a Function ->
   Pick: Author from scratch, define the name like: myLambdaFunction, click: Create Function ->
   Copy the index.js from this repository to the index.js in the AWS.
   Change the name of the bucket to your bucket name.
   Click in Configuration -> Permissions -> Edit Execution role
   In the Existing role, change to the role created in the step 2 and then save
   
 ## 4 - Create a API GateWay
   In your lambda function, click "Add Trigger" ->
   Select API Gateway ->
      API Type: HTTP API
      Security: Open
      Click ADD
   
 ## 5 - Click in the API Endpoint
 Something like: 
        https://8b76nzk70h.execute-api.sa-east-1.amazonaws.com/default/myLambdaFunction
    
  This message will be show: 
        "Type a query: ?value=XXXXXXXXX"
    
  Now, type a query like this:
    
  https://8b76nzk70h.execute-api.sa-east-1.amazonaws.com/default/myLambdaFunction?value=Glauco Todesco
    
  The ETag of the S3 Bucket object will be show:
      {
        "ETag": "\"acbb4e7a29c4435b0e5549efa266db26\""
      }
      
  Now look at your S3 Bucket, the file.txt was created. The content of this file is the value, in this case: Glauco Todesco
    
    
    
    
          
          
          
          
          
 
   
