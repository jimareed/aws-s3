# aws-s3
Use [aws-sdk](https://www.npmjs.com/package/aws-sdk) to read a file from an S3 bucket.

## Setup
1. Follow steps in [References 1](##References) to setup an S3 bucket and upload [sample.csv](./sample.csv)
2. Follow steps in [References 3](##References) to create an AWS Access Key
3. Follow steps in [References 4](##References) to create a local AWS credentials file
4. Fetch this repo and run the following:
```
npm install
node index.js
```
5. Results:
```
file downloaded successfully
```
## References
1. [Getting started with Amazon S3 - Demo](https://www.youtube.com/watch?v=e6w9LwZJFIA)
2. [Download file from s3 using Node.js](https://acloud24.com/blog/download-file-from-s3-using-node-js/)
3. [How to create an S3 Bucket and AWS Access Key ID and Secret Access Key for accessing it.](https://medium.com/@shamnad.p.s/how-to-create-an-s3-bucket-and-aws-access-key-id-and-secret-access-key-for-accessing-it-5653b6e54337)
4. [Getting Started in Node.js](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-nodejs.html)
