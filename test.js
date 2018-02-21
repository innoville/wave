var aws = require('aws-sdk');
var trans = new aws.TranscribeService({apiVersion: '2017-10-26'});
var params = {
  LanguageCode: "en-US",
  Media: {
    MediaFileUri: "./test.mp4" 
  },
  MediaFormat: "mp4",
  TranscriptionJobName: 'stt test',
  MediaSampleRateHertz: 0 
};

aws.config.region_name = "us-east-1";

trans.startTranscriptionJob(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log (data);
});


