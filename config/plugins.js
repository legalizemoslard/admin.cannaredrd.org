module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET_NAME'),
        },
      },
    },
    email: {
        provider: 'amazon-ses',
        providerOptions: {
          key: env('AWS_ACCESS_KEY_ID'),
          secret: env('AWS_ACCESS_SECRET'),
          amazon: 'https://email.us-east-1.amazonaws.com',
        },
        settings: {
          defaultFrom: 'aletheiadata@gmail.com',
          defaultReplyTo: 'aletheiadata@gmail.com',
        },
    },
});