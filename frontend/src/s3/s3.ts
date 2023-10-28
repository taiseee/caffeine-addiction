import * as AWS from 'aws-sdk';
import { ManagedUpload } from 'aws-sdk/clients/s3';

// TODO: べた書きやめる
AWS.config.update({
    accessKeyId: 'AKIAY7DBL7J5BOUERUPD',
    secretAccessKey: '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',
    region: 'ap-northeast-1',
});

const s3 = new AWS.S3();
const bucketName = 'tomodachi-bucket';
const fileName = `${Date.now()}.jpg`;

async function uploadImageToS3(fileData: File): Promise<string> {
    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: fileData,
        ACL: 'public-read',
    };

    try {
        const uploadResult: ManagedUpload.SendData = await s3.upload(params).promise();
        return uploadResult.Location;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default uploadImageToS3;
