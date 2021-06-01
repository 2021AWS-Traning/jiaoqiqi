const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  region: 'ap-southeast-2',
});

exports.handler = async (event, context) => {
  const sourceBucket = 'qiqi-bucket';
  const destinationBucket = 'qiqi-bucket-1';
  const files = await s3
    .listObjects({
      Bucket: sourceBucket,
    })
    .promise();
  
  return Promise.all(
    files.Contents.map(async content => {
      await s3
        .copyObject({
          Bucket: destinationBucket,
          CopySource: `/${sourceBucket}/${content.Key}`,
          Key: content.Key,
        })
        .promise();
      // return s3
      //   .deleteObject({
      //     Bucket: sourceBucket,
      //     Key: content.Key,
      //   })
      //   .promise();
    })
  );
};

